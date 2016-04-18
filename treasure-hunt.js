NN

/*
  HOW TO PLAY

  After running, make sure to click in the console window, then...

  Use w, a, s, d to move your character towards the $ sign

  | Character | Control   | 
  | 'w'       | UP        |
  | 'd'       | RIGHT     |
  | 's'       | DOWN      |
  | 'a'       | LEFT      |
  | 'c'       | Quit      |
*/

"use strict";

var map1 = [
    "|------------------------------------------------------------|",
    "|  |        |   |                             |              |",
    "|  |   |----|   |-----|  -  |-------------|   |   |-------|  |",
    "|  |        |   |        |  |                 |           |  |",
    "|  |---|    |   -    |   |  |   |-------------|           |  |",
    "|           |        |   |  |                 |           |  |",
    "|                    |   -  |            -                |  |",
    "|                    |      -            |                |  |",
    "|      |-------|     |                   |                |  |",
    "|                    |   -  |------------|                |  |",
    "|           |--------|   |  |                             |  |",
    "|                        |  |                  |----------|  |",
    "|                        |  |                                |",
    "|   |-------|            -  -                                |",
    "|           |                    |----------------|     -    |",
    "|           |               -                           |    |",
    "|           |               |                           |    |",
    "|------------------------------------------------------------|"
];

var globalOptions = {
    'playInBrowser': false
};

function run() {  
    var thGame = new TreasureHuntGame();
    thGame.initialize();
}

function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

class WinTextAnimaton {
    constructor(centerX, centerY) {
	this.centerX = centerX;
	this.centerY = centerY;
	this.frameSpeed = 600;
	this.lastFrame = Date.now();
	this.isVisible = false;
    }

    update(timeNow) {
	if (timeNow - this.lastFrame > this.frameSpeed) {
	    this.isVisible = !this.isVisible;
	    this.lastFrame = timeNow;
	}
    }

    fillRenderer(renderer) {
	if (this.isVisible) {
	    // add WIN in the center of the explosion.
	    renderer.addCharacter(new Character(this.centerX - 1, this.centerY, 'W'));
	    renderer.addCharacter(new Character(this.centerX - 0, this.centerY, 'I'));
	    renderer.addCharacter(new Character(this.centerX + 1, this.centerY, 'N'));	
	}
    }

    isExpired() {
	// this animation never goes away
	return false;
    }
}

class WinAnimation {
    constructor(centerX, centerY, maxX, maxY) {
	this.radius = -1;
	this.centerX = centerX;
	this.centerY = centerY;
	this.frameSpeed = 60;
	this.lastFrame = Date.now();
	this.maxX = maxX;
	this.maxY = maxY;
    }

    update(timeNow) {
	var elapsed = timeNow - this.lastFrame;
	if (elapsed >= this.frameSpeed) {
	    this.radius++;
	    this.lastFrame = timeNow;
	}
    }
    
    fillRenderer(renderer) {
	// create explosion particles in a blast radius away from the center
	for (var y = this.centerY - this.radius; y <= this.centerY + this.radius; y++) {
	    var difference = Math.abs(this.centerY - y);
	    var numXs = Math.min(2, this.radius - difference + 1); // add 1 because we always want at least 1 explosion on each line
	    
	    for (var i = 0; i < numXs; i++) {
		var multiplier = 1;
		if (i == 0) {
		    multiplier = -1;
		}
		
		var x = this.centerX + ((this.radius - difference) * multiplier);
		var character = new Character(x, y, '*');
		renderer.addCharacter(character);
	    }
	}
    }

    isExpired() {
	return  this.centerX - (this.radius * 2) < 0 &&
	    this.centerX + (this.radius * 2) > this.maxX &&
	    this.centerY - (this.radius * 2) < 0 &&
	    this.centerY + (this.radius * 2) > this.maxY;
    }
}

class AnimationHandler {
    constructor(renderer) {
	this.renderer = renderer;
	this.animations = [];
    }

    addAnimation(animation) {
	this.animations.push(animation);
    }

    update(timeNow) {
	for (var i = this.animations.length - 1; i >= 0 ; i--) {
	    var animation = this.animations[i];
	    
	    animation.update(timeNow);
	    if (animation.isExpired()) {
		// remove it from our list
		this.animations.splice(i, 1);
	    } else {
		this.animations[i].fillRenderer(this.renderer);
	    }
	}
    }	
}

class Game {
    constructor() {
	this.lastkeyPresses = [];
	this.threadUpdate = null;
	this.threadDraw = null;
    }

    initialize(updateFunction, drawFunction) {
	this.threadUpdate = new Thread(updateFunction);
	this.threadDraw = new Thread(drawFunction);

	this.threadUpdate.start(10); //update X times per second
	this.threadDraw.start(6); //draw X times per second

	var that = this;

	if (globalOptions['playInBrowser']) {
	    function keyDownHandler(e) {
		var key = e.keyCode;
		if (key) {
		    that.lastkeyPresses.push(key);
		}
	    };

	    // listen to the browser keys instad of direct console input
	    document.addEventListener("keydown", keyDownHandler, false);	
	}
	else {
	    // this allows us to read keys directly from console input without ENTER
	    process.stdin.setRawMode(true);	
	    process.stdin.on('readable', function(data) {	
		var key = process.stdin.read();
		if (key) {
		    that.lastkeyPresses.push(key);
		}
	    });
	}
    }

    getLastKeypress() {
	if (this.lastkeyPresses.length <= 0) {
	    return null;
	}
	return this.lastkeyPresses.shift();
    }
}

class TreasureHuntGame {
    constructor() {
	// set up basic game objects
	this.game = new Game();
	this.map = new Map(map1);
	this.character = new Character(20, 10, '!');

	this.imageTest = new ImageAsciified("test.jpg", 30, 18);
	
	// put the goal in a random spot on the map 
	// (there's a small chance it will be on the player but I don't care right now)
	var goalX = randomNumber(this.map.width - 1);
	var goalY = randomNumber(this.map.height - 1);

	this.goal = new Character(goalX, goalY, '$');
	this.renderer = new Renderer();
	this.animationHandler = new AnimationHandler(this.renderer);

	// this should probably turn into a state machine
	this.isWinning = false;
    }

    initialize() {
	var that = this;

	var EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion		
	
	var lastExplosionTime = Date.now();
	var lastBlinkTime = Date.now();

	// add game objects to renderer
	this.renderer.addCharacter(this.character);
	this.renderer.addCharacter(this.goal);
//	this.renderer.addCharacterList(this.map.getMapCharacters());

	//=======================================
	// Ascii Test Start
	//=======================================
	var fillRenderer = function(characters) {
	    that.renderer.addCharacterList(characters);
	}
	this.imageTest.load(fillRenderer);
	//=======================================
	// Ascii Test End
	//=======================================
	
	// first draw of render
	this.renderer.render(this.map);

	// this is a blocking animation that 'explodes' the 
	//...goal into an explosion
	var spawnExplosions = function(now) {
	    // spawn a new animation based on EXPLOSION_SPEED
	    if (now - lastExplosionTime > EXPLOSION_SPEED) {
		that.animationHandler.addAnimation(new WinAnimation(that.goal.x, that.goal.y));
		lastExplosionTime = now;
	    }
	};

	var checkWinCondition = function() {
	    if (that.character.x == that.goal.x && that.character.y == that.goal.y) {
		that.isWinning = true;

		that.animationHandler.addAnimation(
		    new WinAnimation(that.goal.x, that.goal.y, that.map.width, that.map.height)
		);

		that.animationHandler.addAnimation(
		    new WinTextAnimaton(that.goal.x, that.goal.y)
		);
	    }
	}

	var update = function () {
	    var now = Date.now();
	    var key = that.game.getLastKeypress();
	    
	    if (null !== key) {
		var gameCommand = keyMap.getGameCommand(key.toString());

		if (gameCommand == 'QUIT') {
		    process.exit();
		} else if (!that.isWinning) {	
		    // update character movement
		    that.character.move(gameCommand, that.map.maxX, that.map.maxY);

		    checkWinCondition();
		}
	    }

	    if (that.isWinning) {
		// clear everything
		that.renderer.removeAllCharacters();
		
		// win condition!
		spawnExplosions(now);
	    }

	    // this currently adds all the characters to the renderer so it should be 
	    //...after the removeAllCharacters() call above. Need to decide if this is
	    //...an update function or a draw function...
	    that.animationHandler.update(now);
	}

	var draw = function() {
	    that.renderer.clearScreen();
	    //that.drawHelp();
	    that.renderer.render(that.map);
	}

	this.game.initialize(update, draw);
    }

    drawHelp() {
	console.log('Get the "!" over to the money sign!');
	console.log('| Character | Control   | ');
	console.log('| w         | Up        |');
	console.log('| d         | Right     |');
	console.log('| s         | Down      |');
	console.log('| a         | Left      |');
	console.log('| c         | Quit      |');
    }
}

class Map {
    constructor(mapData) {
	this.mapData = mapData;
	this.width = mapData[0].length;
	this.height = mapData.length;
    }

    getMapCharacters() {
	var characters = [];
	for (var row = 0; row < this.height; row++) {
	    var rowStr = this.mapData[row];    
	    for (var col = 0; col < rowStr.length; col++) {
		var thisChar = rowStr.charAt(col);
		if (thisChar != ' ') {
		    characters.push(new Character(col, row, thisChar));
		}
	    }
	}

	return characters;
    }
}

class Renderer {
    constructor() {
    	this.characters = [];
	this.maxX = 0;
	this.maxY = 0;
    }

    clearScreen() {
	// escape sequence required to clear the screen and set cursor at 0,0
	console.log("\u001b[2J\u001b[0;0H");
	//process.stdout.write("\u001b[2J\u001b[0;0H");
    }

    render(map) {
	for (var row = 0; row < this.maxY; row++) {
	    var output = '';

	    // find all characters that need to be drawn in this row
	    var charactersInRow = this.getCharactersInRow(row);;
	    
	    // if there aren't any, draw a blank line
	    if (charactersInRow.length <= 0) {
	   	for (var col = 0; col < map.width; col++) {
		    output = output + ' ';
		}
	    } else {
		// else there must be characters here, sort them first...
		charactersInRow.sort(this.compareX);
		
		// ...then draw them all. Put it all in one string for quick render.
		output = output + this.getOutputLine(charactersInRow);
	    }

	    console.log(output);
	}
    }

    addCharacter(character) {
	this.characters.push(character);
	this.maxX = Math.max(this.maxX, character.x);
	this.maxY = Math.max(this.maxY, character.y);
    }

    addCharacterList(characterList) {
	for (var i = 0; i < characterList.length; i++) {
	    this.addCharacter(characterList[i]);
	}
    }

    removeAllCharacters(character) {
	this.characters = [];
    }

    compareX(a,b) {
	if (a.x < b.x)
	    return -1;
	if (a.x > b.x)
	    return 1;
	return 0;
    }

    findCharacterAtX(characterList, x) {
	// returns the first character it finds at the specified x position
	for (var i = 0; i < characterList.length; i++) {
	    if (characterList[i].x == x) {
		return characterList[i];
	    }
	}

	return null;
    }

    getCharactersInRow(row) {
	var charactersInRow = [];
	for (var i = 0; i < this.characters.length; i++) {
	    if (this.characters[i].y == row) {
		charactersInRow.push(this.characters[i]);
	    }
	}

	return charactersInRow;
    }

    getOutputLine(charactersInRow) {
	// ...then draw them all. Put it all in one string for quick render.
	var output = '';        
	for (var col = 0; col < this.maxX; col++) {
	    var characterInPosition = this.findCharacterAtX(charactersInRow, col);

	    if (characterInPosition != null) {
		output = output + characterInPosition.symbol;
	    } else {
		output = output + ' ';
	    }
	}

	return output;
    }
}

class Character {
    constructor(initialX, initialY, symbol) {
	this.x = initialX;
	this.y = initialY;
	this.symbol = symbol;
    }
    
    move(direction, maxX, maxY) {
	switch(direction) {
	case 'LEFT': 
	    this.x--; break;
	    
	case 'RIGHT':
	    this.x++; break;
	    
	case 'UP':
	    this.y--; break;
	    
	case 'DOWN':
	    this.y++; break;
	}

	// restrict to bounds provided
	this.x = Math.min(maxX - 1, Math.max(0, this.x));
	this.y = Math.min(maxY - 1, Math.max(0, this.y));
    }
}

class Thread {
    constructor(functionPointer) {
	this.functionPointer = functionPointer;
    }

    start(desiredFramerate) {
	var that = this;
	var minimumMillsecPerFrame = 1000/ desiredFramerate;
	
	var internalRun = function() {
	    var now = Date.now();
	    that.functionPointer();
	    var after = Date.now();

	    // if the function call takes a while, reduce the delay until the next execute
	    var nextDelay = Math.max(0, minimumMillsecPerFrame - (after - now));
	    setTimeout(internalRun, nextDelay);
	};

	// initial call
	setTimeout(internalRun, 0);	
    }
}

class KeyMap {
    constructor() {
    }

    getGameCommand(key) {
	switch(key) {
	case 'a': 
	case "65":
	    return 'LEFT';
	    
	case 'e': 
	case 'd': 
	case "68":
	    return 'RIGHT';
	    
	case ',': 
	case 'w': 
	case "87":
	    return 'UP';
	    
	case 'o':
	case 's':
	case "83":
	    return 'DOWN';

	case 'c':
	case '67':
	    return 'QUIT';
	}
    }
}

class ImageAsciified {
    constructor(path, desiredWidth, desiredHeight) {
	this.path = path;
	this.pixels = null;
	this.desiredWidth = desiredWidth;
	this.desiredHeight = desiredHeight;
    }

    load(callback) {
	var getPixels = require("get-pixels")
	var that = this;

	console.log('loading');
	
	getPixels(this.path, function(err, pixels) {
	    if(err) {
		return;
	    }

	    that.pixels = pixels;
	    callback(that.getCharacters());
	});
    }

    getCharacters() {
	var characters = [];
	var pixelWidth = this.pixels.shape[0];
	var pixelHeight = this.pixels.shape[1];
	var pixelsPerCharacterW = Math.round(pixelWidth / this.desiredWidth, 0);
	var pixelsPerCharacterH = Math.round(pixelHeight / this.desiredHeight, 0);
	
	for(var i = 0; i < this.desiredHeight; ++i) {
	    for(var j = 0; j < this.desiredWidth; ++j) {

		var pixelSum = 0;
		var numPixels = 0;
		
		for(var k = 0; k < pixelsPerCharacterW; k++) {
		    for (var z = 0; z < pixelsPerCharacterH; z++) {
			var x = (j * pixelsPerCharacterW) + k;
			var y = (i * pixelsPerCharacterH) + z;

			if (x >= pixelWidth || y >= pixelHeight)
			    break;
			
			var R = this.pixels.get(x, y, 0);
			var G = this.pixels.get(x, y, 1);
			var B = this.pixels.get(x, y, 2);

			pixelSum += R + G + B;
			numPixels++;
		    }
		}

		var weight = pixelSum / numPixels;
		var thisChar = ' ';
		if (weight < 100) {
		    thisChar = '#';
		} else if (weight < 200) {
		    thisChar = 'X';
		} else if (weight < 300) {
		    thisChar = 'x';
		} else if (weight < 350) {
		    thisChar = '/';
		} else if (weight < 430) {
		    thisChar = '/';
		} else if (weight < 550) {
		    thisChar = '"';
		} else if (weight < 600) {
		    thisChar = '.';
		} else if (weight < 675) {
		    thisChar = '`';
		} else if (weight < 768) {
		    thisChar = ' ';
		}	
		
		characters.push(new Character(j, i, thisChar));
	    }
	}
	return characters;
    }    
}

var keyMap = new KeyMap();
run();

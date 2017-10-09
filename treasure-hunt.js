

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
    'playInBrowser': true,
    'drawFPS': 2,
    'updateFPS': 10,
    'playerChar': '#'
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

	this.threadUpdate.start(globalOptions['updateFPS']); //update X times per second
	this.threadDraw.start(globalOptions['drawFPS']); //draw X times per second

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

	var getRandomMapPlacement = function(map) {
	    var x = randomNumber(map.width - 1);
	    var y = randomNumber(map.height - 1);

	    // don't let them overlap
	    while (map.getIsWall(x, y)) {
		x = randomNumber(map.width - 1);
		y = randomNumber(map.height - 1);
	    }

	    return { 'x': x, 'y': y };
	}

	var charPlacement = getRandomMapPlacement(this.map);
	this.character = new Character(charPlacement.x, charPlacement.y, globalOptions['playerChar']);

	var goalPlacement = getRandomMapPlacement(this.map);

	// don't let them overlap
	while (goalPlacement.x == this.character.x && goalPlacement.y == this.character.y) {
	    goalPlacement = getRandomMapPlacement(this.map);
	}

	this.goal = new Character(goalPlacement.x, goalPlacement.y, '$');
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

	this.mapCharacters = this.map.getMapCharacters();

	// add game objects to renderer
	this.renderer.addCharacter(this.character);
	this.renderer.addCharacter(this.goal);
	this.renderer.addCharacterList(this.mapCharacters);

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
		    that.character.move(gameCommand, that.map.width, that.map.height, that.map);

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
	    that.drawHelp();
	    that.renderer.render(that.map);
	}

	this.game.initialize(update, draw);
    }

    drawHelp() {
	var output = 'Instructions: Use Chrome (other browsers ot supported)\n';
	output = output + 'Click anywhere on the web page itself\n\n';
	output = output + 'Get the "' + globalOptions['playerChar'] + '" over to the money sign!\n'; 
	output = output + '| Character | Control   |\n';
	output = output + '| w         | Up        |\n';
	output = output + '| d         | Right     |\n';
	output = output + '| s         | Down      |\n';
	output = output + '| a         | Left      |\n';
	output = output + '| c         | Quit      |\n';
	console.log(output);
    }
}

class Map {
    constructor(mapData) {
	this.mapData = mapData;
	this.width = mapData[0].length;
	this.height = mapData.length;
    }

    getMapCharacters() {
	if (this.characters) {
	    return this.characters;
	}

        this.characters = [];
	for (var row = 0; row < this.height; row++) {
	    var rowStr = this.mapData[row];    
	    for (var col = 0; col < rowStr.length; col++) {
		var thisChar = rowStr.charAt(col);
		if (thisChar != ' ') {
		    this.characters.push(new Character(col, row, thisChar));
		}
	    }
	}

	return this.characters;
    }

    getIsWall(x, y) {
	return this.getMapCharacters().filter(ch => ch.x == x && ch.y == y).length > 0;
    }
}

class Renderer {
    constructor() {
    	this.characters = [];
    }

    clearScreen() {
	// clear the screen and set cursor at 0,0
	console.clear();
	//console.log("\u001b[2J\u001b[0;0H");
	//process.stdout.write("\u001b[2J\u001b[0;0H");
    }

    render(map) {
	var output = '';
	for (var row = 0; row < map.height; row++) {
	    // find all characters that need to be drawn in this row
	    var charactersInRow = this.getCharactersInRow(row);;
	    
	    // if there aren't any, draw a blank line
	    if (charactersInRow.length <= 0) {
	   	for (var col = 0; col < map.width; col++) {
		    output = output + '\xa0'; // non-breaking space
		}
	    } else {
		// else there must be characters here, sort them first...
		charactersInRow.sort(this.compareX);
		
		// ...then draw them all. Put it all in one string for quick render.
		output = output + this.getOutputLine(charactersInRow, map);
	    }

	    output = output + '\n';
	}

	console.log(output);
    }

    addCharacter(character) {
	this.characters.push(character);
    }

    addCharacterList(characterList) {
	for (var i = 0; i < characterList.length; i++) {
	    this.characters.push(characterList[i]);
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

    getOutputLine(charactersInRow, map) {
	// ...then draw them all. Put it all in one string for quick render.
	var output = '';        
	for (var col = 0; col < map.width; col++) {
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
    
    move(direction, maxX, maxY, map) {
	var intendedX = this.x;
	var intendedY = this.y;

	switch(direction) {
	case 'LEFT': 
	    intendedX--; break;
	    
	case 'RIGHT':
	    intendedX++; break;
	    
	case 'UP':
	    intendedY--; break;
	    
	case 'DOWN':
	    intendedY++; break;
	}

	// restrict to bounds provided
	intendedX = Math.min(maxX - 1, Math.max(0, intendedX));
	intendedY = Math.min(maxY - 1, Math.max(0, intendedY));

	if (!map.getIsWall(intendedX, intendedY)) {
	    this.x = intendedX;
	    this.y = intendedY;
	}
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
	case "37":
	    return 'LEFT';
	    
	case 'e': 
	case 'd': 
	case "68":
	case "39":
	    return 'RIGHT';
	    
	case ',': 
	case 'w': 
	case "87":
	case "38":
	    return 'UP';
	    
	case 'o':
	case 's':
	case "83":
	case "40":
	    return 'DOWN';

	case 'c':
	case '67':
	    return 'QUIT';
	}
    }
}

var keyMap = new KeyMap();

run();

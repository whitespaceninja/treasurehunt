

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

function run() {  

	// set up basic game objects
	var mapInfo = new MapInfo(40, 20);
	var character = new Character(20, 10, '!');

	// put the goal in a random spot on the map 
	// (there's a small chance it will be on the player but I don't care right now)
	var goalX = randomNumber(mapInfo.width - 1);
	var goalY = randomNumber(mapInfo.height - 1);

	var goal = new Character(goalX, goalY, '$');
	var renderer = new Renderer();
	var winAnimations = [];

	// add game objects to renderer
	renderer.addCharacter(character);
	renderer.addCharacter(goal);

	// first draw of render
	renderer.render(mapInfo);

	// this is a blocking animation that 'explodes' the 
	//...goal into an explosion
	var doWinAnimation = function() {
		var counter = 0;
		var numCyclesBeforeNewSpawn = 7;
		var EXPLOSION_SPEED = 100; // num milliseconds between frames of WIN explosion

		winAnimations.push(new WinAnimation(goal.x, goal.y));
		while (true) {
			// clear everything
			renderer.removeAllCharacters();
		  
			for (var i = 0; i < winAnimations.length; i++) {
		  		if (i == 0 && counter % 10 > 3) {
		    		winAnimations[i].addWinText(renderer);
		    	}
			    winAnimations[i].animate(renderer);  
		  	}
		  
		  	renderer.render(mapInfo);
		  
		  	// spawn a new animation every X cycles
		  	if (++counter % numCyclesBeforeNewSpawn == 0) {
		    	winAnimations.push(new WinAnimation(goal.x, goal.y));
		  	}
		  
		  	sleepFor(EXPLOSION_SPEED);
		}
	};


	// this allows us to read keys directly from input without ENTER
	process.stdin.setRawMode(true);

	// this is essentially our main game loop
	process.stdin.on('readable', function(data) {
		var key = process.stdin.read();

		if (key) {
			if (key.toString() == 'c') {
				process.exit();
			} else {
				// update character movement
				character.move(key.toString(), mapInfo.width, mapInfo.height);

				if (character.x == goal.x && 
				    character.y == goal.y) {
					// win condition!
					doWinAnimation();
				} else {
					// redraw
					renderer.render(mapInfo);
				}
			}
		}
	});
}

function randomNumber(max) {
	return Math.floor((Math.random() * max) + 1);
}

function sleepFor( sleepDuration ){
	var now = new Date().getTime();
	while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

class WinAnimation {
	constructor(centerX, centerY) {
		this.radius = -1;
	    this.centerX = centerX;
	    this.centerY = centerY;
	}
  
	animate(renderer) {
		this.radius++;
		this.fillRenderer(renderer);
	}
  
	addWinText(renderer) {
		// add WIN in the center of the explosion.
		renderer.addCharacter(new Character(this.centerX - 1, this.centerY, 'W'));
		renderer.addCharacter(new Character(this.centerX - 0, this.centerY, 'I'));
		renderer.addCharacter(new Character(this.centerX + 1, this.centerY, 'N'));
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
}

class Game {
	constructor() {
		this.lastkeyPresses = [];
	}

	initialize() {
		// this allows us to read keys directly from input without ENTER
		process.stdin.setRawMode(true);

		process.stdin.on('readable', function(data) {
			var key = process.stdin.read();
			if (key) {
				this.lastkeyPresses.push(key);
			}
		});
	}

	update() {
		// override to do something useful
	}

	draw() {
		// override to do something useful
	}

	run() {
		update();
	}

	// this method can only be called once
	getLastKeypress() {
		var key = this.lastkeyPresses.shift();
		return key;
	}
}

class MapInfo {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

class Renderer {
	constructor() {
    	this.characters = [];
	}

	clearScreen() {
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	}

	addCharacter(character) {
		this.characters.push(character);
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

	findCharacterAtX(characters, x) {
		// returns the first character it finds at the specified x position
		for (var i = 0; i < characters.length; i++) {
			if (characters[i].x == x) {
		    	return characters[i];
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

	getOutputLine(charactersInRow, mapInfo) {
		// ...then draw them all. Put it all in one string for quick render.
		var output = '';        
		for (var col = 0; col < mapInfo.width; col++) {
			var characterInPosition = this.findCharacterAtX(charactersInRow, col);

			if (characterInPosition != null) {
		  		output = output + characterInPosition.symbol;
			} else {
		    	output = output + ' ';
			}
		}

		return output;
	}

	render(mapInfo) {
		this.clearScreen();
		this.drawHelp();

		for (var row = 0; row < mapInfo.height; row++) {
			// find all characters that need to be drawn in this row
			var charactersInRow = this.getCharactersInRow(row);;
		  
			// if there aren't any, draw a blank line
			if (charactersInRow.length <= 0) {
		    	console.log(' ');
			} else {
			    // else there must be characters here, sort them first...
			    charactersInRow.sort(this.compareX);
			    
			    // ...then draw them all. Put it all in one string for quick render.
			    var output = this.getOutputLine(charactersInRow, mapInfo);
			    console.log(output);
			}
		}
	}

	drawHelp() {
		console.log('You have 10 seconds to get the "!" over to the money sign!');
		console.log('| Character | Control   | ');
		console.log('| w         | Up        |');
		console.log('| d         | Right     |');
		console.log('| s         | Down      |');
		console.log('| a         | Left      |');
		console.log('| c         | Quit      |');
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
		    case 'a': this.x--; break;
		    case 'd': this.x++; break;
		    case 'w': this.y--; break;
		    case 's': this.y++; break;
	   	}
    
	    // restrict to bounds provided
	    this.x = Math.min(maxX - 1, Math.max(0, this.x));
	    this.y = Math.min(maxY - 1, Math.max(0, this.y));
	}
}

class Thread {
	constructor() {
		this.minimumMillsecPerFrame = 0;
	}

	run() {
		// do nothing
	}

	start(desiredFramerate) {
		//f/s * 1s/1000millis 
		this.minimumMillsecPerFrame = desiredFramerate / 1000;

		setTimeout(run, this.minimumMillsecPerFrame);
	}

	runInternal() {
		run();
		setTimeout(runInternal, this.minimumMillsecPerFrame);	
	}
}

run();


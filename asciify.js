

"use strict";

var run = function() {
    var renderer = new Renderer();
    
    var fillRenderer = function(characters) {
	renderer.addCharacterList(characters);
	renderer.render();
    }

    var argv = require('minimist')(process.argv.slice(2));
    console.log(argv);

    if (argv) {
    	renderer.removeAllCharacters();

	var path = argv['image'] != null ? argv['image'] : '';
	var inverse = argv['i'];
	var width = argv['w'];
	var height = argv['h'];
	var imageTest = new ImageAsciified(path, width, height);
	imageTest.inverse = inverse;
	imageTest.load(fillRenderer);
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
    }

    render() {
	console.log("render: " + this.characters.length);
	for (var row = 0; row < this.maxY; row++) {
	    var output = '';

	    // find all characters that need to be drawn in this row
	    var charactersInRow = this.getCharactersInRow(row);;
	    
	    // if there aren't any, draw a blank line
	    if (charactersInRow.length <= 0) {
	   	for (var col = 0; col < this.maxX; col++) {
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
}


class ImageAsciified {
    constructor(path, desiredWidth, desiredHeight) {
	this.path = path;
	this.pixels = null;
	this.desiredWidth = desiredWidth;
	this.desiredHeight = desiredHeight;
	this.inverse = false;
    }

    load(callback) {
	var getPixels = require("get-pixels")
	var that = this;

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

		var thisChar = this.getAsciiCharFromPixelWeight(pixelSum / numPixels, this.inverse);
		characters.push(new Character(j, i, thisChar));
	    }
	}
	return characters;
    }

    getAsciiCharFromPixelWeight(weight, inverse) {
	var mappings = this.getAsciiMapping(inverse);
	var thisChar = mappings[mappings.length - 1][1]; //default to brightest
	for (var i = 0; i < mappings.length; i++) {
	    if (weight < mappings[i][0]) {
		thisChar = mappings[i][1];
		break;
	    }
	}

	return thisChar;
    }

    getAsciiMapping(inverse) {
	if (this.inverse) {
	    return [
		[40,  ' '],
		[80,  '`'],
		[120, '.'],
		[160, '"'],
		[200, ':'],
		[240, ';'],
		[280, '+'],
		[320, '/'],
		[360, 'r'],
		[400, 'c'],
		[440, 'v'],
		[480, 'x'],
		[520, 'Y'],
		[630, 'X'],
		[680, '&'],
		[720, '#'],
		[760, '@']
	    ];
	}
	
	return [
	    [40,  '@'],
	    [80,  '#'],
	    [120, '&'],
	    [160, '8'],
	    [200, '0'],
	    [240, 'X'],
	    [280, 'Y'],
	    [320, 'x'],
	    [360, 'v'],
	    [400, 'c'],
	    [440, 'r'],
	    [480, '/'],
	    [520, '+'],
	    [560, ';'],
	    [600, ':'],
	    [640, '"'],
	    [680, '.'],
	    [720, '`'],
	    [760, ' ']
	];
    }
}

run();

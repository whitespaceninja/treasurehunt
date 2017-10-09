"use strict";

var map1 = [
"|------------------------------------------------------------------------------------------------------------------------|",
"|  |        |   |                             |                |        |   |                             |              |",
"|  |   |----|   |-----|  -  |-------------|   |   |-------|    |   |----|   |-----|  -  |-------------|   |   |-------|  |",
"|  |        |   |        |  |                 |           |    |        |   |        |  |                 |           |  |",
"|  |---|    |   -    |   |  |   |-------------|           |    |---|    |   -    |   |  |   |-------------|           |  |",
"|           |        |   |  |                 |           |             |        |   |  |                 |           |  |",
"|                    |   -  |            -                |                      |   -  |            -                |  |",
"|                    |      -            |                |                      |      -            |                |  |",
"|      |-------|     |                   |                |        |-------|     |                   |                |  |",
"|                    |   -  |------------|                |                      |   -  |------------|                |  |",
"|           |--------|   |  |                             |             |--------|   |  |                             |  |",
"|                        |  |                  |----------|                          |  |                  |----------|  |",
"|                        |  |                                                        |  |                                |",
"|   |-------|            -  -                                   |-------|            -  -                                |",
"|           |                    |----------------|     -               |                    |----------------|     -    |",
"|           |               -                           |               |               -                           |    |",
"|           |               |                           |               |               |                           |    |",
"|------------------------------------------------------------------------------------------------------------------------|"
];

// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 4,
    'updateFPS': 10,
    'viewportWidth': 30,
    'viewportHeight': 10,
    'numEnemies': 10
};

// some basic constants
var FACING_UP = 'U';
var FACING_LEFT = 'L';
var FACING_DOWN = 'D';
var FACING_RIGHT = 'R';

function run() {  
    var thGame = new TreasureHuntGame();
    thGame.initialize();
}

function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

class Animation {
    constructor() { }

    update(timeNow) { }

    fillRenderer(renderer) { }

    isExpired() { return true; }
}

class WinTextAnimaton extends Animation {
    constructor(centerX, centerY) {
        super();
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

class WinAnimation extends Animation {
    constructor(centerX, centerY, maxX, maxY) {
        super();
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
        } else {
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

        var getRandomMapPlacement = function(character, map) {
            var x = randomNumber(map.width - 1);
            var y = randomNumber(map.height - 1);

            // don't let them overlap
            while (map.getIsWall(x, y) || (character.x == x && character.y == y)) {
                x = randomNumber(map.width - 1);
                y = randomNumber(map.height - 1);
            }

            return { 'x': x, 'y': y };
        }

        var createPlayer = function() {
            // the ascii characters we draw in each position
            var characterAnimation = new CharacterAnimation(FACING_DOWN, '\u25C1', '\u25B3', '\u25B7', '\u25BD');

            // start at the top left of the map
            return new MovableCharacter(1, 1, characterAnimation);
        }

        var createGoal = function(character, map) {
            var goalPlacement = getRandomMapPlacement(character, map);
            return new Character(goalPlacement.x, goalPlacement.y, '$');
        }

        var createEnemy = function(character, map) {
            // create enemies
            var enemyAnimation = new CharacterAnimation(FACING_DOWN, '\u2646', '\u2646', '\u2646', '\u2646');
            var enemyPlacement = getRandomMapPlacement(character, map);
            return new EnemyCharacter(enemyPlacement.x, enemyPlacement.y, enemyAnimation, map);
        }

        this.character = createPlayer();
        this.goal = createGoal(this.character, this.map);
        this.enemies = [];
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            this.enemies.push(createEnemy(this.character, this.map));
        }

        this.renderer = new Renderer(globalOptions['viewportWidth'], globalOptions['viewportHeight']);
        this.animationHandler = new AnimationHandler(this.renderer);

        this.renderer.centerViewportOn(this.character, this.map);

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
        this.enemies.map(x => that.renderer.addCharacter(x));
        this.renderer.addCharacter(this.goal);
        this.renderer.addCharacterList(this.mapCharacters);

        // first draw of render
        this.renderer.render(this.map);

        // this is a blocking animation that 'explodes' the 
        //...goal into an explosion
        var spawnExplosions = function(now) {
            // spawn a new animation based on EXPLOSION_SPEED
            if (now - lastExplosionTime > EXPLOSION_SPEED) {
                that.animationHandler.addAnimation(new WinAnimation(that.goal.x, that.goal.y, that.map.width, that.map.height));
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
                    that.renderer.centerViewportOn(that.character, that.map);

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
            that.drawHelp(that.character.getSymbol());
            that.renderer.render(that.map);
        }

        this.game.initialize(update, draw);
    }

    drawHelp(characterSymbol) {
        var output = 'Instructions: Use Chrome (other browsers not supported)\n';
        output = output + 'Click anywhere on the web page itself\n\n';
        output = output + 'Use your "' + characterSymbol + '" character and go find the treasure!\n'; 
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
    constructor(viewW, viewH) {
        this.characters = [];
        this.viewport = { 'x': 0, 'y': 0, 'width': viewW, 'height': viewH }
    }

    clearScreen() {
        // clear the screen and set cursor at 0,0
        console.clear();
        //console.log("\u001b[2J\u001b[0;0H");
        //process.stdout.write("\u001b[2J\u001b[0;0H");
    }

    render(map) {
        var output = '';
        for (var row = this.viewport.y; row < this.viewport.y + this.viewport.height; row++) {
            // find all characters that need to be drawn in this row
            var charactersInRow = this.getCharactersInRow(row);
            
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
	this.characters = this.characters.concat(characterList);
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

    getCharactersInRow(row) {
        var that = this;
        return this.characters.filter(c => 
           c.y == row && 
           c.x >= that.viewport.x && 
           c.x <= that.viewport.x + that.viewport.width);
    }

    getOutputLine(charactersInRow, map) {
        // ...then draw them all. Put it all in one string for quick render.
        var output = '';
        for (var col = this.viewport.x; col < this.viewport.x + this.viewport.width; col++) {
	    var charactersInPosition = charactersInRow.filter(c => c.x == col);

            if (charactersInPosition.length > 0) {
		// use the first one in the list. No reason beyond laziness.
                output = output + charactersInPosition[0].getSymbol();
            } else {
                output = output + ' ';
            }
        }

        return output;
    }

    centerViewportOn(character, map) {
        this.viewport.x = Math.min(map.width - this.viewport.width, Math.max(0, character.x - (this.viewport.width / 2)));
        this.viewport.y = Math.min(map.height - this.viewport.height, Math.max(0, character.y - (this.viewport.height / 2)));
    }
}

class CharacterAnimation {
    constructor(facingStart, leftChar, upChar, rightChar, downChar) {
        this.facing = facingStart;
        this.charMap = {};
        this.charMap[FACING_UP] = upChar;
        this.charMap[FACING_RIGHT] = rightChar;
        this.charMap[FACING_DOWN] = downChar;
        this.charMap[FACING_LEFT] = leftChar;
    }

    getSymbol() {
        return this.charMap[this.facing];
    }

    setFacing(newFacing) {
        this.facing = newFacing;
    }
}

class Character {
    constructor(initialX, initialY, symbol) {
        this.x = initialX;
        this.y = initialY;
        this.symbol = symbol;
    }

    getSymbol() {
        return this.symbol;
    }
}

class MovableCharacter extends Character {
    constructor(initialX, initialY, characterAnimation) {
        super(initialX, initialY, characterAnimation.getSymbol());
        this.characterAnimation = characterAnimation;
    }

    move(direction, maxX, maxY, map) {
        var intendedX = this.x;
        var intendedY = this.y;

        switch(direction) {
            case 'LEFT': 
                intendedX--; 
                this.characterAnimation.setFacing(FACING_LEFT);
                break;

            case 'RIGHT':
                intendedX++; 
                this.characterAnimation.setFacing(FACING_RIGHT);
                break;

            case 'UP':
                intendedY--; 
                this.characterAnimation.setFacing(FACING_UP);
                break;

            case 'DOWN':
                intendedY++; 
                this.characterAnimation.setFacing(FACING_DOWN);
                break;
        }

        // restrict to bounds provided
        intendedX = Math.min(maxX - 1, Math.max(0, intendedX));
        intendedY = Math.min(maxY - 1, Math.max(0, intendedY));

        if (!map.getIsWall(intendedX, intendedY)) {
            this.x = intendedX;
            this.y = intendedY;
        }
    }

    getSymbol() {
        return this.characterAnimation.getSymbol();
    }
}

class EnemyCharacter extends MovableCharacter {
    constructor(initialX, initialY, characterAnimation, map) {
        super(initialX, initialY, characterAnimation);

        this.map = map;

        var that = this;
        var think = function() {
            var random = randomNumber(4);
            var direction = 'NONE';
            switch (random) {
            case 0: 
                direction = 'LEFT';
                break;
            case 1:
                direction = 'RIGHT';
                break;
            case 2:
                direction = 'DOWN';
                break;
            case 3:
                direction = 'UP';
                break;
            }

            that.move(direction, that.map.width, that.map.height, that.map);
        }

        this.threadThink = new Thread(think);

        this.threadThink.start(0.8); //update X times per second
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

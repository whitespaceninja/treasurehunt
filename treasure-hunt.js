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
    'drawFPS': 5,
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

class TextAnimaton extends Animation {
    constructor(centerX, centerY, text) {
        super();
        this.centerX = centerX;
        this.centerY = centerY;
        this.frameSpeed = 600;
        this.lastFrame = Date.now();
        this.isVisible = false;
        this.text = text;
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
            for (var i = 0; i < this.text.length; i++) {
                var x_offset = Math.floor(this.text.length / 2) - i;
                renderer.addCharacter(new Character(this.centerX - x_offset, this.centerY, this.text.charAt(i)));
            }
        }
        renderer.setDirty();
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
        renderer.setDirty();
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


        this.character = this.createPlayer();
        this.renderer = new Renderer(globalOptions['viewportWidth'], globalOptions['viewportHeight']);
        this.animationHandler = new AnimationHandler(this.renderer);

        this.STATE_RUNNING = 0;
        this.STATE_WINNNING = 1;
        this.STATE_DEAD = 2;

        // this should probably turn into a state machine
        this.state = this.STATE_RUNNING;
    }

    getRandomMapPlacement(character, map) {
        var x = randomNumber(map.width - 1);
        var y = randomNumber(map.height - 1);

        // don't let them overlap
        while (map.getIsWall(x, y) || (character.x == x && character.y == y)) {
            x = randomNumber(map.width - 1);
            y = randomNumber(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // the ascii characters we draw in each position
        var characterAnimation = new CharacterAnimation(FACING_DOWN, '\u25C1', '\u25B3', '\u25B7', '\u25BD');
        
        // start at the top left of the map
        return new MovableCharacter(1, 1, characterAnimation);
    }

    createGoal(character, map) {
        var goalPlacement = this.getRandomMapPlacement(character, map);
        return new Character(goalPlacement.x, goalPlacement.y, '$');
    }

    createEnemy(character, map) {
        // create enemies
        var enemyAnimation = new CharacterAnimation(FACING_DOWN, '\u263F', '\u263F', '\u263F', '\u263F');
        var enemyPlacement = this.getRandomMapPlacement(character, map);
        return new EnemyCharacter(enemyPlacement.x, enemyPlacement.y, enemyAnimation, map);
    }


    initialize() {
        var that = this;

        var EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        var lastExplosionTime = Date.now();
        var lastBlinkTime = Date.now();

        var onAnimation = function(character) {
            if (that.renderer.isOnScreen(character)) {
                that.renderer.setDirty();
            }
        }

        this.goal = this.createGoal(this.character, this.map);
        this.enemies = [];
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            var enemy = this.createEnemy(this.character, this.map);
            enemy.addAnimationListener(onAnimation);
            this.enemies.push(enemy);
        }

        this.mapCharacters = this.map.getMapCharacters();

        // add game objects to renderer
        this.character.addAnimationListener(onAnimation);
        this.renderer.addCharacter(this.character);
        this.enemies.map(x => that.renderer.addCharacter(x));
        this.renderer.addCharacter(this.goal);
        this.renderer.addCharacterList(this.mapCharacters);
        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // first draw of render
        this.renderer.render(this.map);

        // this is a blocking animation that 'explodes' the 
        //...goal into an explosion
        var spawnExplosions = function(now, centeredCharacter) {
            // spawn a new animation based on EXPLOSION_SPEED
            if (now - lastExplosionTime > EXPLOSION_SPEED) {
                that.animationHandler.addAnimation(new WinAnimation(centeredCharacter.x, centeredCharacter.y, that.map.width, that.map.height));
                lastExplosionTime = now;
            }
        };

        var checkDeadCondition = function() {
            var enemiesTouched = that.enemies.filter(e => e.x == that.character.x && e.y == that.character.y);
            if (enemiesTouched.length > 0) {
                var enemy = enemiesTouched[0];
                that.state = that.STATE_DEAD;

                that.animationHandler.addAnimation(new WinAnimation(enemy.x, enemy.y, that.map.width, that.map.height));
                that.animationHandler.addAnimation(new TextAnimaton(enemy.x, enemy.y, "DEAD"));
            }
        }

        var checkWinCondition = function() {
            if (that.character.x == that.goal.x && that.character.y == that.goal.y) {
                that.state = that.STATE_WINNING;

                that.animationHandler.addAnimation(new WinAnimation(that.goal.x, that.goal.y, that.map.width, that.map.height));
                that.animationHandler.addAnimation(new TextAnimaton(that.goal.x, that.goal.y, "WIN"));
            }
        }

        var update = function () {
            var now = Date.now();
            var key = that.game.getLastKeypress();
            
            if (null !== key) {
                var gameCommand = keyMap.getGameCommand(key.toString());

                if (gameCommand == 'QUIT') {
                    process.exit();
                } else if (that.state == that.STATE_RUNNING) {   
                    // update character movement
                    that.character.move(gameCommand, that.map.width, that.map.height, that.map);
                    that.renderer.centerViewportOn(that.character, that.map);

                    checkWinCondition();
                    checkDeadCondition();
                }
            }

            if (that.state == that.STATE_WINNING) {
                // clear everything
                that.renderer.removeAllCharacters();
                
                // win condition!
                spawnExplosions(now, that.character);
            } else if (that.state == that.STATE_DEAD) {
                that.renderer.removeAllCharacters();

                spawnExplosions(now, that.character);
            }

            // this currently adds all the characters to the renderer so it should be 
            //...after the removeAllCharacters() call above. Need to decide if this is
            //...an update function or a draw function...
            that.animationHandler.update(now);
        }

        var draw = function() {
            if (!that.renderer.dirty) {
                return;
            }
            that.renderer.dirty = false;

            that.renderer.clearScreen();
            that.drawHelp(that.character.getSymbol());
            that.renderer.render(that.map);
        }

        this.game.initialize(update, draw);
    }

    drawHelp(characterSymbol) {
        var output = 'Instructions: Use Chrome (other browsers not supported)\n';
        output = output + 'Click anywhere on the web page itself\n\n';
        output = output + 'Use your "' + characterSymbol + '" character and go find the treasure ($)!\n'; 
        output = output + 'but watch out for bad guys!\n'; 
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
        this.dirty = true;
    }

    setDirty() {
        this.dirty = true;
    }

    clearScreen() {
        // clear the screen and set cursor at 0,0
        console.clear();
        //console.log("\u001b[2J\u001b[0;0H");
        //process.stdout.write("\u001b[2J\u001b[0;0H");
    }

    isOnScreen(character) {
        var onscreen = 
            character.x >= this.viewport.x &&
            character.x < this.viewport.x + this.viewport.width &&
            character.y >= this.viewport.y &&
            character.y < this.viewport.y + this.viewport.height;
        return onscreen;
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
        if (this.facing != newFacing) {
            var diffSymbol = this.charMap[this.facing] != this.charMap[newFacing];
            this.facing = newFacing;
            return diffSymbol;
        }
        return false;
    }
}

class Character {
    constructor(initialX, initialY, symbol) {
        this.x = initialX;
        this.y = initialY;
        this.symbol = symbol;
        this.animationListeners = [];
    }

    getSymbol() {
        return this.symbol;
    }

    addAnimationListener(fnOnAnimate) {
        this.animationListeners.push(fnOnAnimate);
    }

    clearAnimationListeners() {
        this.animationListeners = [];
    }

    onAnimated() {
        var that = this;
        this.animationListeners.map(x => x(that));
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
        var dirty = false;

        switch(direction) {
            case 'LEFT': 
                intendedX--; 
                dirty = this.characterAnimation.setFacing(FACING_LEFT);
                break;

            case 'RIGHT':
                intendedX++; 
                dirty = this.characterAnimation.setFacing(FACING_RIGHT);
                break;

            case 'UP':
                intendedY--; 
                dirty = this.characterAnimation.setFacing(FACING_UP);
                break;

            case 'DOWN':
                intendedY++; 
                dirty = this.characterAnimation.setFacing(FACING_DOWN);
                break;
        }

        // restrict to bounds provided
        intendedX = Math.min(maxX - 1, Math.max(0, intendedX));
        intendedY = Math.min(maxY - 1, Math.max(0, intendedY));

        if (!map.getIsWall(intendedX, intendedY)) {
            this.x = intendedX;
            this.y = intendedY;
            dirty = true;
        }

        if (dirty) {
            this.onAnimated();
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

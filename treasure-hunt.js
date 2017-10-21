"use strict";

var map1 = [
"|------------------------------------------------------------------------------------------------------------------------|",
"|                                                                                                                        |",
"|         __                                                                                                             |",
"|       _/  |_                                                     ___                                                   |",
"|      /______\\                   __                            __/   \\                                                  |",
"|                           __   /  \\                          /       \\                                                 |",
"|                          /  \\_/    \\                        |_________\\                                                |",
"|                        _/           \\                                                                                  |",
"|      ___              /              \\                                                                                 |",
"|     /___\\          __/                \\                                                                                |",
"|                   /____________________\\                  ______________                                               |",
"|                                                          /              \\______                                        |",
"|                                                         /______________________\\                                       |",
"|                                                                                                                        |",
"|                                                                                                                        |",
"|                                                                                                                        |",
"|                                                                                                                        |",
"|------------------------------------------------------------------------------------------------------------------------|"
];

// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
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

class GameObjects {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.addObject(obj.children[i]);
        }
    }

    removeObject(obj) {
        this.objects = this.objects.filter(x => x !== obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.removeObject(obj.children[i]);
        }
    }

    removeAllObjects() {
        this.objects = [];
    }
}

var gameObjects = new GameObjects();

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
                gameObjects.addObject(new StaticCharacter(this.centerX - x_offset, this.centerY, this.text.charAt(i)));
            }
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
                var character = new StaticCharacter(x, y, '*');
                gameObjects.addObject(character);
            }
        }
    }

    isExpired() {
        return this.centerX - (this.radius * 2) < 0 &&
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

    clearAnimations() {
        this.animations = []
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
        this.keyMap = new KeyMap();

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
        while (map.getIsWall(x, y) || (character.getX() == x && character.getY() == y)) {
            x = randomNumber(map.width - 1);
            y = randomNumber(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // start at the top left of the map
        var player = new PlayerCharacter(1, 1);
        return player;
    }

    createGoal(character, map) {
        var goalPlacement = this.getRandomMapPlacement(character, map);
        return new StaticCharacter(goalPlacement.x, goalPlacement.y, '$');
    }

    createEnemy(character, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(character, map);
        var enemy = new EnemyCharacter(enemyPlacement.x, enemyPlacement.y);
        return enemy;
    }
    
    resetLevel() {
        var that = this;
        
        this.state = this.STATE_RUNNING;

        // start from scratch
        gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();
        this.character.reset();

        this.goal = this.createGoal(this.character, this.map);
        this.enemies = [];
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            var enemy = this.createEnemy(this.character, this.map);
            this.enemies.push(enemy);
        }

        this.mapCharacters = this.map.getMapCharacters();

        // add game objects to renderer
        gameObjects.addObject(this.character);

        this.enemies.map(x => gameObjects.addObject(x));
        this.map.getMapCharacters().map(x => gameObjects.addObject(x));
        gameObjects.addObject(this.goal);

        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // first draw of render
        this.renderer.render();
    }

    initialize() {
        var that = this;

        var EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        var lastExplosionTime = Date.now();
        var lastBlinkTime = Date.now();
        var resetLevelTime = -1;

        this.resetLevel();

        // this is a blocking animation that 'explodes' the 
        //...goal into an explosion
        var spawnExplosions = function(now, centeredCharacter) {
            // spawn a new animation based on EXPLOSION_SPEED
            if (now - lastExplosionTime > EXPLOSION_SPEED) {
                that.animationHandler.addAnimation(new WinAnimation(centeredCharacter.getX(), centeredCharacter.getY(), that.map.width, that.map.height));
                lastExplosionTime = now;
            }
        };

        var checkDeadCondition = function() {
            if (that.character.health <= 0) {
                that.state = that.STATE_DEAD;

                that.animationHandler.addAnimation(new WinAnimation(that.character.getX(), that.character.getY(), that.map.width, that.map.height));
                that.animationHandler.addAnimation(new TextAnimaton(that.character.getX(), that.character.getY(), "DEAD"));
                resetLevelTime = Date.now() + 6000;
            }
        }

        var checkWinCondition = function() {
            if (that.character.getX() == that.goal.getX() && that.character.getY() == that.goal.getY()) {
                that.state = that.STATE_WINNING;

                that.animationHandler.addAnimation(new WinAnimation(that.goal.getX(), that.goal.getY(), that.map.width, that.map.height));
                that.animationHandler.addAnimation(new TextAnimaton(that.goal.getX(), that.goal.getY(), "WIN"));

                resetLevelTime = Date.now() + 6000;
            }
        }

        var update = function () {
            var now = Date.now();
            var key = that.game.getLastKeypress();
            
            if (null !== key) {
                var gameCommand = that.keyMap.getGameCommand(key.toString());

                if (gameCommand == 'QUIT') {
                    process.exit();
                } else if (that.state == that.STATE_RUNNING) {   
                    // update character movement
                    that.character.handleGameCommand(gameCommand);
                    that.renderer.centerViewportOn(that.character, that.map);
                }
            }

            if (that.state == that.STATE_RUNNING) {
                // update everything
                gameObjects.objects.map(x => x.update(now));

                // check all collisions
                gameObjects.objects.filter(x => x.hasOwnProperty('collider')).map(x => x.collider.checkCollision());

                checkWinCondition();
                checkDeadCondition();
            } else if (that.state == that.STATE_WINNING ||
                       that.state == that.STATE_DEAD) {
                // clear everything
                gameObjects.removeAllObjects();
                
                // win/die condition
                spawnExplosions(now, that.character);

                if (resetLevelTime >= 0 && now > resetLevelTime) {
                    that.resetLevel();
                }
            }

            // this currently adds all the characters to the renderer so it should be 
            //...after the removeAllObjects() call above. Need to decide if this is
            //...an update function or a draw function...
            that.animationHandler.update(now);
        }

        var draw = function() {
            if (!that.renderer.isDirty()) {
                return;
            }

            that.renderer.clearScreen();
            that.drawHelp(that.character.getCharacter());
            that.renderer.render();
        }

        this.game.initialize(update, draw);
    }

    drawHelp(characterSymbol) {
        var output = 'Instructions: Use Firefox or Chrome (Firefox reduces flickering!)\n';
        output = output + 'Break out the dev tools into a separate window and then click on my actual web page to enable controls.\n\n';
        output = output + 'Use your "' + characterSymbol + '" character and go find the treasure ($) but watch out for bad guys...\n\n'; 
        output = output + '| Control  | Action |\n';
        output = output + '|----------|--------|\n';
        output = output + '| spacebar | FIRE!  |\n';
        output = output + '| w        | Up     |\n';
        output = output + '| d        | Right  |\n';
        output = output + '| s        | Down   |\n';
        output = output + '| a        | Left   |\n';
        output = output + '| c        | Quit   |\n';
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
                    this.characters.push(new WallCharacter(col, row, thisChar));
                }
            }
        }

        return this.characters;
    }

    getIsWall(x, y) {
        return this.getMapCharacters().filter(ch => ch.getBounds().intersectsPoint(x, y)).length > 0;
    }
}

class Renderer {
    constructor(viewW, viewH) {
        this.viewport = new Rectangle(0, 0, viewW, viewH);
    }

    clearScreen() {
        // clear the screen and set cursor at 0,0
        console.clear();
        //console.log("\u001b[2J\u001b[0;0H");
        //process.stdout.write("\u001b[2J\u001b[0;0H");
    }

    isOnScreen(character) {
        return character.isVisible && character.getBounds().intersects(this.viewport);
    }

    render() {
        var output = '';
        var renderableObjects = this.getRenderableObjectsOnScreen();
        for (var row = this.viewport.y; row < this.viewport.y + this.viewport.height; row++) {
            for (var col = this.viewport.x; col < this.viewport.x + this.viewport.width; col++) {
                var characters = renderableObjects.filter(c => c.getCharacter).map(c => c.getCharacter(row, col)).filter(c => c != null);
                if (characters.length > 0) {
                    output = output + characters[0];
                } else {
                    output = output + ' ';
                }
            }
            output = output + '\n';
        }

        console.log(output);

        renderableObjects.map(c => c.needsRedraw = false);
    }

    isDirty() {
        return this.getRenderableObjectsOnScreen().filter(c => c.needsRedraw).length > 0;
    }

    getRenderableObjectsOnScreen() {
        var that = this;
        var renderable = gameObjects.objects.filter(c => c.isVisible && 
                                                    that.isOnScreen(c));
        return renderable;
    }

    centerViewportOn(character, map) {
        this.viewport.x = Math.min(map.width - this.viewport.width, Math.max(0, character.getX() - (this.viewport.width / 2)));
        this.viewport.y = Math.min(map.height - this.viewport.height, Math.max(0, character.getY() - (this.viewport.height / 2)));
    }
}

class Sprite {
    // format of a spriteMap:
    // {
    //     "<state>": [{ "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] },
    //                 { "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] } ]
    // }
    constructor(spriteMap, parentObject) {
        this.spriteMap = spriteMap;
        this.parentObject = parentObject;
        this.state = 0;
        this.stateElapsed = 0;
        this.lastUpdate = 0;
        this.frame = 0;
        this.isVisible = true;
    }

    getBounds() {
        return this.parentObject.bounds;
    }

    update(timeNow) {
        if (this.lastUpdate == 0) {
            this.lastUpdate = timeNow;
        }
        
        var elapsedTime = timeNow - this.lastUpdate;
        this.lastUpdate = timeNow;
        this.stateElapsed = this.stateElapsed + elapsedTime;
        
        var prevFrame = this.frame;
        this.frame = this.calculateCurrentFrame();
        if (this.frame != prevFrame) {
            this.parentObject.onAnimated();
        }

        this.calculateSize();
    }

    calculateSize() {
        var sprites = this.spriteMap[this.state];
        var frame = this.frame;
        var characterRows = sprites[frame]["characters"];

        var firstRow = 999999;
        var lastRow = 0;
        var firstCol = 999999;
        var lastCol = 0;

        for (var row = 0; row < characterRows.length; row++) {
            for (var col = 0; col < characterRows[row].length; col++) {
                var symbol = characterRows[row].charAt(col);
                if (symbol && symbol != ' ') {
                    firstRow = Math.min(firstRow, row);
                    lastRow = Math.max(lastRow, row);
                    firstCol = Math.min(firstCol, col);
                    lastCol = Math.max(lastCol, col);
                }
            }
        }

        this.parentObject.getBounds().width = lastCol - firstCol + 1;
        this.parentObject.getBounds().height = lastRow - firstRow + 1;
    }

    setState(newState) {
        this.state = newState;
    }

    getX() {
        return this.parentObject.getX();
    }

    getY() {
        return this.parentObject.getY();
    }

    calculateCurrentFrame() {
        var sprites = this.spriteMap[this.state];
        var totalTime = sprites.reduce(function(accumulator, currentValue) { return accumulator + currentValue["displayTime"]; }, 0);
        var leftover = this.stateElapsed % totalTime;
        var frame = 0;
        var timeAccumulator = 0;
        for (var i = 0; i < sprites.length; i++) {
            frame = i;
            var displayTime = sprites[i]["displayTime"];
            if (timeAccumulator + displayTime > leftover) {
                break;
            }
            timeAccumulator = timeAccumulator + displayTime;
        }

        return frame;
    }

    getCharacter(row, col) {
        var sprites = this.spriteMap[this.state];
        var frame = this.frame;
        var ourRow = row - this.parentObject.getY();
        var ourCol = col - this.parentObject.getX();
        var characterRows = sprites[frame]["characters"];

        if (ourRow >= 0 && ourCol >= 0 && 
            characterRows.length > ourRow && characterRows[ourRow].length > ourCol) {
            var symbol = characterRows[ourRow].charAt(ourCol);
            if (symbol != ' ') {
                return symbol;
            }
        }

        return null;
    }
}

class Collider {
    constructor(parentObject) {
        this.parentObject = parentObject;
    }

    checkCollision() {
        var parent = this.parentObject;
        var collisionObjects = gameObjects.objects.filter(obj => obj !== parent &&
                                                          obj.collide && 
                                                          obj.getBounds().intersects(parent.getBounds()));
        if (collisionObjects.length > 0) {
            collisionObjects.map(obj => obj.collide(parent));
        }
    }
}

class Character {
    constructor(initialX, initialY) {
        this.initialX = initialX;
        this.initialY = initialY;
        this.bounds = new Rectangle(initialX, initialY, 1, 1);
        this.isVisible = true;
        this.needsRedraw = true;
        this.obeysPhysics = false;
        this.animationListeners = [];
        this.children = [];
    }

    getX() {
        return this.bounds.x;
    }

    getY() {
        return this.bounds.y;
    }

    getBounds() {
        return this.bounds;
    }

    getCharacter(row, col) {
        return null;
    }

    onAnimated() {
        this.needsRedraw = true;
    }

    update(timeNow) {
    }
}

class StaticCharacter extends Character {
   constructor(initialX, initialY, symbol) {
        super(initialX, initialY);
        this.symbol = symbol;
    }

    getCharacter(row, col) {
        if (this.getX() == col && this.getY() == row) {
            return this.symbol;
        }
        return null;
    }
}

class WallCharacter extends Character {
    constructor(initialX, initialY, symbol) {
        super(initialX, initialY);
        this.symbol = symbol;
        this.isPhysical = true;
    }

    getCharacter(row, col) {
        if (this.getX() == col && this.getY() == row) {
            return this.symbol;
        }
        return null;
    }

    collide(withObject) {
        if (withObject instanceof ProjectileCharacter) {
            gameObjects.removeObject(withObject);
        }
    }
}

class Movable {
    constructor(parentObject) {
        this.parentObject = parentObject;
        this.facing = FACING_DOWN;
    }

    update(timeNow) {
        // do nothing?
    }

    setFacing(newFacing) {
        if (newFacing != this.facing) {
            this.facing = newFacing;
            return true;
        }
        return false;
    }

    move(direction) {
        var intendedX = this.parentObject.getX();
        var intendedY = this.parentObject.getY();
        var dirty = false;

        switch(direction) {
        case FACING_LEFT: 
            intendedX--; 
            dirty = this.setFacing(FACING_LEFT);
            break;

        case FACING_RIGHT:
            intendedX++; 
            dirty = this.setFacing(FACING_RIGHT);
            break;

        case FACING_UP:
            intendedY--; 
            dirty = this.setFacing(FACING_UP);
            break;

        case FACING_DOWN:
            intendedY++; 
            dirty = this.setFacing(FACING_DOWN);
            break;

        default:
            // must be some sort of bogus movement. don't handle.
            return
        }

        var that = this;
        var newRect = new Rectangle(intendedX, intendedY, this.parentObject.getBounds().width, this.parentObject.getBounds().height);
        // TODO: use width and height (Intersection method!)
        var objectsAlreadyInSpace = gameObjects.objects.filter(c => 
                                                               c !== that && 
                                                               c.isPhysical && 
                                                               c.getBounds().intersects(newRect)).length > 0;
        if (!(this.parentObject.obeysPhysics && objectsAlreadyInSpace)) {
            this.parentObject.getBounds().x = intendedX;
            this.parentObject.getBounds().y = intendedY;
            // always trigger dirty when moving
            dirty = true;
        }

        if (dirty) {
            this.parentObject.onAnimated();
        }
    }
}

class PlayerCharacter extends Character {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;

        var spriteMap = {};
        spriteMap[FACING_LEFT] = [{ "displayTime": 999999, "characters": ['\u25C1'] }];
        spriteMap[FACING_UP] = [{ "displayTime": 999999, "characters": ['\u25B3'] }];
        spriteMap[FACING_RIGHT] = [{ "displayTime": 999999, "characters": ['\u25B7'] }];
        spriteMap[FACING_DOWN] = [{ "displayTime": 999999, "characters": ['\u25BD'] }];

        this.sprite = new Sprite(spriteMap, this);
        this.sprite.setState(FACING_DOWN);
        this.movable = new Movable(this);

        // TODO: add this to gameObjects?
        this.collider = new Collider(this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
    }

    onAnimated() {
        super.onAnimated();
        this.sprite.setState(this.movable.facing);
    }

    reset() {
        this.bounds.x = this.initialX;
        this.bounds.y = this.initialY;
        this.health = 100;
    }

    handleGameCommand(command) {
        if (command == 'FIRE') {
            var projectile = new ProjectileCharacter(this.getX(), this.getY(), this.movable.facing, 8);
            gameObjects.addObject(projectile);
        } else {
            this.movable.move(command);
        }
    }

    collide(withObject) {
        if (withObject instanceof EnemyCharacter) {
            this.health = 0;
        }
    }
}

class EnemyCharacter extends Character {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.lastUpdate = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        var spriteMap = {
            "0": [
        { "displayTime": 910, "characters": ['0'] },
        { "displayTime": 150, "characters": ['o'] },
        { "displayTime": 130, "characters": ['.'] },
        { "displayTime": 150, "characters": ['o'] } ]
        };
        this.sprite = new Sprite(spriteMap, this);
        this.movable = new Movable(this);

        // TODO: add this to gameObjects?
        this.collider = new Collider(this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
    }

    think() {
        var random = randomNumber(4);
        var direction = 'NONE';
        switch (random) {
        case 0: 
            direction = FACING_LEFT;
            break;
        case 1:
            direction = FACING_RIGHT;
            break;
        case 2:
            direction = FACING_DOWN;
            break;
        case 3:
            direction = FACING_UP;
            break;
        }
        
        this.movable.move(direction);
    }

    update(timeNow) {
        super.update(timeNow);

        if (timeNow - this.lastUpdate > this.thinkSpeed) {
            this.think();
            this.lastUpdate = timeNow;
        }
    }

    collide(withObject) {
        if (withObject instanceof ProjectileCharacter) {
            gameObjects.removeObject(this);
        }
    }
}

class ProjectileCharacter extends Character {
    constructor(initialX, initialY, direction, maxDistance) {
        super(initialX, initialY);
        this.isVisible = true;
        
        var spriteMap = {};
        spriteMap[FACING_LEFT] = [{ "displayTime": 999999, "characters": ['\u25C0'] }];
        spriteMap[FACING_UP] = [{ "displayTime": 999999, "characters": ['\u25B2'] }];
        spriteMap[FACING_RIGHT] = [{ "displayTime": 999999, "characters": ['\u25B6'] }];
        spriteMap[FACING_DOWN] = [{ "displayTime": 999999, "characters": ['\u25BC'] }];

        this.sprite = new Sprite(spriteMap, this);
        this.sprite.setState(direction);

        this.direction = direction;
        this.distanceTraveled = 0;
        this.maxDistance = maxDistance;
        this.travelSpeed = (1 / 6.0) * 1000;
        this.lastUpdate = 0;
        this.obeysPhysics = false;
        this.movable = new Movable(this);
        
        // TODO: add this to gameObjects
        this.collider = new Collider(this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
    }

    think() {
        this.movable.move(this.direction);
        this.distanceTraveled++;
        if (this.distanceTraveled >= this.maxDistance) {
            gameObjects.removeObject(this);
        }
    }
    
    update(timeNow) {
        super.update(timeNow);

        if (timeNow - this.lastUpdate > this.travelSpeed) {
            this.think();
            this.lastUpdate = timeNow;
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

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    intersectsPoint(x, y) {
        if (x < this.x + this.width &&
            x >= this.x &&
            y < this.y + this.height &&
            y >= this.y) {
            return true;
        }
        return false;
    }

    intersects(rectangle) {
        if (this.x + this.width <= rectangle.x ||
            this.x >= rectangle.x + rectangle.width ||
            this.y + this.height <= rectangle.y ||
            this.y >= rectangle.y + rectangle.height) {
            return false;
        }
        return true;
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
            return FACING_LEFT;

        case 'e': 
        case 'd': 
        case "68":
        case "39":
            return FACING_RIGHT;

        case ',': 
        case 'w': 
        case "87":
        case "38":
            return FACING_UP;

        case 'o':
        case 's':
        case "83":
        case "40":
            return FACING_DOWN;

        case 'c':
        case '67':
            return 'QUIT';
            
        case 'f':
        case '70':
        case '32':
            return 'FIRE';
        }
    }
}

run();

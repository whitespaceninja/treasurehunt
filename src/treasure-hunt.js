
import {Game} from "./game.js";
import {KeyMap} from "./key_map.js";
import {AnimationHandler, WinAnimation, TextAnimaton} from "./animations.js";
import {PlayerCharacter} from "./player_character.js";
import {StaticCharacter} from "./static_character.js";
import {EnemyCharacter} from "./enemy_character.js";
import {GameObjects} from "./game_objects.js";
import {LEVEL_TOWN, ENEMY_SPIKEY_SPRITE_MAP} from "./treasure_hunt_art.js";
import {Map} from "./map.js";
import {randomNumber} from "./math_extensions.js";

// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
    'updateFPS': 10,
    'viewportWidth': 40,
    'viewportHeight': 14,
    'numEnemies': 10
};

function run() {  
    var thGame = new TreasureHuntGame();
    thGame.initialize(globalOptions);
}

var gameObjects = new GameObjects();

export class TreasureHuntGame extends Game {
    constructor() {
        // set up basic game objects
        super();

        this.map = new Map(LEVEL_TOWN);
        this.keyMap = new KeyMap();

        this.STATE_RUNNING = 0;
        this.STATE_WINNNING = 1;
        this.STATE_DEAD = 2;

        // this should probably turn into a state machine
        this.state = this.STATE_RUNNING;

        this.EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        this.lastExplosionTime = Date.now();

        this.resetLevelTime = -1;
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
        return new EnemyCharacter(enemyPlacement.x, enemyPlacement.y, ENEMY_SPIKEY_SPRITE_MAP);
    }
    
    resetLevel() {
        this.state = this.STATE_RUNNING;

        // start from scratch
        gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        this.character = this.createPlayer();
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
        gameObjects.addObject(this.goal);
        this.enemies.map(x => gameObjects.addObject(x));
        this.map.getMapCharacters().map(x => gameObjects.addObject(x));

        /*this.door = new DoorwayCharacter(2, 2, function() {
            window.location.href = 'http://www.google.com';
            });

            gameObjects.addObject(this.door);*/
        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // first draw of render
        this.renderer.render(gameObjects);
    }

    // this is a blocking animation that 'explodes' the 
    //...goal into an explosion
    spawnExplosions(now, centeredCharacter) {
        // spawn a new animation based on EXPLOSION_SPEED
        if (now - this.lastExplosionTime > this.EXPLOSION_SPEED) {
            this.animationHandler.addAnimation(new WinAnimation(centeredCharacter.getX(), centeredCharacter.getY(), this.map.width, this.map.height));
            this.lastExplosionTime = now;
        }
    }

    checkDeadCondition() {
        if (this.character.health <= 0) {
            this.state = this.STATE_DEAD;
            var x = this.character.getX();
            var y = this.character.getY();
            this.animationHandler.addAnimation(new WinAnimation(x, y, this.map.width, this.map.height));
            this.animationHandler.addAnimation(new TextAnimaton(x, y, "DEAD"));
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.getX() == this.goal.getX() && this.character.getY() == this.goal.getY()) {
            this.state = this.STATE_WINNING;

            this.animationHandler.addAnimation(new WinAnimation(this.goal.getX(), this.goal.getY(), this.map.width, this.map.height));
            this.animationHandler.addAnimation(new TextAnimaton(this.goal.getX(), this.goal.getY(), "WIN"));

            this.resetLevelTime = Date.now() + 6000;
        }
    }

    handleInput() {
       var key = this.getLastKeypress();
       if (null !== key) {
           var gameCommand = this.keyMap.getGameCommand(key.toString());

           if (gameCommand == 'QUIT') {
               process.exit();
           } else if (this.state == this.STATE_RUNNING) {   
               // update character movement
               this.character.handleGameCommand(gameCommand, gameObjects);
               this.renderer.centerViewportOn(this.character, this.map);
           }
       }
    }

    update(now, timeElapsed, gameObjects) {
        super.update(now, timeElapsed, gameObjects);

        if (this.state == this.STATE_RUNNING) {
            this.checkWinCondition();
            this.checkDeadCondition();
        } else if (this.state == this.STATE_WINNING ||
                   this.state == this.STATE_DEAD) {
            // clear everything
            gameObjects.removeAllObjects();
                
            // win/die condition
            this.spawnExplosions(now, this.character);

            if (this.resetLevelTime >= 0 && now > this.resetLevelTime) {
                this.resetLevel();
            }
        }

        // this currently adds all the characters to the renderer so it should be 
        //...after the removeAllObjects() call above. Need to decide if this is
        //...an update function or a draw function...
        this.animationHandler.update(now, timeElapsed);
    }

    initialize(options) {
        var that = this;      

        var lastUpdate = Date.now();
        var updateFunc = function () {
            var now = Date.now();
            var timeElapsed = now - lastUpdate;
            lastUpdate = now;

            that.handleInput();
            that.update(now, timeElapsed, gameObjects);
        }

        var drawFunc = function() {
            if (!that.renderer.getIsDirty()) {
                return;
            }

            that.renderer.clearScreen();
            that.drawHelp(that.character.getCharacter());
            that.renderer.render(gameObjects);
        }

        super.initialize(updateFunc, drawFunc, options);

        // do this after initializing parent
        this.animationHandler = new AnimationHandler(this.renderer);
        this.resetLevel();
    }

    drawHelp(characterSymbol) {
        var output = 'Use Firefox to play if you aren\'t already!!\n'
        /*var output = 'Instructions: Use Firefox or Chrome (Firefox reduces flickering!)\n';
        output = output + 'Break out the dev tools into a separate window and then click on my actual web page to enable controls.\n\n';
        output = output + 'Use your "' + characterSymbol + '" character and go find the treasure ($) but watch out for bad guys...\n\n'; 
        output = output + '| Control  | Action |\n';
        output = output + '|----------|--------|\n';
        output = output + '| spacebar | FIRE!  |\n';
        output = output + '| w        | Up     |\n';
        output = output + '| d        | Right  |\n';
        output = output + '| s        | Down   |\n';
        output = output + '| a        | Left   |\n';
        output = output + '| c        | Quit   |\n';*/
        console.log(output);
    }
}

run();
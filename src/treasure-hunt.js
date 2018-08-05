
import {Game} from "./game.js";
import {KeyMap} from "./key_map.js";
import {AnimationHandler, WinAnimation, TextAnimaton} from "./animations.js";
import {PlayerCharacter} from "./player_character.js";
import {EnemyCharacter} from "./enemy_character.js";
import {GameObjects} from "./game_objects.js";
import {LEVEL_TOWN, ENEMY_SPIKEY_SPRITE_MAP} from "./treasure_hunt_art.js";
import {Map} from "./map.js";
import {randomNumber} from "./math_extensions.js";
import {TreasureCharacter} from "./treasure_character.js";
import {Menu} from "./menu.js";
import {ACTION_INCREASE_VIEWPORT_H, ACTION_BACK_TO_GAME, ACTION_POP_MENU, ACTION_PUSH_MENU, ACTION_INCREASE_VIEWPORT_W} from "./menu_actions.js";
import {HELP_MENU} from "./menu_specs.js";

// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
    'updateFPS': 10,
    'viewportWidth': 40,
    'minViewportWidth': 40,
    'maxViewportWidth': 60,
    'viewportHeight': 14,
    'minViewportHeight': 14,
    'maxViewportHeight': 20,
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
        this.menuStack = [];

        this.STATE_RUNNING = 0;
        this.STATE_WINNNING = 1;
        this.STATE_DEAD = 2;
        this.STATE_MENU = 3;

        // this should probably turn into a state machine
        this.state = this.STATE_RUNNING;

        this.EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        this.lastExplosionTime = Date.now();

        this.resetLevelTime = -1;
    }

    getRandomMapPlacement(gameObjects, map) {
        var x = randomNumber(map.width - 1);
        var y = randomNumber(map.height - 1);

        // don't let them overlap
        while (gameObjects.objects.filter(obj => obj.isPhysical && 
                                                 obj.getX() === x && 
                                                 obj.getY() === y).length > 0) {
            x = randomNumber(map.width - 1);
            y = randomNumber(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // start at the top left of the map
        var player = new PlayerCharacter(1, 1);
        player.reset();
        return player;
    }

    createGoal(gameObjects, map) {
        var goalPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new TreasureCharacter(goalPlacement.x, goalPlacement.y, '$', 'levelGoal');
    }

    createEnemy(gameObjects, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new EnemyCharacter(enemyPlacement.x, enemyPlacement.y, ENEMY_SPIKEY_SPRITE_MAP);
    }
    
    resetLevel() {
        this.state = this.STATE_RUNNING;

        // start from scratch
        gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        // create our player
        this.character = this.createPlayer();
        gameObjects.addObject(this.character);

        // add a levelGoal to this level
        gameObjects.addObject(this.createGoal(gameObjects, this.map));

        // add some enemies
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            gameObjects.addObject(this.createEnemy(gameObjects, this.map));            
        }

        // add our map objects
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

    createInitialExplosion(x, y, text) {
        this.animationHandler.addAnimation(new TextAnimaton(x, y, text));
        this.animationHandler.addAnimation(new WinAnimation(x, y, this.map.width, this.map.height));
    }

    checkDeadCondition() {
        if (this.character.health <= 0) {
            this.state = this.STATE_DEAD;
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "DEAD");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.hasTreasure('levelGoal')) {
            this.state = this.STATE_WINNING;
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "WIN");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    handleInput() {
        var key = this.getLastKeypress();
        if (null !== key) {
            var gameCommand = this.keyMap.getGameCommand(key.toString());

            if (gameCommand == 'QUIT') {
                // TODO: bring up a QUIT menu. process.exit() doesn't work in browser
                //process.exit();
            } else if (this.state == this.STATE_RUNNING) {   
                if (gameCommand == 'HELP') {
                     // push menu state on
                     this.prevState = this.state;
                     this.state = this.STATE_MENU;
                     this.menu = new Menu(HELP_MENU, this.renderer.viewport, 1);
                     this.menu.show(gameObjects);
                } else {
                    // update character movement
                    this.character.handleGameCommand(gameCommand, gameObjects);
                    this.renderer.centerViewportOn(this.character, this.map);
                }
            } else if (this.state == this.STATE_MENU) {
                let actionObj = this.menu.handleInput(gameCommand);
                if (actionObj.action == ACTION_BACK_TO_GAME) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(gameObjects);
                    this.menu = null;
                } else if (actionObj.action == ACTION_PUSH_MENU) {
                    // hide current menu and push it onto stack
                    this.menu.hide(gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new Menu(actionObj.newMenu, this.renderer.viewport, 1);
                    this.menu.show(gameObjects);
                } else if (actionObj.action == ACTION_POP_MENU) {
                    // hide current menu
                    this.menu.hide(gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(gameObjects);
                } else if (actionObj.action == ACTION_INCREASE_VIEWPORT_H || 
                           actionObj.action == ACTION_INCREASE_VIEWPORT_W) {
                    if (actionObj.action == ACTION_INCREASE_VIEWPORT_H) {
                        // currently this breaks if we do it by an odd number
                        this.renderer.viewport.height += 2;
                        if (this.renderer.viewport.height > globalOptions['maxViewportHeight']) {
                            this.renderer.viewport.height = globalOptions['minViewportHeight'];
                        }
                    } else {
                        this.renderer.viewport.width += 4;
                        if (this.renderer.viewport.width > globalOptions['maxViewportWidth']) {
                            this.renderer.viewport.width = globalOptions['minViewportWidth'];
                        }
                    }
                    
                    // redraw menu
                    this.menu.hide(gameObjects);
                    this.menu.show(gameObjects);

                    // center viewport
                    this.renderer.centerViewportOn(this.character, this.map);
                    this.renderer.setIsDirty();
                }
            }
        }
    }

    update(now, timeElapsed, gameObjects) {
        if (this.state == this.STATE_MENU) {
            // do nothing?
        } else {
            super.update(now, timeElapsed, gameObjects);

            if (this.state == this.STATE_RUNNING) {
                this.checkWinCondition();
                this.checkDeadCondition();
            } else if (this.state == this.STATE_WINNING ||
                    this.state == this.STATE_DEAD) {
                // win/die condition
                this.spawnExplosions(now, this.character);

                if (this.resetLevelTime >= 0 && now > this.resetLevelTime) {
                    this.resetLevel();
                }

                this.animationHandler.update(now, timeElapsed, gameObjects);
            }
        }
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
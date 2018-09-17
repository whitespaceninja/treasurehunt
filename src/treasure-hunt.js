
import {Game} from "./core/game.js";
import {KeyMap} from "./key_map.js";
import {AnimationHandler, WinAnimation, TextAnimaton} from "./animations.js";
import {PlayerCharacter} from "./characters/player_character.js";
import {EnemyCharacter} from "./characters/enemy_character.js";
import {GameObjects} from "./core/game_objects.js";
import {LEVEL_TOWN, ENEMY_SPIKEY_SPRITE_MAP} from "./treasure_hunt_art.js";
import {Map} from "./map.js";
import {randomNumber} from "./core/math_extensions.js";
import {TreasureCharacter} from "./characters/treasure_character.js";
import {Menu} from "./menus/menu.js";
import {ACTION_INCREASE_VIEWPORT_H, ACTION_RESET_LEVEL, ACTION_BACK_TO_GAME, ACTION_POP_MENU, ACTION_PUSH_MENU, ACTION_INCREASE_VIEWPORT_W} from "./menus/menu_actions.js";
import {HELP_MENU} from "./menus/menu_specs.js";
import {HtmlRenderer, ConsoleRenderer} from "./core/renderer.js";

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
                                                 obj.getBounds().intersectsPoint(x, y)).length > 0) {
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

    clearLevel() {
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();
    }
    
    resetLevel() {
        this.state = this.STATE_RUNNING;

        // start from scratch
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        // create our player
        this.character = this.createPlayer();
        this.gameObjects.addObject(this.character);

        // add a levelGoal to this level
        this.gameObjects.addObject(this.createGoal(this.gameObjects, this.map));

        // add some enemies
        for (var i = 0; i < this.options['numEnemies']; i++) {
            this.gameObjects.addObject(this.createEnemy(this.gameObjects, this.map));            
        }

        // add our map objects
        const that = this;
        this.map.getMapCharacters().map(x => that.gameObjects.addObject(x));

        /*this.door = new DoorwayCharacter(2, 2, function() {
            window.location.href = 'http://www.google.com';
            });

            gameObjects.addObject(this.door);*/
        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // show help menu. this may change on new levels eventually
        this.showHelpMenu();

        // first draw of render
        this.renderer.render(this.gameObjects);
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
            this.clearLevel();
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "DEAD");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.hasTreasure('levelGoal')) {
            this.state = this.STATE_WINNING;
            this.clearLevel();
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "WIN");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    showHelpMenu() {
        // push menu state on
        this.prevState = this.state;
        this.state = this.STATE_MENU;
        this.menu = new Menu(HELP_MENU, this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
        this.menu.show(this.gameObjects);
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
                    this.showHelpMenu();
                } else {
                    // update character movement
                    this.character.handleGameCommand(gameCommand, this.gameObjects);
                }
            } else if (this.state == this.STATE_MENU) {
                let actionObj = this.menu.handleInput(gameCommand);
                if (actionObj.action == ACTION_BACK_TO_GAME) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(this.gameObjects);
                    this.menu = null;
                } else if (actionObj.action == ACTION_RESET_LEVEL) {
                    // reset this level
                    this.resetLevel();
                } else if (actionObj.action == ACTION_PUSH_MENU) {
                    // hide current menu and push it onto stack
                    this.menu.hide(this.gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new Menu(actionObj.eventArgs.menu, this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == ACTION_POP_MENU) {
                    // hide current menu
                    this.menu.hide(this.gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == ACTION_INCREASE_VIEWPORT_H || 
                           actionObj.action == ACTION_INCREASE_VIEWPORT_W) {
                    if (actionObj.action == ACTION_INCREASE_VIEWPORT_H) {
                        // currently this breaks if we do it by an odd number
                        this.renderer.viewport.height += 2;
                        if (this.renderer.viewport.height > this.options['maxViewportHeight']) {
                            this.renderer.viewport.height = this.options['minViewportHeight'];
                        }
                    } else {
                        this.renderer.viewport.width += 4;
                        if (this.renderer.viewport.width > this.options['maxViewportWidth']) {
                            this.renderer.viewport.width = this.options['minViewportWidth'];
                        }
                    }

                    // center viewport
                    this.renderer.centerViewportOn(this.character, this.map);
                    this.renderer.setIsDirty();

                    // redraw menu
                    this.menu.hide(this.gameObjects);
                    this.menu.show(this.gameObjects);
                }
            }
        }
    }

    update(now, timeElapsed, gameObjects) {
        if (this.state == this.STATE_MENU) {
            // do nothing?
        } else {
            super.update(now, timeElapsed, gameObjects);
            this.renderer.centerViewportOn(this.character, this.map);

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
        
        this.options = options;

        var lastUpdate = Date.now();
        var updateFunc = function () {
            try {
                var now = Date.now();
                var timeElapsed = now - lastUpdate;
                lastUpdate = now;

                that.handleInput();
                that.update(now, timeElapsed, that.gameObjects);
            } catch (err){
                console.log(err.message);
            }
        }

        var drawFunc = function() {
            try {
                if (!that.renderer.getIsDirty()) {
                    return;
                }

                that.renderer.clearScreen();
                that.renderer.render(that.gameObjects);
            } catch (err){
                console.log(err.message);
            }
        }

        let renderer = null;
        if (options['playInBrowser']) {
            renderer = new HtmlRenderer(options['viewportWidth'], options['viewportHeight']);
        } else {
            renderer = new ConsoleRenderer(options['viewportWidth'], options['viewportHeight']);
        }

        super.initialize(updateFunc, drawFunc, renderer, this.options);

        // do this after initializing parent
        this.animationHandler = new AnimationHandler(this.renderer);
        this.resetLevel();
    }
}


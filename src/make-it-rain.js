
import {Game} from "./core/game.js";
import {AnimationHandler, RainAnimation} from "./animations.js";
import {GameObjects} from "./core/game_objects.js";
import {HtmlRenderer, ConsoleRenderer} from "./core/renderer.js";

export class MakeItRainGame extends Game {
    constructor() {
        // set up basic game objects
        super();
    }
    
    resetLevel() {
        // start from scratch
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        this.animationHandler.addAnimation(new RainAnimation(this.width, this.height));

        // first draw of render
        this.renderer.render(this.gameObjects);
    }

    handleInput() {
        var key = this.getLastKeypress();
        if (null !== key) {
            var gameCommand = this.keyMap.getGameCommand(key.toString());
            // TODO: make the rain go left or right?
        }
    }

    update(now, timeElapsed, gameObjects) {
        super.update(now, timeElapsed, gameObjects);
        this.animationHandler.update(now, timeElapsed, gameObjects);
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
            // random guess that its 10 pixels per character
            // override options for now
            options['viewportWidth'] = Math.floor(window.innerWidth / 4.2);
            options['viewportHeight'] = Math.floor(window.innerHeight / 45);
            renderer = new HtmlRenderer(options['viewportWidth'], options['viewportHeight']);
        } else {
            renderer = new ConsoleRenderer(options['viewportWidth'], options['viewportHeight']);
        }

        this.width = options['viewportWidth'];
        this.height = options['viewportHeight'];

        super.initialize(updateFunc, drawFunc, renderer, this.options);

        // do this after initializing parent
        this.animationHandler = new AnimationHandler(this.renderer);
        this.resetLevel();
    }
}


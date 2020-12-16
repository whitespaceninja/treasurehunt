import {Game} from "../core/game.js";
import {AnimationHandler} from "../core/animation_handler.js";
import {FireworksAnimation} from "./animations.js";
import {HtmlRenderer, ConsoleRenderer} from "../core/renderer.js";

export class MouserGame extends Game {
    constructor() {
        // set up basic game objects
        super();
    }
    
    resetLevel() {
        // start from scratch
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        // first draw of render
        this.renderer.render(this.gameObjects);
    }

    handleInput() {
        var x_y = this.getLastMouseMovement();
        if (x_y !== null) {
            const x = 5;//x_y.x;
            const y = 5;//x_y.y;
            this.animationHandler.addAnimation(new FireworksAnimation(x, y));
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


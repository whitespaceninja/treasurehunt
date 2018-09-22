import {StaticCharacter} from "./characters/static_character.js";
import {Sprite} from "./core/sprite.js";
import {randomNumber,randomNumberRange} from "./core/math_extensions.js";
import {Character} from "./core/character.js";
import {SPLASH_SPRITE_ART} from "./rain_art.js";

export class Animation {
    constructor() { }

    update(timeNow, timeElapsed, gameObjects) { }

    isExpired() { return true; }

    // called to clean up this animation after it expires
    cleanup() { }
}

export class TextAnimaton extends Animation {
    constructor(centerX, centerY, text) {
        super();
        this.frameSpeed = 600;
        this.frameElapsed = 0;
        this.isInGameObjects = false;

        this.characters = [];
        // add text to the center of the animation
        for (var i = 0; i < text.length; i++) {
            const x_offset = Math.floor(text.length / 2) - i;
            const thisChar = new StaticCharacter(centerX - x_offset, centerY, text.charAt(i)); 
            // show this above other animations (TODO: move to parameter)
            thisChar.z = 2;
            this.characters.push(thisChar);
        }

        // do this after setting character array
        this.setVisibility(false);
        
    }

    setVisibility(isVisible) {
        this.isVisible = isVisible;
        this.characters.map(x => x.isVisible = isVisible);
    }

    update(timeNow, timeElapsed, gameObjects) {
        if (!this.isInGameObjects) {
            gameObjects.addObjects(this.characters);
        }

        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            this.setVisibility(!this.isVisible);
        }
    }

    isExpired() {
        // this animation never goes away
        return false;
    }

    cleanup() {
        this.characters.map(x => x.removeFromGameObjects = true);
    }
}

export class WinAnimation extends Animation {
    constructor(centerX, centerY, maxX, maxY) {
        super();
        this.radius = -1;
        this.centerX = centerX;
        this.centerY = centerY;
        this.frameSpeed = 60;
        this.frameElapsed = 0;
        this.characters = [];
        
        this.maxX = maxX;
        this.maxY = maxY;
    }

    getNewExplosionRing(centerX, centerY, radius) {
        let ring = [];
        // create explosion particles in a blast radius away from the center
        for (var y = centerY - radius; y <= centerY + radius; y++) {
            var difference = Math.abs(centerY - y);
            var numXs = Math.min(2, radius - difference + 1); // add 1 because we always want at least 1 explosion on each line
            
            for (var i = 0; i < numXs; i++) {
                var multiplier = 1;
                if (i == 0) {
                    multiplier = -1;
                }
                
                var x = centerX + ((radius - difference) * multiplier);
                var character = new StaticCharacter(x, y, '*');
                ring.push(character);
            }
        }

        return ring;
    }

    update(timeNow, timeElapsed, gameObjects) {
        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            this.radius++;

            // remove old characters
            this.characters.map(x => x.removeFromGameObjects = true);

            // get new characters and add them
            this.characters = this.getNewExplosionRing(this.centerX, this.centerY, this.radius);
            gameObjects.addObjects(this.characters);
        }
    }

    isExpired() {
        return this.centerX - (this.radius * 2) < 0 &&
            this.centerX + (this.radius * 2) > this.maxX &&
            this.centerY - (this.radius * 2) < 0 &&
            this.centerY + (this.radius * 2) > this.maxY;
    }

    cleanup() {
        this.characters.map(x => x.removeFromGameObjects = true);
    }
}

export class RainDropSplash extends Character {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.sprite = new Sprite(spriteMap, this, "0");
        this.children.push(this.sprite);
    }
}

export class RainAnimation extends Animation {
    constructor(maxX, maxY) {
        super();
        this.raindrops = [];
        // higher, the number, slower it goes
        this.frameSpeed = 100;
        this.frameElapsed = 0;
        this.minRainDropsPerWave = 3;
        this.maxRainDropsPerWave = 6;
        this.depth = 1;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    createRaindrop() {
        const x = randomNumberRange(1, this.maxX - 1);
        const y = 0;

        const dropTypeSpin = randomNumber(100);
        let dropChar = "|";
        if (dropTypeSpin > 75) {
            dropChar = ".";
        }

        // choose a random depth for this raindrop
        const depth = randomNumber(this.depth);
        
        let raindrop = new StaticCharacter(x, y, dropChar);
        raindrop.depth = depth;
        return raindrop;
    }

    getNewRaindropWave() {
        let drops = [];
        const numDrops = randomNumberRange(this.minRainDropsPerWave, this.maxRainDropsPerWave);
        for (let i = 0; i < numDrops; i++) {
            drops.push(this.createRaindrop());
        }
        return drops;
    }

    tickRainDrop(raindrop) {
        raindrop.setY(raindrop.getY() + 1);
    }

    removeExpiredRaindrops(raindrops, maxY, gameObjects) {
        for (let i = raindrops.length - 1; i >= 0; i--) {
            let raindrop = raindrops[i];
            if (raindrop.getY() == maxY - raindrop.depth) {
                // remove from gameObjects as well as our list
                let deadRaindrop = raindrops.splice(i, 1)[0];
                gameObjects.removeObject(deadRaindrop);

                let x = deadRaindrop.getX();
                if (x % 2 == 1) {
                    x -= 1;
                }

                let splash = new RainDropSplash(deadRaindrop.getX(), deadRaindrop.getY() + 1, SPLASH_SPRITE_ART);
                gameObjects.addObject(splash);
            }
        }
    }

    update(timeNow, timeElapsed, gameObjects) {
        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            
            // move all raindrops downwards
            for (let i = this.raindrops.length - 1; i >= 0; i--) {
                this.tickRainDrop(this.raindrops[i]);
            }

            this.removeExpiredRaindrops(this.raindrops, this.maxY, gameObjects);

            // add a new raindrop wave
            let newDrops = this.getNewRaindropWave();
            const that = this;
            newDrops.map(x => that.raindrops.push(x));
            gameObjects.addObjects(newDrops);
        }
    }

    isExpired() {
        return false;
    }

    cleanup() {
        this.raindrops.map(x => x.removeFromGameObjects = true);
    }
}

export class AnimationHandler {
    constructor(renderer) {
        this.renderer = renderer;
        this.animations = [];
    }

    addAnimation(animation) {
        this.animations.push(animation);
    }

    update(timeNow, timeElapsed, gameObjects) {
        for (var i = this.animations.length - 1; i >= 0 ; i--) {
            var animation = this.animations[i];
            animation.update(timeNow, timeElapsed, gameObjects);

            if (animation.isExpired()) {
                // remove it from our list
                const expiredAnimation = this.animations.splice(i, 1)[0];
                expiredAnimation.cleanup();
            }
        }
    }

    clearAnimations() {
        this.animations.map(x => x.cleanup());
        this.animations = []
    }
}
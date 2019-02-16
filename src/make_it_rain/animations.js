import {Sprite} from "../core/sprite.js";
import {Animation} from "../core/animation.js";
import {randomNumber,randomNumberRange} from "../core/math_extensions.js";
import {Character} from "../core/character.js";
import {SPLASH_SPRITE_ART} from "./rain_art.js";

export class StaticCharacter extends Character {
    constructor(initialX, initialY, symbol) {
         super(initialX, initialY);
         this.symbol = symbol;
     }
 
     getCharacter(col, row) {
         if (this.getX() == col && this.getY() == row) {
             return this.symbol;
         }
         return null;
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

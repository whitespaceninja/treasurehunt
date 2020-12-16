import {Sprite} from "../core/sprite.js";
import {Animation} from "../core/animation.js";
import {randomNumber,randomNumberRange} from "../core/math_extensions.js";
import {Character} from "../core/character.js";

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


export class FireworkSpark extends Character {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.sprite = new Sprite(spriteMap, this, "*");
        this.children.push(this.sprite);
    }
}

export class FireworksAnimation extends Animation {
    constructor(x, y) {
        super();
        this.sparks = [];
        // higher, the number, slower it goes
        this.frameSpeed = 100;
        this.frameElapsed = 0;
        this.minSparksPerWave = 3;
        this.maxSparksPerWave = 6;
        this.depth = 1;
        this.x = x;
        this.y = y;
    }

    createSpark() {
        const x = this.x;
        const y = this.y;

        const sparkSpin = randomNumber(100);
        let sparkChar = "*";
        if (sparkSpin > 75) {
            sparkChar = ".";
        }

        // choose a random depth for this spark
        const depth = randomNumber(this.depth);
        
        let spark = new StaticCharacter(x, y, sparkChar);
        spark.depth = depth;
        return spark;
    }

    getNewSparksWave() {
        let sparks = [];
        const numDrops = randomNumberRange(this.minSparksPerWave, this.maxSparksPerWave);
        for (let i = 0; i < numDrops; i++) {
            sparks.push(this.createSpark());
        }
        return sparks;
    }

    tickSpark(spark) {
        spark.setY(spark.getY() + 1);
    }

    removeExpiredSparks(sparks, gameObjects) {
        for (let i = sparks.length - 1; i >= 0; i--) {
            let spark = sparks[i];
            if (spark.getY() - spark.initialY > 5) {
                // remove from gameObjects as well as our list
                let deadSpark = sparks.splice(i, 1)[0];
                gameObjects.removeObject(deadSpark);
            }
        }
    }

    update(timeNow, timeElapsed, gameObjects) {
        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            
            // move all sparks downwards
            for (let i = this.sparks.length - 1; i >= 0; i--) {
                this.tickSpark(this.sparks[i]);
            }

            this.removeExpiredSparks(this.sparks, gameObjects);

            // add a new raindrop wave
            let newSparks = this.getNewSparksWave();
            const that = this;
            newSparks.map(x => that.sparks.push(x));
            gameObjects.addObjects(newSparks);
        }
    }

    isExpired() {
        return false;
    }

    cleanup() {
        this.sparks.map(x => x.removeFromGameObjects = true);
    }
}

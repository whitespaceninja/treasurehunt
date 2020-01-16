import {StaticCharacter} from "../characters/static_character.js";
import {Animation} from "./animation.js";

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

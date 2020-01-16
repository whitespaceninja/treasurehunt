import {StaticCharacter} from "../characters/static_character.js";
import {Animation} from "./animation.js";

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

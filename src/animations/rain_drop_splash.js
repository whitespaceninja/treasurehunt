import {Sprite} from "../core/sprite.js";
import {Character} from "../core/character.js";

export class RainDropSplash extends Character {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.sprite = new Sprite(spriteMap, this, "0");
        this.children.push(this.sprite);
    }
}

import {Character} from "./character.js";
import {PlayerCharacter} from "./player_character.js";

export class DoorwayCharacter extends Character {
    constructor(initialX, initialY, onCollide) {
        super(initialX, initialY);
        this.onCollide = onCollide;
        this.collider = new Collider(this);
    }

    collide(withObject) {
        if (withObject instanceof PlayerCharacter) {
            this.onCollide();
            this.removeFromGameObjects = true;
        }
    }

    getCharacter(row, col) {
        if (this.getX() == col && this.getY() == row) {
            return '%';
        }
        return null;
    }
}
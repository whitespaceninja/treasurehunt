import {Character} from "../../core/character.js";
import {PlayerCharacter} from "./player_character.js";

export class DoorwayCharacter extends Character {
    constructor(initialX, initialY, onCollide) {
        super(initialX, initialY);
        this.onCollide = onCollide;
        this.collider = new Collider(this);

        this.children.push(this.collider);
    }

    collide(withObject) {
        if (withObject instanceof PlayerCharacter) {
            this.onCollide();
            this.removeFromGameObjects = true;
        }
    }

    getCharacter(col, row) {
        if (this.getX() == col && this.getY() == row) {
            return '%';
        }
        return null;
    }
}
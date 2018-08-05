import {Character} from "./character.js";
import {ProjectileCharacter} from "./projectile_character.js";
import {Collider} from "./collider.js";
import {Sprite} from "./sprite.js";
import {Movable} from "./movable.js";
import {randomNumber} from "./math_extensions.js";
import {FACING_DOWN, FACING_LEFT, FACING_RIGHT, FACING_UP} from "./facing.js";

export class EnemyCharacter extends Character {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.sprite = new Sprite(spriteMap, this);
        this.movable = new Movable(this);
        this.collider = new Collider(this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
        this.children.push(this.collider);
    }

    think() {
        var random = randomNumber(4);
        var direction = 'NONE';
        switch (random) {
            case 1: direction = FACING_LEFT; break;
            case 2: direction = FACING_RIGHT; break;
            case 3: direction = FACING_DOWN; break;
            case 4: direction = FACING_UP; break;
        }
        
        this.movable.move(direction);
    }

    update(timeNow, timeElapsed) {
        super.update(timeNow, timeElapsed);

        this.thinkCounter = this.thinkCounter + timeElapsed;

        if (this.thinkCounter > this.thinkSpeed) {
            this.thinkCounter = this.thinkCounter % this.thinkSpeed;
            this.think();
        }
    }

    collide(withObject) {
        if (withObject instanceof ProjectileCharacter) {
            this.removeFromGameObjects = true;
        }
    }
}
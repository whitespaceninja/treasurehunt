import {Character} from "./core/character.js";
import {ProjectileCharacter} from "./projectile_character.js";
import {PixelCollider} from "./core/collider.js";
import {Sprite} from "./core/sprite.js";
import {Movable} from "./core/movable.js";
import {randomNumber} from "./core/math_extensions.js";
import {FACING_DOWN, FACING_LEFT, FACING_RIGHT, FACING_UP} from "./core/facing.js";
import {PlayerCharacter} from "./player_character.js";

export class EnemyCharacter extends Character {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.damage = 100; // TODO: make this part of a spec
        this.sprite = new Sprite(spriteMap, this, 0);
        this.movable = new Movable(this);
        this.collider = new PixelCollider(this, this.sprite);

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

        if (withObject instanceof PlayerCharacter) {
            withObject.receiveDamage(this.damage);
        }
    }
}
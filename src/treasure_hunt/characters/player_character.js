import {ProjectileCharacter} from "./projectile_character.js";
import {Sprite} from "../../core/sprite.js";
import {Movable} from "../../core/movable.js";
import {Collider} from "../../core/collider.js";
import {FACING_DOWN} from "../../core/facing.js";
import {Character} from "../../core/character.js";
import {TreasureCharacter} from "./treasure_character.js";
import {PLAYER_SPRITE_MAP, PROJECTILE_SPRITE_MAP} from "../treasure_hunt_art.js";

export class PlayerCharacter extends Character {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;
        this.inventory = [];

        this.sprite = new Sprite(PLAYER_SPRITE_MAP, this, FACING_DOWN);
        this.children.push(this.sprite);

        this.movable = new Movable(this);
        this.children.push(this.movable);

        this.collider = new Collider(this);
        this.children.push(this.collider);
    }

    onAnimated() {
        super.onAnimated();
        this.sprite.setState(this.movable.facing);
    }

    reset() {
        this.bounds.x = this.initialX;
        this.bounds.y = this.initialY;
        this.health = 100;
        this.inventory = [];
    }

    handleGameCommand(command, gameObjects) {
        if (command == 'FIRE') {
            this.fireProjectile(gameObjects);
        } else {
            this.movable.move(command);
        }
    }

    collide(withObject) {
        if (withObject instanceof TreasureCharacter) {
            this.inventory.push(withObject.treasureType);
            withObject.removeFromGameObjects = true;
        }        
    }

    receiveDamage(damageAmount) {
        this.health -= damageAmount;
    }

    fireProjectile(gameObjects) {
        var projectile = new ProjectileCharacter(this.getX(), this.getY(), this.movable.facing, 8, PROJECTILE_SPRITE_MAP);
        gameObjects.addObject(projectile);
    }

    hasTreasure(treasureType) {
        return this.inventory.filter(t => t == treasureType).length > 0;
    }
}
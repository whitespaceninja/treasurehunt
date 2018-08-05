import {ProjectileCharacter} from "./projectile_character.js";
import {EnemyCharacter} from "./enemy_character.js";
import {Sprite} from "./sprite.js";
import {Movable} from "./movable.js";
import {Collider} from "./collider.js";
import {FACING_DOWN} from "./facing.js";
import {Character} from "./character.js";
import {TreasureCharacter} from "./treasure_character.js";
import {PLAYER_SPRITE_MAP, PROJECTILE_SPRITE_MAP} from "./treasure_hunt_art.js";

export class PlayerCharacter extends Character {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;
        this.inventory = [];

        this.sprite = new Sprite(PLAYER_SPRITE_MAP, this);
        this.sprite.setState(FACING_DOWN);
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
        if (withObject instanceof EnemyCharacter) {
            this.health = 0;
        }

        if (withObject instanceof TreasureCharacter) {
            this.inventory.push(withObject.treasureType);
            withObject.removeFromGameObjects = true;
        }        
    }

    fireProjectile(gameObjects) {
        var projectile = new ProjectileCharacter(this.getX(), this.getY(), this.movable.facing, 8, PROJECTILE_SPRITE_MAP);
        gameObjects.addObject(projectile);
    }

    hasTreasure(treasureType) {
        return this.inventory.filter(t => t == treasureType).length > 0;
    }
}
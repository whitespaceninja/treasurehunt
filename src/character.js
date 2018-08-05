import {Rectangle} from "./rectangle.js";

// Base class for every type of renderable game object
export class Character {
    constructor(initialX, initialY) {
        this.initialX = initialX;
        this.initialY = initialY;
        this.bounds = new Rectangle(initialX, initialY, 1, 1);
        this.isVisible = true;
        this.isPhysical = false;
        this.needsRedraw = true;
        this.obeysPhysics = false;
        this.removeFromGameObjects = false;
        this.animationListeners = [];
        this.children = [];
        this.intendedPosition = null;
    }

    getX() {
        return this.bounds.x;
    }

    getY() {
        return this.bounds.y;
    }

    getBounds() {
        return this.bounds;
    }

    getCharacter(row, col) {
        return null;
    }

    onAnimated() {
        this.needsRedraw = true;
    }

    update(timeNow, timeElapsed) {
    }

    collide(withObject) {
    }
}
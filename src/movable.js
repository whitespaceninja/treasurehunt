import {FACING_UP, FACING_DOWN, FACING_LEFT, FACING_RIGHT} from "./facing.js";
import {Rectangle} from "./rectangle.js";

export class Movable {
    constructor(parentObject) {
        this.parentObject = parentObject;
        this.facing = FACING_DOWN;
    }

    update(timeNow, timeElapsed) {
        // do nothing?
    }

    setFacing(newFacing) {
        if (newFacing != this.facing) {
            this.facing = newFacing;
            return true;
        }
        return false;
    }

    move(direction) {
        var intendedX = this.parentObject.getX();
        var intendedY = this.parentObject.getY();

        switch(direction) {
        case FACING_LEFT: 
            intendedX--; 
            this.setFacing(FACING_LEFT);
            break;

        case FACING_RIGHT:
            intendedX++; 
            this.setFacing(FACING_RIGHT);
            break;

        case FACING_UP:
            intendedY--; 
            this.setFacing(FACING_UP);
            break;

        case FACING_DOWN:
            intendedY++; 
            this.setFacing(FACING_DOWN);
            break;

        default:
            // must be some sort of bogus movement. don't handle.
            return
        }

        this.parentObject.intendedPosition = {x: intendedX, y: intendedY};
        this.parentObject.onAnimated();        
    }
}
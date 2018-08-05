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
        var dirty = false;

        switch(direction) {
        case FACING_LEFT: 
            intendedX--; 
            dirty = this.setFacing(FACING_LEFT);
            break;

        case FACING_RIGHT:
            intendedX++; 
            dirty = this.setFacing(FACING_RIGHT);
            break;

        case FACING_UP:
            intendedY--; 
            dirty = this.setFacing(FACING_UP);
            break;

        case FACING_DOWN:
            intendedY++; 
            dirty = this.setFacing(FACING_DOWN);
            break;

        default:
            // must be some sort of bogus movement. don't handle.
            return
        }

        var that = this;

        var isObstructed = false;

        // if (this.parentObject.obeysPhysics) {
        //     var newRect = new Rectangle(intendedX, intendedY, this.parentObject.getBounds().width, this.parentObject.getBounds().height);
        //     isObstructed = gameObjects.objects.filter(c => 
        //                                               c !== that.parentObject && 
        //                                               c.isPhysical && 
        //                                               c.getBounds().intersects(newRect)).length > 0;
        // }

        if (!isObstructed) {
            this.parentObject.intendedPosition = {x: intendedX, y: intendedY};
            //this.parentObject.getBounds().x = intendedX;
            //this.parentObject.getBounds().y = intendedY;
            // always trigger dirty when moving
            dirty = true;
        }

        if (dirty) {
            this.parentObject.onAnimated();
        }
    }
}
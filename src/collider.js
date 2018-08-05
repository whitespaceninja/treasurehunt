import {Updateable} from "./updateable.js";

export class Collider extends Updateable {
    constructor(parentObject) {
        super();
        
        this.parentObject = parentObject;
    }

    checkCollision(gameObjects) {
        var parent = this.parentObject;
        // compare our parent object bounds to every other object's bounds as long
        // as they are physical or have their own collider object
        var collisionObjects = gameObjects.objects.filter(obj => obj !== parent &&
                                                          (obj.isPhysical || obj.hasOwnProperty('collider')) && 
                                                          obj.getBounds().intersects(parent.getBounds()));
        if (collisionObjects.length > 0) {
            // collide with each other
            collisionObjects.map(obj => obj.collide(parent) || parent.collide(obj));
        }
    }
}
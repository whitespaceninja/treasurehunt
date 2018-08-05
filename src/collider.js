export class Collider {
    constructor(parentObject) {
        this.parentObject = parentObject;
    }

    checkCollision(gameObjects) {
        var parent = this.parentObject;
        var collisionObjects = gameObjects.objects.filter(obj => obj !== parent &&
                                                          obj.collide && 
                                                          obj.getBounds().intersects(parent.getBounds()));
        if (collisionObjects.length > 0) {
            collisionObjects.map(obj => obj.collide(parent));
        }
    }
}
export class AnimationHandler {
    constructor(renderer) {
        this.renderer = renderer;
        this.animations = [];
    }

    addAnimation(animation) {
        this.animations.push(animation);
    }

    update(timeNow, timeElapsed, gameObjects) {
        for (var i = this.animations.length - 1; i >= 0 ; i--) {
            var animation = this.animations[i];
            animation.update(timeNow, timeElapsed, gameObjects);

            if (animation.isExpired()) {
                // remove it from our list
                const expiredAnimation = this.animations.splice(i, 1)[0];
                expiredAnimation.cleanup();
            }
        }
    }

    clearAnimations() {
        this.animations.map(x => x.cleanup());
        this.animations = []
    }
}

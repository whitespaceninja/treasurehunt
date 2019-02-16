export class Animation {
    constructor() { }

    update(timeNow, timeElapsed, gameObjects) { }

    isExpired() { return true; }

    // called to clean up this animation after it expires
    cleanup() { }
}
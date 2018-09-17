export class Thread {
    constructor(functionPointer) {
        this.functionPointer = functionPointer;
        this.isRunning = false;
    }

    start(desiredFramerate) {
        var that = this;
        that.isRunning = true;
        var minimumMillsecPerFrame = 1000/ desiredFramerate;

        var internalRun = function() {
            if (that.isRunning) {
                var now = Date.now();
                that.functionPointer();
                var after = Date.now();

                // if the function call takes a while, reduce the delay until the next execute
                var nextDelay = Math.max(0, minimumMillsecPerFrame - (after - now));
            
                setTimeout(internalRun, nextDelay);
            }
        };

        // initial call
        setTimeout(internalRun, 0); 
    }

    stop() {
        this.isRunning = false;
    }
}
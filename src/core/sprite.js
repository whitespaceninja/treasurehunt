import {Updateable} from "./updateable.js";

export class Sprite extends Updateable {
    // format of a spriteMap:
    // {
    //     "<state>": [{ "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] },
    //                 { "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] } ]
    // }
    constructor(spriteMap, parentObject, initialState) {
        super();
        
        this.spriteMap = spriteMap;
        this.parentObject = parentObject;
        this.state = initialState;
        this.expired = false;
        this.stateElapsed = 0;
        this.frame = 0;
        this.isVisible = true;
        this.calculateSize();
    }

    getBounds() {
        return this.parentObject.bounds;
    }

    update(timeNow, timeElapsed) {
        this.stateElapsed = this.stateElapsed + timeElapsed;
        
        var prevFrame = this.frame;
        this.frame = this.calculateCurrentFrame();
        if (this.frame != prevFrame) {
            if (this.frame == -1) {
                this.expired = true;
                this.parentObject.removeFromGameObjects = true;
            }
            this.parentObject.onAnimated();
            this.calculateSize();
        }
    }

    calculateSize() {
        let newW = 0;
        let newH = 0;

        if (!this.expired) {            
            var sprites = this.spriteMap.states[this.state];
            var frame = this.frame;
            var characterRows = sprites[frame]["characters"];

            var firstRow = 999999;
            var lastRow = 0;
            var firstCol = 999999;
            var lastCol = 0;

            for (var row = 0; row < characterRows.length; row++) {
                for (var col = 0; col < characterRows[row].length; col++) {
                    var symbol = characterRows[row].charAt(col);
                    if (symbol && symbol != ' ') {
                        firstRow = Math.min(firstRow, row);
                        lastRow = Math.max(lastRow, row);
                        firstCol = Math.min(firstCol, col);
                        lastCol = Math.max(lastCol, col);
                    }
                }
            }

            // TODO: this feels dirty
            newW = lastCol - firstCol + 1;
            newH = lastRow - firstRow + 1;
        }

        this.parentObject.getBounds().width = newW;
        this.parentObject.getBounds().height = newH;
        if (this.spriteMap.anchor == "bcenter") {
            this.parentObject.getBounds().x = this.parentObject.getX() - Math.floor(newW / 2);
            this.parentObject.getBounds().y = this.parentObject.getY() - Math.floor(newH);
        }
        else if (this.spriteMap.anchor == "center") {
            this.parentObject.getBounds().x = this.parentObject.getX() - Math.floor(newW / 2);
            this.parentObject.getBounds().y = this.parentObject.getY() - Math.floor(newH / 2);
        }
    }

    setState(newState) {
        this.state = newState;
        this.calculateSize();
    }

    getX() {
        let x = this.parentObject.getX();
        if (this.spriteMap.anchor == "center" || this.spriteMap.anchor == "bcenter") {
            x -= Math.floor(this.parentObject.getBounds().width / 2);
        }
        return x;
    }

    getY() {
        let y = this.parentObject.getY(); 
        if (this.spriteMap.anchor == "bcenter") {
            y -= Math.floor(this.parentObject.getBounds().height);
        }
        else if (this.spriteMap.anchor == "center") {
            y -= Math.floor(this.parentObject.getBounds().height / 2);
        }
        return y;
    }

    calculateCurrentFrame() {
        var sprites = this.spriteMap.states[this.state];
        var totalTime = sprites.reduce(function(acc, curVal) { return acc + curVal["displayTime"]; }, 0);
        
        if (this.stateElapsed > totalTime && this.spriteMap.loop == "none") {
            return -1;
        } 

        var leftover = this.stateElapsed % totalTime;
        var frame = 0;
        var timeAccumulator = 0;
        for (var i = 0; i < sprites.length; i++) {
            frame = i;
            // TODO: replace this with a reduce()
            var displayTime = sprites[i]["displayTime"];
            if (timeAccumulator + displayTime > leftover) {
                break;
            }
            timeAccumulator = timeAccumulator + displayTime;
        }

        return frame;
    }

    getAnchoredX() {
        if (this.expired) {
            return this.parentObject.getX()
        }
        
        let characterRows = this.spriteMap.states[this.state][this.frame]["characters"];
        
        // Remove any notion of the map location and localize to this sprite only
        var ourCol = this.parentObject.getX();
        if (this.spriteMap.anchor == "center" || this.spriteMap.anchor == "bcenter") {
            // assumes the first row is the same width as the other frames
            ourCol = ourCol - Math.floor(characterRows[0].length / 2);
        }

        return ourCol;
    }

    getAnchoredY() {
        if (this.expired) {
            return this.parentObject.getY()
        }
        let characterRows = this.spriteMap.states[this.state][this.frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourRow = this.parentObject.getY();
        if (this.spriteMap.anchor == "bcenter") {
            ourRow = ourRow - Math.floor(characterRows.length);
        }
        else if (this.spriteMap.anchor == "center") {
            ourRow = ourRow - Math.floor(characterRows.length / 2);
        }

        return ourRow;
    }

    getCharacter(col, row) {
        if (this.frame < 0) {
            return null;
        }
        var sprites = this.spriteMap.states[this.state];
        var frame = this.frame;
        var characterRows = sprites[frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourRow = row - this.getAnchoredY();
        var ourCol = col - this.getAnchoredX();

        if (ourRow >= 0 && 
            ourCol >= 0 && 
            ourRow < characterRows.length &&
            ourCol < characterRows[ourRow].length) {
                var symbol = characterRows[ourRow].charAt(ourCol);
                if (symbol != ' ') {
                    return symbol;
                }
        }

        return null;
    }
}
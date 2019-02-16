import {Rectangle} from "./rectangle.js";

export class Renderer {
    constructor(viewW, viewH) {
        this.viewport = new Rectangle(0, 0, viewW, viewH);
        this.isDirty = true;
    }

    clearScreen() {
        // clear the screen and set cursor at 0,0
        console.clear();
    }

    isOnScreen(character) {
        return character.isVisible && character.getBounds().intersects(this.viewport);
    }

    render(gameObjects) {
        // override this to do something useful
    }

    getSpaceCharacter() {
        // this is different depending on the environment
        return ' ';
    }

    getLineStartCharacter() {
        // by default, this is nothing
        return '';
    }

    getLineEndCharacter() {
        // by default, this is nothing
        return '';
    }

    getIsDirty() {
        return this.isDirty;   
    }

    setIsDirty() {
        this.isDirty = true;
    }

    checkRedraw(gameObjects) {
        if (this.getRenderableObjectsOnScreen(gameObjects).filter(c => c.needsRedraw).length > 0) {
            this.setIsDirty();
        }
    }

    getRenderableObjectsOnScreen(gameObjects) {
        var that = this;
        var renderable = gameObjects.objects.filter(c => c.isVisible && 
                                                    that.isOnScreen(c));
        return renderable;
    }

    centerViewportOn(character, map) {
        this.viewport.x = Math.min(map.width - this.viewport.width, Math.max(0, character.getX() - (this.viewport.width / 2)));
        this.viewport.y = Math.min(map.height - this.viewport.height, Math.max(0, character.getY() - (this.viewport.height / 2)));
    }

    render(gameObjects) {
        var output = this.getLineStartCharacter();
        var renderableObjects = this.getRenderableObjectsOnScreen(gameObjects);
        // reverse sort by z axis, grab highest
        renderableObjects.sort((a, b) => b.z - a.z);
        
        for (var row = this.viewport.y; row < this.viewport.y + this.viewport.height; row++) {
            for (var col = this.viewport.x; col < this.viewport.x + this.viewport.width; col++) {
                var characters = renderableObjects.filter(c => c.getCharacter).map(c => c.getCharacter(col, row)).filter(c => c != null);
                if (characters.length > 0) {
                    output += characters[0];
                } else {
                    output += this.getSpaceCharacter();
                }
            }
            output += this.getLineEndCharacter() + this.getLineStartCharacter();
        }
        output += this.getLineEndCharacter();

        this.internalDraw(output);

        // clear the redraw flag on all objects we were able to render
        renderableObjects.map(c => c.needsRedraw = false);
    }

    internalDraw(fullString) {
        // do nothing, override for each renderer
    }
}

export class ConsoleRenderer extends Renderer {
    constructor(viewW, viewH) {
        super(viewW, viewH);
    }

    internalDraw(fullString) {
        console.log(fullString);
    }

    getLineEndCharacter() {
        // by default, this is nothing
        return '\n';
    }
}

export class HtmlRenderer extends Renderer {
    constructor(viewW, viewH) {
        super(viewW, viewH);
    }

    getSpaceCharacter() {
        // html strips out regular spaces
        return '&nbsp;';
    }

    getLineStartCharacter() {
        return '<p>';
    }

    getLineEndCharacter() {
        return '</p>';
    }

    internalDraw(fullString) {
        document.getElementById('game').innerHTML = fullString;
    }
}
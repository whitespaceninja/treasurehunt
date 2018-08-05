import {StaticCharacter} from "./static_character";

export class Menu {
    constructor(viewport, text) {
        this.text = text;
        this.viewport = viewport;
        this.characters = [];
    }

    createMenuChar(gameObjects, x, y, char) {
        // add everything in
        let character = new StaticCharacter(x, y, char);
        // make sure we draw on top
        character.z = 1;
        gameObjects.addObject(character);

        // keep these around in memory so we can remove them later
        this.characters.push(character);
    }

    show(gameObjects) {
        const viewX = this.viewport.x;
        const viewY = this.viewport.y;
        const width = this.viewport.width;
        const height = this.viewport.height;
        const textLen = this.text.length;
        const wrapW = Math.ceil(width * 0.8);

        // figure out x positions
        let start_x = viewX + Math.round((width - wrapW) / 2);

        // figure out y positions
        let start_y = viewY + Math.round(height * 0.8);

        const numLines = Math.ceil(textLen / wrapW);

        // draw menu box container
        this.createMenuChar(gameObjects, start_x - 1, start_y - 1, '*');
        this.createMenuChar(gameObjects, start_x - 1, start_y + numLines, '*');
        this.createMenuChar(gameObjects, start_x + wrapW, start_y - 1, '*');
        this.createMenuChar(gameObjects, start_x + wrapW, start_y + numLines, '*');
        for (var col = 0; col < wrapW; col++) {
            this.createMenuChar(gameObjects, start_x + col, start_y - 1, '-');
            this.createMenuChar(gameObjects, start_x + col, start_y + numLines, '-');
        }
        for (var row = 0; row < numLines; row++) {
            this.createMenuChar(gameObjects, start_x - 1, start_y + row, '|');
            this.createMenuChar(gameObjects, start_x + wrapW, start_y + row, '|');
        }

        for (var row = 0; row < numLines; row++) {
            for (var col = 0; col < wrapW; col++) {
                const x = start_x + col;
                const y = start_y + row;
                const textPos = col + (row * wrapW);
                let char = ' ';
                if (textPos < textLen) {
                    char = this.text[textPos];
                }

                this.createMenuChar(gameObjects, x, y, char);
            }
        }
    }

    hide(gameObjects) {
        this.characters.map(c => gameObjects.removeObject(c));
        this.characters = [];
    }
}
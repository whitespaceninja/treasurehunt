import {StaticCharacter} from "./static_character.js";
import {Collider} from "../../core/collider.js";

export class TreasureCharacter extends StaticCharacter {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY, symbol);
         
         this.treasureType = treasureType;

        this.collider = new Collider(this);
        this.children.push(this.collider);
     }
 }
 
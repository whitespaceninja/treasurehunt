import {Character} from "./core/character.js";
import {Collider} from "./core/collider.js";

export class TreasureCharacter extends Character {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY);
         this.symbol = symbol;
         this.treasureType = treasureType;

        this.collider = new Collider(this);
        this.children.push(this.collider);
     }
 
     getCharacter(col, row) {
         if (this.getX() == col && this.getY() == row) {
             return this.symbol;
         }
         return null;
     }
 }
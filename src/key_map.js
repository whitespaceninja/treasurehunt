import {FACING_DOWN, FACING_LEFT, FACING_RIGHT, FACING_UP} from "./core/facing.js";

export class KeyMap {
    constructor() {
    }

    getGameCommand(key) {
        switch(key) {
        case 'a': 
        case "65":
        case "37":
            return FACING_LEFT;

        case 'e': 
        case 'd': 
        case "68":
        case "39":
            return FACING_RIGHT;

        case ',': 
        case 'w': 
        case "87":
        case "38":
            return FACING_UP;

        case 'o':
        case 's':
        case "83":
        case "40":
            return FACING_DOWN;

        case 'c':
        case '67':
            return 'QUIT';
            
        case 'f':
        case '70':
        case '32':
            return 'FIRE';

        case 'h':
        case '72':
            return 'HELP';
        
        case '13':
            return 'ENTER';
        }
    }
}
import {FACING_DOWN, FACING_LEFT, FACING_RIGHT, FACING_UP} from "../core/facing.js";

const ENEMY_SPIKEY_FRAME_1 = [
"<..>"
];

const ENEMY_SPIKEY_FRAME_2 = [
"<-oo->"
];

const ENEMY_SPIKEY_FRAME_3 = [
"  \\  /  ",
"<--00-->",
"  /  \\",
];

export const ENEMY_SPIKEY_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
    "states": {
        "0": [
            { "displayTime": 910, "characters": ENEMY_SPIKEY_FRAME_1 },
            { "displayTime": 90, "characters": ENEMY_SPIKEY_FRAME_2 },
            { "displayTime": 430, "characters": ENEMY_SPIKEY_FRAME_3 },
            { "displayTime": 90, "characters": ENEMY_SPIKEY_FRAME_2 } 
        ]
    }
};

const ENEMY_TEST_FRAME_1 = [
    "1   ",
    " 2  ",
    "  3 ",
    "   4",
];

export const ENEMY_TEST_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
    "states": {
        "0": [{ "displayTime": 999999, "characters": ENEMY_TEST_FRAME_1 }]
    }
};

export const PROJECTILE_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
    "states": {
        [FACING_LEFT]: [{ "displayTime": 999999, "characters": ['\u25C2'] }],
        [FACING_UP]: [{ "displayTime": 999999, "characters": ['\u25B4'] }],
        [FACING_RIGHT]: [{ "displayTime": 999999, "characters": ['\u25B8'] }],
        [FACING_DOWN]: [{ "displayTime": 999999, "characters": ['\u25BE'] }]
    }
};

export const PLAYER_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
    "states": {
        [FACING_LEFT]: [{ "displayTime": 999999, "characters": ['\u25C1'] }],
        [FACING_UP]: [{ "displayTime": 999999, "characters": ['\u25B3'] }],
        [FACING_RIGHT]: [{ "displayTime": 999999, "characters": ['\u25B7'] }],
        [FACING_DOWN]: [{ "displayTime": 999999, "characters": ['\u25BD'] }]
    }
};

export const MAP_HOUSE = [
"     _________      ",
"   _/         \\_   ",
" _/             \\_ ",
"/_________________\\",
" |               |  ",
" |     =====     |  ",
" | |+|  | |  |+| |  ",
" |______| |______|  ",
];

export const MAP_BUSH = [
" ### ",
"#####",
" ### ",
];

export const MAP_TREE = [
"   (**)       ",
" (******)  ",
"(********) ",
"  (****)  ",
"    ||    ",
"    ||    ",
"   /__\\  ",
];

export const LEVEL_TOWN = {
"width": 122,
"height": 60,
"map_objects": [
    { "image": MAP_HOUSE, "x": 10, "y": 10 },
    { "image": MAP_TREE, "x": 37, "y": 13 },
    { "image": MAP_TREE, "x": 28, "y": 12 },
    { "image": MAP_TREE, "x": 32, "y": 10 },
    { "image": MAP_TREE, "x": 38, "y": 9 },

    { "image": MAP_TREE, "x": 90, "y": 18 },
    { "image": MAP_HOUSE, "x": 100, "y": 16 },

    { "image": MAP_TREE, "x": 50, "y": 22 },
    { "image": MAP_HOUSE, "x": 60, "y": 20 },
    { "image": MAP_TREE, "x": 78, "y": 23 },

    { "image": MAP_TREE, "x": 70, "y": 42 },
    { "image": MAP_HOUSE, "x": 80, "y": 40 },

    { "image": MAP_HOUSE, "x": 20, "y": 80 },
    
    { "image": MAP_TREE, "x": 16, "y": 40 },
    { "image": MAP_TREE, "x": 28, "y": 40 },
    { "image": MAP_TREE, "x": 11, "y": 38 },
    { "image": MAP_TREE, "x": 14, "y": 36 },
    { "image": MAP_TREE, "x": 10, "y": 36 },
    { "image": MAP_TREE, "x": 28, "y": 36 },
    { "image": MAP_TREE, "x": 16, "y": 32 },
    { "image": MAP_TREE, "x": 30, "y": 32 },
    
]
};
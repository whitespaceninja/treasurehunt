const SPLASH_FRAME_1 = [
    "_"//"\\     /",
    //"   _   "
];

const SPLASH_FRAME_2 = [
    "._."//",       ,",
    //"         ",
    //"    .   "
];

const SPLASH_FRAME_3 = [
    ". ."//"           ",
    //".         .",
    //"           "
];

export const SPLASH_SPRITE_ART = {
    "anchor": "bcenter",
    "loop": "none",
    "states": {
        "0": [
            { "displayTime": 90, "characters": SPLASH_FRAME_1 },
            { "displayTime": 70, "characters": SPLASH_FRAME_2 },
            { "displayTime": 60, "characters": SPLASH_FRAME_3 }
        ]
    }
};
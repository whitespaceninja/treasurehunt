import {ACTION_BACK_TO_GAME, ACTION_POP_MENU, ACTION_PUSH_MENU} from "./menu_actions.js";

export const SETTINGS_MENU = {
    type: "OPTIONS",
    summaryText: "Menu to configure your game experience. Nothing here yet :(",
    options: [
        {
            optionText: "Back",
            actionMap: [{key: 'ENTER', action: ACTION_POP_MENU}]
        }
    ]
}

export const HELP_MENU = {
    type: 'OPTIONS',
    summaryText: "Use Firefox to play if you aren't already!! Press 'h' to toggle the help menu while in-game.",
    options: [
        {
            optionText: "Options",
            actionMap: [{key: 'ENTER', action: ACTION_PUSH_MENU, menu: SETTINGS_MENU}]
        },
        {
            optionText: "Resume",
            actionMap: [{key: 'ENTER', action: ACTION_BACK_TO_GAME}]
        }
    ]
}


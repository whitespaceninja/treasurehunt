import {ACTION_INCREASE_VIEWPORT_H, ACTION_INCREASE_VIEWPORT_W, ACTION_BACK_TO_GAME, ACTION_POP_MENU, ACTION_PUSH_MENU} from "./menu_actions.js";

export const SETTINGS_MENU = {
    type: "OPTIONS",
    summaryText: "Configure your game experience.",
    options: [
        {
            optionText: "Increase Viewport Height",
            actionMap: [{key: 'ENTER', action: ACTION_INCREASE_VIEWPORT_H}]
        },
        {
            optionText: "Increase Viewport Width",
            actionMap: [{key: 'ENTER', action: ACTION_INCREASE_VIEWPORT_W}]
        },
        {
            optionText: "Back",
            actionMap: [{key: 'ENTER', action: ACTION_POP_MENU}]
        }
    ]
}

export const HELP_MENU = {
    type: 'OPTIONS',
    summaryText: "Welcome to AsciiWeb! Firefox is the best browser for this game. Press 'h' to pause the game and Spacebar to FIRE.",
    options: [
        {
            optionText: "Resume",
            actionMap: [{key: 'ENTER', action: ACTION_BACK_TO_GAME}]
        },
        {
            optionText: "Options",
            actionMap: [{key: 'ENTER', action: ACTION_PUSH_MENU, menu: SETTINGS_MENU}]
        }
    ]
}


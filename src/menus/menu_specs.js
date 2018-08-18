import {
    ACTION_INCREASE_VIEWPORT_H, ACTION_INCREASE_VIEWPORT_W, 
    ACTION_BACK_TO_GAME, ACTION_POP_MENU, 
    ACTION_PUSH_MENU, ACTION_RESET_LEVEL }
    from "./menu_actions.js";

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

export const CONTROLS_MENU = {
    type: "OPTIONS",
    summaryText: "CONTROLS\nMovement: Arrow keys\nFIRE: Spacebar\nPause: 'h'",
    options: [
        {
            optionText: "Back",
            actionMap: [{key: 'ENTER', action: ACTION_POP_MENU}]
        }
    ]
}

export const HELP_MENU = {
    type: 'OPTIONS',
    summaryText: "Welcome! Firefox is the best browser for this game. Click on the web page to capture key presses.",
    options: [
        {
            optionText: "Play",
            actionMap: [{key: 'ENTER', action: ACTION_BACK_TO_GAME}]
        },
        {
            optionText: "Controls",
            actionMap: [{
                key: 'ENTER', 
                action: ACTION_PUSH_MENU, 
                eventArgs: {
                    menu: CONTROLS_MENU
                }
            }],
        },
        {
            optionText: "Options",
            actionMap: [{
                key: 'ENTER', 
                action: ACTION_PUSH_MENU, 
                eventArgs: {
                    menu: SETTINGS_MENU
                }
            }],
        },
        {
            optionText: "Reset Level",
            actionMap: [{
                key: 'ENTER',
                action: ACTION_RESET_LEVEL
            }],
        }
    ]
}


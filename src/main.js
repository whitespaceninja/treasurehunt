import {TreasureHuntGame} from "./treasure-hunt.js";
import {MakeItRainGame} from "./make-it-rain.js";

// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': false,
    'drawFPS': 2,
    'updateFPS': 2,
    'viewportWidth': 40,
    'minViewportWidth': 40,
    'maxViewportWidth': 60,
    'viewportHeight': 14,
    'minViewportHeight': 14,
    'maxViewportHeight': 20,
    'numEnemies': 10
};

var rainOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
    'updateFPS': 10,
    'viewportWidth': 40,
    'minViewportWidth': 40,
    'maxViewportWidth': 60,
    'viewportHeight': 14,
    'minViewportHeight': 14,
    'maxViewportHeight': 20,
};

function run() {  
    let isRaining = false;
    const button = document.getElementById("makeitrain");
    button.onclick = function(){
        if (!isRaining) {
            isRaining = true;
            var rainGame = new MakeItRainGame();
            rainGame.initialize(rainOptions);
        }
    }

    var thGame = new TreasureHuntGame();
    thGame.initialize(globalOptions);
}

run();

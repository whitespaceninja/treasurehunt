/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/treasure-hunt.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: Animation, TextAnimaton, WinAnimation, AnimationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnimaton", function() { return TextAnimaton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinAnimation", function() { return WinAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHandler", function() { return AnimationHandler; });
class Animation {
    constructor() { }

    update(timeNow, timeElapsed) { }

    spawnRenderables() { }

    isExpired() { return true; }
}

class TextAnimaton extends Animation {
    constructor(centerX, centerY, text) {
        super();
        this.centerX = centerX;
        this.centerY = centerY;
        this.frameSpeed = 600;
        this.lastFrame = Date.now();
        this.isVisible = false;
        this.text = text;
    }

    update(timeNow, timeElapsed) {
        if (timeNow - this.lastFrame > this.frameSpeed) {
            this.isVisible = !this.isVisible;
            this.lastFrame = timeNow;
        }
    }

    spawnRenderables() {
        if (this.isVisible) {
            let characters = [];
            // add WIN in the center of the explosion.
            for (var i = 0; i < this.text.length; i++) {
                var x_offset = Math.floor(this.text.length / 2) - i;
                characters.push(new StaticCharacter(this.centerX - x_offset, this.centerY, this.text.charAt(i)));
            }
            return characters;
        }
        return null;
    }

    isExpired() {
        // this animation never goes away
        return false;
    }
}

class WinAnimation extends Animation {
    constructor(centerX, centerY, maxX, maxY) {
        super();
        this.radius = -1;
        this.centerX = centerX;
        this.centerY = centerY;
        this.frameSpeed = 60;
        this.lastFrame = Date.now();
        this.maxX = maxX;
        this.maxY = maxY;
    }

    update(timeNow, timeElapsed) {
        var elapsed = timeNow - this.lastFrame;
        if (elapsed >= this.frameSpeed) {
            this.radius++;
            this.lastFrame = timeNow;
        }
    }
    
    spawnRenderables() {
        let characters = [];
        // create explosion particles in a blast radius away from the center
        for (var y = this.centerY - this.radius; y <= this.centerY + this.radius; y++) {
            var difference = Math.abs(this.centerY - y);
            var numXs = Math.min(2, this.radius - difference + 1); // add 1 because we always want at least 1 explosion on each line
            
            for (var i = 0; i < numXs; i++) {
                var multiplier = 1;
                if (i == 0) {
                    multiplier = -1;
                }
                
                var x = this.centerX + ((this.radius - difference) * multiplier);
                var character = new StaticCharacter(x, y, '*');
                characters.push(character);
            }
        }
        return characters;
    }

    isExpired() {
        return this.centerX - (this.radius * 2) < 0 &&
            this.centerX + (this.radius * 2) > this.maxX &&
            this.centerY - (this.radius * 2) < 0 &&
            this.centerY + (this.radius * 2) > this.maxY;
    }
}

class AnimationHandler {
    constructor(renderer) {
        this.renderer = renderer;
        this.animations = [];
    }

    addAnimation(animation) {
        this.animations.push(animation);
    }

    update(timeNow, timeElapsed, gameObjects) {
        for (var i = this.animations.length - 1; i >= 0 ; i--) {
            var animation = this.animations[i];
            animation.update(timeNow, timeElapsed);

            if (animation.isExpired()) {
                // remove it from our list
                this.animations.splice(i, 1);
            } else {
                characters = this.animations[i].spawnRenderables();
                if (characters !== null) {
                    characters.map(x => gameObjects.addObject(x));
                }
            }
        }
    }

    clearAnimations() {
        this.animations = []
    }
}

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle.js */ "./src/rectangle.js");


class Character {
    constructor(initialX, initialY) {
        this.initialX = initialX;
        this.initialY = initialY;
        this.bounds = new _rectangle_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](initialX, initialY, 1, 1);
        this.isVisible = true;
        this.needsRedraw = true;
        this.obeysPhysics = false;
        this.removeFromGameObjects = false;
        this.animationListeners = [];
        this.children = [];
        this.intendedPosition = null;
    }

    getX() {
        return this.bounds.x;
    }

    getY() {
        return this.bounds.y;
    }

    getBounds() {
        return this.bounds;
    }

    getCharacter(row, col) {
        return null;
    }

    onAnimated() {
        this.needsRedraw = true;
    }

    update(timeNow, timeElapsed) {
    }
}

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
class Collider {
    constructor(parentObject) {
        this.parentObject = parentObject;
    }

    checkCollision(gameObjects) {
        var parent = this.parentObject;
        var collisionObjects = gameObjects.objects.filter(obj => obj !== parent &&
                                                          obj.collide && 
                                                          obj.getBounds().intersects(parent.getBounds()));
        if (collisionObjects.length > 0) {
            collisionObjects.map(obj => obj.collide(parent));
        }
    }
}

/***/ }),

/***/ "./src/enemy_character.js":
/*!********************************!*\
  !*** ./src/enemy_character.js ***!
  \********************************/
/*! exports provided: EnemyCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyCharacter", function() { return EnemyCharacter; });
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.js */ "./src/character.js");
/* harmony import */ var _projectile_character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile_character.js */ "./src/projectile_character.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprite.js */ "./src/sprite.js");
/* harmony import */ var _movable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movable.js */ "./src/movable.js");
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");
/* harmony import */ var _math_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math_extensions.js */ "./src/math_extensions.js");








class EnemyCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this);
        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_4__["Movable"](this);

        // TODO: add this to gameObjects?
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_2__["Collider"](this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
    }

    think() {
        var random = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_6__["randomNumber"])(4);
        var direction = 'NONE';
        switch (random) {
        case 1: 
            direction = _facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_LEFT"];
            break;
        case 2:
            direction = _facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_RIGHT"];
            break;
        case 3:
            direction = _facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_DOWN"];
            break;
        case 4:
            direction = _facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_UP"];
            break;
        }
        
        this.movable.move(direction);
    }

    update(timeNow, timeElapsed) {
        super.update(timeNow, timeElapsed);

        this.thinkCounter = this.thinkCounter + timeElapsed;

        if (this.thinkCounter > this.thinkSpeed) {
            this.thinkCounter = this.thinkCounter % this.thinkSpeed;
            this.think();
        }
    }

    collide(withObject) {
        if (withObject instanceof _projectile_character_js__WEBPACK_IMPORTED_MODULE_1__["ProjectileCharacter"]) {
            this.removeFromGameObjects = true;
        }
    }
}

/***/ }),

/***/ "./src/facing.js":
/*!***********************!*\
  !*** ./src/facing.js ***!
  \***********************/
/*! exports provided: FACING_UP, FACING_LEFT, FACING_DOWN, FACING_RIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACING_UP", function() { return FACING_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACING_LEFT", function() { return FACING_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACING_DOWN", function() { return FACING_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACING_RIGHT", function() { return FACING_RIGHT; });
const FACING_UP = 'U';
const FACING_LEFT = 'L';
const FACING_DOWN = 'D';
const FACING_RIGHT = 'R';

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _thread_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread.js */ "./src/thread.js");
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer.js */ "./src/renderer.js");
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rectangle.js */ "./src/rectangle.js");




class Game {
    constructor() {
        this.lastkeyPresses = [];
        this.threadUpdate = null;
        this.threadDraw = null;
        this.renderer = null;
    }

    initialize(updateFunction, drawFunction, options) {
        this.renderer = new _renderer_js__WEBPACK_IMPORTED_MODULE_1__["Renderer"](options['viewportWidth'], options['viewportHeight']);
        this.threadUpdate = new _thread_js__WEBPACK_IMPORTED_MODULE_0__["Thread"](updateFunction);
        this.threadDraw = new _thread_js__WEBPACK_IMPORTED_MODULE_0__["Thread"](drawFunction);

        this.threadUpdate.start(options['updateFPS']); //update X times per second
        this.threadDraw.start(options['drawFPS']); //draw X times per second

        var that = this;

        if (options['playInBrowser']) {
            function keyDownHandler(e) {
                var key = e.keyCode;
                if (key) {
                    that.lastkeyPresses.push(key);
                }
            };

            // listen to the browser keys instad of direct console input
            document.addEventListener("keydown", keyDownHandler, false);    
        } else {
            // this allows us to read keys directly from console input without ENTER
            process.stdin.setRawMode(true); 
            process.stdin.on('readable', function(data) {   
                var key = process.stdin.read();
                if (key) {
                    that.lastkeyPresses.push(key);
                }
            });
        }
    }

    getLastKeypress() {
        if (this.lastkeyPresses.length <= 0) {
            return null;
        }
        return this.lastkeyPresses.shift();
    }

    handleMovement(obj, intendedPosition, gameObjects) {
        let isObstructed = false;
        if (obj.obeysPhysics) {
            const newRect = new _rectangle_js__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](intendedPosition.x, intendedPosition.y, obj.getBounds().width, obj.getBounds().height);
            isObstructed = gameObjects.objects.filter(c => 
                                                    c !== obj && 
                                                    c.isPhysical && 
                                                    c.getBounds().intersects(newRect)).length > 0;
        }

        if (!isObstructed) {
            obj.getBounds().x = intendedPosition.x;
            obj.getBounds().y = intendedPosition.y;
        }

        obj.intendedPosition = null;
    }

    update(now, timeElapsed, gameObjects) {
        // update everything
        gameObjects.objects.map(x => x.update(now, timeElapsed));

        // handle movement intentions
        gameObjects.objects.filter(x => x.intendedPosition != null).map(x => this.handleMovement(x, x.intendedPosition, gameObjects));

        // check all collisions
        gameObjects.objects.filter(x => x.hasOwnProperty('collider')).map(x => x.collider.checkCollision(gameObjects));

        // remove everything that needs to be removed
        var removableObjects = gameObjects.objects.filter(x => x.removeFromGameObjects);
        if (removableObjects.length > 0) {
            removableObjects.map(x => gameObjects.removeObject(x));
            this.renderer.setIsDirty();
        }

        this.renderer.checkRedraw(gameObjects);
    }

    bogus() {
        
    }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/game_objects.js":
/*!*****************************!*\
  !*** ./src/game_objects.js ***!
  \*****************************/
/*! exports provided: GameObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjects", function() { return GameObjects; });
class GameObjects {
    constructor() {
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.addObject(obj.children[i]);
        }
    }

    removeObject(obj) {
        this.objects = this.objects.filter(x => x !== obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.removeObject(obj.children[i]);
        }
    }

    removeAllObjects() {
        this.objects = [];
    }
}

/***/ }),

/***/ "./src/key_map.js":
/*!************************!*\
  !*** ./src/key_map.js ***!
  \************************/
/*! exports provided: KeyMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyMap", function() { return KeyMap; });
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");


class KeyMap {
    constructor() {
    }

    getGameCommand(key) {
        switch(key) {
        case 'a': 
        case "65":
        case "37":
            return _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"];

        case 'e': 
        case 'd': 
        case "68":
        case "39":
            return _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"];

        case ',': 
        case 'w': 
        case "87":
        case "38":
            return _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"];

        case 'o':
        case 's':
        case "83":
        case "40":
            return _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"];

        case 'c':
        case '67':
            return 'QUIT';
            
        case 'f':
        case '70':
        case '32':
            return 'FIRE';
        }
    }
}

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _wall_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall_character.js */ "./src/wall_character.js");


class Map {
    constructor(mapData) {
        this.mapData = mapData;
        this.width = mapData.width;
        this.height = mapData.height;
        this.characters = null;
    }

    getMapCharacters() {
        if (this.characters) {
            return this.characters;
        }

        this.characters = [];

        // add all of the objects within the level
        for (var i = 0; i < this.mapData.map_objects.length; i++) {
            var obj = this.mapData.map_objects[i];
            for (var row = 0; row < obj.image.length; row++) {
                var y = row + obj.y;
                var rowStr = obj.image[row];
                for (var col = 0; col < rowStr.length; col++) {
                    var x = obj.x + col;
                    var thisChar = rowStr.charAt(col);
                    if (thisChar != ' ') {
                        this.characters.push(new _wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, y, thisChar));
                    }
                }
            }
        }

        // add in left/right level barriers
        for (var y = 0; y < this.height; y++) {
            this.characters.push(new _wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](0, y, "|"));
            this.characters.push(new _wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](this.width - 1, y, "|"));
        }

        // add in top/bottom level barriers
        for (var x = 0; x < this.width; x++) {
            this.characters.push(new _wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, 0, "-"));
            this.characters.push(new _wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, this.height - 1, "-"));
        }

        return this.characters;
    }

    getIsWall(x, y) {
        return this.getMapCharacters().filter(ch => ch.getBounds().intersectsPoint(x, y)).length > 0;
    }
}

/***/ }),

/***/ "./src/math_extensions.js":
/*!********************************!*\
  !*** ./src/math_extensions.js ***!
  \********************************/
/*! exports provided: randomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumber", function() { return randomNumber; });
function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

/***/ }),

/***/ "./src/movable.js":
/*!************************!*\
  !*** ./src/movable.js ***!
  \************************/
/*! exports provided: Movable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movable", function() { return Movable; });
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rectangle.js */ "./src/rectangle.js");



class Movable {
    constructor(parentObject) {
        this.parentObject = parentObject;
        this.facing = _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"];
    }

    update(timeNow, timeElapsed) {
        // do nothing?
    }

    setFacing(newFacing) {
        if (newFacing != this.facing) {
            this.facing = newFacing;
            return true;
        }
        return false;
    }

    move(direction) {
        var intendedX = this.parentObject.getX();
        var intendedY = this.parentObject.getY();
        var dirty = false;

        switch(direction) {
        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]: 
            intendedX--; 
            dirty = this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]:
            intendedX++; 
            dirty = this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]:
            intendedY--; 
            dirty = this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]:
            intendedY++; 
            dirty = this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]);
            break;

        default:
            // must be some sort of bogus movement. don't handle.
            return
        }

        var that = this;

        var isObstructed = false;

        // if (this.parentObject.obeysPhysics) {
        //     var newRect = new Rectangle(intendedX, intendedY, this.parentObject.getBounds().width, this.parentObject.getBounds().height);
        //     isObstructed = gameObjects.objects.filter(c => 
        //                                               c !== that.parentObject && 
        //                                               c.isPhysical && 
        //                                               c.getBounds().intersects(newRect)).length > 0;
        // }

        if (!isObstructed) {
            this.parentObject.intendedPosition = {x: intendedX, y: intendedY};
            //this.parentObject.getBounds().x = intendedX;
            //this.parentObject.getBounds().y = intendedY;
            // always trigger dirty when moving
            dirty = true;
        }

        if (dirty) {
            this.parentObject.onAnimated();
        }
    }
}

/***/ }),

/***/ "./src/player_character.js":
/*!*********************************!*\
  !*** ./src/player_character.js ***!
  \*********************************/
/*! exports provided: PlayerCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacter", function() { return PlayerCharacter; });
/* harmony import */ var _projectile_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile_character.js */ "./src/projectile_character.js");
/* harmony import */ var _enemy_character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy_character.js */ "./src/enemy_character.js");
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprite.js */ "./src/sprite.js");
/* harmony import */ var _movable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movable.js */ "./src/movable.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character.js */ "./src/character.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");









class PlayerCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_6__["Character"] {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;

        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["PLAYER_SPRITE_MAP"], this);
        this.sprite.setState(_facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_DOWN"]);
        this.children.push(this.sprite);

        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_3__["Movable"](this);
        this.children.push(this.movable);

        // TODO: add this to gameObjects?
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_4__["Collider"](this);
    }

    onAnimated() {
        super.onAnimated();
        this.sprite.setState(this.movable.facing);
    }

    reset() {
        this.bounds.x = this.initialX;
        this.bounds.y = this.initialY;
        this.health = 100;
    }

    handleGameCommand(command, gameObjects) {
        if (command == 'FIRE') {
            this.fireProjectile(gameObjects);
        } else {
            this.movable.move(command);
        }
    }

    collide(withObject) {
        if (withObject instanceof _enemy_character_js__WEBPACK_IMPORTED_MODULE_1__["EnemyCharacter"]) {
            this.health = 0;
        }
    }

    fireProjectile(gameObjects) {
        var projectile = new _projectile_character_js__WEBPACK_IMPORTED_MODULE_0__["ProjectileCharacter"](this.getX(), this.getY(), this.movable.facing, 8, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["PROJECTILE_SPRITE_MAP"]);
        gameObjects.addObject(projectile);
    }
}

/***/ }),

/***/ "./src/projectile_character.js":
/*!*************************************!*\
  !*** ./src/projectile_character.js ***!
  \*************************************/
/*! exports provided: ProjectileCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectileCharacter", function() { return ProjectileCharacter; });
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.js */ "./src/character.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");
/* harmony import */ var _movable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movable.js */ "./src/movable.js");
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sprite.js */ "./src/sprite.js");





class ProjectileCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, direction, maxDistance, spriteMap) {
        super(initialX, initialY);
        
        this.isVisible = true;
        this.direction = direction;
        this.distanceTraveled = 0;
        this.maxDistance = maxDistance;
        this.travelSpeed = (1 / 6.0) * 1000;
        this.travelCounter = 0;
        this.obeysPhysics = false;

        // set up our sprite
        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this);
        this.sprite.setState(direction);
        this.children.push(this.sprite);
        
        // set up our ability to move
        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_2__["Movable"](this);
        this.children.push(this.movable);

        // check for collisions with objects
        // TODO: add this to children?
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
    }

    think() {
        this.movable.move(this.direction);
        this.distanceTraveled++;
        if (this.distanceTraveled >= this.maxDistance) {
            this.removeFromGameObjects = true;
        }
    }
    
    update(timeNow, timeElapsed) {
        super.update(timeNow, timeElapsed);

        this.travelCounter = this.travelCounter + timeElapsed;

        if (this.travelCounter >= this.travelSpeed) {
            this.travelCounter = this.travelCounter - this.travelSpeed;
            this.think();
        }
    }
}

/***/ }),

/***/ "./src/rectangle.js":
/*!**************************!*\
  !*** ./src/rectangle.js ***!
  \**************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    intersectsPoint(x, y) {
        if (x < this.x + this.width &&
            x >= this.x &&
            y < this.y + this.height &&
            y >= this.y) {
            return true;
        }
        return false;
    }

    intersects(rectangle) {
        if (this.x + this.width <= rectangle.x ||
            this.x >= rectangle.x + rectangle.width ||
            this.y + this.height <= rectangle.y ||
            this.y >= rectangle.y + rectangle.height) {
            return false;
        }
        return true;
    }
}

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle.js */ "./src/rectangle.js");


class Renderer {
    constructor(viewW, viewH) {
        this.viewport = new _rectangle_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](0, 0, viewW, viewH);
        this.isDirty = true;
    }

    clearScreen() {
        // clear the screen and set cursor at 0,0
        console.clear();
    }

    isOnScreen(character) {
        return character.isVisible && character.getBounds().intersects(this.viewport);
    }

    render(gameObjects) {
        var output = '';
        var renderableObjects = this.getRenderableObjectsOnScreen(gameObjects);
        for (var row = this.viewport.y; row < this.viewport.y + this.viewport.height; row++) {
            for (var col = this.viewport.x; col < this.viewport.x + this.viewport.width; col++) {
                var characters = renderableObjects.filter(c => c.getCharacter).map(c => c.getCharacter(row, col)).filter(c => c != null);
                if (characters.length > 0) {
                    output = output + characters[0];
                } else {
                    output = output + ' ';
                }
            }
            output = output + '\n';
        }

        console.log(output);

        // clear the redraw flag on all objects we were able to render
        renderableObjects.map(c => c.needsRedraw = false);
    }

    getIsDirty() {
        return this.isDirty;
        
    }

    setIsDirty() {
        this.isDirty = true;
    }

    checkRedraw(gameObjects) {
        if (this.getRenderableObjectsOnScreen(gameObjects).filter(c => c.needsRedraw).length > 0) {
            this.setIsDirty();
        }
    }

    getRenderableObjectsOnScreen(gameObjects) {
        var that = this;
        var renderable = gameObjects.objects.filter(c => c.isVisible && 
                                                    that.isOnScreen(c));
        return renderable;
    }

    centerViewportOn(character, map) {
        this.viewport.x = Math.min(map.width - this.viewport.width, Math.max(0, character.getX() - (this.viewport.width / 2)));
        this.viewport.y = Math.min(map.height - this.viewport.height, Math.max(0, character.getY() - (this.viewport.height / 2)));
    }
}

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
class Sprite {
    // format of a spriteMap:
    // {
    //     "<state>": [{ "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] },
    //                 { "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] } ]
    // }
    constructor(spriteMap, parentObject) {
        this.spriteMap = spriteMap;
        this.parentObject = parentObject;
        this.state = 0;
        this.stateElapsed = 0;
        this.frame = 0;
        this.isVisible = true;
    }

    getBounds() {
        return this.parentObject.bounds;
    }

    update(timeNow, timeElapsed) {
        this.stateElapsed = this.stateElapsed + timeElapsed;
        
        var prevFrame = this.frame;
        this.frame = this.calculateCurrentFrame();
        if (this.frame != prevFrame) {
            this.parentObject.onAnimated();
        }

        // TODO: figure out a better way to do colliding with sprites
        //this.calculateSize();
    }

    calculateSize() {
        var sprites = this.spriteMap.states[this.state];
        var frame = this.frame;
        var characterRows = sprites[frame]["characters"];

        var firstRow = 999999;
        var lastRow = 0;
        var firstCol = 999999;
        var lastCol = 0;

        for (var row = 0; row < characterRows.length; row++) {
            for (var col = 0; col < characterRows[row].length; col++) {
                var symbol = characterRows[row].charAt(col);
                if (symbol && symbol != ' ') {
                    firstRow = Math.min(firstRow, row);
                    lastRow = Math.max(lastRow, row);
                    firstCol = Math.min(firstCol, col);
                    lastCol = Math.max(lastCol, col);
                }
            }
        }

        // TODO: this feels dirty
        this.parentObject.getBounds().width = lastCol - firstCol + 1;
        this.parentObject.getBounds().height = lastRow - firstRow + 1;
    }

    setState(newState) {
        this.state = newState;
    }

    getX() {
        return this.parentObject.getX();
    }

    getY() {
        return this.parentObject.getY();
    }

    calculateCurrentFrame() {
        var sprites = this.spriteMap.states[this.state];
        var totalTime = sprites.reduce(function(acc, curVal) { return acc + curVal["displayTime"]; }, 0);
        var leftover = this.stateElapsed % totalTime;
        var frame = 0;
        var timeAccumulator = 0;
        for (var i = 0; i < sprites.length; i++) {
            frame = i;
            // TODO: replace this with a reduce()
            var displayTime = sprites[i]["displayTime"];
            if (timeAccumulator + displayTime > leftover) {
                break;
            }
            timeAccumulator = timeAccumulator + displayTime;
        }

        return frame;
    }

    getAnchoredX() {
        var characterRows = this.spriteMap.states[this.state][this.frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourCol = this.parentObject.getX();
        if (this.spriteMap.anchor == "center") {
            // assumes the first row is the same width as the other frames
            ourCol = ourCol - Math.floor(characterRows[0].length / 2);
        }

        return ourCol;
    }

    getAnchoredY() {
        var characterRows = this.spriteMap.states[this.state][this.frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourRow = this.parentObject.getY();
        if (this.spriteMap.anchor == "center") {
            ourRow = ourRow - Math.floor(characterRows.length / 2);
        }

        return ourRow;
    }

    getCharacter(row, col) {
        var sprites = this.spriteMap.states[this.state];
        var frame = this.frame;
        var characterRows = sprites[frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourRow = row - this.getAnchoredY();
        var ourCol = col - this.getAnchoredX();

        if (ourRow >= 0 && 
            ourCol >= 0 && 
            ourRow < characterRows.length &&
            ourCol < characterRows[ourRow].length) {
                var symbol = characterRows[ourRow].charAt(ourCol);
                if (symbol != ' ') {
                    return symbol;
                }
        }

        return null;
    }
}

/***/ }),

/***/ "./src/static_character.js":
/*!*********************************!*\
  !*** ./src/static_character.js ***!
  \*********************************/
/*! exports provided: StaticCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticCharacter", function() { return StaticCharacter; });
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.js */ "./src/character.js");


class StaticCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol) {
         super(initialX, initialY);
         this.symbol = symbol;
     }
 
     getCharacter(row, col) {
         if (this.getX() == col && this.getY() == row) {
             return this.symbol;
         }
         return null;
     }
 }

/***/ }),

/***/ "./src/thread.js":
/*!***********************!*\
  !*** ./src/thread.js ***!
  \***********************/
/*! exports provided: Thread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thread", function() { return Thread; });
class Thread {
    constructor(functionPointer) {
        this.functionPointer = functionPointer;
    }

    start(desiredFramerate) {
        var that = this;
        var minimumMillsecPerFrame = 1000/ desiredFramerate;

        var internalRun = function() {
            var now = Date.now();
            that.functionPointer();
            var after = Date.now();

            // if the function call takes a while, reduce the delay until the next execute
            var nextDelay = Math.max(0, minimumMillsecPerFrame - (after - now));
            setTimeout(internalRun, nextDelay);
        };

        // initial call
        setTimeout(internalRun, 0); 
    }
}

/***/ }),

/***/ "./src/treasure-hunt.js":
/*!******************************!*\
  !*** ./src/treasure-hunt.js ***!
  \******************************/
/*! exports provided: TreasureHuntGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureHuntGame", function() { return TreasureHuntGame; });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _key_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_map.js */ "./src/key_map.js");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.js */ "./src/animations.js");
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player_character.js */ "./src/player_character.js");
/* harmony import */ var _static_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static_character.js */ "./src/static_character.js");
/* harmony import */ var _enemy_character_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enemy_character.js */ "./src/enemy_character.js");
/* harmony import */ var _game_objects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game_objects.js */ "./src/game_objects.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _math_extensions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math_extensions.js */ "./src/math_extensions.js");












// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
    'updateFPS': 10,
    'viewportWidth': 40,
    'viewportHeight': 14,
    'numEnemies': 10
};

function run() {  
    var thGame = new TreasureHuntGame();
    thGame.initialize(globalOptions);
}

var gameObjects = new _game_objects_js__WEBPACK_IMPORTED_MODULE_6__["GameObjects"]();

class TreasureHuntGame extends _game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
    constructor() {
        // set up basic game objects
        super();

        this.map = new _map_js__WEBPACK_IMPORTED_MODULE_8__["Map"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["LEVEL_TOWN"]);
        this.keyMap = new _key_map_js__WEBPACK_IMPORTED_MODULE_1__["KeyMap"]();

        this.STATE_RUNNING = 0;
        this.STATE_WINNNING = 1;
        this.STATE_DEAD = 2;

        // this should probably turn into a state machine
        this.state = this.STATE_RUNNING;

        this.EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        this.lastExplosionTime = Date.now();

        this.resetLevelTime = -1;
    }

    getRandomMapPlacement(character, map) {
        var x = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_9__["randomNumber"])(map.width - 1);
        var y = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_9__["randomNumber"])(map.height - 1);

        // don't let them overlap
        while (map.getIsWall(x, y) || (character.getX() == x && character.getY() == y)) {
            x = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_9__["randomNumber"])(map.width - 1);
            y = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_9__["randomNumber"])(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // start at the top left of the map
        var player = new _player_character_js__WEBPACK_IMPORTED_MODULE_3__["PlayerCharacter"](1, 1);
        return player;
    }

    createGoal(character, map) {
        var goalPlacement = this.getRandomMapPlacement(character, map);
        return new _static_character_js__WEBPACK_IMPORTED_MODULE_4__["StaticCharacter"](goalPlacement.x, goalPlacement.y, '$');
    }

    createEnemy(character, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(character, map);
        return new _enemy_character_js__WEBPACK_IMPORTED_MODULE_5__["EnemyCharacter"](enemyPlacement.x, enemyPlacement.y, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["ENEMY_SPIKEY_SPRITE_MAP"]);
    }
    
    resetLevel() {
        this.state = this.STATE_RUNNING;

        // start from scratch
        gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        this.character = this.createPlayer();
        this.character.reset();

        this.goal = this.createGoal(this.character, this.map);
        this.enemies = [];
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            var enemy = this.createEnemy(this.character, this.map);
            this.enemies.push(enemy);
        }

        this.mapCharacters = this.map.getMapCharacters();

        // add game objects to renderer
        gameObjects.addObject(this.character);
        gameObjects.addObject(this.goal);
        this.enemies.map(x => gameObjects.addObject(x));
        this.map.getMapCharacters().map(x => gameObjects.addObject(x));

        /*this.door = new DoorwayCharacter(2, 2, function() {
            window.location.href = 'http://www.google.com';
            });

            gameObjects.addObject(this.door);*/
        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // first draw of render
        this.renderer.render(gameObjects);
    }

    // this is a blocking animation that 'explodes' the 
    //...goal into an explosion
    spawnExplosions(now, centeredCharacter) {
        // spawn a new animation based on EXPLOSION_SPEED
        if (now - this.lastExplosionTime > this.EXPLOSION_SPEED) {
            this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["WinAnimation"](centeredCharacter.getX(), centeredCharacter.getY(), this.map.width, this.map.height));
            this.lastExplosionTime = now;
        }
    }

    checkDeadCondition() {
        if (this.character.health <= 0) {
            this.state = this.STATE_DEAD;
            var x = this.character.getX();
            var y = this.character.getY();
            this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["WinAnimation"](x, y, this.map.width, this.map.height));
            this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["TextAnimaton"](x, y, "DEAD"));
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.getX() == this.goal.getX() && this.character.getY() == this.goal.getY()) {
            this.state = this.STATE_WINNING;

            this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["WinAnimation"](this.goal.getX(), this.goal.getY(), this.map.width, this.map.height));
            this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["TextAnimaton"](this.goal.getX(), this.goal.getY(), "WIN"));

            this.resetLevelTime = Date.now() + 6000;
        }
    }

    handleInput() {
       var key = this.getLastKeypress();
       if (null !== key) {
           var gameCommand = this.keyMap.getGameCommand(key.toString());

           if (gameCommand == 'QUIT') {
               process.exit();
           } else if (this.state == this.STATE_RUNNING) {   
               // update character movement
               this.character.handleGameCommand(gameCommand, gameObjects);
               this.renderer.centerViewportOn(this.character, this.map);
           }
       }
    }

    update(now, timeElapsed, gameObjects) {
        super.update(now, timeElapsed, gameObjects);

        if (this.state == this.STATE_RUNNING) {
            this.checkWinCondition();
            this.checkDeadCondition();
        } else if (this.state == this.STATE_WINNING ||
                   this.state == this.STATE_DEAD) {
            // clear everything
            gameObjects.removeAllObjects();
                
            // win/die condition
            this.spawnExplosions(now, this.character);

            if (this.resetLevelTime >= 0 && now > this.resetLevelTime) {
                this.resetLevel();
            }
        }

        // this currently adds all the characters to the renderer so it should be 
        //...after the removeAllObjects() call above. Need to decide if this is
        //...an update function or a draw function...
        this.animationHandler.update(now, timeElapsed);
    }

    initialize(options) {
        var that = this;      

        var lastUpdate = Date.now();
        var updateFunc = function () {
            var now = Date.now();
            var timeElapsed = now - lastUpdate;
            lastUpdate = now;

            that.handleInput();
            that.update(now, timeElapsed, gameObjects);
        }

        var drawFunc = function() {
            if (!that.renderer.getIsDirty()) {
                return;
            }

            that.renderer.clearScreen();
            that.drawHelp(that.character.getCharacter());
            that.renderer.render(gameObjects);
        }

        super.initialize(updateFunc, drawFunc, options);

        // do this after initializing parent
        this.animationHandler = new _animations_js__WEBPACK_IMPORTED_MODULE_2__["AnimationHandler"](this.renderer);
        this.resetLevel();
    }

    drawHelp(characterSymbol) {
        var output = 'Use Firefox to play if you aren\'t already!!\n'
        /*var output = 'Instructions: Use Firefox or Chrome (Firefox reduces flickering!)\n';
        output = output + 'Break out the dev tools into a separate window and then click on my actual web page to enable controls.\n\n';
        output = output + 'Use your "' + characterSymbol + '" character and go find the treasure ($) but watch out for bad guys...\n\n'; 
        output = output + '| Control  | Action |\n';
        output = output + '|----------|--------|\n';
        output = output + '| spacebar | FIRE!  |\n';
        output = output + '| w        | Up     |\n';
        output = output + '| d        | Right  |\n';
        output = output + '| s        | Down   |\n';
        output = output + '| a        | Left   |\n';
        output = output + '| c        | Quit   |\n';*/
        console.log(output);
    }
}

run();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/treasure_hunt_art.js":
/*!**********************************!*\
  !*** ./src/treasure_hunt_art.js ***!
  \**********************************/
/*! exports provided: ENEMY_SPIKEY_SPRITE_MAP, PROJECTILE_SPRITE_MAP, PLAYER_SPRITE_MAP, MAP_HOUSE, MAP_BUSH, MAP_TREE, LEVEL_TOWN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_SPIKEY_SPRITE_MAP", function() { return ENEMY_SPIKEY_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTILE_SPRITE_MAP", function() { return PROJECTILE_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_SPRITE_MAP", function() { return PLAYER_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_HOUSE", function() { return MAP_HOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_BUSH", function() { return MAP_BUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_TREE", function() { return MAP_TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_TOWN", function() { return LEVEL_TOWN; });
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");


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

const ENEMY_SPIKEY_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        "0": [
            { "displayTime": 910, "characters": ENEMY_SPIKEY_FRAME_1 },
            { "displayTime": 90, "characters": ENEMY_SPIKEY_FRAME_2 },
            { "displayTime": 430, "characters": ENEMY_SPIKEY_FRAME_3 },
            { "displayTime": 90, "characters": ENEMY_SPIKEY_FRAME_2 } ]
    }
};

const PROJECTILE_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]]: [{ "displayTime": 999999, "characters": ['\u25C2'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]]: [{ "displayTime": 999999, "characters": ['\u25B4'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]]: [{ "displayTime": 999999, "characters": ['\u25B8'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]]: [{ "displayTime": 999999, "characters": ['\u25BE'] }]
    }
};

const PLAYER_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]]: [{ "displayTime": 999999, "characters": ['\u25C1'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]]: [{ "displayTime": 999999, "characters": ['\u25B3'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]]: [{ "displayTime": 999999, "characters": ['\u25B7'] }],
        [_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]]: [{ "displayTime": 999999, "characters": ['\u25BD'] }]
    }
};

const MAP_HOUSE = [
"     _________      ",
"   _/         \\_   ",
" _/             \\_ ",
"/_________________\\",
" |               |  ",
" |     =====     |  ",
" | |+|  | |  |+| |  ",
" |______| |______|  ",
];

const MAP_BUSH = [
" ### ",
"#####",
" ### ",
];

const MAP_TREE = [
"   (**)       ",
" (******)  ",
"(********) ",
"  (****)  ",
"    ||    ",
"    ||    ",
"   /__\\  ",
];

const LEVEL_TOWN = {
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

/***/ }),

/***/ "./src/wall_character.js":
/*!*******************************!*\
  !*** ./src/wall_character.js ***!
  \*******************************/
/*! exports provided: WallCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallCharacter", function() { return WallCharacter; });
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.js */ "./src/character.js");


class WallCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol) {
        super(initialX, initialY);
        this.symbol = symbol;
        this.isPhysical = true;
    }

    getCharacter(row, col) {
        if (this.getX() == col && this.getY() == row) {
            return this.symbol;
        }
        return null;
    }

    collide(withObject) {
        if (withObject instanceof ProjectileCharacter) {
            withObject.removeFromGameObjects = true;
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vdmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllcl9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpY19jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGxfY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7O0FBRTNDO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7O0FDMUdrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cmVhc3VyZS1odW50LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHsgfVxuXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHsgfVxuXG4gICAgaXNFeHBpcmVkKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEFuaW1hdG9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCB0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwMDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBpZiAodGltZU5vdyAtIHRoaXMubGFzdEZyYW1lID4gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIGFkZCBXSU4gaW4gdGhlIGNlbnRlciBvZiB0aGUgZXhwbG9zaW9uLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeF9vZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMudGV4dC5sZW5ndGggLyAyKSAtIGk7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKG5ldyBTdGF0aWNDaGFyYWN0ZXIodGhpcy5jZW50ZXJYIC0geF9vZmZzZXQsIHRoaXMuY2VudGVyWSwgdGhpcy50ZXh0LmNoYXJBdChpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBuZXZlciBnb2VzIGF3YXlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbkFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IC0xO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICB0aGlzLm1heFkgPSBtYXhZO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cysrO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSBleHBsb3Npb24gcGFydGljbGVzIGluIGEgYmxhc3QgcmFkaXVzIGF3YXkgZnJvbSB0aGUgY2VudGVyXG4gICAgICAgIGZvciAodmFyIHkgPSB0aGlzLmNlbnRlclkgLSB0aGlzLnJhZGl1czsgeSA8PSB0aGlzLmNlbnRlclkgKyB0aGlzLnJhZGl1czsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKHRoaXMuY2VudGVyWSAtIHkpO1xuICAgICAgICAgICAgdmFyIG51bVhzID0gTWF0aC5taW4oMiwgdGhpcy5yYWRpdXMgLSBkaWZmZXJlbmNlICsgMSk7IC8vIGFkZCAxIGJlY2F1c2Ugd2UgYWx3YXlzIHdhbnQgYXQgbGVhc3QgMSBleHBsb3Npb24gb24gZWFjaCBsaW5lXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtWHM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmNlbnRlclggKyAoKHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSkgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCAnKicpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VudGVyWCAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJYICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFggJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRBbmltYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmlzRXhwaXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0IGZyb20gb3VyIGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzID0gdGhpcy5hbmltYXRpb25zW2ldLnNwYXduUmVuZGVyYWJsZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGluaXRpYWxYLCBpbml0aWFsWSwgMSwgMSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kcztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgdmFyIGNvbGxpc2lvbk9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihvYmogPT4gb2JqICE9PSBwYXJlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouY29sbGlkZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhwYXJlbnQuZ2V0Qm91bmRzKCkpKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29sbGlzaW9uT2JqZWN0cy5tYXAob2JqID0+IG9iai5jb2xsaWRlKHBhcmVudCkpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UHJvamVjdGlsZUNoYXJhY3Rlcn0gZnJvbSBcIi4vcHJvamVjdGlsZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuL21vdmFibGUuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbmVteUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy50aGlua1NwZWVkID0gKDEgLyAxLjApICogMTAwMDtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcyk7XG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuXG4gICAgICAgIC8vIFRPRE86IGFkZCB0aGlzIHRvIGdhbWVPYmplY3RzP1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gcmFuZG9tTnVtYmVyKDQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ05PTkUnO1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbSkge1xuICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gRkFDSU5HX0xFRlQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgZGlyZWN0aW9uID0gRkFDSU5HX1JJR0hUO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IEZBQ0lOR19ET1dOO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IEZBQ0lOR19VUDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmFibGUubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50aGlua0NvdW50ZXIgPiB0aGlzLnRoaW5rU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgJSB0aGlzLnRoaW5rU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEZBQ0lOR19VUCA9ICdVJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfTEVGVCA9ICdMJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfRE9XTiA9ICdEJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfUklHSFQgPSAnUic7IiwiaW1wb3J0IHtUaHJlYWR9IGZyb20gXCIuL3RocmVhZC5qc1wiO1xuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSBcIi4vcmVuZGVyZXIuanNcIjtcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBuZXcgVGhyZWFkKHVwZGF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbmV3IFRocmVhZChkcmF3RnVuY3Rpb24pO1xuXG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlLnN0YXJ0KG9wdGlvbnNbJ3VwZGF0ZUZQUyddKTsgLy91cGRhdGUgWCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIHRoaXMudGhyZWFkRHJhdy5zdGFydChvcHRpb25zWydkcmF3RlBTJ10pOyAvL2RyYXcgWCB0aW1lcyBwZXIgc2Vjb25kXG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRpb25zWydwbGF5SW5Ccm93c2VyJ10pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXMgaW5zdGFkIG9mIGRpcmVjdCBjb25zb2xlIGlucHV0XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpOyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHVzIHRvIHJlYWQga2V5cyBkaXJlY3RseSBmcm9tIGNvbnNvbGUgaW5wdXQgd2l0aG91dCBFTlRFUlxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyBcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ3JlYWRhYmxlJywgZnVuY3Rpb24oZGF0YSkgeyAgIFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9jZXNzLnN0ZGluLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdGtleVByZXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdEtleXByZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0a2V5UHJlc3Nlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdGtleVByZXNzZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlbWVudChvYmosIGludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGxldCBpc09ic3RydWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5vYmV5c1BoeXNpY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY3QgPSBuZXcgUmVjdGFuZ2xlKGludGVuZGVkUG9zaXRpb24ueCwgaW50ZW5kZWRQb3NpdGlvbi55LCBvYmouZ2V0Qm91bmRzKCkud2lkdGgsIG9iai5nZXRCb3VuZHMoKS5oZWlnaHQpO1xuICAgICAgICAgICAgaXNPYnN0cnVjdGVkID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoYyA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICE9PSBvYmogJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhuZXdSZWN0KSkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNPYnN0cnVjdGVkKSB7XG4gICAgICAgICAgICBvYmouZ2V0Qm91bmRzKCkueCA9IGludGVuZGVkUG9zaXRpb24ueDtcbiAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS55ID0gaW50ZW5kZWRQb3NpdGlvbi55O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICAvLyB1cGRhdGUgZXZlcnl0aGluZ1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLm1hcCh4ID0+IHgudXBkYXRlKG5vdywgdGltZUVsYXBzZWQpKTtcblxuICAgICAgICAvLyBoYW5kbGUgbW92ZW1lbnQgaW50ZW50aW9uc1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHguaW50ZW5kZWRQb3NpdGlvbiAhPSBudWxsKS5tYXAoeCA9PiB0aGlzLmhhbmRsZU1vdmVtZW50KHgsIHguaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyBjaGVjayBhbGwgY29sbGlzaW9uc1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHguaGFzT3duUHJvcGVydHkoJ2NvbGxpZGVyJykpLm1hcCh4ID0+IHguY29sbGlkZXIuY2hlY2tDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgdmFyIHJlbW92YWJsZU9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzKTtcbiAgICAgICAgaWYgKHJlbW92YWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZhYmxlT2JqZWN0cy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoeCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBib2d1cygpIHtcbiAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKHggPT4geCAhPT0gb2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxufSIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBLZXlNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldEdhbWVDb21tYW5kKGtleSkge1xuICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgIGNhc2UgJ2EnOiBcbiAgICAgICAgY2FzZSBcIjY1XCI6XG4gICAgICAgIGNhc2UgXCIzN1wiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19MRUZUO1xuXG4gICAgICAgIGNhc2UgJ2UnOiBcbiAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICBjYXNlIFwiNjhcIjpcbiAgICAgICAgY2FzZSBcIjM5XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1JJR0hUO1xuXG4gICAgICAgIGNhc2UgJywnOiBcbiAgICAgICAgY2FzZSAndyc6IFxuICAgICAgICBjYXNlIFwiODdcIjpcbiAgICAgICAgY2FzZSBcIjM4XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1VQO1xuXG4gICAgICAgIGNhc2UgJ28nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgY2FzZSBcIjgzXCI6XG4gICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19ET1dOO1xuXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICc2Nyc6XG4gICAgICAgICAgICByZXR1cm4gJ1FVSVQnO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICc3MCc6XG4gICAgICAgIGNhc2UgJzMyJzpcbiAgICAgICAgICAgIHJldHVybiAnRklSRSc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBEYXRhKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IG1hcERhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXBEYXRhLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBudWxsO1xuICAgIH1cblxuICAgIGdldE1hcENoYXJhY3RlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcblxuICAgICAgICAvLyBhZGQgYWxsIG9mIHRoZSBvYmplY3RzIHdpdGhpbiB0aGUgbGV2ZWxcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcERhdGEubWFwX29iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLm1hcERhdGEubWFwX29iamVjdHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBvYmouaW1hZ2UubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgICAgIHZhciB5ID0gcm93ICsgb2JqLnk7XG4gICAgICAgICAgICAgICAgdmFyIHJvd1N0ciA9IG9iai5pbWFnZVtyb3ddO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHJvd1N0ci5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gb2JqLnggKyBjb2w7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzQ2hhciA9IHJvd1N0ci5jaGFyQXQoY29sKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNDaGFyICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgeSwgdGhpc0NoYXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpbiBsZWZ0L3JpZ2h0IGxldmVsIGJhcnJpZXJzXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoMCwgeSwgXCJ8XCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHRoaXMud2lkdGggLSAxLCB5LCBcInxcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIHRvcC9ib3R0b20gbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIDAsIFwiLVwiKSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB0aGlzLmhlaWdodCAtIDEsIFwiLVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xuICAgIH1cblxuICAgIGdldElzV2FsbCh4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE1hcENoYXJhY3RlcnMoKS5maWx0ZXIoY2ggPT4gY2guZ2V0Qm91bmRzKCkuaW50ZXJzZWN0c1BvaW50KHgsIHkpKS5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogbWF4KSArIDEpO1xufSIsImltcG9ydCB7RkFDSU5HX1VQLCBGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gRkFDSU5HX0RPV047XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgfVxuXG4gICAgc2V0RmFjaW5nKG5ld0ZhY2luZykge1xuICAgICAgICBpZiAobmV3RmFjaW5nICE9IHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2luZyA9IG5ld0ZhY2luZztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaW50ZW5kZWRYID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICB2YXIgaW50ZW5kZWRZID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICB2YXIgZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRkFDSU5HX0xFRlQ6IFxuICAgICAgICAgICAgaW50ZW5kZWRYLS07IFxuICAgICAgICAgICAgZGlydHkgPSB0aGlzLnNldEZhY2luZyhGQUNJTkdfTEVGVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19SSUdIVDpcbiAgICAgICAgICAgIGludGVuZGVkWCsrOyBcbiAgICAgICAgICAgIGRpcnR5ID0gdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1JJR0hUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1VQOlxuICAgICAgICAgICAgaW50ZW5kZWRZLS07IFxuICAgICAgICAgICAgZGlydHkgPSB0aGlzLnNldEZhY2luZyhGQUNJTkdfVVApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfRE9XTjpcbiAgICAgICAgICAgIGludGVuZGVkWSsrOyBcbiAgICAgICAgICAgIGRpcnR5ID0gdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0RPV04pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc29tZSBzb3J0IG9mIGJvZ3VzIG1vdmVtZW50LiBkb24ndCBoYW5kbGUuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICB2YXIgaXNPYnN0cnVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMucGFyZW50T2JqZWN0Lm9iZXlzUGh5c2ljcykge1xuICAgICAgICAvLyAgICAgdmFyIG5ld1JlY3QgPSBuZXcgUmVjdGFuZ2xlKGludGVuZGVkWCwgaW50ZW5kZWRZLCB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCwgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0KTtcbiAgICAgICAgLy8gICAgIGlzT2JzdHJ1Y3RlZCA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKGMgPT4gXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICE9PSB0aGF0LnBhcmVudE9iamVjdCAmJiBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhuZXdSZWN0KSkubGVuZ3RoID4gMDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICghaXNPYnN0cnVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5pbnRlbmRlZFBvc2l0aW9uID0ge3g6IGludGVuZGVkWCwgeTogaW50ZW5kZWRZfTtcbiAgICAgICAgICAgIC8vdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueCA9IGludGVuZGVkWDtcbiAgICAgICAgICAgIC8vdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueSA9IGludGVuZGVkWTtcbiAgICAgICAgICAgIC8vIGFsd2F5cyB0cmlnZ2VyIGRpcnR5IHdoZW4gbW92aW5nXG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9lbmVteV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4vbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV059IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQTEFZRVJfU1BSSVRFX01BUCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQfSBmcm9tIFwiLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShQTEFZRVJfU1BSSVRFX01BUCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKEZBQ0lOR19ET1dOKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gVE9ETzogYWRkIHRoaXMgdG8gZ2FtZU9iamVjdHM/XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgc3VwZXIub25BbmltYXRlZCgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTdGF0ZSh0aGlzLm1vdmFibGUuZmFjaW5nKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ib3VuZHMueCA9IHRoaXMuaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuYm91bmRzLnkgPSB0aGlzLmluaXRpYWxZO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICB9XG5cbiAgICBoYW5kbGVHYW1lQ29tbWFuZChjb21tYW5kLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAoY29tbWFuZCA9PSAnRklSRScpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBFbmVteUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZUNoYXJhY3Rlcih0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCksIHRoaXMubW92YWJsZS5mYWNpbmcsIDgsIFBST0pFQ1RJTEVfU1BSSVRFX01BUCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChwcm9qZWN0aWxlKTtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4vbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBkaXJlY3Rpb24sIG1heERpc3RhbmNlLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcbiAgICAgICAgdGhpcy50cmF2ZWxTcGVlZCA9ICgxIC8gNi4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IHVwIG91ciBzcHJpdGVcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdXAgb3VyIGFiaWxpdHkgdG8gbW92ZVxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBvYmplY3RzXG4gICAgICAgIC8vIFRPRE86IGFkZCB0aGlzIHRvIGNoaWxkcmVuP1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB0aGlzLm1vdmFibGUubW92ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCsrO1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZVRyYXZlbGVkID49IHRoaXMubWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50cmF2ZWxDb3VudGVyID49IHRoaXMudHJhdmVsU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciAtIHRoaXMudHJhdmVsU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGludGVyc2VjdHNQb2ludCh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgeCA+PSB0aGlzLnggJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgeSA+PSB0aGlzLnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzKHJlY3RhbmdsZSkge1xuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8PSByZWN0YW5nbGUueCB8fFxuICAgICAgICAgICAgdGhpcy54ID49IHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8PSByZWN0YW5nbGUueSB8fFxuICAgICAgICAgICAgdGhpcy55ID49IHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHZpZXdXLCB2aWV3SCk7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xlYXJTY3JlZW4oKSB7XG4gICAgICAgIC8vIGNsZWFyIHRoZSBzY3JlZW4gYW5kIHNldCBjdXJzb3IgYXQgMCwwXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpc09uU2NyZWVuKGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmlzVmlzaWJsZSAmJiBjaGFyYWN0ZXIuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnZpZXdwb3J0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZU9iamVjdHMgPSB0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpO1xuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cblxuICAgIGdldElzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlydHk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gICAgLy8gZm9ybWF0IG9mIGEgc3ByaXRlTWFwOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCI8c3RhdGU+XCI6IFt7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9LFxuICAgIC8vICAgICAgICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9IF1cbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3Ioc3ByaXRlTWFwLCBwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVNYXAgPSBzcHJpdGVNYXA7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmJvdW5kcztcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSB0aGlzLnN0YXRlRWxhcHNlZCArIHRpbWVFbGFwc2VkO1xuICAgICAgICBcbiAgICAgICAgdmFyIHByZXZGcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRGcmFtZSgpO1xuICAgICAgICBpZiAodGhpcy5mcmFtZSAhPSBwcmV2RnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIGRvIGNvbGxpZGluZyB3aXRoIHNwcml0ZXNcbiAgICAgICAgLy90aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgdmFyIGZpcnN0Um93ID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdFJvdyA9IDA7XG4gICAgICAgIHZhciBmaXJzdENvbCA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RDb2wgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgY2hhcmFjdGVyUm93c1tyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tyb3ddLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgJiYgc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdyA9IE1hdGgubWluKGZpcnN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gTWF0aC5tYXgobGFzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDb2wgPSBNYXRoLm1pbihmaXJzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbCA9IE1hdGgubWF4KGxhc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBmZWVscyBkaXJ0eVxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCA9IGxhc3RDb2wgLSBmaXJzdENvbCArIDE7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCA9IGxhc3RSb3cgLSBmaXJzdFJvdyArIDE7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDdXJyZW50RnJhbWUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgdG90YWxUaW1lID0gc3ByaXRlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJWYWwpIHsgcmV0dXJuIGFjYyArIGN1clZhbFtcImRpc3BsYXlUaW1lXCJdOyB9LCAwKTtcbiAgICAgICAgdmFyIGxlZnRvdmVyID0gdGhpcy5zdGF0ZUVsYXBzZWQgJSB0b3RhbFRpbWU7XG4gICAgICAgIHZhciBmcmFtZSA9IDA7XG4gICAgICAgIHZhciB0aW1lQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZyYW1lID0gaTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVkdWNlKClcbiAgICAgICAgICAgIHZhciBkaXNwbGF5VGltZSA9IHNwcml0ZXNbaV1bXCJkaXNwbGF5VGltZVwiXTtcbiAgICAgICAgICAgIGlmICh0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZSA+IGxlZnRvdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lQWNjdW11bGF0b3IgPSB0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFgoKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJDb2wgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgLy8gYXNzdW1lcyB0aGUgZmlyc3Qgcm93IGlzIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSBvdGhlciBmcmFtZXNcbiAgICAgICAgICAgIG91ckNvbCA9IG91ckNvbCAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93c1swXS5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJDb2w7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRZKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG91clJvdyA9IG91clJvdyAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93cy5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJSb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSByb3cgLSB0aGlzLmdldEFuY2hvcmVkWSgpO1xuICAgICAgICB2YXIgb3VyQ29sID0gY29sIC0gdGhpcy5nZXRBbmNob3JlZFgoKTtcblxuICAgICAgICBpZiAob3VyUm93ID49IDAgJiYgXG4gICAgICAgICAgICBvdXJDb2wgPj0gMCAmJiBcbiAgICAgICAgICAgIG91clJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICBvdXJDb2wgPCBjaGFyYWN0ZXJSb3dzW291clJvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5jaGFyQXQob3VyQ29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsImV4cG9ydCBjbGFzcyBUaHJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGZ1bmN0aW9uUG9pbnRlcikge1xuICAgICAgICB0aGlzLmZ1bmN0aW9uUG9pbnRlciA9IGZ1bmN0aW9uUG9pbnRlcjtcbiAgICB9XG5cbiAgICBzdGFydChkZXNpcmVkRnJhbWVyYXRlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgPSAxMDAwLyBkZXNpcmVkRnJhbWVyYXRlO1xuXG4gICAgICAgIHZhciBpbnRlcm5hbFJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGF0LmZ1bmN0aW9uUG9pbnRlcigpO1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGNhbGwgdGFrZXMgYSB3aGlsZSwgcmVkdWNlIHRoZSBkZWxheSB1bnRpbCB0aGUgbmV4dCBleGVjdXRlXG4gICAgICAgICAgICB2YXIgbmV4dERlbGF5ID0gTWF0aC5tYXgoMCwgbWluaW11bU1pbGxzZWNQZXJGcmFtZSAtIChhZnRlciAtIG5vdykpO1xuICAgICAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgbmV4dERlbGF5KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsIGNhbGxcbiAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgMCk7IFxuICAgIH1cbn0iLCJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHtLZXlNYXB9IGZyb20gXCIuL2tleV9tYXAuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9uSGFuZGxlciwgV2luQW5pbWF0aW9uLCBUZXh0QW5pbWF0b259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtFbmVteUNoYXJhY3Rlcn0gZnJvbSBcIi4vZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5cbi8vIE9wdGlvbnMgdGhhdCBjb250cm9sIHRoZSBmbG93IG9mIHRoZSBnYW1lXG52YXIgZ2xvYmFsT3B0aW9ucyA9IHtcbiAgICAncGxheUluQnJvd3Nlcic6IHRydWUsXG4gICAgJ2RyYXdGUFMnOiAxMCxcbiAgICAndXBkYXRlRlBTJzogMTAsXG4gICAgJ3ZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAndmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbnVtRW5lbWllcyc6IDEwXG59O1xuXG5mdW5jdGlvbiBydW4oKSB7ICBcbiAgICB2YXIgdGhHYW1lID0gbmV3IFRyZWFzdXJlSHVudEdhbWUoKTtcbiAgICB0aEdhbWUuaW5pdGlhbGl6ZShnbG9iYWxPcHRpb25zKTtcbn1cblxudmFyIGdhbWVPYmplY3RzID0gbmV3IEdhbWVPYmplY3RzKCk7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUh1bnRHYW1lIGV4dGVuZHMgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNpYyBnYW1lIG9iamVjdHNcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoTEVWRUxfVE9XTik7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IEtleU1hcCgpO1xuXG4gICAgICAgIHRoaXMuU1RBVEVfUlVOTklORyA9IDA7XG4gICAgICAgIHRoaXMuU1RBVEVfV0lOTk5JTkcgPSAxO1xuICAgICAgICB0aGlzLlNUQVRFX0RFQUQgPSAyO1xuXG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIHByb2JhYmx5IHR1cm4gaW50byBhIHN0YXRlIG1hY2hpbmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfUlVOTklORztcblxuICAgICAgICB0aGlzLkVYUExPU0lPTl9TUEVFRCA9IDIwMDA7IC8vIG51bSBtaWxsaXNlY29uZHMgYmV0d2VlbiBmcmFtZXMgb2YgV0lOIGV4cGxvc2lvbiAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gLTE7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGNoYXJhY3RlciwgbWFwKSB7XG4gICAgICAgIHZhciB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICB2YXIgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG5cbiAgICAgICAgLy8gZG9uJ3QgbGV0IHRoZW0gb3ZlcmxhcFxuICAgICAgICB3aGlsZSAobWFwLmdldElzV2FsbCh4LCB5KSB8fCAoY2hhcmFjdGVyLmdldFgoKSA9PSB4ICYmIGNoYXJhY3Rlci5nZXRZKCkgPT0geSkpIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICBjcmVhdGVHb2FsKGNoYXJhY3RlciwgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoY2hhcmFjdGVyLCBtYXApO1xuICAgICAgICByZXR1cm4gbmV3IFN0YXRpY0NoYXJhY3Rlcihnb2FsUGxhY2VtZW50LngsIGdvYWxQbGFjZW1lbnQueSwgJyQnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShjaGFyYWN0ZXIsIG1hcCkge1xuICAgICAgICAvLyBjcmVhdGUgZW5lbWllc1xuICAgICAgICB2YXIgZW5lbXlQbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbU1hcFBsYWNlbWVudChjaGFyYWN0ZXIsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cbiAgICBcbiAgICByZXNldExldmVsKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICBnYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5jbGVhckFuaW1hdGlvbnMoKTtcblxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5nb2FsID0gdGhpcy5jcmVhdGVHb2FsKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbE9wdGlvbnNbJ251bUVuZW1pZXMnXTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW5lbXkgPSB0aGlzLmNyZWF0ZUVuZW15KHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcENoYXJhY3RlcnMgPSB0aGlzLm1hcC5nZXRNYXBDaGFyYWN0ZXJzKCk7XG5cbiAgICAgICAgLy8gYWRkIGdhbWUgb2JqZWN0cyB0byByZW5kZXJlclxuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jaGFyYWN0ZXIpO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5nb2FsKTtcbiAgICAgICAgdGhpcy5lbmVtaWVzLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG4gICAgICAgIHRoaXMubWFwLmdldE1hcENoYXJhY3RlcnMoKS5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuXG4gICAgICAgIC8qdGhpcy5kb29yID0gbmV3IERvb3J3YXlDaGFyYWN0ZXIoMiwgMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmRvb3IpOyovXG4gICAgICAgIFxuICAgICAgICAvLyBjZW50ZXIgb24gdGhlIGNoYXJhY3RlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcblxuICAgICAgICAvLyBmaXJzdCBkcmF3IG9mIHJlbmRlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihnYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBhIGJsb2NraW5nIGFuaW1hdGlvbiB0aGF0ICdleHBsb2RlcycgdGhlIFxuICAgIC8vLi4uZ29hbCBpbnRvIGFuIGV4cGxvc2lvblxuICAgIHNwYXduRXhwbG9zaW9ucyhub3csIGNlbnRlcmVkQ2hhcmFjdGVyKSB7XG4gICAgICAgIC8vIHNwYXduIGEgbmV3IGFuaW1hdGlvbiBiYXNlZCBvbiBFWFBMT1NJT05fU1BFRURcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPiB0aGlzLkVYUExPU0lPTl9TUEVFRCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKGNlbnRlcmVkQ2hhcmFjdGVyLmdldFgoKSwgY2VudGVyZWRDaGFyYWN0ZXIuZ2V0WSgpLCB0aGlzLm1hcC53aWR0aCwgdGhpcy5tYXAuaGVpZ2h0KSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gbm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tEZWFkQ29uZGl0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX0RFQUQ7XG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMuY2hhcmFjdGVyLmdldFgoKTtcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKHgsIHksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFRleHRBbmltYXRvbih4LCB5LCBcIkRFQURcIikpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5nZXRYKCkgPT0gdGhpcy5nb2FsLmdldFgoKSAmJiB0aGlzLmNoYXJhY3Rlci5nZXRZKCkgPT0gdGhpcy5nb2FsLmdldFkoKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcblxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKHRoaXMuZ29hbC5nZXRYKCksIHRoaXMuZ29hbC5nZXRZKCksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFRleHRBbmltYXRvbih0aGlzLmdvYWwuZ2V0WCgpLCB0aGlzLmdvYWwuZ2V0WSgpLCBcIldJTlwiKSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRMZXZlbFRpbWUgPSBEYXRlLm5vdygpICsgNjAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KCkge1xuICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgdmFyIGdhbWVDb21tYW5kID0gdGhpcy5rZXlNYXAuZ2V0R2FtZUNvbW1hbmQoa2V5LnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7ICAgXG4gICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5oYW5kbGVHYW1lQ29tbWFuZChnYW1lQ29tbWFuZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrV2luQ29uZGl0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9XSU5OSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX0RFQUQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICB0aGlzLnNwYXduRXhwbG9zaW9ucyhub3csIHRoaXMuY2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRMZXZlbFRpbWUgPj0gMCAmJiBub3cgPiB0aGlzLnJlc2V0TGV2ZWxUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIGN1cnJlbnRseSBhZGRzIGFsbCB0aGUgY2hhcmFjdGVycyB0byB0aGUgcmVuZGVyZXIgc28gaXQgc2hvdWxkIGJlIFxuICAgICAgICAvLy4uLmFmdGVyIHRoZSByZW1vdmVBbGxPYmplY3RzKCkgY2FsbCBhYm92ZS4gTmVlZCB0byBkZWNpZGUgaWYgdGhpcyBpc1xuICAgICAgICAvLy4uLmFuIHVwZGF0ZSBmdW5jdGlvbiBvciBhIGRyYXcgZnVuY3Rpb24uLi5cbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgICAgIFxuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICBsYXN0VXBkYXRlID0gbm93O1xuXG4gICAgICAgICAgICB0aGF0LmhhbmRsZUlucHV0KCk7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJhd0Z1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgIHRoYXQuZHJhd0hlbHAodGhhdC5jaGFyYWN0ZXIuZ2V0Q2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSh1cGRhdGVGdW5jLCBkcmF3RnVuYywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gZG8gdGhpcyBhZnRlciBpbml0aWFsaXppbmcgcGFyZW50XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlciA9IG5ldyBBbmltYXRpb25IYW5kbGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoKTtcbiAgICB9XG5cbiAgICBkcmF3SGVscChjaGFyYWN0ZXJTeW1ib2wpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICdVc2UgRmlyZWZveCB0byBwbGF5IGlmIHlvdSBhcmVuXFwndCBhbHJlYWR5ISFcXG4nXG4gICAgICAgIC8qdmFyIG91dHB1dCA9ICdJbnN0cnVjdGlvbnM6IFVzZSBGaXJlZm94IG9yIENocm9tZSAoRmlyZWZveCByZWR1Y2VzIGZsaWNrZXJpbmchKVxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICdCcmVhayBvdXQgdGhlIGRldiB0b29scyBpbnRvIGEgc2VwYXJhdGUgd2luZG93IGFuZCB0aGVuIGNsaWNrIG9uIG15IGFjdHVhbCB3ZWIgcGFnZSB0byBlbmFibGUgY29udHJvbHMuXFxuXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ1VzZSB5b3VyIFwiJyArIGNoYXJhY3RlclN5bWJvbCArICdcIiBjaGFyYWN0ZXIgYW5kIGdvIGZpbmQgdGhlIHRyZWFzdXJlICgkKSBidXQgd2F0Y2ggb3V0IGZvciBiYWQgZ3V5cy4uLlxcblxcbic7IFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBDb250cm9sICB8IEFjdGlvbiB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wtLS0tLS0tLS0tfC0tLS0tLS0tfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHNwYWNlYmFyIHwgRklSRSEgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCB3ICAgICAgICB8IFVwICAgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgZCAgICAgICAgfCBSaWdodCAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHMgICAgICAgIHwgRG93biAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBhICAgICAgICB8IExlZnQgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgYyAgICAgICAgfCBRdWl0ICAgfFxcbic7Ki9cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICB9XG59XG5cbnJ1bigpOyIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IF1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUFJPSkVDVElMRV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMiddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjQnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI4J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJFJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFtGQUNJTkdfTEVGVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUMxJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfVVBdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCMyddIH1dLFxuICAgICAgICBbRkFDSU5HX1JJR0hUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjcnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19ET1dOXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QkQnXSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNQVBfSE9VU0UgPSBbXG5cIiAgICAgX19fX19fX19fICAgICAgXCIsXG5cIiAgIF8vICAgICAgICAgXFxcXF8gICBcIixcblwiIF8vICAgICAgICAgICAgIFxcXFxfIFwiLFxuXCIvX19fX19fX19fX19fX19fX19cXFxcXCIsXG5cIiB8ICAgICAgICAgICAgICAgfCAgXCIsXG5cIiB8ICAgICA9PT09PSAgICAgfCAgXCIsXG5cIiB8IHwrfCAgfCB8ICB8K3wgfCAgXCIsXG5cIiB8X19fX19ffCB8X19fX19ffCAgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX0JVU0ggPSBbXG5cIiAjIyMgXCIsXG5cIiMjIyMjXCIsXG5cIiAjIyMgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX1RSRUUgPSBbXG5cIiAgICgqKikgICAgICAgXCIsXG5cIiAoKioqKioqKSAgXCIsXG5cIigqKioqKioqKikgXCIsXG5cIiAgKCoqKiopICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAgfHwgICAgXCIsXG5cIiAgIC9fX1xcXFwgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IExFVkVMX1RPV04gPSB7XG5cIndpZHRoXCI6IDEyMixcblwiaGVpZ2h0XCI6IDYwLFxuXCJtYXBfb2JqZWN0c1wiOiBbXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzNywgXCJ5XCI6IDEzIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiAxMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMyLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzOCwgXCJ5XCI6IDkgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDkwLCBcInlcIjogMTggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMTAwLCBcInlcIjogMTYgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDUwLCBcInlcIjogMjIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogNjAsIFwieVwiOiAyMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDc4LCBcInlcIjogMjMgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDcwLCBcInlcIjogNDIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogODAsIFwieVwiOiA0MCB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDIwLCBcInlcIjogODAgfSxcbiAgICBcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDQwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDExLCBcInlcIjogMzggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTAsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDMyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzAsIFwieVwiOiAzMiB9LFxuICAgIFxuXVxufTsiLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5pc1BoeXNpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIocm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB3aXRoT2JqZWN0LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
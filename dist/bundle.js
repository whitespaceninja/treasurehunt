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
/* harmony import */ var _static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_character.js */ "./src/static_character.js");


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
                characters.push(new _static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](this.centerX - x_offset, this.centerY, this.text.charAt(i)));
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
                var character = new _static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, '*');
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
        if (this.animations.length > 0) {
            // clear everything (TODO: we shouldn't have to do this)
            gameObjects.removeAllObjects();
        }

        for (var i = this.animations.length - 1; i >= 0 ; i--) {
            var animation = this.animations[i];
            animation.update(timeNow, timeElapsed);

            if (animation.isExpired()) {
                // remove it from our list
                this.animations.splice(i, 1);
            } else {
                const characters = this.animations[i].spawnRenderables();
                if (characters != null && characters.length > 0) {
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
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateable.js */ "./src/updateable.js");



// Base class for every type of renderable game object
class Character extends _updateable_js__WEBPACK_IMPORTED_MODULE_1__["Updateable"] {
    constructor(initialX, initialY) {
        super();

        this.initialX = initialX;
        this.initialY = initialY;
        this.z = 0; // default to z axis pos being 0
        this.bounds = new _rectangle_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](initialX, initialY, 1, 1);
        this.isVisible = true;
        this.isPhysical = false;
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

    collide(withObject) {
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
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateable.js */ "./src/updateable.js");


class Collider extends _updateable_js__WEBPACK_IMPORTED_MODULE_0__["Updateable"] {
    constructor(parentObject) {
        super();
        
        this.parentObject = parentObject;
    }

    checkCollision(gameObjects) {
        var parent = this.parentObject;
        // compare our parent object bounds to every other object's bounds as long
        // as they are physical or have their own collider object
        var collisionObjects = gameObjects.objects.filter(obj => obj !== parent &&
                                                          (obj.isPhysical || obj.hasOwnProperty('collider')) && 
                                                          obj.getBounds().intersects(parent.getBounds()));
        if (collisionObjects.length > 0) {
            // collide with each other
            collisionObjects.map(obj => obj.collide(parent) || parent.collide(obj));
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
/* harmony import */ var _math_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math_extensions.js */ "./src/math_extensions.js");
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");








class EnemyCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this);
        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_4__["Movable"](this);
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_2__["Collider"](this);

        this.children.push(this.sprite);
        this.children.push(this.movable);
        this.children.push(this.collider);
    }

    think() {
        var random = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_5__["randomNumber"])(4);
        var direction = 'NONE';
        switch (random) {
            case 1: direction = _facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_LEFT"]; break;
            case 2: direction = _facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_RIGHT"]; break;
            case 3: direction = _facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_DOWN"]; break;
            case 4: direction = _facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_UP"]; break;
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
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");





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
        gameObjects.objects.filter(x => x instanceof _collider_js__WEBPACK_IMPORTED_MODULE_3__["Collider"]).map(x => x.checkCollision(gameObjects));

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

        case 'h':
        case '72':
            return 'HELP';
        
        case '13':
            return 'ENTER';
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _static_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_character */ "./src/static_character.js");
/* harmony import */ var _menu_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_actions.js */ "./src/menu_actions.js");
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facing.js */ "./src/facing.js");




class Menu {
    constructor(menuSpec, viewport, zPosition) {
        this.spec = menuSpec;
        this.viewport = viewport;
        this.characters = [];
        this.selectionCharacters = [];
        this.zPosition = zPosition;
        this.selectedOption = 0;
    }

    getNumOptions() {
        return this.spec.options.length;
    }

    setOptionVisibility() {
        // set the visibility of the selection arrows at the beginning of each line
        if (this.selectionCharacters.length > 0) {
            this.selectionCharacters.map(c => c.isVisible = false);
            this.selectionCharacters[this.selectedOption].isVisible = true;
        }
    }

    handleInput(gameCommand) {
        let action = _menu_actions_js__WEBPACK_IMPORTED_MODULE_1__["ACTION_NONE"];
        let newMenu = null;

        if (gameCommand == _facing_js__WEBPACK_IMPORTED_MODULE_2__["FACING_DOWN"]) {
            // scroll through menu options
            this.selectedOption += 1;
            this.selectedOption = this.selectedOption % this.getNumOptions();
            this.setOptionVisibility();
        } else if (gameCommand == _facing_js__WEBPACK_IMPORTED_MODULE_2__["FACING_UP"]) {
            // scroll through menu options
            this.selectedOption -= 1;
            while (this.selectedOption < 0) {
                this.selectedOption += this.getNumOptions();
            }
            this.setOptionVisibility();
        } else {
            // return the option that is currently selected, if it matches the gameCommand
            let curOption = this.spec.options[this.selectedOption];
            let selectedAction = curOption.actionMap.filter(o => o.key == gameCommand);
            if (selectedAction.length > 0) {
                action = selectedAction[0].action;
                if (action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_1__["ACTION_PUSH_MENU"]) {
                    newMenu = selectedAction[0].menu;
                }
            }
        }

        return {action: action, newMenu: newMenu};
    }

    // creates a character to render in the menu, and handles overhead for it
    createMenuChar(gameObjects, x, y, char) {
        // add everything in
        let character = new _static_character__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, char);
        // make sure we draw on top
        character.z = this.zPosition;
        gameObjects.addObject(character);

        // keep these around in memory so we can remove them later
        this.characters.push(character);

        return character;
    }

    drawMenuOutline(gameObjects, start_x, start_y, textW, textH) {
        // draw menu box container
        this.createMenuChar(gameObjects, start_x - 1, start_y - 1, '*');
        this.createMenuChar(gameObjects, start_x - 1, start_y + textH, '*');
        this.createMenuChar(gameObjects, start_x + textW, start_y - 1, '*');
        this.createMenuChar(gameObjects, start_x + textW, start_y + textH, '*');
        for (var col = 0; col < textW; col++) {
            this.createMenuChar(gameObjects, start_x + col, start_y - 1, '-');
            this.createMenuChar(gameObjects, start_x + col, start_y + textH, '-');
        }
        for (var row = 0; row < textH; row++) {
            this.createMenuChar(gameObjects, start_x - 1, start_y + row, '|');
            this.createMenuChar(gameObjects, start_x + textW, start_y + row, '|');
        }
    }

    show(gameObjects) {
        const left = this.viewport.x;
        const bottom = this.viewport.y;
        const width = this.viewport.width;
        const height = this.viewport.height;

        const summaryText = this.spec.summaryText;
        const summaryTextLen = summaryText.length;
        const wrapW = Math.ceil(width * 0.8);

        // figure out x positions
        let start_x = left + Math.round((width - wrapW) / 2);

        // figure out y positions
        let start_y = bottom + Math.round(height * 0.8);

        // summary is text at top
        const numSummaryLines = Math.ceil(summaryTextLen / wrapW);

        // add blank line between
        const numSpacingLines = 1; 
        
        // option lines are selectable by user
        const numOptionLines = this.spec.options.filter(o => o.optionText != null).length;

        const numLines = numSummaryLines + numOptionLines + numSpacingLines; 

        // if we will go over the bottom part of the screen, bump up a notch
        const offset = Math.max(0, (start_y + numLines + 1) - (bottom + height));
        start_y -= offset;

        // draw menu box container
        this.drawMenuOutline(gameObjects, start_x, start_y, wrapW, numLines);

        // draw the inside of the menu box container, spaces and text
        for (var row = 0; row < numLines; row++) {
            for (var col = 0; col < wrapW; col++) {
                const x = start_x + col;
                const y = start_y + row;
                let char = ' ';
                let isSelectionChar = false;

                if (row < numSummaryLines) {
                    const textPos = col + (row * wrapW);
                    if (col < summaryTextLen) {
                        char = summaryText[textPos];
                    }
                } else if (row >= numSummaryLines + numSpacingLines) {
                    const thisOptionIndex = row - numSummaryLines - numSpacingLines;
                    const curOption = this.spec.options[thisOptionIndex];
                    const curText = "- " + curOption.optionText;
                    
                    if (col < curText.length) {
                        char = curText[col];

                        if (col == 0) {
                            isSelectionChar = true;
                        }
                    }
                }

                const created = this.createMenuChar(gameObjects, x, y, char);
                if (isSelectionChar) {
                    this.selectionCharacters.push(created);
                }
            }
        }

        this.setOptionVisibility();
    }

    hide(gameObjects) {
        this.characters.map(c => gameObjects.removeObject(c));
        this.characters = [];
        this.selectionCharacters = [];
    }
}

/***/ }),

/***/ "./src/menu_actions.js":
/*!*****************************!*\
  !*** ./src/menu_actions.js ***!
  \*****************************/
/*! exports provided: ACTION_NONE, ACTION_BACK_TO_GAME, ACTION_PUSH_MENU, ACTION_POP_MENU, ACTION_INCREASE_VIEWPORT_H, ACTION_INCREASE_VIEWPORT_W */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_NONE", function() { return ACTION_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_BACK_TO_GAME", function() { return ACTION_BACK_TO_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_PUSH_MENU", function() { return ACTION_PUSH_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_POP_MENU", function() { return ACTION_POP_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INCREASE_VIEWPORT_H", function() { return ACTION_INCREASE_VIEWPORT_H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INCREASE_VIEWPORT_W", function() { return ACTION_INCREASE_VIEWPORT_W; });
const ACTION_NONE = 0;
const ACTION_BACK_TO_GAME = 1;
const ACTION_PUSH_MENU = 2;
const ACTION_POP_MENU = 3;
const ACTION_INCREASE_VIEWPORT_H = 4;
const ACTION_INCREASE_VIEWPORT_W = 5;

/***/ }),

/***/ "./src/menu_specs.js":
/*!***************************!*\
  !*** ./src/menu_specs.js ***!
  \***************************/
/*! exports provided: SETTINGS_MENU, HELP_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_MENU", function() { return SETTINGS_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_MENU", function() { return HELP_MENU; });
/* harmony import */ var _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_actions.js */ "./src/menu_actions.js");


const SETTINGS_MENU = {
    type: "OPTIONS",
    summaryText: "Configure your game experience.",
    options: [
        {
            optionText: "Increase Viewport Height",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_INCREASE_VIEWPORT_H"]}]
        },
        {
            optionText: "Increase Viewport Width",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_INCREASE_VIEWPORT_W"]}]
        },
        {
            optionText: "Back",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_POP_MENU"]}]
        }
    ]
}

const HELP_MENU = {
    type: 'OPTIONS',
    summaryText: "Welcome to AsciiWeb! Firefox is the best browser for this game. Press 'h' to pause the game and Spacebar to FIRE.",
    options: [
        {
            optionText: "Resume",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_BACK_TO_GAME"]}]
        },
        {
            optionText: "Options",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_PUSH_MENU"], menu: SETTINGS_MENU}]
        }
    ]
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
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateable.js */ "./src/updateable.js");



class Movable extends _updateable_js__WEBPACK_IMPORTED_MODULE_1__["Updateable"] {
    constructor(parentObject) {
        super();
        
        this.parentObject = parentObject;
        this.facing = _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"];
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

        switch(direction) {
        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]: 
            intendedX--; 
            this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]:
            intendedX++; 
            this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]:
            intendedY--; 
            this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]);
            break;

        case _facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]:
            intendedY++; 
            this.setFacing(_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]);
            break;

        default:
            // must be some sort of bogus movement. don't handle.
            return
        }

        this.parentObject.intendedPosition = {x: intendedX, y: intendedY};
        this.parentObject.onAnimated();        
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
/* harmony import */ var _treasure_character_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treasure_character.js */ "./src/treasure_character.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");










class PlayerCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_6__["Character"] {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;
        this.inventory = [];

        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__["PLAYER_SPRITE_MAP"], this);
        this.sprite.setState(_facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_DOWN"]);
        this.children.push(this.sprite);

        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_3__["Movable"](this);
        this.children.push(this.movable);

        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_4__["Collider"](this);
        this.children.push(this.collider);
    }

    onAnimated() {
        super.onAnimated();
        this.sprite.setState(this.movable.facing);
    }

    reset() {
        this.bounds.x = this.initialX;
        this.bounds.y = this.initialY;
        this.health = 100;
        this.inventory = [];
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

        if (withObject instanceof _treasure_character_js__WEBPACK_IMPORTED_MODULE_7__["TreasureCharacter"]) {
            this.inventory.push(withObject.treasureType);
            withObject.removeFromGameObjects = true;
        }        
    }

    fireProjectile(gameObjects) {
        var projectile = new _projectile_character_js__WEBPACK_IMPORTED_MODULE_0__["ProjectileCharacter"](this.getX(), this.getY(), this.movable.facing, 8, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__["PROJECTILE_SPRITE_MAP"]);
        gameObjects.addObject(projectile);
    }

    hasTreasure(treasureType) {
        return this.inventory.filter(t => t == treasureType).length > 0;
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
/* harmony import */ var _wall_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wall_character.js */ "./src/wall_character.js");






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
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
        this.children.push(this.collider);
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

    collide(withObject) {
        if (withObject instanceof _wall_character_js__WEBPACK_IMPORTED_MODULE_4__["WallCharacter"]) {
            this.removeFromGameObjects = true;
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
        // reverse sort by z axis
        renderableObjects.sort((a, b) => b.z - a.z);
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
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateable.js */ "./src/updateable.js");


class Sprite extends _updateable_js__WEBPACK_IMPORTED_MODULE_0__["Updateable"] {
    // format of a spriteMap:
    // {
    //     "<state>": [{ "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] },
    //                 { "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] } ]
    // }
    constructor(spriteMap, parentObject) {
        super();
        
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureHuntGame", function() { return TreasureHuntGame; });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _key_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_map.js */ "./src/key_map.js");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.js */ "./src/animations.js");
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player_character.js */ "./src/player_character.js");
/* harmony import */ var _enemy_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy_character.js */ "./src/enemy_character.js");
/* harmony import */ var _game_objects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game_objects.js */ "./src/game_objects.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _math_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./math_extensions.js */ "./src/math_extensions.js");
/* harmony import */ var _treasure_character_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treasure_character.js */ "./src/treasure_character.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu_actions.js */ "./src/menu_actions.js");
/* harmony import */ var _menu_specs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu_specs.js */ "./src/menu_specs.js");















// Options that control the flow of the game
var globalOptions = {
    'playInBrowser': true,
    'drawFPS': 10,
    'updateFPS': 10,
    'viewportWidth': 40,
    'minViewportWidth': 40,
    'maxViewportWidth': 60,
    'viewportHeight': 14,
    'minViewportHeight': 14,
    'maxViewportHeight': 20,
    'numEnemies': 10
};

function run() {  
    var thGame = new TreasureHuntGame();
    thGame.initialize(globalOptions);
}

var gameObjects = new _game_objects_js__WEBPACK_IMPORTED_MODULE_5__["GameObjects"]();

class TreasureHuntGame extends _game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
    constructor() {
        // set up basic game objects
        super();

        this.map = new _map_js__WEBPACK_IMPORTED_MODULE_7__["Map"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__["LEVEL_TOWN"]);
        this.keyMap = new _key_map_js__WEBPACK_IMPORTED_MODULE_1__["KeyMap"]();
        this.menuStack = [];

        this.STATE_RUNNING = 0;
        this.STATE_WINNNING = 1;
        this.STATE_DEAD = 2;
        this.STATE_MENU = 3;

        // this should probably turn into a state machine
        this.state = this.STATE_RUNNING;

        this.EXPLOSION_SPEED = 2000; // num milliseconds between frames of WIN explosion     
        
        this.lastExplosionTime = Date.now();

        this.resetLevelTime = -1;
    }

    getRandomMapPlacement(gameObjects, map) {
        var x = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.width - 1);
        var y = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.height - 1);

        // don't let them overlap
        while (gameObjects.objects.filter(obj => obj.isPhysical && 
                                                 obj.getX() === x && 
                                                 obj.getY() === y).length > 0) {
            x = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.width - 1);
            y = Object(_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // start at the top left of the map
        var player = new _player_character_js__WEBPACK_IMPORTED_MODULE_3__["PlayerCharacter"](1, 1);
        player.reset();
        return player;
    }

    createGoal(gameObjects, map) {
        var goalPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _treasure_character_js__WEBPACK_IMPORTED_MODULE_9__["TreasureCharacter"](goalPlacement.x, goalPlacement.y, '$', 'levelGoal');
    }

    createEnemy(gameObjects, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _enemy_character_js__WEBPACK_IMPORTED_MODULE_4__["EnemyCharacter"](enemyPlacement.x, enemyPlacement.y, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__["ENEMY_SPIKEY_SPRITE_MAP"]);
    }
    
    resetLevel() {
        this.state = this.STATE_RUNNING;

        // start from scratch
        gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        // create our player
        this.character = this.createPlayer();
        gameObjects.addObject(this.character);

        // add a levelGoal to this level
        gameObjects.addObject(this.createGoal(gameObjects, this.map));

        // add some enemies
        for (var i = 0; i < globalOptions['numEnemies']; i++) {
            gameObjects.addObject(this.createEnemy(gameObjects, this.map));            
        }

        // add our map objects
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

    createInitialExplosion(x, y, text) {
        this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["TextAnimaton"](x, y, text));
        this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_2__["WinAnimation"](x, y, this.map.width, this.map.height));
    }

    checkDeadCondition() {
        if (this.character.health <= 0) {
            this.state = this.STATE_DEAD;
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "DEAD");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.hasTreasure('levelGoal')) {
            this.state = this.STATE_WINNING;
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "WIN");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    handleInput() {
        var key = this.getLastKeypress();
        if (null !== key) {
            var gameCommand = this.keyMap.getGameCommand(key.toString());

            if (gameCommand == 'QUIT') {
                // TODO: bring up a QUIT menu. process.exit() doesn't work in browser
                //process.exit();
            } else if (this.state == this.STATE_RUNNING) {   
                if (gameCommand == 'HELP') {
                     // push menu state on
                     this.prevState = this.state;
                     this.state = this.STATE_MENU;
                     this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](_menu_specs_js__WEBPACK_IMPORTED_MODULE_12__["HELP_MENU"], this.renderer.viewport, 1);
                     this.menu.show(gameObjects);
                } else {
                    // update character movement
                    this.character.handleGameCommand(gameCommand, gameObjects);
                    this.renderer.centerViewportOn(this.character, this.map);
                }
            } else if (this.state == this.STATE_MENU) {
                let actionObj = this.menu.handleInput(gameCommand);
                if (actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_BACK_TO_GAME"]) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(gameObjects);
                    this.menu = null;
                } else if (actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_PUSH_MENU"]) {
                    // hide current menu and push it onto stack
                    this.menu.hide(gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](actionObj.newMenu, this.renderer.viewport, 1);
                    this.menu.show(gameObjects);
                } else if (actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_POP_MENU"]) {
                    // hide current menu
                    this.menu.hide(gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(gameObjects);
                } else if (actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"] || 
                           actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_W"]) {
                    if (actionObj.action == _menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"]) {
                        // currently this breaks if we do it by an odd number
                        this.renderer.viewport.height += 2;
                        if (this.renderer.viewport.height > globalOptions['maxViewportHeight']) {
                            this.renderer.viewport.height = globalOptions['minViewportHeight'];
                        }
                    } else {
                        this.renderer.viewport.width += 4;
                        if (this.renderer.viewport.width > globalOptions['maxViewportWidth']) {
                            this.renderer.viewport.width = globalOptions['minViewportWidth'];
                        }
                    }
                    
                    // redraw menu
                    this.menu.hide(gameObjects);
                    this.menu.show(gameObjects);

                    // center viewport
                    this.renderer.centerViewportOn(this.character, this.map);
                    this.renderer.setIsDirty();
                }
            }
        }
    }

    update(now, timeElapsed, gameObjects) {
        if (this.state == this.STATE_MENU) {
            // do nothing?
        } else {
            super.update(now, timeElapsed, gameObjects);

            if (this.state == this.STATE_RUNNING) {
                this.checkWinCondition();
                this.checkDeadCondition();
            } else if (this.state == this.STATE_WINNING ||
                    this.state == this.STATE_DEAD) {
                // win/die condition
                this.spawnExplosions(now, this.character);

                if (this.resetLevelTime >= 0 && now > this.resetLevelTime) {
                    this.resetLevel();
                }

                this.animationHandler.update(now, timeElapsed, gameObjects);
            }
        }
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

/***/ }),

/***/ "./src/treasure_character.js":
/*!***********************************!*\
  !*** ./src/treasure_character.js ***!
  \***********************************/
/*! exports provided: TreasureCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureCharacter", function() { return TreasureCharacter; });
/* harmony import */ var _character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.js */ "./src/character.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");



class TreasureCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY);
         this.symbol = symbol;
         this.treasureType = treasureType;

        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
        this.children.push(this.collider);
     }
 
     getCharacter(row, col) {
         if (this.getX() == col && this.getY() == row) {
             return this.symbol;
         }
         return null;
     }
 }

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

/***/ "./src/updateable.js":
/*!***************************!*\
  !*** ./src/updateable.js ***!
  \***************************/
/*! exports provided: Updateable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updateable", function() { return Updateable; });
// Base class for every type of game object
class Updateable {
    constructor() {
    }

    update(timeNow, timeElapsed) {
    }
}

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
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy90cmVhc3VyZS1odW50LmpzIiwid2VicGFjazovLy8uL3NyYy90cmVhc3VyZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlX2h1bnRfYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy91cGRhdGVhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy93YWxsX2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFD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Q0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QztBQUM5Qyx1QztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRDRCO0FBQ0w7QUFDUjtBQUNDO0FBQ0M7QUFDRztBQUNGO0FBQ1E7QUFDdUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFa0I7QUFDRDtBQUNEO0FBQ0Q7QUFDUzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQmtCOztBQUVsQjtB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LHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQzs7QUFFM0M7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHJlYXN1cmUtaHVudC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7IH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7IH1cblxuICAgIGlzRXhwaXJlZCgpIHsgcmV0dXJuIHRydWU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRBbmltYXRvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgdGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgaWYgKHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZSA+IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVOb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgICAgICAvLyBhZGQgV0lOIGluIHRoZSBjZW50ZXIgb2YgdGhlIGV4cGxvc2lvbi5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhfb2Zmc2V0ID0gTWF0aC5mbG9vcih0aGlzLnRleHQubGVuZ3RoIC8gMikgLSBpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChuZXcgU3RhdGljQ2hhcmFjdGVyKHRoaXMuY2VudGVyWCAtIHhfb2Zmc2V0LCB0aGlzLmNlbnRlclksIHRoaXMudGV4dC5jaGFyQXQoaSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gbmV2ZXIgZ29lcyBhd2F5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNlbnRlclgsIGNlbnRlclksIG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAtMTtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWDtcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgdGhpcy5mcmFtZVNwZWVkID0gNjA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSB0aW1lTm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIGlmIChlbGFwc2VkID49IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMrKztcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAvLyBjcmVhdGUgZXhwbG9zaW9uIHBhcnRpY2xlcyBpbiBhIGJsYXN0IHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlclxuICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5jZW50ZXJZIC0gdGhpcy5yYWRpdXM7IHkgPD0gdGhpcy5jZW50ZXJZICsgdGhpcy5yYWRpdXM7IHkrKykge1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmNlbnRlclkgLSB5KTtcbiAgICAgICAgICAgIHZhciBudW1YcyA9IE1hdGgubWluKDIsIHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSArIDEpOyAvLyBhZGQgMSBiZWNhdXNlIHdlIGFsd2F5cyB3YW50IGF0IGxlYXN0IDEgZXhwbG9zaW9uIG9uIGVhY2ggbGluZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jZW50ZXJYICsgKCh0aGlzLnJhZGl1cyAtIGRpZmZlcmVuY2UpICogbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgJyonKTtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhcmFjdGVycztcbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlclggLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhYICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhZO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjbGVhciBldmVyeXRoaW5nIChUT0RPOiB3ZSBzaG91bGRuJ3QgaGF2ZSB0byBkbyB0aGlzKVxuICAgICAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24udXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5pc0V4cGlyZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdCBmcm9tIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5zcGF3blJlbmRlcmFibGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMgIT0gbnVsbCAmJiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyQW5pbWF0aW9ucygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW11cbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgcmVuZGVyYWJsZSBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFggPSBpbml0aWFsWDtcbiAgICAgICAgdGhpcy5pbml0aWFsWSA9IGluaXRpYWxZO1xuICAgICAgICB0aGlzLnogPSAwOyAvLyBkZWZhdWx0IHRvIHogYXhpcyBwb3MgYmVpbmcgMFxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoaW5pdGlhbFgsIGluaXRpYWxZLCAxLCAxKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kcztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgLy8gY29tcGFyZSBvdXIgcGFyZW50IG9iamVjdCBib3VuZHMgdG8gZXZlcnkgb3RoZXIgb2JqZWN0J3MgYm91bmRzIGFzIGxvbmdcbiAgICAgICAgLy8gYXMgdGhleSBhcmUgcGh5c2ljYWwgb3IgaGF2ZSB0aGVpciBvd24gY29sbGlkZXIgb2JqZWN0XG4gICAgICAgIHZhciBjb2xsaXNpb25PYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iaiAhPT0gcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9iai5pc1BoeXNpY2FsIHx8IG9iai5oYXNPd25Qcm9wZXJ0eSgnY29sbGlkZXInKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLmludGVyc2VjdHMocGFyZW50LmdldEJvdW5kcygpKSk7XG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gb2JqLmNvbGxpZGUocGFyZW50KSB8fCBwYXJlbnQuY29sbGlkZShvYmopKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXlDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGhpbmtTcGVlZCA9ICgxIC8gMS4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gcmFuZG9tTnVtYmVyKDQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ05PTkUnO1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbSkge1xuICAgICAgICAgICAgY2FzZSAxOiBkaXJlY3Rpb24gPSBGQUNJTkdfTEVGVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGRpcmVjdGlvbiA9IEZBQ0lOR19SSUdIVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGRpcmVjdGlvbiA9IEZBQ0lOR19ET1dOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogZGlyZWN0aW9uID0gRkFDSU5HX1VQOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGhpbmtDb3VudGVyID4gdGhpcy50aGlua1NwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICUgdGhpcy50aGlua1NwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUHJvamVjdGlsZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBGQUNJTkdfVVAgPSAnVSc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0xFRlQgPSAnTCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0RPV04gPSAnRCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX1JJR0hUID0gJ1InOyIsImltcG9ydCB7VGhyZWFkfSBmcm9tIFwiLi90aHJlYWQuanNcIjtcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCIuL3JlbmRlcmVyLmpzXCI7XG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGFzdGtleVByZXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKHVwZGF0ZUZ1bmN0aW9uLCBkcmF3RnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcihvcHRpb25zWyd2aWV3cG9ydFdpZHRoJ10sIG9wdGlvbnNbJ3ZpZXdwb3J0SGVpZ2h0J10pO1xuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG5ldyBUaHJlYWQodXBkYXRlRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBuZXcgVGhyZWFkKGRyYXdGdW5jdGlvbik7XG5cbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUuc3RhcnQob3B0aW9uc1sndXBkYXRlRlBTJ10pOyAvL3VwZGF0ZSBYIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgdGhpcy50aHJlYWREcmF3LnN0YXJ0KG9wdGlvbnNbJ2RyYXdGUFMnXSk7IC8vZHJhdyBYIHRpbWVzIHBlciBzZWNvbmRcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RrZXlQcmVzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBsaXN0ZW4gdG8gdGhlIGJyb3dzZXIga2V5cyBpbnN0YWQgb2YgZGlyZWN0IGNvbnNvbGUgaW5wdXRcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7ICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3MgdXMgdG8gcmVhZCBrZXlzIGRpcmVjdGx5IGZyb20gY29uc29sZSBpbnB1dCB3aXRob3V0IEVOVEVSXG4gICAgICAgICAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUodHJ1ZSk7IFxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5vbigncmVhZGFibGUnLCBmdW5jdGlvbihkYXRhKSB7ICAgXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHByb2Nlc3Muc3RkaW4ucmVhZCgpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0S2V5cHJlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RrZXlQcmVzc2VzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0a2V5UHJlc3Nlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdmVtZW50KG9iaiwgaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgbGV0IGlzT2JzdHJ1Y3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob2JqLm9iZXlzUGh5c2ljcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UmVjdCA9IG5ldyBSZWN0YW5nbGUoaW50ZW5kZWRQb3NpdGlvbi54LCBpbnRlbmRlZFBvc2l0aW9uLnksIG9iai5nZXRCb3VuZHMoKS53aWR0aCwgb2JqLmdldEJvdW5kcygpLmhlaWdodCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld1JlY3QpKS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc09ic3RydWN0ZWQpIHtcbiAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS54ID0gaW50ZW5kZWRQb3NpdGlvbi54O1xuICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLnkgPSBpbnRlbmRlZFBvc2l0aW9uLnk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKS5tYXAoeCA9PiB4LmNoZWNrQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgdGhhdCBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgICAgIHZhciByZW1vdmFibGVPYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyk7XG4gICAgICAgIGlmIChyZW1vdmFibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92YWJsZU9iamVjdHMubWFwKHggPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KHgpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5jaGVja1JlZHJhdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgYm9ndXMoKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgR2FtZU9iamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBvYmouY2hpbGRyZW4gJiYgaSA8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRPYmplY3Qob2JqLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcih4ID0+IHggIT09IG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBvYmouY2hpbGRyZW4gJiYgaSA8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3Qob2JqLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUFsbE9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRHYW1lQ29tbWFuZChrZXkpIHtcbiAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICBjYXNlICdhJzogXG4gICAgICAgIGNhc2UgXCI2NVwiOlxuICAgICAgICBjYXNlIFwiMzdcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfTEVGVDtcblxuICAgICAgICBjYXNlICdlJzogXG4gICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgY2FzZSBcIjY4XCI6XG4gICAgICAgIGNhc2UgXCIzOVwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19SSUdIVDtcblxuICAgICAgICBjYXNlICcsJzogXG4gICAgICAgIGNhc2UgJ3cnOiBcbiAgICAgICAgY2FzZSBcIjg3XCI6XG4gICAgICAgIGNhc2UgXCIzOFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19VUDtcblxuICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNhc2UgXCI4M1wiOlxuICAgICAgICBjYXNlIFwiNDBcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfRE9XTjtcblxuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgY2FzZSAnNjcnOlxuICAgICAgICAgICAgcmV0dXJuICdRVUlUJztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgY2FzZSAnNzAnOlxuICAgICAgICBjYXNlICczMic6XG4gICAgICAgICAgICByZXR1cm4gJ0ZJUkUnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjYXNlICc3Mic6XG4gICAgICAgICAgICByZXR1cm4gJ0hFTFAnO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnMTMnOlxuICAgICAgICAgICAgcmV0dXJuICdFTlRFUic7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBEYXRhKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IG1hcERhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXBEYXRhLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBudWxsO1xuICAgIH1cblxuICAgIGdldE1hcENoYXJhY3RlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcblxuICAgICAgICAvLyBhZGQgYWxsIG9mIHRoZSBvYmplY3RzIHdpdGhpbiB0aGUgbGV2ZWxcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcERhdGEubWFwX29iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLm1hcERhdGEubWFwX29iamVjdHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBvYmouaW1hZ2UubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgICAgIHZhciB5ID0gcm93ICsgb2JqLnk7XG4gICAgICAgICAgICAgICAgdmFyIHJvd1N0ciA9IG9iai5pbWFnZVtyb3ddO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHJvd1N0ci5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gb2JqLnggKyBjb2w7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzQ2hhciA9IHJvd1N0ci5jaGFyQXQoY29sKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNDaGFyICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgeSwgdGhpc0NoYXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpbiBsZWZ0L3JpZ2h0IGxldmVsIGJhcnJpZXJzXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoMCwgeSwgXCJ8XCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHRoaXMud2lkdGggLSAxLCB5LCBcInxcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIHRvcC9ib3R0b20gbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIDAsIFwiLVwiKSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB0aGlzLmhlaWdodCAtIDEsIFwiLVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogbWF4KSArIDEpO1xufSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi9zdGF0aWNfY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FDVElPTl9CQUNLX1RPX0dBTUUsIEFDVElPTl9OT05FLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fUE9QX01FTlV9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX1VQfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BlYyA9IG1lbnVTcGVjO1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy56UG9zaXRpb24gPSB6UG9zaXRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuaXNWaXNpYmxlID0gZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzW3RoaXMuc2VsZWN0ZWRPcHRpb25dLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChnYW1lQ29tbWFuZCkge1xuICAgICAgICBsZXQgYWN0aW9uID0gQUNUSU9OX05PTkU7XG4gICAgICAgIGxldCBuZXdNZW51ID0gbnVsbDtcblxuICAgICAgICBpZiAoZ2FtZUNvbW1hbmQgPT0gRkFDSU5HX0RPV04pIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gJSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19VUCkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHRocm91Z2ggbWVudSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uIC09IDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zZWxlY3RlZE9wdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IHRoaXMuZ2V0TnVtT3B0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG9wdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgaWYgaXQgbWF0Y2hlcyB0aGUgZ2FtZUNvbW1hbmRcbiAgICAgICAgICAgIGxldCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9uXTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEFjdGlvbiA9IGN1ck9wdGlvbi5hY3Rpb25NYXAuZmlsdGVyKG8gPT4gby5rZXkgPT0gZ2FtZUNvbW1hbmQpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkQWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBzZWxlY3RlZEFjdGlvblswXS5hY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSBBQ1RJT05fUFVTSF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01lbnUgPSBzZWxlY3RlZEFjdGlvblswXS5tZW51O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWN0aW9uOiBhY3Rpb24sIG5ld01lbnU6IG5ld01lbnV9O1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZXMgYSBjaGFyYWN0ZXIgdG8gcmVuZGVyIGluIHRoZSBtZW51LCBhbmQgaGFuZGxlcyBvdmVyaGVhZCBmb3IgaXRcbiAgICBjcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgeCwgeSwgY2hhcikge1xuICAgICAgICAvLyBhZGQgZXZlcnl0aGluZyBpblxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCBjaGFyKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRyYXcgb24gdG9wXG4gICAgICAgIGNoYXJhY3Rlci56ID0gdGhpcy56UG9zaXRpb247XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChjaGFyYWN0ZXIpO1xuXG4gICAgICAgIC8vIGtlZXAgdGhlc2UgYXJvdW5kIGluIG1lbW9yeSBzbyB3ZSBjYW4gcmVtb3ZlIHRoZW0gbGF0ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcblxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgdGV4dFcsIHRleHRIKSB7XG4gICAgICAgIC8vIGRyYXcgbWVudSBib3ggY29udGFpbmVyXG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95IC0gMSwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyB0ZXh0SCwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95IC0gMSwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRleHRXOyBjb2wrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSAtIDEsICctJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgY29sLCBzdGFydF95ICsgdGV4dEgsICctJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGV4dEg7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSArIHJvdywgJ3wnKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHJvdywgJ3wnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudmlld3BvcnQueDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy52aWV3cG9ydC55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld3BvcnQud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0ID0gdGhpcy5zcGVjLnN1bW1hcnlUZXh0O1xuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dExlbiA9IHN1bW1hcnlUZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd3JhcFcgPSBNYXRoLmNlaWwod2lkdGggKiAwLjgpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeCBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3ggPSBsZWZ0ICsgTWF0aC5yb3VuZCgod2lkdGggLSB3cmFwVykgLyAyKTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHkgcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF95ID0gYm90dG9tICsgTWF0aC5yb3VuZChoZWlnaHQgKiAwLjgpO1xuXG4gICAgICAgIC8vIHN1bW1hcnkgaXMgdGV4dCBhdCB0b3BcbiAgICAgICAgY29uc3QgbnVtU3VtbWFyeUxpbmVzID0gTWF0aC5jZWlsKHN1bW1hcnlUZXh0TGVuIC8gd3JhcFcpO1xuXG4gICAgICAgIC8vIGFkZCBibGFuayBsaW5lIGJldHdlZW5cbiAgICAgICAgY29uc3QgbnVtU3BhY2luZ0xpbmVzID0gMTsgXG4gICAgICAgIFxuICAgICAgICAvLyBvcHRpb24gbGluZXMgYXJlIHNlbGVjdGFibGUgYnkgdXNlclxuICAgICAgICBjb25zdCBudW1PcHRpb25MaW5lcyA9IHRoaXMuc3BlYy5vcHRpb25zLmZpbHRlcihvID0+IG8ub3B0aW9uVGV4dCAhPSBudWxsKS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgbnVtTGluZXMgPSBudW1TdW1tYXJ5TGluZXMgKyBudW1PcHRpb25MaW5lcyArIG51bVNwYWNpbmdMaW5lczsgXG5cbiAgICAgICAgLy8gaWYgd2Ugd2lsbCBnbyBvdmVyIHRoZSBib3R0b20gcGFydCBvZiB0aGUgc2NyZWVuLCBidW1wIHVwIGEgbm90Y2hcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHN0YXJ0X3kgKyBudW1MaW5lcyArIDEpIC0gKGJvdHRvbSArIGhlaWdodCkpO1xuICAgICAgICBzdGFydF95IC09IG9mZnNldDtcblxuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgd3JhcFcsIG51bUxpbmVzKTtcblxuICAgICAgICAvLyBkcmF3IHRoZSBpbnNpZGUgb2YgdGhlIG1lbnUgYm94IGNvbnRhaW5lciwgc3BhY2VzIGFuZCB0ZXh0XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG51bUxpbmVzOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgd3JhcFc7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0X3ggKyBjb2w7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0X3kgKyByb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSAnICc7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0UG9zID0gY29sICsgKHJvdyAqIHdyYXBXKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IHN1bW1hcnlUZXh0TGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRbdGV4dFBvc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSBudW1TdW1tYXJ5TGluZXMgKyBudW1TcGFjaW5nTGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc09wdGlvbkluZGV4ID0gcm93IC0gbnVtU3VtbWFyeUxpbmVzIC0gbnVtU3BhY2luZ0xpbmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gXCItIFwiICsgY3VyT3B0aW9uLm9wdGlvblRleHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgY3VyVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIgPSBjdXJUZXh0W2NvbF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0aW9uQ2hhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgeCwgeSwgY2hhcik7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0aW9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMucHVzaChjcmVhdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBoaWRlKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5tYXAoYyA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoYykpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzID0gW107XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBBQ1RJT05fTk9ORSA9IDA7XG5leHBvcnQgY29uc3QgQUNUSU9OX0JBQ0tfVE9fR0FNRSA9IDE7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BVU0hfTUVOVSA9IDI7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BPUF9NRU5VID0gMztcbmV4cG9ydCBjb25zdCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCA9IDQ7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1cgPSA1OyIsImltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XLCBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIEFDVElPTl9QVVNIX01FTlV9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuXG5leHBvcnQgY29uc3QgU0VUVElOR1NfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDb25maWd1cmUgeW91ciBnYW1lIGV4cGVyaWVuY2UuXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkluY3JlYXNlIFZpZXdwb3J0IEhlaWdodFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgV2lkdGhcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1d9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSB0byBBc2NpaVdlYiEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIFByZXNzICdoJyB0byBwYXVzZSB0aGUgZ2FtZSBhbmQgU3BhY2ViYXIgdG8gRklSRS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiUmVzdW1lXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIk9wdGlvbnNcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BVU0hfTUVOVSwgbWVudTogU0VUVElOR1NfTUVOVX1dXG4gICAgICAgIH1cbiAgICBdXG59XG5cbiIsImltcG9ydCB7RkFDSU5HX1VQLCBGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLmZhY2luZyA9IEZBQ0lOR19ET1dOO1xuICAgIH1cblxuICAgIHNldEZhY2luZyhuZXdGYWNpbmcpIHtcbiAgICAgICAgaWYgKG5ld0ZhY2luZyAhPSB0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgdGhpcy5mYWNpbmcgPSBuZXdGYWNpbmc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGludGVuZGVkWCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgdmFyIGludGVuZGVkWSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRkFDSU5HX0xFRlQ6IFxuICAgICAgICAgICAgaW50ZW5kZWRYLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0xFRlQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfUklHSFQ6XG4gICAgICAgICAgICBpbnRlbmRlZFgrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfUklHSFQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfVVA6XG4gICAgICAgICAgICBpbnRlbmRlZFktLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfVVApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfRE9XTjpcbiAgICAgICAgICAgIGludGVuZGVkWSsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19ET1dOKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIHNvbWUgc29ydCBvZiBib2d1cyBtb3ZlbWVudC4gZG9uJ3QgaGFuZGxlLlxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5pbnRlbmRlZFBvc2l0aW9uID0ge3g6IGludGVuZGVkWCwgeTogaW50ZW5kZWRZfTtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3Qub25BbmltYXRlZCgpOyAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7UHJvamVjdGlsZUNoYXJhY3Rlcn0gZnJvbSBcIi4vcHJvamVjdGlsZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7RW5lbXlDaGFyYWN0ZXJ9IGZyb20gXCIuL2VuZW15X2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTn0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UExBWUVSX1NQUklURV9NQVAsIFBST0pFQ1RJTEVfU1BSSVRFX01BUH0gZnJvbSBcIi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoUExBWUVSX1NQUklURV9NQVAsIHRoaXMpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTdGF0ZShGQUNJTkdfRE9XTik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICBzdXBlci5vbkFuaW1hdGVkKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKHRoaXMubW92YWJsZS5mYWNpbmcpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmJvdW5kcy54ID0gdGhpcy5pbml0aWFsWDtcbiAgICAgICAgdGhpcy5ib3VuZHMueSA9IHRoaXMuaW5pdGlhbFk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGhhbmRsZUdhbWVDb21tYW5kKGNvbW1hbmQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmIChjb21tYW5kID09ICdGSVJFJykge1xuICAgICAgICAgICAgdGhpcy5maXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmFibGUubW92ZShjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIEVuZW15Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFRyZWFzdXJlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeS5wdXNoKHdpdGhPYmplY3QudHJlYXN1cmVUeXBlKTtcbiAgICAgICAgICAgIHdpdGhPYmplY3QucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZUNoYXJhY3Rlcih0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCksIHRoaXMubW92YWJsZS5mYWNpbmcsIDgsIFBST0pFQ1RJTEVfU1BSSVRFX01BUCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChwcm9qZWN0aWxlKTtcbiAgICB9XG5cbiAgICBoYXNUcmVhc3VyZSh0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5LmZpbHRlcih0ID0+IHQgPT0gdHJlYXN1cmVUeXBlKS5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlLmpzXCI7XG5pbXBvcnQgeyBXYWxsQ2hhcmFjdGVyIH0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGVDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgZGlyZWN0aW9uLCBtYXhEaXN0YW5jZSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPSAwO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gbWF4RGlzdGFuY2U7XG4gICAgICAgIHRoaXMudHJhdmVsU3BlZWQgPSAoMSAvIDYuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCB1cCBvdXIgc3ByaXRlXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTdGF0ZShkaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0IHVwIG91ciBhYmlsaXR5IHRvIG1vdmVcbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBjb2xsaXNpb25zIHdpdGggb2JqZWN0c1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkKys7XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPj0gdGhpcy5tYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciArIHRpbWVFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnRyYXZlbENvdW50ZXIgPj0gdGhpcy50cmF2ZWxTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyIC0gdGhpcy50cmF2ZWxTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudGhpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFdhbGxDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0c1BvaW50KHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICB4ID49IHRoaXMueCAmJlxuICAgICAgICAgICAgeSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICB5ID49IHRoaXMueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGludGVyc2VjdHMocmVjdGFuZ2xlKSB7XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoIDw9IHJlY3RhbmdsZS54IHx8XG4gICAgICAgICAgICB0aGlzLnggPj0gcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDw9IHJlY3RhbmdsZS55IHx8XG4gICAgICAgICAgICB0aGlzLnkgPj0gcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdmlld1csIHZpZXdIKTtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbGVhclNjcmVlbigpIHtcbiAgICAgICAgLy8gY2xlYXIgdGhlIHNjcmVlbiBhbmQgc2V0IGN1cnNvciBhdCAwLDBcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgIH1cblxuICAgIGlzT25TY3JlZW4oY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXIuaXNWaXNpYmxlICYmIGNoYXJhY3Rlci5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHRoaXMudmlld3BvcnQpO1xuICAgIH1cblxuICAgIHJlbmRlcihnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgIHZhciByZW5kZXJhYmxlT2JqZWN0cyA9IHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cyk7XG4gICAgICAgIC8vIHJldmVyc2Ugc29ydCBieSB6IGF4aXNcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMuc29ydCgoYSwgYikgPT4gYi56IC0gYS56KTtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gdGhpcy52aWV3cG9ydC55OyByb3cgPCB0aGlzLnZpZXdwb3J0LnkgKyB0aGlzLnZpZXdwb3J0LmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IHRoaXMudmlld3BvcnQueDsgY29sIDwgdGhpcy52aWV3cG9ydC54ICsgdGhpcy52aWV3cG9ydC53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IHJlbmRlcmFibGVPYmplY3RzLmZpbHRlcihjID0+IGMuZ2V0Q2hhcmFjdGVyKS5tYXAoYyA9PiBjLmdldENoYXJhY3Rlcihyb3csIGNvbCkpLmZpbHRlcihjID0+IGMgIT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBjaGFyYWN0ZXJzWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICcgJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnXFxuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIHJlZHJhdyBmbGFnIG9uIGFsbCBvYmplY3RzIHdlIHdlcmUgYWJsZSB0byByZW5kZXJcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMubWFwKGMgPT4gYy5uZWVkc1JlZHJhdyA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICBnZXRJc0RpcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RpcnR5O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRJc0RpcnR5KCkge1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpLmZpbHRlcihjID0+IGMubmVlZHNSZWRyYXcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXJhYmxlID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoYyA9PiBjLmlzVmlzaWJsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmlzT25TY3JlZW4oYykpO1xuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZTtcbiAgICB9XG5cbiAgICBjZW50ZXJWaWV3cG9ydE9uKGNoYXJhY3RlciwgbWFwKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQueCA9IE1hdGgubWluKG1hcC53aWR0aCAtIHRoaXMudmlld3BvcnQud2lkdGgsIE1hdGgubWF4KDAsIGNoYXJhY3Rlci5nZXRYKCkgLSAodGhpcy52aWV3cG9ydC53aWR0aCAvIDIpKSk7XG4gICAgICAgIHRoaXMudmlld3BvcnQueSA9IE1hdGgubWluKG1hcC5oZWlnaHQgLSB0aGlzLnZpZXdwb3J0LmhlaWdodCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFkoKSAtICh0aGlzLnZpZXdwb3J0LmhlaWdodCAvIDIpKSk7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgLy8gZm9ybWF0IG9mIGEgc3ByaXRlTWFwOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCI8c3RhdGU+XCI6IFt7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9LFxuICAgIC8vICAgICAgICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9IF1cbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3Ioc3ByaXRlTWFwLCBwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0gc3ByaXRlTWFwO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5ib3VuZHM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gdGhpcy5zdGF0ZUVsYXBzZWQgKyB0aW1lRWxhcHNlZDtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcmV2RnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50RnJhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgIT0gcHJldkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBkbyBjb2xsaWRpbmcgd2l0aCBzcHJpdGVzXG4gICAgICAgIC8vdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV07XG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gc3ByaXRlc1tmcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIHZhciBmaXJzdFJvdyA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RSb3cgPSAwO1xuICAgICAgICB2YXIgZmlyc3RDb2wgPSA5OTk5OTk7XG4gICAgICAgIHZhciBsYXN0Q29sID0gMDtcblxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNoYXJhY3RlclJvd3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbcm93XS5jaGFyQXQoY29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICYmIHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSb3cgPSBNYXRoLm1pbihmaXJzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJvdyA9IE1hdGgubWF4KGxhc3RSb3csIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q29sID0gTWF0aC5taW4oZmlyc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RDb2wgPSBNYXRoLm1heChsYXN0Q29sLCBjb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZmVlbHMgZGlydHlcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkud2lkdGggPSBsYXN0Q29sIC0gZmlyc3RDb2wgKyAxO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgPSBsYXN0Um93IC0gZmlyc3RSb3cgKyAxO1xuICAgIH1cblxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ3VycmVudEZyYW1lKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIHRvdGFsVGltZSA9IHNwcml0ZXMucmVkdWNlKGZ1bmN0aW9uKGFjYywgY3VyVmFsKSB7IHJldHVybiBhY2MgKyBjdXJWYWxbXCJkaXNwbGF5VGltZVwiXTsgfSwgMCk7XG4gICAgICAgIHZhciBsZWZ0b3ZlciA9IHRoaXMuc3RhdGVFbGFwc2VkICUgdG90YWxUaW1lO1xuICAgICAgICB2YXIgZnJhbWUgPSAwO1xuICAgICAgICB2YXIgdGltZUFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmcmFtZSA9IGk7XG4gICAgICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCBhIHJlZHVjZSgpXG4gICAgICAgICAgICB2YXIgZGlzcGxheVRpbWUgPSBzcHJpdGVzW2ldW1wiZGlzcGxheVRpbWVcIl07XG4gICAgICAgICAgICBpZiAodGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWUgPiBsZWZ0b3Zlcikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZUFjY3VtdWxhdG9yID0gdGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRYKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyQ29sID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZXMgdGhlIGZpcnN0IHJvdyBpcyB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgb3RoZXIgZnJhbWVzXG4gICAgICAgICAgICBvdXJDb2wgPSBvdXJDb2wgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3NbMF0ubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyQ29sO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWSgpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV1bdGhpcy5mcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgbm90aW9uIG9mIHRoZSBtYXAgbG9jYXRpb24gYW5kIGxvY2FsaXplIHRvIHRoaXMgc3ByaXRlIG9ubHlcbiAgICAgICAgdmFyIG91clJvdyA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvdXJSb3cgPSBvdXJSb3cgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3MubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyUm93O1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihyb3csIGNvbCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gcm93IC0gdGhpcy5nZXRBbmNob3JlZFkoKTtcbiAgICAgICAgdmFyIG91ckNvbCA9IGNvbCAtIHRoaXMuZ2V0QW5jaG9yZWRYKCk7XG5cbiAgICAgICAgaWYgKG91clJvdyA+PSAwICYmIFxuICAgICAgICAgICAgb3VyQ29sID49IDAgJiYgXG4gICAgICAgICAgICBvdXJSb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgb3VyQ29sIDwgY2hhcmFjdGVyUm93c1tvdXJSb3ddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW291clJvd10uY2hhckF0KG91ckNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICB9XG4gXG4gICAgIGdldENoYXJhY3Rlcihyb3csIGNvbCkge1xuICAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgfVxuIH0iLCJleHBvcnQgY2xhc3MgVGhyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihmdW5jdGlvblBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5mdW5jdGlvblBvaW50ZXIgPSBmdW5jdGlvblBvaW50ZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoZGVzaXJlZEZyYW1lcmF0ZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBtaW5pbXVtTWlsbHNlY1BlckZyYW1lID0gMTAwMC8gZGVzaXJlZEZyYW1lcmF0ZTtcblxuICAgICAgICB2YXIgaW50ZXJuYWxSdW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhhdC5mdW5jdGlvblBvaW50ZXIoKTtcbiAgICAgICAgICAgIHZhciBhZnRlciA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBjYWxsIHRha2VzIGEgd2hpbGUsIHJlZHVjZSB0aGUgZGVsYXkgdW50aWwgdGhlIG5leHQgZXhlY3V0ZVxuICAgICAgICAgICAgdmFyIG5leHREZWxheSA9IE1hdGgubWF4KDAsIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgLSAoYWZ0ZXIgLSBub3cpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIG5leHREZWxheSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5pdGlhbCBjYWxsXG4gICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIDApOyBcbiAgICB9XG59IiwiXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFdpbkFuaW1hdGlvbiwgVGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtFbmVteUNoYXJhY3Rlcn0gZnJvbSBcIi4vZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudV9zcGVjcy5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiB0cnVlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxuICAgICdudW1FbmVtaWVzJzogMTBcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHsgIFxuICAgIHZhciB0aEdhbWUgPSBuZXcgVHJlYXN1cmVIdW50R2FtZSgpO1xuICAgIHRoR2FtZS5pbml0aWFsaXplKGdsb2JhbE9wdGlvbnMpO1xufVxuXG52YXIgZ2FtZU9iamVjdHMgPSBuZXcgR2FtZU9iamVjdHMoKTtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlSHVudEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gc2V0IHVwIGJhc2ljIGdhbWUgb2JqZWN0c1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChMRVZFTF9UT1dOKTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgS2V5TWFwKCk7XG4gICAgICAgIHRoaXMubWVudVN0YWNrID0gW107XG5cbiAgICAgICAgdGhpcy5TVEFURV9SVU5OSU5HID0gMDtcbiAgICAgICAgdGhpcy5TVEFURV9XSU5OTklORyA9IDE7XG4gICAgICAgIHRoaXMuU1RBVEVfREVBRCA9IDI7XG4gICAgICAgIHRoaXMuU1RBVEVfTUVOVSA9IDM7XG5cbiAgICAgICAgLy8gdGhpcyBzaG91bGQgcHJvYmFibHkgdHVybiBpbnRvIGEgc3RhdGUgbWFjaGluZVxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIHRoaXMuRVhQTE9TSU9OX1NQRUVEID0gMjAwMDsgLy8gbnVtIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lcyBvZiBXSU4gZXhwbG9zaW9uICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucmVzZXRMZXZlbFRpbWUgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgdmFyIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuXG4gICAgICAgIC8vIGRvbid0IGxldCB0aGVtIG92ZXJsYXBcbiAgICAgICAgd2hpbGUgKGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmouaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0WCgpID09PSB4ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRZKCkgPT09IHkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlR29hbChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgVHJlYXN1cmVDaGFyYWN0ZXIoZ29hbFBsYWNlbWVudC54LCBnb2FsUGxhY2VtZW50LnksICckJywgJ2xldmVsR29hbCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVuZW1pZXNcbiAgICAgICAgdmFyIGVuZW15UGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cbiAgICBcbiAgICByZXNldExldmVsKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICBnYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5jbGVhckFuaW1hdGlvbnMoKTtcblxuICAgICAgICAvLyBjcmVhdGUgb3VyIHBsYXllclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8gYWRkIGEgbGV2ZWxHb2FsIHRvIHRoaXMgbGV2ZWxcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlR29hbChnYW1lT2JqZWN0cywgdGhpcy5tYXApKTtcblxuICAgICAgICAvLyBhZGQgc29tZSBlbmVtaWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2xvYmFsT3B0aW9uc1snbnVtRW5lbWllcyddOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCB0aGlzLm1hcCkpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIG91ciBtYXAgb2JqZWN0c1xuICAgICAgICB0aGlzLm1hcC5nZXRNYXBDaGFyYWN0ZXJzKCkubWFwKHggPT4gZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHgpKTtcblxuICAgICAgICAvKnRoaXMuZG9vciA9IG5ldyBEb29yd2F5Q2hhcmFjdGVyKDIsIDIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL3d3dy5nb29nbGUuY29tJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5kb29yKTsqL1xuICAgICAgICBcbiAgICAgICAgLy8gY2VudGVyIG9uIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBibG9ja2luZyBhbmltYXRpb24gdGhhdCAnZXhwbG9kZXMnIHRoZSBcbiAgICAvLy4uLmdvYWwgaW50byBhbiBleHBsb3Npb25cbiAgICBzcGF3bkV4cGxvc2lvbnMobm93LCBjZW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgICAvLyBzcGF3biBhIG5ldyBhbmltYXRpb24gYmFzZWQgb24gRVhQTE9TSU9OX1NQRUVEXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID4gdGhpcy5FWFBMT1NJT05fU1BFRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbihjZW50ZXJlZENoYXJhY3Rlci5nZXRYKCksIGNlbnRlcmVkQ2hhcmFjdGVyLmdldFkoKSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxFeHBsb3Npb24oeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBUZXh0QW5pbWF0b24oeCwgeSwgdGV4dCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oeCwgeSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgIH1cblxuICAgIGNoZWNrRGVhZENvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9ERUFEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsRXhwbG9zaW9uKHRoaXMuY2hhcmFjdGVyLmdldFgoKSwgdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpLCBcIkRFQURcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dpbkNvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhhc1RyZWFzdXJlKCdsZXZlbEdvYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdRVUlUJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGJyaW5nIHVwIGEgUVVJVCBtZW51LiBwcm9jZXNzLmV4aXQoKSBkb2Vzbid0IHdvcmsgaW4gYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7ICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdIRUxQJykge1xuICAgICAgICAgICAgICAgICAgICAgLy8gcHVzaCBtZW51IHN0YXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9NRU5VO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoSEVMUF9NRU5VLCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uT2JqID0gdGhpcy5tZW51LmhhbmRsZUlucHV0KGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fQkFDS19UT19HQU1FKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjdXJyZW50IG1lbnUgYW5kIGdvIGJhY2sgdG8gZ2FtZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcmV2U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BVU0hfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudSBhbmQgcHVzaCBpdCBvbnRvIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLm5ld01lbnUsIHRoaXMucmVuZGVyZXIudmlld3BvcnQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QT1BfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvcCBwcmV2IG1lbnUgYW5kIHNob3cgaXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldk1lbnUgPSB0aGlzLm1lbnVTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gcHJldk1lbnU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0SGVpZ2h0J10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA9IGdsb2JhbE9wdGlvbnNbJ21pblZpZXdwb3J0SGVpZ2h0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSBnbG9iYWxPcHRpb25zWydtaW5WaWV3cG9ydFdpZHRoJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlciB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfTUVOVSkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZz9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgICAgIFxuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICBsYXN0VXBkYXRlID0gbm93O1xuXG4gICAgICAgICAgICB0aGF0LmhhbmRsZUlucHV0KCk7XG4gICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJhd0Z1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgIHRoYXQuZHJhd0hlbHAodGhhdC5jaGFyYWN0ZXIuZ2V0Q2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSh1cGRhdGVGdW5jLCBkcmF3RnVuYywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gZG8gdGhpcyBhZnRlciBpbml0aWFsaXppbmcgcGFyZW50XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlciA9IG5ldyBBbmltYXRpb25IYW5kbGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoKTtcbiAgICB9XG5cbiAgICBkcmF3SGVscChjaGFyYWN0ZXJTeW1ib2wpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICdVc2UgRmlyZWZveCB0byBwbGF5IGlmIHlvdSBhcmVuXFwndCBhbHJlYWR5ISFcXG4nXG4gICAgICAgIC8qdmFyIG91dHB1dCA9ICdJbnN0cnVjdGlvbnM6IFVzZSBGaXJlZm94IG9yIENocm9tZSAoRmlyZWZveCByZWR1Y2VzIGZsaWNrZXJpbmchKVxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICdCcmVhayBvdXQgdGhlIGRldiB0b29scyBpbnRvIGEgc2VwYXJhdGUgd2luZG93IGFuZCB0aGVuIGNsaWNrIG9uIG15IGFjdHVhbCB3ZWIgcGFnZSB0byBlbmFibGUgY29udHJvbHMuXFxuXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ1VzZSB5b3VyIFwiJyArIGNoYXJhY3RlclN5bWJvbCArICdcIiBjaGFyYWN0ZXIgYW5kIGdvIGZpbmQgdGhlIHRyZWFzdXJlICgkKSBidXQgd2F0Y2ggb3V0IGZvciBiYWQgZ3V5cy4uLlxcblxcbic7IFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBDb250cm9sICB8IEFjdGlvbiB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wtLS0tLS0tLS0tfC0tLS0tLS0tfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHNwYWNlYmFyIHwgRklSRSEgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCB3ICAgICAgICB8IFVwICAgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgZCAgICAgICAgfCBSaWdodCAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHMgICAgICAgIHwgRG93biAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBhICAgICAgICB8IExlZnQgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgYyAgICAgICAgfCBRdWl0ICAgfFxcbic7Ki9cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICB9XG59XG5cbnJ1bigpOyIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wsIHRyZWFzdXJlVHlwZSkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICAgdGhpcy50cmVhc3VyZVR5cGUgPSB0cmVhc3VyZVR5cGU7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgICB9XG4gXG4gICAgIGdldENoYXJhY3Rlcihyb3csIGNvbCkge1xuICAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgfVxuIH0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMSA9IFtcblwiPC4uPlwiXG5dO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMiA9IFtcblwiPC1vby0+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8zID0gW1xuXCIgIFxcXFwgIC8gIFwiLFxuXCI8LS0wMC0tPlwiLFxuXCIgIC8gIFxcXFxcIixcbl07XG5cbmV4cG9ydCBjb25zdCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFtcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA5MTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMSB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA0MzAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMyB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSBdXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJTEVfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzInXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI0J10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCOCddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRSddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMSddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjMnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI3J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJEJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0hPVVNFID0gW1xuXCIgICAgIF9fX19fX19fXyAgICAgIFwiLFxuXCIgICBfLyAgICAgICAgIFxcXFxfICAgXCIsXG5cIiBfLyAgICAgICAgICAgICBcXFxcXyBcIixcblwiL19fX19fX19fX19fX19fX19fXFxcXFwiLFxuXCIgfCAgICAgICAgICAgICAgIHwgIFwiLFxuXCIgfCAgICAgPT09PT0gICAgIHwgIFwiLFxuXCIgfCB8K3wgIHwgfCAgfCt8IHwgIFwiLFxuXCIgfF9fX19fX3wgfF9fX19fX3wgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9CVVNIID0gW1xuXCIgIyMjIFwiLFxuXCIjIyMjI1wiLFxuXCIgIyMjIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9UUkVFID0gW1xuXCIgICAoKiopICAgICAgIFwiLFxuXCIgKCoqKioqKikgIFwiLFxuXCIoKioqKioqKiopIFwiLFxuXCIgICgqKioqKSAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAvX19cXFxcICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9UT1dOID0ge1xuXCJ3aWR0aFwiOiAxMjIsXG5cImhlaWdodFwiOiA2MCxcblwibWFwX29iamVjdHNcIjogW1xuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMCwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzcsIFwieVwiOiAxMyB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMTIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMiwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzgsIFwieVwiOiA5IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA5MCwgXCJ5XCI6IDE4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwMCwgXCJ5XCI6IDE2IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA1MCwgXCJ5XCI6IDIyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDYwLCBcInlcIjogMjAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3OCwgXCJ5XCI6IDIzIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3MCwgXCJ5XCI6IDQyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDgwLCBcInlcIjogNDAgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAyMCwgXCJ5XCI6IDgwIH0sXG4gICAgXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMSwgXCJ5XCI6IDM4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTQsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDEwLCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiAzMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMwLCBcInlcIjogMzIgfSxcbiAgICBcbl1cbn07IiwiLy8gQmFzZSBjbGFzcyBmb3IgZXZlcnkgdHlwZSBvZiBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5pc1BoeXNpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIocm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _text_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text_helpers.js */ "./src/text_helpers.js");





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
            this.selectionCharacters.map(c => c.symbol = ' ');
            this.selectionCharacters[this.selectedOption].symbol = '-';
        }
    }

    handleInput(gameCommand) {
        let action = _menu_actions_js__WEBPACK_IMPORTED_MODULE_1__["ACTION_NONE"];
        let eventArgs = null;

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
                eventArgs = selectedAction[0].eventArgs;
            }
        }

        return {action: action, eventArgs: eventArgs};
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
        const summaryTextRows = Object(_text_helpers_js__WEBPACK_IMPORTED_MODULE_3__["wrapText"])(summaryText, wrapW);
        const numSummaryLines = summaryTextRows.length;

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
                    if (col < summaryTextRows[row].length) {
                        char = summaryTextRows[row][col];
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
/*! exports provided: SETTINGS_MENU, CONTROLS_MENU, HELP_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_MENU", function() { return SETTINGS_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS_MENU", function() { return CONTROLS_MENU; });
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

const CONTROLS_MENU = {
    type: "OPTIONS",
    summaryText: "CONTROLS\nMovement: Arrow keys\nFIRE: Spacebar\nPause: 'h'",
    options: [
        {
            optionText: "Back",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_POP_MENU"]}]
        }
    ]
}

const HELP_MENU = {
    type: 'OPTIONS',
    summaryText: "Welcome! Firefox is the best browser for this game. Click on the web page to capture key presses.",
    options: [
        {
            optionText: "Play",
            actionMap: [{key: 'ENTER', action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_BACK_TO_GAME"]}]
        },
        {
            optionText: "Controls",
            actionMap: [{
                key: 'ENTER', 
                action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_PUSH_MENU"], 
                eventArgs: {
                    menu: CONTROLS_MENU
                }
            }],
        },
        {
            optionText: "Options",
            actionMap: [{
                key: 'ENTER', 
                action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_PUSH_MENU"], 
                eventArgs: {
                    menu: SETTINGS_MENU
                }
            }],
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
        // reverse sort by z axis, grab highest
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

/***/ "./src/text_helpers.js":
/*!*****************************!*\
  !*** ./src/text_helpers.js ***!
  \*****************************/
/*! exports provided: wrapText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapText", function() { return wrapText; });
function wrapText(text, wrapWidth) {
    let rows = [];
    let lastRowStart = 0;
    let i = 0;
    while (i <= text.length) {
        if (i == text.length) {
            // case: final letter
            rows.push(text.substring(lastRowStart));
            break;
        }
        const curChar = text[i];
        
        if (curChar == '\n') {
            // case: line break
            rows.push(text.substring(lastRowStart, i));
            i++;
            lastRowStart = i;
        } else if (curChar != ' ') {
            let wordLength = 1;
            // look ahead at length of this word
            let y = i;
            while (y < text.length) {
                y++;
                if (y == text.length || text[y] == '\n' || text[y] == ' ') {
                    wordLength = y - i;
                    break;
                }
            }
            if (i + wordLength - lastRowStart >= wrapWidth) {
                // case: this word won't fit
                rows.push(text.substring(lastRowStart, i));
                lastRowStart = i;
            } else {
                // all good, start finding the next word
                i += wordLength;
            }
        } else {
            i++;
            if (i - lastRowStart >= wrapWidth) {
                // case: we ran out of line width
                rows.push(text.substring(lastRowStart, i));
                lastRowStart = i;
            }
        }
    }
    return rows;
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
                    this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](actionObj.eventArgs.menu, this.renderer.viewport, 1);
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

                    // center viewport
                    this.renderer.centerViewportOn(this.character, this.map);
                    this.renderer.setIsDirty();

                    // redraw menu
                    this.menu.hide(gameObjects);
                    this.menu.show(gameObjects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlLWh1bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGxfY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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QUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0QwRDtBQUN2Qzs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUMsdUM7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEQ0QjtBQUNMO0FBQ1I7QUFDQztBQUNDO0FBQ0c7QUFDRjtBQUNRO0FBQ3VCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWtCO0FBQ0Q7QUFDRDtBQUNEO0FBQ1M7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7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REFBa0Q7QUFDNUUsb0VBQXlCLGtEQUFrRDtBQUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxxQ0FBcUM7O0FBRTFDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssd0NBQXdDOztBQUU3QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQzs7QUFFM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssdUNBQXVDOztBQUU1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQzs7QUFFM0M7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHJlYXN1cmUtaHVudC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7IH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7IH1cblxuICAgIGlzRXhwaXJlZCgpIHsgcmV0dXJuIHRydWU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRBbmltYXRvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgdGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgaWYgKHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZSA+IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVOb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgICAgICAvLyBhZGQgV0lOIGluIHRoZSBjZW50ZXIgb2YgdGhlIGV4cGxvc2lvbi5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhfb2Zmc2V0ID0gTWF0aC5mbG9vcih0aGlzLnRleHQubGVuZ3RoIC8gMikgLSBpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChuZXcgU3RhdGljQ2hhcmFjdGVyKHRoaXMuY2VudGVyWCAtIHhfb2Zmc2V0LCB0aGlzLmNlbnRlclksIHRoaXMudGV4dC5jaGFyQXQoaSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gbmV2ZXIgZ29lcyBhd2F5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNlbnRlclgsIGNlbnRlclksIG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAtMTtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWDtcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgdGhpcy5mcmFtZVNwZWVkID0gNjA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSB0aW1lTm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIGlmIChlbGFwc2VkID49IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMrKztcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAvLyBjcmVhdGUgZXhwbG9zaW9uIHBhcnRpY2xlcyBpbiBhIGJsYXN0IHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlclxuICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5jZW50ZXJZIC0gdGhpcy5yYWRpdXM7IHkgPD0gdGhpcy5jZW50ZXJZICsgdGhpcy5yYWRpdXM7IHkrKykge1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmNlbnRlclkgLSB5KTtcbiAgICAgICAgICAgIHZhciBudW1YcyA9IE1hdGgubWluKDIsIHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSArIDEpOyAvLyBhZGQgMSBiZWNhdXNlIHdlIGFsd2F5cyB3YW50IGF0IGxlYXN0IDEgZXhwbG9zaW9uIG9uIGVhY2ggbGluZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jZW50ZXJYICsgKCh0aGlzLnJhZGl1cyAtIGRpZmZlcmVuY2UpICogbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgJyonKTtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhcmFjdGVycztcbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlclggLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhYICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhZO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjbGVhciBldmVyeXRoaW5nIChUT0RPOiB3ZSBzaG91bGRuJ3QgaGF2ZSB0byBkbyB0aGlzKVxuICAgICAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24udXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5pc0V4cGlyZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdCBmcm9tIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5zcGF3blJlbmRlcmFibGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMgIT0gbnVsbCAmJiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyQW5pbWF0aW9ucygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW11cbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgcmVuZGVyYWJsZSBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFggPSBpbml0aWFsWDtcbiAgICAgICAgdGhpcy5pbml0aWFsWSA9IGluaXRpYWxZO1xuICAgICAgICB0aGlzLnogPSAwOyAvLyBkZWZhdWx0IHRvIHogYXhpcyBwb3MgYmVpbmcgMFxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoaW5pdGlhbFgsIGluaXRpYWxZLCAxLCAxKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHMueTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kcztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIocm93LCBjb2wpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgLy8gY29tcGFyZSBvdXIgcGFyZW50IG9iamVjdCBib3VuZHMgdG8gZXZlcnkgb3RoZXIgb2JqZWN0J3MgYm91bmRzIGFzIGxvbmdcbiAgICAgICAgLy8gYXMgdGhleSBhcmUgcGh5c2ljYWwgb3IgaGF2ZSB0aGVpciBvd24gY29sbGlkZXIgb2JqZWN0XG4gICAgICAgIHZhciBjb2xsaXNpb25PYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iaiAhPT0gcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9iai5pc1BoeXNpY2FsIHx8IG9iai5oYXNPd25Qcm9wZXJ0eSgnY29sbGlkZXInKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLmludGVyc2VjdHMocGFyZW50LmdldEJvdW5kcygpKSk7XG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gb2JqLmNvbGxpZGUocGFyZW50KSB8fCBwYXJlbnQuY29sbGlkZShvYmopKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXlDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGhpbmtTcGVlZCA9ICgxIC8gMS4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gcmFuZG9tTnVtYmVyKDQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ05PTkUnO1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbSkge1xuICAgICAgICAgICAgY2FzZSAxOiBkaXJlY3Rpb24gPSBGQUNJTkdfTEVGVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGRpcmVjdGlvbiA9IEZBQ0lOR19SSUdIVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGRpcmVjdGlvbiA9IEZBQ0lOR19ET1dOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogZGlyZWN0aW9uID0gRkFDSU5HX1VQOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGhpbmtDb3VudGVyID4gdGhpcy50aGlua1NwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICUgdGhpcy50aGlua1NwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUHJvamVjdGlsZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBGQUNJTkdfVVAgPSAnVSc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0xFRlQgPSAnTCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0RPV04gPSAnRCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX1JJR0hUID0gJ1InOyIsImltcG9ydCB7VGhyZWFkfSBmcm9tIFwiLi90aHJlYWQuanNcIjtcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gXCIuL3JlbmRlcmVyLmpzXCI7XG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGFzdGtleVByZXNzZXMgPSBbXTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBudWxsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKHVwZGF0ZUZ1bmN0aW9uLCBkcmF3RnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcihvcHRpb25zWyd2aWV3cG9ydFdpZHRoJ10sIG9wdGlvbnNbJ3ZpZXdwb3J0SGVpZ2h0J10pO1xuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG5ldyBUaHJlYWQodXBkYXRlRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBuZXcgVGhyZWFkKGRyYXdGdW5jdGlvbik7XG5cbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUuc3RhcnQob3B0aW9uc1sndXBkYXRlRlBTJ10pOyAvL3VwZGF0ZSBYIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgdGhpcy50aHJlYWREcmF3LnN0YXJ0KG9wdGlvbnNbJ2RyYXdGUFMnXSk7IC8vZHJhdyBYIHRpbWVzIHBlciBzZWNvbmRcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RrZXlQcmVzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBsaXN0ZW4gdG8gdGhlIGJyb3dzZXIga2V5cyBpbnN0YWQgb2YgZGlyZWN0IGNvbnNvbGUgaW5wdXRcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7ICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBhbGxvd3MgdXMgdG8gcmVhZCBrZXlzIGRpcmVjdGx5IGZyb20gY29uc29sZSBpbnB1dCB3aXRob3V0IEVOVEVSXG4gICAgICAgICAgICBwcm9jZXNzLnN0ZGluLnNldFJhd01vZGUodHJ1ZSk7IFxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5vbigncmVhZGFibGUnLCBmdW5jdGlvbihkYXRhKSB7ICAgXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHByb2Nlc3Muc3RkaW4ucmVhZCgpO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0S2V5cHJlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RrZXlQcmVzc2VzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0a2V5UHJlc3Nlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdmVtZW50KG9iaiwgaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgbGV0IGlzT2JzdHJ1Y3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob2JqLm9iZXlzUGh5c2ljcykge1xuICAgICAgICAgICAgY29uc3QgbmV3UmVjdCA9IG5ldyBSZWN0YW5nbGUoaW50ZW5kZWRQb3NpdGlvbi54LCBpbnRlbmRlZFBvc2l0aW9uLnksIG9iai5nZXRCb3VuZHMoKS53aWR0aCwgb2JqLmdldEJvdW5kcygpLmhlaWdodCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld1JlY3QpKS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc09ic3RydWN0ZWQpIHtcbiAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS54ID0gaW50ZW5kZWRQb3NpdGlvbi54O1xuICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLnkgPSBpbnRlbmRlZFBvc2l0aW9uLnk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKS5tYXAoeCA9PiB4LmNoZWNrQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgdGhhdCBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgICAgIHZhciByZW1vdmFibGVPYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyk7XG4gICAgICAgIGlmIChyZW1vdmFibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92YWJsZU9iamVjdHMubWFwKHggPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KHgpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5jaGVja1JlZHJhdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKHggPT4geCAhPT0gb2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxufSIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBLZXlNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldEdhbWVDb21tYW5kKGtleSkge1xuICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgIGNhc2UgJ2EnOiBcbiAgICAgICAgY2FzZSBcIjY1XCI6XG4gICAgICAgIGNhc2UgXCIzN1wiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19MRUZUO1xuXG4gICAgICAgIGNhc2UgJ2UnOiBcbiAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICBjYXNlIFwiNjhcIjpcbiAgICAgICAgY2FzZSBcIjM5XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1JJR0hUO1xuXG4gICAgICAgIGNhc2UgJywnOiBcbiAgICAgICAgY2FzZSAndyc6IFxuICAgICAgICBjYXNlIFwiODdcIjpcbiAgICAgICAgY2FzZSBcIjM4XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1VQO1xuXG4gICAgICAgIGNhc2UgJ28nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgY2FzZSBcIjgzXCI6XG4gICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19ET1dOO1xuXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICc2Nyc6XG4gICAgICAgICAgICByZXR1cm4gJ1FVSVQnO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICc3MCc6XG4gICAgICAgIGNhc2UgJzMyJzpcbiAgICAgICAgICAgIHJldHVybiAnRklSRSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGNhc2UgJzcyJzpcbiAgICAgICAgICAgIHJldHVybiAnSEVMUCc7XG4gICAgICAgIFxuICAgICAgICBjYXNlICcxMyc6XG4gICAgICAgICAgICByZXR1cm4gJ0VOVEVSJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1dhbGxDaGFyYWN0ZXJ9IGZyb20gXCIuL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gbWFwRGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcERhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TWFwQ2hhcmFjdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBsZXZlbFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG9iai5pbWFnZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSByb3cgKyBvYmoueTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U3RyID0gb2JqLmltYWdlW3Jvd107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgcm93U3RyLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBvYmoueCArIGNvbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNDaGFyID0gcm93U3RyLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0NoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB5LCB0aGlzQ2hhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIGxlZnQvcmlnaHQgbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3RlcigwLCB5LCBcInxcIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIodGhpcy53aWR0aCAtIDEsIHksIFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gdG9wL2JvdHRvbSBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgMCwgXCItXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHRoaXMuaGVpZ2h0IC0gMSwgXCItXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgMSk7XG59IiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXJcIjtcbmltcG9ydCB7QUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX05PTkUsIEFDVElPTl9QVVNIX01FTlUsIEFDVElPTl9QT1BfTUVOVX0gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHt3cmFwVGV4dH0gZnJvbSBcIi4vdGV4dF9oZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihtZW51U3BlYywgdmlld3BvcnQsIHpQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNwZWMgPSBtZW51U3BlYztcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IHZpZXdwb3J0O1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuelBvc2l0aW9uID0gelBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXROdW1PcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGVjLm9wdGlvbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIHNldE9wdGlvblZpc2liaWxpdHkoKSB7XG4gICAgICAgIC8vIHNldCB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgc2VsZWN0aW9uIGFycm93cyBhdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggbGluZVxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycy5tYXAoYyA9PiBjLnN5bWJvbCA9ICcgJyk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnNbdGhpcy5zZWxlY3RlZE9wdGlvbl0uc3ltYm9sID0gJy0nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoZ2FtZUNvbW1hbmQpIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IEFDVElPTl9OT05FO1xuICAgICAgICBsZXQgZXZlbnRBcmdzID0gbnVsbDtcblxuICAgICAgICBpZiAoZ2FtZUNvbW1hbmQgPT0gRkFDSU5HX0RPV04pIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuc2VsZWN0ZWRPcHRpb24gJSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19VUCkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHRocm91Z2ggbWVudSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uIC09IDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5zZWxlY3RlZE9wdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IHRoaXMuZ2V0TnVtT3B0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdGhlIG9wdGlvbiB0aGF0IGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgaWYgaXQgbWF0Y2hlcyB0aGUgZ2FtZUNvbW1hbmRcbiAgICAgICAgICAgIGxldCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9uXTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEFjdGlvbiA9IGN1ck9wdGlvbi5hY3Rpb25NYXAuZmlsdGVyKG8gPT4gby5rZXkgPT0gZ2FtZUNvbW1hbmQpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkQWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBzZWxlY3RlZEFjdGlvblswXS5hY3Rpb247XG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzID0gc2VsZWN0ZWRBY3Rpb25bMF0uZXZlbnRBcmdzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHthY3Rpb246IGFjdGlvbiwgZXZlbnRBcmdzOiBldmVudEFyZ3N9O1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZXMgYSBjaGFyYWN0ZXIgdG8gcmVuZGVyIGluIHRoZSBtZW51LCBhbmQgaGFuZGxlcyBvdmVyaGVhZCBmb3IgaXRcbiAgICBjcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgeCwgeSwgY2hhcikge1xuICAgICAgICAvLyBhZGQgZXZlcnl0aGluZyBpblxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCBjaGFyKTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRyYXcgb24gdG9wXG4gICAgICAgIGNoYXJhY3Rlci56ID0gdGhpcy56UG9zaXRpb247XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChjaGFyYWN0ZXIpO1xuXG4gICAgICAgIC8vIGtlZXAgdGhlc2UgYXJvdW5kIGluIG1lbW9yeSBzbyB3ZSBjYW4gcmVtb3ZlIHRoZW0gbGF0ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcblxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgdGV4dFcsIHRleHRIKSB7XG4gICAgICAgIC8vIGRyYXcgbWVudSBib3ggY29udGFpbmVyXG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95IC0gMSwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyB0ZXh0SCwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95IC0gMSwgJyonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHRleHRXOyBjb2wrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSAtIDEsICctJyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgY29sLCBzdGFydF95ICsgdGV4dEgsICctJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgdGV4dEg7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSArIHJvdywgJ3wnKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHJvdywgJ3wnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudmlld3BvcnQueDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdGhpcy52aWV3cG9ydC55O1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld3BvcnQud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0ID0gdGhpcy5zcGVjLnN1bW1hcnlUZXh0O1xuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dExlbiA9IHN1bW1hcnlUZXh0Lmxlbmd0aDtcbiAgICAgICAgY29uc3Qgd3JhcFcgPSBNYXRoLmNlaWwod2lkdGggKiAwLjgpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeCBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3ggPSBsZWZ0ICsgTWF0aC5yb3VuZCgod2lkdGggLSB3cmFwVykgLyAyKTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHkgcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF95ID0gYm90dG9tICsgTWF0aC5yb3VuZChoZWlnaHQgKiAwLjgpO1xuXG4gICAgICAgIC8vIHN1bW1hcnkgaXMgdGV4dCBhdCB0b3BcbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHRSb3dzID0gd3JhcFRleHQoc3VtbWFyeVRleHQsIHdyYXBXKTtcbiAgICAgICAgY29uc3QgbnVtU3VtbWFyeUxpbmVzID0gc3VtbWFyeVRleHRSb3dzLmxlbmd0aDtcblxuICAgICAgICAvLyBhZGQgYmxhbmsgbGluZSBiZXR3ZWVuXG4gICAgICAgIGNvbnN0IG51bVNwYWNpbmdMaW5lcyA9IDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gb3B0aW9uIGxpbmVzIGFyZSBzZWxlY3RhYmxlIGJ5IHVzZXJcbiAgICAgICAgY29uc3QgbnVtT3B0aW9uTGluZXMgPSB0aGlzLnNwZWMub3B0aW9ucy5maWx0ZXIobyA9PiBvLm9wdGlvblRleHQgIT0gbnVsbCkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IG51bUxpbmVzID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtT3B0aW9uTGluZXMgKyBudW1TcGFjaW5nTGluZXM7IFxuXG4gICAgICAgIC8vIGlmIHdlIHdpbGwgZ28gb3ZlciB0aGUgYm90dG9tIHBhcnQgb2YgdGhlIHNjcmVlbiwgYnVtcCB1cCBhIG5vdGNoXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIChzdGFydF95ICsgbnVtTGluZXMgKyAxKSAtIChib3R0b20gKyBoZWlnaHQpKTtcbiAgICAgICAgc3RhcnRfeSAtPSBvZmZzZXQ7XG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5kcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHdyYXBXLCBudW1MaW5lcyk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgaW5zaWRlIG9mIHRoZSBtZW51IGJveCBjb250YWluZXIsIHNwYWNlcyBhbmQgdGV4dFxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBudW1MaW5lczsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdyYXBXOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydF94ICsgY29sO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydF95ICsgcm93O1xuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gJyAnO1xuICAgICAgICAgICAgICAgIGxldCBpc1NlbGVjdGlvbkNoYXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChyb3cgPCBudW1TdW1tYXJ5TGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IHN1bW1hcnlUZXh0Um93c1tyb3ddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9IHN1bW1hcnlUZXh0Um93c1tyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdyA+PSBudW1TdW1tYXJ5TGluZXMgKyBudW1TcGFjaW5nTGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc09wdGlvbkluZGV4ID0gcm93IC0gbnVtU3VtbWFyeUxpbmVzIC0gbnVtU3BhY2luZ0xpbmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gXCItIFwiICsgY3VyT3B0aW9uLm9wdGlvblRleHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgY3VyVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIgPSBjdXJUZXh0W2NvbF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0aW9uQ2hhciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgeCwgeSwgY2hhcik7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0aW9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMucHVzaChjcmVhdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBoaWRlKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5tYXAoYyA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoYykpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzID0gW107XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBBQ1RJT05fTk9ORSA9IDA7XG5leHBvcnQgY29uc3QgQUNUSU9OX0JBQ0tfVE9fR0FNRSA9IDE7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BVU0hfTUVOVSA9IDI7XG5leHBvcnQgY29uc3QgQUNUSU9OX1BPUF9NRU5VID0gMztcbmV4cG9ydCBjb25zdCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCA9IDQ7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1cgPSA1OyIsImltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XLCBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIEFDVElPTl9QVVNIX01FTlV9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuXG5leHBvcnQgY29uc3QgU0VUVElOR1NfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDb25maWd1cmUgeW91ciBnYW1lIGV4cGVyaWVuY2UuXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkluY3JlYXNlIFZpZXdwb3J0IEhlaWdodFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgV2lkdGhcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1d9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlRST0xTX01FTlUgPSB7XG4gICAgdHlwZTogXCJPUFRJT05TXCIsXG4gICAgc3VtbWFyeVRleHQ6IFwiQ09OVFJPTFNcXG5Nb3ZlbWVudDogQXJyb3cga2V5c1xcbkZJUkU6IFNwYWNlYmFyXFxuUGF1c2U6ICdoJ1wiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJCYWNrXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9QT1BfTUVOVX1dXG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBIRUxQX01FTlUgPSB7XG4gICAgdHlwZTogJ09QVElPTlMnLFxuICAgIHN1bW1hcnlUZXh0OiBcIldlbGNvbWUhIEZpcmVmb3ggaXMgdGhlIGJlc3QgYnJvd3NlciBmb3IgdGhpcyBnYW1lLiBDbGljayBvbiB0aGUgd2ViIHBhZ2UgdG8gY2FwdHVyZSBrZXkgcHJlc3Nlcy5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiUGxheVwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fQkFDS19UT19HQU1FfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJDb250cm9sc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogQ09OVFJPTFNfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIk9wdGlvbnNcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3tcbiAgICAgICAgICAgICAgICBrZXk6ICdFTlRFUicsIFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1BVU0hfTUVOVSwgXG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IFNFVFRJTkdTX01FTlVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuIiwiaW1wb3J0IHtGQUNJTkdfVVAsIEZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hUfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gRkFDSU5HX0RPV047XG4gICAgfVxuXG4gICAgc2V0RmFjaW5nKG5ld0ZhY2luZykge1xuICAgICAgICBpZiAobmV3RmFjaW5nICE9IHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2luZyA9IG5ld0ZhY2luZztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaW50ZW5kZWRYID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICB2YXIgaW50ZW5kZWRZID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBGQUNJTkdfTEVGVDogXG4gICAgICAgICAgICBpbnRlbmRlZFgtLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfTEVGVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19SSUdIVDpcbiAgICAgICAgICAgIGludGVuZGVkWCsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19SSUdIVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19VUDpcbiAgICAgICAgICAgIGludGVuZGVkWS0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19VUCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19ET1dOOlxuICAgICAgICAgICAgaW50ZW5kZWRZKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0RPV04pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc29tZSBzb3J0IG9mIGJvZ3VzIG1vdmVtZW50LiBkb24ndCBoYW5kbGUuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmludGVuZGVkUG9zaXRpb24gPSB7eDogaW50ZW5kZWRYLCB5OiBpbnRlbmRlZFl9O1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7ICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtQcm9qZWN0aWxlQ2hhcmFjdGVyfSBmcm9tIFwiLi9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtFbmVteUNoYXJhY3Rlcn0gZnJvbSBcIi4vZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuL21vdmFibGUuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL3RyZWFzdXJlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQTEFZRVJfU1BSSVRFX01BUCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQfSBmcm9tIFwiLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShQTEFZRVJfU1BSSVRFX01BUCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKEZBQ0lOR19ET1dOKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIG9uQW5pbWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUodGhpcy5tb3ZhYmxlLmZhY2luZyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYm91bmRzLnggPSB0aGlzLmluaXRpYWxYO1xuICAgICAgICB0aGlzLmJvdW5kcy55ID0gdGhpcy5pbml0aWFsWTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZUNvbW1hbmQoY29tbWFuZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ0ZJUkUnKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgRW5lbXlDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgVHJlYXN1cmVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LnB1c2god2l0aE9iamVjdC50cmVhc3VyZVR5cGUpO1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICBmaXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgcHJvamVjdGlsZSA9IG5ldyBQcm9qZWN0aWxlQ2hhcmFjdGVyKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSwgdGhpcy5tb3ZhYmxlLmZhY2luZywgOCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQKTtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHByb2plY3RpbGUpO1xuICAgIH1cblxuICAgIGhhc1RyZWFzdXJlKHRyZWFzdXJlVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnkuZmlsdGVyKHQgPT4gdCA9PSB0cmVhc3VyZVR5cGUpLmxlbmd0aCA+IDA7XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuL21vdmFibGUuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGUuanNcIjtcbmltcG9ydCB7IFdhbGxDaGFyYWN0ZXIgfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBkaXJlY3Rpb24sIG1heERpc3RhbmNlLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcbiAgICAgICAgdGhpcy50cmF2ZWxTcGVlZCA9ICgxIC8gNi4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IHVwIG91ciBzcHJpdGVcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdXAgb3VyIGFiaWxpdHkgdG8gbW92ZVxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBvYmplY3RzXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQrKztcbiAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA+PSB0aGlzLm1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHJhdmVsQ291bnRlciA+PSB0aGlzLnRyYXZlbFNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgLSB0aGlzLnRyYXZlbFNwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgV2FsbENoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzUG9pbnQoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHggPj0gdGhpcy54ICYmXG4gICAgICAgICAgICB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0cyhyZWN0YW5nbGUpIHtcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPD0gcmVjdGFuZ2xlLnggfHxcbiAgICAgICAgICAgIHRoaXMueCA+PSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCB8fFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPD0gcmVjdGFuZ2xlLnkgfHxcbiAgICAgICAgICAgIHRoaXMueSA+PSByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdXLCB2aWV3SCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB2aWV3Vywgdmlld0gpO1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsZWFyU2NyZWVuKCkge1xuICAgICAgICAvLyBjbGVhciB0aGUgc2NyZWVuIGFuZCBzZXQgY3Vyc29yIGF0IDAsMFxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgaXNPblNjcmVlbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJhY3Rlci5pc1Zpc2libGUgJiYgY2hhcmFjdGVyLmdldEJvdW5kcygpLmludGVyc2VjdHModGhpcy52aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIHJlbmRlcmFibGVPYmplY3RzID0gdGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKTtcbiAgICAgICAgLy8gcmV2ZXJzZSBzb3J0IGJ5IHogYXhpcywgZ3JhYiBoaWdoZXN0XG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLnNvcnQoKGEsIGIpID0+IGIueiAtIGEueik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cblxuICAgIGdldElzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlydHk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICAvLyBmb3JtYXQgb2YgYSBzcHJpdGVNYXA6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIjxzdGF0ZT5cIjogW3sgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0sXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0gXVxuICAgIC8vIH1cbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVNYXAsIHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zcHJpdGVNYXAgPSBzcHJpdGVNYXA7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmJvdW5kcztcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSB0aGlzLnN0YXRlRWxhcHNlZCArIHRpbWVFbGFwc2VkO1xuICAgICAgICBcbiAgICAgICAgdmFyIHByZXZGcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRGcmFtZSgpO1xuICAgICAgICBpZiAodGhpcy5mcmFtZSAhPSBwcmV2RnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIGRvIGNvbGxpZGluZyB3aXRoIHNwcml0ZXNcbiAgICAgICAgLy90aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgdmFyIGZpcnN0Um93ID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdFJvdyA9IDA7XG4gICAgICAgIHZhciBmaXJzdENvbCA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RDb2wgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgY2hhcmFjdGVyUm93c1tyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tyb3ddLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgJiYgc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdyA9IE1hdGgubWluKGZpcnN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gTWF0aC5tYXgobGFzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDb2wgPSBNYXRoLm1pbihmaXJzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbCA9IE1hdGgubWF4KGxhc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBmZWVscyBkaXJ0eVxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCA9IGxhc3RDb2wgLSBmaXJzdENvbCArIDE7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCA9IGxhc3RSb3cgLSBmaXJzdFJvdyArIDE7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDdXJyZW50RnJhbWUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgdG90YWxUaW1lID0gc3ByaXRlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJWYWwpIHsgcmV0dXJuIGFjYyArIGN1clZhbFtcImRpc3BsYXlUaW1lXCJdOyB9LCAwKTtcbiAgICAgICAgdmFyIGxlZnRvdmVyID0gdGhpcy5zdGF0ZUVsYXBzZWQgJSB0b3RhbFRpbWU7XG4gICAgICAgIHZhciBmcmFtZSA9IDA7XG4gICAgICAgIHZhciB0aW1lQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZyYW1lID0gaTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVkdWNlKClcbiAgICAgICAgICAgIHZhciBkaXNwbGF5VGltZSA9IHNwcml0ZXNbaV1bXCJkaXNwbGF5VGltZVwiXTtcbiAgICAgICAgICAgIGlmICh0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZSA+IGxlZnRvdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lQWNjdW11bGF0b3IgPSB0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFgoKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJDb2wgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgLy8gYXNzdW1lcyB0aGUgZmlyc3Qgcm93IGlzIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSBvdGhlciBmcmFtZXNcbiAgICAgICAgICAgIG91ckNvbCA9IG91ckNvbCAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93c1swXS5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJDb2w7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRZKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG91clJvdyA9IG91clJvdyAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93cy5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJSb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSByb3cgLSB0aGlzLmdldEFuY2hvcmVkWSgpO1xuICAgICAgICB2YXIgb3VyQ29sID0gY29sIC0gdGhpcy5nZXRBbmNob3JlZFgoKTtcblxuICAgICAgICBpZiAob3VyUm93ID49IDAgJiYgXG4gICAgICAgICAgICBvdXJDb2wgPj0gMCAmJiBcbiAgICAgICAgICAgIG91clJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICBvdXJDb2wgPCBjaGFyYWN0ZXJSb3dzW291clJvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5jaGFyQXQob3VyQ29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsImV4cG9ydCBmdW5jdGlvbiB3cmFwVGV4dCh0ZXh0LCB3cmFwV2lkdGgpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBsYXN0Um93U3RhcnQgPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBpZiAoaSA9PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY2FzZTogZmluYWwgbGV0dGVyXG4gICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJDaGFyID0gdGV4dFtpXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJDaGFyID09ICdcXG4nKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBsaW5lIGJyZWFrXG4gICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1ckNoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICBsZXQgd29yZExlbmd0aCA9IDE7XG4gICAgICAgICAgICAvLyBsb29rIGFoZWFkIGF0IGxlbmd0aCBvZiB0aGlzIHdvcmRcbiAgICAgICAgICAgIGxldCB5ID0gaTtcbiAgICAgICAgICAgIHdoaWxlICh5IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gdGV4dC5sZW5ndGggfHwgdGV4dFt5XSA9PSAnXFxuJyB8fCB0ZXh0W3ldID09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICB3b3JkTGVuZ3RoID0geSAtIGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpICsgd29yZExlbmd0aCAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB0aGlzIHdvcmQgd29uJ3QgZml0XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBnb29kLCBzdGFydCBmaW5kaW5nIHRoZSBuZXh0IHdvcmRcbiAgICAgICAgICAgICAgICBpICs9IHdvcmRMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBpZiAoaSAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB3ZSByYW4gb3V0IG9mIGxpbmUgd2lkdGhcbiAgICAgICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93cztcbn0iLCJleHBvcnQgY2xhc3MgVGhyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihmdW5jdGlvblBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5mdW5jdGlvblBvaW50ZXIgPSBmdW5jdGlvblBvaW50ZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoZGVzaXJlZEZyYW1lcmF0ZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBtaW5pbXVtTWlsbHNlY1BlckZyYW1lID0gMTAwMC8gZGVzaXJlZEZyYW1lcmF0ZTtcblxuICAgICAgICB2YXIgaW50ZXJuYWxSdW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhhdC5mdW5jdGlvblBvaW50ZXIoKTtcbiAgICAgICAgICAgIHZhciBhZnRlciA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBjYWxsIHRha2VzIGEgd2hpbGUsIHJlZHVjZSB0aGUgZGVsYXkgdW50aWwgdGhlIG5leHQgZXhlY3V0ZVxuICAgICAgICAgICAgdmFyIG5leHREZWxheSA9IE1hdGgubWF4KDAsIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgLSAoYWZ0ZXIgLSBub3cpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIG5leHREZWxheSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5pdGlhbCBjYWxsXG4gICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIDApOyBcbiAgICB9XG59IiwiXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFdpbkFuaW1hdGlvbiwgVGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtFbmVteUNoYXJhY3Rlcn0gZnJvbSBcIi4vZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudV9zcGVjcy5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiB0cnVlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxuICAgICdudW1FbmVtaWVzJzogMTBcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHsgIFxuICAgIHZhciB0aEdhbWUgPSBuZXcgVHJlYXN1cmVIdW50R2FtZSgpO1xuICAgIHRoR2FtZS5pbml0aWFsaXplKGdsb2JhbE9wdGlvbnMpO1xufVxuXG52YXIgZ2FtZU9iamVjdHMgPSBuZXcgR2FtZU9iamVjdHMoKTtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlSHVudEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gc2V0IHVwIGJhc2ljIGdhbWUgb2JqZWN0c1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChMRVZFTF9UT1dOKTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgS2V5TWFwKCk7XG4gICAgICAgIHRoaXMubWVudVN0YWNrID0gW107XG5cbiAgICAgICAgdGhpcy5TVEFURV9SVU5OSU5HID0gMDtcbiAgICAgICAgdGhpcy5TVEFURV9XSU5OTklORyA9IDE7XG4gICAgICAgIHRoaXMuU1RBVEVfREVBRCA9IDI7XG4gICAgICAgIHRoaXMuU1RBVEVfTUVOVSA9IDM7XG5cbiAgICAgICAgLy8gdGhpcyBzaG91bGQgcHJvYmFibHkgdHVybiBpbnRvIGEgc3RhdGUgbWFjaGluZVxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIHRoaXMuRVhQTE9TSU9OX1NQRUVEID0gMjAwMDsgLy8gbnVtIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lcyBvZiBXSU4gZXhwbG9zaW9uICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucmVzZXRMZXZlbFRpbWUgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgdmFyIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuXG4gICAgICAgIC8vIGRvbid0IGxldCB0aGVtIG92ZXJsYXBcbiAgICAgICAgd2hpbGUgKGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmouaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0WCgpID09PSB4ICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRZKCkgPT09IHkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlR29hbChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgVHJlYXN1cmVDaGFyYWN0ZXIoZ29hbFBsYWNlbWVudC54LCBnb2FsUGxhY2VtZW50LnksICckJywgJ2xldmVsR29hbCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVuZW1pZXNcbiAgICAgICAgdmFyIGVuZW15UGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cbiAgICBcbiAgICByZXNldExldmVsKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICBnYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5jbGVhckFuaW1hdGlvbnMoKTtcblxuICAgICAgICAvLyBjcmVhdGUgb3VyIHBsYXllclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8gYWRkIGEgbGV2ZWxHb2FsIHRvIHRoaXMgbGV2ZWxcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlR29hbChnYW1lT2JqZWN0cywgdGhpcy5tYXApKTtcblxuICAgICAgICAvLyBhZGQgc29tZSBlbmVtaWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2xvYmFsT3B0aW9uc1snbnVtRW5lbWllcyddOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCB0aGlzLm1hcCkpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIG91ciBtYXAgb2JqZWN0c1xuICAgICAgICB0aGlzLm1hcC5nZXRNYXBDaGFyYWN0ZXJzKCkubWFwKHggPT4gZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHgpKTtcblxuICAgICAgICAvKnRoaXMuZG9vciA9IG5ldyBEb29yd2F5Q2hhcmFjdGVyKDIsIDIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL3d3dy5nb29nbGUuY29tJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5kb29yKTsqL1xuICAgICAgICBcbiAgICAgICAgLy8gY2VudGVyIG9uIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBibG9ja2luZyBhbmltYXRpb24gdGhhdCAnZXhwbG9kZXMnIHRoZSBcbiAgICAvLy4uLmdvYWwgaW50byBhbiBleHBsb3Npb25cbiAgICBzcGF3bkV4cGxvc2lvbnMobm93LCBjZW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgICAvLyBzcGF3biBhIG5ldyBhbmltYXRpb24gYmFzZWQgb24gRVhQTE9TSU9OX1NQRUVEXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID4gdGhpcy5FWFBMT1NJT05fU1BFRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbihjZW50ZXJlZENoYXJhY3Rlci5nZXRYKCksIGNlbnRlcmVkQ2hhcmFjdGVyLmdldFkoKSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxFeHBsb3Npb24oeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBUZXh0QW5pbWF0b24oeCwgeSwgdGV4dCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oeCwgeSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgIH1cblxuICAgIGNoZWNrRGVhZENvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9ERUFEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsRXhwbG9zaW9uKHRoaXMuY2hhcmFjdGVyLmdldFgoKSwgdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpLCBcIkRFQURcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dpbkNvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhhc1RyZWFzdXJlKCdsZXZlbEdvYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdRVUlUJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGJyaW5nIHVwIGEgUVVJVCBtZW51LiBwcm9jZXNzLmV4aXQoKSBkb2Vzbid0IHdvcmsgaW4gYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7ICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdIRUxQJykge1xuICAgICAgICAgICAgICAgICAgICAgLy8gcHVzaCBtZW51IHN0YXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9NRU5VO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoSEVMUF9NRU5VLCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uT2JqID0gdGhpcy5tZW51LmhhbmRsZUlucHV0KGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fQkFDS19UT19HQU1FKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjdXJyZW50IG1lbnUgYW5kIGdvIGJhY2sgdG8gZ2FtZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcmV2U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BVU0hfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudSBhbmQgcHVzaCBpdCBvbnRvIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLmV2ZW50QXJncy5tZW51LCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fUE9QX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3AgcHJldiBtZW51IGFuZCBzaG93IGl0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZW51ID0gdGhpcy5tZW51U3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IHByZXZNZW51O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IHRoaXMgYnJlYWtzIGlmIHdlIGRvIGl0IGJ5IGFuIG9kZCBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgPiBnbG9iYWxPcHRpb25zWydtYXhWaWV3cG9ydEhlaWdodCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgPSBnbG9iYWxPcHRpb25zWydtaW5WaWV3cG9ydEhlaWdodCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPiBnbG9iYWxPcHRpb25zWydtYXhWaWV3cG9ydFdpZHRoJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoID0gZ2xvYmFsT3B0aW9uc1snbWluVmlld3BvcnRXaWR0aCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2VudGVyIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldElzRGlydHkoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZWRyYXcgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nP1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1dpbkNvbmRpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEZWFkQ29uZGl0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9XSU5OSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9ERUFEKSB7XG4gICAgICAgICAgICAgICAgLy8gd2luL2RpZSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRXhwbG9zaW9ucyhub3csIHRoaXMuY2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0TGV2ZWxUaW1lID49IDAgJiYgbm93ID4gdGhpcy5yZXNldExldmVsVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7ICAgICAgXG5cbiAgICAgICAgdmFyIGxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgdXBkYXRlRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gbm93IC0gbGFzdFVwZGF0ZTtcbiAgICAgICAgICAgIGxhc3RVcGRhdGUgPSBub3c7XG5cbiAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgIHRoYXQudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcmF3RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCF0aGF0LnJlbmRlcmVyLmdldElzRGlydHkoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5jbGVhclNjcmVlbigpO1xuICAgICAgICAgICAgdGhhdC5kcmF3SGVscCh0aGF0LmNoYXJhY3Rlci5nZXRDaGFyYWN0ZXIoKSk7XG4gICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcihnYW1lT2JqZWN0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cblxuICAgIGRyYXdIZWxwKGNoYXJhY3RlclN5bWJvbCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJ1VzZSBGaXJlZm94IHRvIHBsYXkgaWYgeW91IGFyZW5cXCd0IGFscmVhZHkhIVxcbidcbiAgICAgICAgLyp2YXIgb3V0cHV0ID0gJ0luc3RydWN0aW9uczogVXNlIEZpcmVmb3ggb3IgQ2hyb21lIChGaXJlZm94IHJlZHVjZXMgZmxpY2tlcmluZyEpXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ0JyZWFrIG91dCB0aGUgZGV2IHRvb2xzIGludG8gYSBzZXBhcmF0ZSB3aW5kb3cgYW5kIHRoZW4gY2xpY2sgb24gbXkgYWN0dWFsIHdlYiBwYWdlIHRvIGVuYWJsZSBjb250cm9scy5cXG5cXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnVXNlIHlvdXIgXCInICsgY2hhcmFjdGVyU3ltYm9sICsgJ1wiIGNoYXJhY3RlciBhbmQgZ28gZmluZCB0aGUgdHJlYXN1cmUgKCQpIGJ1dCB3YXRjaCBvdXQgZm9yIGJhZCBndXlzLi4uXFxuXFxuJzsgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IENvbnRyb2wgIHwgQWN0aW9uIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfC0tLS0tLS0tLS18LS0tLS0tLS18XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgc3BhY2ViYXIgfCBGSVJFISAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHcgICAgICAgIHwgVXAgICAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBkICAgICAgICB8IFJpZ2h0ICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgcyAgICAgICAgfCBEb3duICAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IGEgICAgICAgIHwgTGVmdCAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBjICAgICAgICB8IFF1aXQgICB8XFxuJzsqL1xuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgIH1cbn1cblxucnVuKCk7IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCwgdHJlYXN1cmVUeXBlKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgICB0aGlzLnRyZWFzdXJlVHlwZSA9IHRyZWFzdXJlVHlwZTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKHJvdywgY29sKSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IF1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUFJPSkVDVElMRV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMiddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjQnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI4J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJFJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFtGQUNJTkdfTEVGVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUMxJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfVVBdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCMyddIH1dLFxuICAgICAgICBbRkFDSU5HX1JJR0hUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjcnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19ET1dOXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QkQnXSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNQVBfSE9VU0UgPSBbXG5cIiAgICAgX19fX19fX19fICAgICAgXCIsXG5cIiAgIF8vICAgICAgICAgXFxcXF8gICBcIixcblwiIF8vICAgICAgICAgICAgIFxcXFxfIFwiLFxuXCIvX19fX19fX19fX19fX19fX19cXFxcXCIsXG5cIiB8ICAgICAgICAgICAgICAgfCAgXCIsXG5cIiB8ICAgICA9PT09PSAgICAgfCAgXCIsXG5cIiB8IHwrfCAgfCB8ICB8K3wgfCAgXCIsXG5cIiB8X19fX19ffCB8X19fX19ffCAgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX0JVU0ggPSBbXG5cIiAjIyMgXCIsXG5cIiMjIyMjXCIsXG5cIiAjIyMgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX1RSRUUgPSBbXG5cIiAgICgqKikgICAgICAgXCIsXG5cIiAoKioqKioqKSAgXCIsXG5cIigqKioqKioqKikgXCIsXG5cIiAgKCoqKiopICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAgfHwgICAgXCIsXG5cIiAgIC9fX1xcXFwgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IExFVkVMX1RPV04gPSB7XG5cIndpZHRoXCI6IDEyMixcblwiaGVpZ2h0XCI6IDYwLFxuXCJtYXBfb2JqZWN0c1wiOiBbXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzNywgXCJ5XCI6IDEzIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiAxMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMyLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzOCwgXCJ5XCI6IDkgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDkwLCBcInlcIjogMTggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMTAwLCBcInlcIjogMTYgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDUwLCBcInlcIjogMjIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogNjAsIFwieVwiOiAyMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDc4LCBcInlcIjogMjMgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDcwLCBcInlcIjogNDIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogODAsIFwieVwiOiA0MCB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDIwLCBcInlcIjogODAgfSxcbiAgICBcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDQwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDExLCBcInlcIjogMzggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTAsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDMyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzAsIFwieVwiOiAzMiB9LFxuICAgIFxuXVxufTsiLCIvLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIGdhbWUgb2JqZWN0XG5leHBvcnQgY2xhc3MgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGxDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihyb3csIGNvbCkge1xuICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
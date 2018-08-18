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

/***/ "./src/core/character.js":
/*!*******************************!*\
  !*** ./src/core/character.js ***!
  \*******************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle.js */ "./src/core/rectangle.js");
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateable.js */ "./src/core/updateable.js");



// Base class for every type of renderable game object
class Character extends _updateable_js__WEBPACK_IMPORTED_MODULE_1__["Updateable"] {
    constructor(initialX, initialY) {
        super();

        this.initialX = initialX;
        this.initialY = initialY;
        this.currentX = initialX;
        this.currentY = initialY;
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

    setX(newX) {
        const diff = newX - this.currentX;
        this.currentX += diff;
        this.bounds.x += diff;
    }

    setY(newY) {
        const diff = newY - this.currentY;
        this.currentY += diff;
        this.bounds.y += diff;
    }

    getX() {
        return this.currentX;
    }

    getY() {
        return this.currentY;
    }

    getBounds() {
        return this.bounds;
    }

    getCharacter(col, row) {
        return null;
    }

    onAnimated() {
        this.needsRedraw = true;
    }

    collide(withObject) {
    }
}

/***/ }),

/***/ "./src/core/collider.js":
/*!******************************!*\
  !*** ./src/core/collider.js ***!
  \******************************/
/*! exports provided: Collider, PixelCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelCollider", function() { return PixelCollider; });
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateable.js */ "./src/core/updateable.js");


class Collider extends _updateable_js__WEBPACK_IMPORTED_MODULE_0__["Updateable"] {
    constructor(parentObject) {
        super();
        
        this.parentObject = parentObject;
    }

    isCollision(otherCollider) {
        return otherCollider.parentObject.getBounds().intersects(this.parentObject.getBounds());
    }

    checkPhysicalCollision(gameObjects) {
        const parent = this.parentObject;
        const collisionObjects = gameObjects.objects.filter(
            x => x.isPhysical &&
            x !== parent &&
            x.getBounds().intersects(parent.getBounds())
        );
        
        if (collisionObjects.length > 0) {
            // collide with each other
            collisionObjects.map(obj => parent.collide(obj));
        }
    }

    checkColliderCollision(gameObjects) {
        const parent = this.parentObject;
        const that = this;
        const collisionObjects = gameObjects.objects.filter(
            x => x instanceof Collider &&
            x !== that &&
            x.isCollision(that) &&
            that.isCollision(x)
        );
        if (collisionObjects.length > 0) {
            // collide with each other
            collisionObjects.map(obj => parent.collide(obj.parentObject));
        }
    }
}

class PixelCollider extends Collider {
    constructor(parentObject, sprite) {
        super(parentObject);
        this.sprite = sprite;
    }

    checkPixelCollison_2_Sprites(sprite1, sprite2) {
        const parentBounds = sprite1.getBounds();
        const isPixel = function(char) { return char != null && char != ' '; };
        for (let row = 0; row < parentBounds.height; row++) {
            for (let col = 0; col < parentBounds.width; col++) {
                const x = col + sprite1.getX();
                const y = row + sprite1.getY();
                if (isPixel(sprite1.getCharacter(x, y)) &&
                    isPixel(sprite2.getCharacter(x, y))) {
                        return true;
                    }
            }
        }
        return false;
    }

    checkPixelCollison_1_Sprite(sprite1, otherCollider) {
        const parentBounds = sprite1.getBounds();
        const isPixel = function(char) { return char != null && char != ' '; };
        for (let row = 0; row < parentBounds.height; row++) {
            for (let col = 0; col < parentBounds.width; col++) {
                const x = col + sprite1.getX();
                const y = row + sprite1.getY();
                if (isPixel(sprite1.getCharacter(x, y)) &&
                    otherCollider.parentObject.getBounds().intersectsPoint(x, y)) {
                        return true;
                    }
            }
        }
        return false;
    }

    isCollision(otherCollider) {
        if (otherCollider instanceof PixelCollider) {
            return this.checkPixelCollison_2_Sprites(this.sprite, otherCollider.sprite);
        }
        return this.checkPixelCollison_1_Sprite(this.sprite, otherCollider);
    }
}

/***/ }),

/***/ "./src/core/facing.js":
/*!****************************!*\
  !*** ./src/core/facing.js ***!
  \****************************/
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

/***/ "./src/core/game.js":
/*!**************************!*\
  !*** ./src/core/game.js ***!
  \**************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _thread_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread.js */ "./src/core/thread.js");
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer.js */ "./src/core/renderer.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider.js */ "./src/core/collider.js");




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
            let newBounds = obj.getBounds().copy();
            newBounds.x += intendedPosition.x - obj.getX();
            newBounds.y += intendedPosition.y - obj.getY();
            isObstructed = gameObjects.objects.filter(c => 
                                                    c !== obj && 
                                                    c.isPhysical && 
                                                    c.getBounds().intersects(newBounds)).length > 0;
        }

        if (!isObstructed) {
            obj.setX(intendedPosition.x);
            obj.setY(intendedPosition.y);
        }

        obj.intendedPosition = null;
    }

    update(now, timeElapsed, gameObjects) {
        // update everything
        gameObjects.objects.map(x => x.update(now, timeElapsed));

        // handle movement intentions
        gameObjects.objects.filter(x => x.intendedPosition != null).map(x => this.handleMovement(x, x.intendedPosition, gameObjects));

        // check all collisions
        const colliderObjects = gameObjects.objects.filter(x => x instanceof _collider_js__WEBPACK_IMPORTED_MODULE_2__["Collider"]);

        colliderObjects.map(x => x.checkPhysicalCollision(gameObjects));
        colliderObjects.map(x => x.checkColliderCollision(gameObjects));

        // remove everything that needs to be removed
        var removableObjects = gameObjects.objects.filter(x => x.removeFromGameObjects);
        if (removableObjects.length > 0) {
            removableObjects.map(x => gameObjects.removeObject(x));
            this.renderer.setIsDirty();
        }

        this.renderer.checkRedraw(gameObjects);
    }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/core/game_objects.js":
/*!**********************************!*\
  !*** ./src/core/game_objects.js ***!
  \**********************************/
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

/***/ "./src/core/math_extensions.js":
/*!*************************************!*\
  !*** ./src/core/math_extensions.js ***!
  \*************************************/
/*! exports provided: randomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumber", function() { return randomNumber; });
function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

/***/ }),

/***/ "./src/core/movable.js":
/*!*****************************!*\
  !*** ./src/core/movable.js ***!
  \*****************************/
/*! exports provided: Movable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movable", function() { return Movable; });
/* harmony import */ var _facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./facing.js */ "./src/core/facing.js");
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateable.js */ "./src/core/updateable.js");



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

/***/ "./src/core/rectangle.js":
/*!*******************************!*\
  !*** ./src/core/rectangle.js ***!
  \*******************************/
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

    copy() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
}

/***/ }),

/***/ "./src/core/renderer.js":
/*!******************************!*\
  !*** ./src/core/renderer.js ***!
  \******************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle.js */ "./src/core/rectangle.js");


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
                var characters = renderableObjects.filter(c => c.getCharacter).map(c => c.getCharacter(col, row)).filter(c => c != null);
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

/***/ "./src/core/sprite.js":
/*!****************************!*\
  !*** ./src/core/sprite.js ***!
  \****************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateable.js */ "./src/core/updateable.js");


class Sprite extends _updateable_js__WEBPACK_IMPORTED_MODULE_0__["Updateable"] {
    // format of a spriteMap:
    // {
    //     "<state>": [{ "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] },
    //                 { "displayTime": <timeInMillisec>, "characters": [<row1string>, <row2string>, etc] } ]
    // }
    constructor(spriteMap, parentObject, initialState) {
        super();
        
        this.spriteMap = spriteMap;
        this.parentObject = parentObject;
        this.state = initialState;
        this.stateElapsed = 0;
        this.frame = 0;
        this.isVisible = true;
        this.calculateSize();
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
            this.calculateSize();
        }
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
        const newW = lastCol - firstCol + 1;
        const newH = lastRow - firstRow + 1;
        this.parentObject.getBounds().width = newW;
        this.parentObject.getBounds().height = newH;
        if (this.spriteMap.anchor == "center") {
            this.parentObject.getBounds().x = this.parentObject.getX() - Math.floor(newW / 2);
            this.parentObject.getBounds().y = this.parentObject.getY() - Math.floor(newH / 2);
        }
    }

    setState(newState) {
        this.state = newState;
        this.calculateSize();
    }

    getX() {
        let x = this.parentObject.getX();
        if (this.spriteMap.anchor == "center") {
            x -= Math.floor(this.parentObject.getBounds().width / 2);
        }
        return x;
    }

    getY() {
        let y = this.parentObject.getY(); 
        if (this.spriteMap.anchor == "center") {
            y -= Math.floor(this.parentObject.getBounds().height / 2);
        }
        return y;
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

    getCharacter(col, row) {
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

/***/ "./src/core/text_helpers.js":
/*!**********************************!*\
  !*** ./src/core/text_helpers.js ***!
  \**********************************/
/*! exports provided: wrapText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapText", function() { return wrapText; });
/**
 * Takes in a string and a wrap width and splits the string into
 * an array of text substrings that are all guaranteed to be less than the wrap width.
 */
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

/***/ "./src/core/thread.js":
/*!****************************!*\
  !*** ./src/core/thread.js ***!
  \****************************/
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

/***/ "./src/core/updateable.js":
/*!********************************!*\
  !*** ./src/core/updateable.js ***!
  \********************************/
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

/***/ "./src/enemy_character.js":
/*!********************************!*\
  !*** ./src/enemy_character.js ***!
  \********************************/
/*! exports provided: EnemyCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyCharacter", function() { return EnemyCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");
/* harmony import */ var _projectile_character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile_character.js */ "./src/projectile_character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/facing.js */ "./src/core/facing.js");
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player_character.js */ "./src/player_character.js");









class EnemyCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.damage = 100; // TODO: make this part of a spec
        this.sprite = new _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this, 0);
        this.movable = new _core_movable_js__WEBPACK_IMPORTED_MODULE_4__["Movable"](this);
        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_2__["PixelCollider"](this, this.sprite);

        this.children.push(this.sprite);
        this.children.push(this.movable);
        this.children.push(this.collider);
    }

    think() {
        var random = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_5__["randomNumber"])(4);
        var direction = 'NONE';
        switch (random) {
            case 1: direction = _core_facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_LEFT"]; break;
            case 2: direction = _core_facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_RIGHT"]; break;
            case 3: direction = _core_facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_DOWN"]; break;
            case 4: direction = _core_facing_js__WEBPACK_IMPORTED_MODULE_6__["FACING_UP"]; break;
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

        if (withObject instanceof _player_character_js__WEBPACK_IMPORTED_MODULE_7__["PlayerCharacter"]) {
            withObject.receiveDamage(this.damage);
        }
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
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/facing.js */ "./src/core/facing.js");


class KeyMap {
    constructor() {
    }

    getGameCommand(key) {
        switch(key) {
        case 'a': 
        case "65":
        case "37":
            return _core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"];

        case 'e': 
        case 'd': 
        case "68":
        case "39":
            return _core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"];

        case ',': 
        case 'w': 
        case "87":
        case "38":
            return _core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"];

        case 'o':
        case 's':
        case "83":
        case "40":
            return _core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"];

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
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/facing.js */ "./src/core/facing.js");
/* harmony import */ var _core_text_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/text_helpers.js */ "./src/core/text_helpers.js");





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

        if (gameCommand == _core_facing_js__WEBPACK_IMPORTED_MODULE_2__["FACING_DOWN"]) {
            // scroll through menu options
            this.selectedOption += 1;
            this.selectedOption = this.selectedOption % this.getNumOptions();
            this.setOptionVisibility();
        } else if (gameCommand == _core_facing_js__WEBPACK_IMPORTED_MODULE_2__["FACING_UP"]) {
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
        const summaryTextRows = Object(_core_text_helpers_js__WEBPACK_IMPORTED_MODULE_3__["wrapText"])(summaryText, wrapW);
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
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/facing.js */ "./src/core/facing.js");
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");
/* harmony import */ var _treasure_character_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasure_character.js */ "./src/treasure_character.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");









class PlayerCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_5__["Character"] {
    constructor(initialX, initialY) {
        super(initialX, initialY);
        this.health = 100;
        this.isVisible = true;
        this.obeysPhysics = true;
        this.inventory = [];

        this.sprite = new _core_sprite_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["PLAYER_SPRITE_MAP"], this, _core_facing_js__WEBPACK_IMPORTED_MODULE_4__["FACING_DOWN"]);
        this.children.push(this.sprite);

        this.movable = new _core_movable_js__WEBPACK_IMPORTED_MODULE_2__["Movable"](this);
        this.children.push(this.movable);

        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_3__["Collider"](this);
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
        if (withObject instanceof _treasure_character_js__WEBPACK_IMPORTED_MODULE_6__["TreasureCharacter"]) {
            this.inventory.push(withObject.treasureType);
            withObject.removeFromGameObjects = true;
        }        
    }

    receiveDamage(damageAmount) {
        this.health -= damageAmount;
    }

    fireProjectile(gameObjects) {
        var projectile = new _projectile_character_js__WEBPACK_IMPORTED_MODULE_0__["ProjectileCharacter"](this.getX(), this.getY(), this.movable.facing, 8, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__["PROJECTILE_SPRITE_MAP"]);
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
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _wall_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wall_character.js */ "./src/wall_character.js");






class ProjectileCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
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
        this.sprite = new _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this, direction);
        this.children.push(this.sprite);
        
        // set up our ability to move
        this.movable = new _core_movable_js__WEBPACK_IMPORTED_MODULE_2__["Movable"](this);
        this.children.push(this.movable);

        // check for collisions with objects
        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_1__["PixelCollider"](this, this.sprite);
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

/***/ "./src/static_character.js":
/*!*********************************!*\
  !*** ./src/static_character.js ***!
  \*********************************/
/*! exports provided: StaticCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticCharacter", function() { return StaticCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");


class StaticCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol) {
         super(initialX, initialY);
         this.symbol = symbol;
     }
 
     getCharacter(col, row) {
         if (this.getX() == col && this.getY() == row) {
             return this.symbol;
         }
         return null;
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
/* harmony import */ var _core_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/game.js */ "./src/core/game.js");
/* harmony import */ var _key_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key_map.js */ "./src/key_map.js");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations.js */ "./src/animations.js");
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player_character.js */ "./src/player_character.js");
/* harmony import */ var _enemy_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemy_character.js */ "./src/enemy_character.js");
/* harmony import */ var _core_game_objects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/game_objects.js */ "./src/core/game_objects.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");
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

var gameObjects = new _core_game_objects_js__WEBPACK_IMPORTED_MODULE_5__["GameObjects"]();

class TreasureHuntGame extends _core_game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
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
        var x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.width - 1);
        var y = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.height - 1);

        // don't let them overlap
        while (gameObjects.objects.filter(obj => obj.isPhysical && 
                                                 obj.getBounds().intersectsPoint(x, y)).length > 0) {
            x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.width - 1);
            y = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__["randomNumber"])(map.height - 1);
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

        // show help menu. this may change on new levels eventually
        this.showHelpMenu();

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

    showHelpMenu() {
        // push menu state on
        this.prevState = this.state;
        this.state = this.STATE_MENU;
        this.menu = new _menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](_menu_specs_js__WEBPACK_IMPORTED_MODULE_12__["HELP_MENU"], this.renderer.viewport, 1);
        this.menu.show(gameObjects);
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
                    this.showHelpMenu();
                } else {
                    // update character movement
                    this.character.handleGameCommand(gameCommand, gameObjects);
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
            this.renderer.centerViewportOn(this.character, this.map);

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
            try {
                var now = Date.now();
                var timeElapsed = now - lastUpdate;
                lastUpdate = now;

                that.handleInput();
                that.update(now, timeElapsed, gameObjects);
            } catch (err){
                console.log(err.message);
            }
        }

        var drawFunc = function() {
            try {
                if (!that.renderer.getIsDirty()) {
                    return;
                }

                that.renderer.clearScreen();
                that.drawHelp(that.character.getCharacter());
                that.renderer.render(gameObjects);
            } catch (err){
                console.log(err.message);
            }
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
/* harmony import */ var _static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_character.js */ "./src/static_character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/collider.js */ "./src/core/collider.js");



class TreasureCharacter extends _static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"] {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY, symbol);
         
         this.treasureType = treasureType;

        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
        this.children.push(this.collider);
     }
 }
 

/***/ }),

/***/ "./src/treasure_hunt_art.js":
/*!**********************************!*\
  !*** ./src/treasure_hunt_art.js ***!
  \**********************************/
/*! exports provided: ENEMY_SPIKEY_SPRITE_MAP, ENEMY_TEST_SPRITE_MAP, PROJECTILE_SPRITE_MAP, PLAYER_SPRITE_MAP, MAP_HOUSE, MAP_BUSH, MAP_TREE, LEVEL_TOWN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_SPIKEY_SPRITE_MAP", function() { return ENEMY_SPIKEY_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_TEST_SPRITE_MAP", function() { return ENEMY_TEST_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTILE_SPRITE_MAP", function() { return PROJECTILE_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_SPRITE_MAP", function() { return PLAYER_SPRITE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_HOUSE", function() { return MAP_HOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_BUSH", function() { return MAP_BUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_TREE", function() { return MAP_TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_TOWN", function() { return LEVEL_TOWN; });
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/facing.js */ "./src/core/facing.js");


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

const ENEMY_TEST_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        "0": [{ "displayTime": 999999, "characters": ENEMY_TEST_FRAME_1 }]
    }
};

const PROJECTILE_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]]: [{ "displayTime": 999999, "characters": ['\u25C2'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]]: [{ "displayTime": 999999, "characters": ['\u25B4'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]]: [{ "displayTime": 999999, "characters": ['\u25B8'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]]: [{ "displayTime": 999999, "characters": ['\u25BE'] }]
    }
};

const PLAYER_SPRITE_MAP = {
    "anchor": "center",
    "states": {
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]]: [{ "displayTime": 999999, "characters": ['\u25C1'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]]: [{ "displayTime": 999999, "characters": ['\u25B3'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]]: [{ "displayTime": 999999, "characters": ['\u25B7'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]]: [{ "displayTime": 999999, "characters": ['\u25BD'] }]
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
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");


class WallCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol) {
        super(initialX, initialY);
        this.symbol = symbol;
        this.isPhysical = true;
    }

    getCharacter(col, row) {
        if (this.getX() == col && this.getY() == row) {
            return this.symbol;
        }
        return null;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZmFjaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZV9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb3ZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91cGRhdGVhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleV9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudV9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51X3NwZWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmVhc3VyZV9odW50X2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2FsbF9jaGFyYWN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFD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LEM7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGtCO0FBQ1U7QUFDTjtBQUNQO0FBQ0M7QUFDSztBQUNxQztBQUNsQzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRDO0FBQzVDLDZGQUE2QztBQUM3Qyw0RkFBNEM7QUFDNUMsMEZBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0QwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHFDQUFxQzs7QUFFMUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx3Q0FBd0M7O0FBRTdDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssc0NBQXNDOztBQUUzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1Qzs7QUFFNUMsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDOztBQUUzQztBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3pIa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RyZWFzdXJlLWh1bnQuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkgeyB9XG5cbiAgICBzcGF3blJlbmRlcmFibGVzKCkgeyB9XG5cbiAgICBpc0V4cGlyZWQoKSB7IHJldHVybiB0cnVlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QW5pbWF0b24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNlbnRlclgsIGNlbnRlclksIHRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWDtcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgdGhpcy5mcmFtZVNwZWVkID0gNjAwO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIGlmICh0aW1lTm93IC0gdGhpcy5sYXN0RnJhbWUgPiB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAgICAgLy8gYWRkIFdJTiBpbiB0aGUgY2VudGVyIG9mIHRoZSBleHBsb3Npb24uXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB4X29mZnNldCA9IE1hdGguZmxvb3IodGhpcy50ZXh0Lmxlbmd0aCAvIDIpIC0gaTtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2gobmV3IFN0YXRpY0NoYXJhY3Rlcih0aGlzLmNlbnRlclggLSB4X29mZnNldCwgdGhpcy5jZW50ZXJZLCB0aGlzLnRleHQuY2hhckF0KGkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIG5ldmVyIGdvZXMgYXdheVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gLTE7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHZhciBlbGFwc2VkID0gdGltZU5vdyAtIHRoaXMubGFzdEZyYW1lO1xuICAgICAgICBpZiAoZWxhcHNlZCA+PSB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzKys7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVOb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIGV4cGxvc2lvbiBwYXJ0aWNsZXMgaW4gYSBibGFzdCByYWRpdXMgYXdheSBmcm9tIHRoZSBjZW50ZXJcbiAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMuY2VudGVyWSAtIHRoaXMucmFkaXVzOyB5IDw9IHRoaXMuY2VudGVyWSArIHRoaXMucmFkaXVzOyB5KyspIHtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5jZW50ZXJZIC0geSk7XG4gICAgICAgICAgICB2YXIgbnVtWHMgPSBNYXRoLm1pbigyLCB0aGlzLnJhZGl1cyAtIGRpZmZlcmVuY2UgKyAxKTsgLy8gYWRkIDEgYmVjYXVzZSB3ZSBhbHdheXMgd2FudCBhdCBsZWFzdCAxIGV4cGxvc2lvbiBvbiBlYWNoIGxpbmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1YczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuY2VudGVyWCArICgodGhpcy5yYWRpdXMgLSBkaWZmZXJlbmNlKSAqIG11bHRpcGxpZXIpO1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKHgsIHksICcqJyk7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnM7XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXJYIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclggKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25IYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEFuaW1hdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgZXZlcnl0aGluZyAoVE9ETzogd2Ugc2hvdWxkbid0IGhhdmUgdG8gZG8gdGhpcylcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwIDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW2ldO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb24uaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXQgZnJvbSBvdXIgbGlzdFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSB0aGlzLmFuaW1hdGlvbnNbaV0uc3Bhd25SZW5kZXJhYmxlcygpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzICE9IG51bGwgJiYgY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubWFwKHggPT4gZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckFuaW1hdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG4vLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIHJlbmRlcmFibGUgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMueiA9IDA7IC8vIGRlZmF1bHQgdG8geiBheGlzIHBvcyBiZWluZyAwXG4gICAgICAgIHRoaXMuYm91bmRzID0gbmV3IFJlY3RhbmdsZShpbml0aWFsWCwgaW5pdGlhbFksIDEsIDEpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHNldFgobmV3WCkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WCAtIHRoaXMuY3VycmVudFg7XG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueCArPSBkaWZmO1xuICAgIH1cblxuICAgIHNldFkobmV3WSkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WSAtIHRoaXMuY3VycmVudFk7XG4gICAgICAgIHRoaXMuY3VycmVudFkgKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueSArPSBkaWZmO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYO1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRZO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICByZXR1cm4gb3RoZXJDb2xsaWRlci5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LmlzUGh5c2ljYWwgJiZcbiAgICAgICAgICAgIHggIT09IHBhcmVudCAmJlxuICAgICAgICAgICAgeC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHBhcmVudC5nZXRCb3VuZHMoKSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50T2JqZWN0O1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4IGluc3RhbmNlb2YgQ29sbGlkZXIgJiZcbiAgICAgICAgICAgIHggIT09IHRoYXQgJiZcbiAgICAgICAgICAgIHguaXNDb2xsaXNpb24odGhhdCkgJiZcbiAgICAgICAgICAgIHRoYXQuaXNDb2xsaXNpb24oeClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29sbGlkZSB3aXRoIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbk9iamVjdHMubWFwKG9iaiA9PiBwYXJlbnQuY29sbGlkZShvYmoucGFyZW50T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXhlbENvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCwgc3ByaXRlKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudE9iamVjdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cblxuICAgIGNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXMoc3ByaXRlMSwgc3ByaXRlMikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIGlzUGl4ZWwoc3ByaXRlMi5nZXRDaGFyYWN0ZXIoeCwgeSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUoc3ByaXRlMSwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlciBpbnN0YW5jZW9mIFBpeGVsQ29sbGlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXModGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIuc3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUodGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRkFDSU5HX1VQID0gJ1UnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19MRUZUID0gJ0wnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19ET1dOID0gJ0QnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19SSUdIVCA9ICdSJzsiLCJpbXBvcnQge1RocmVhZH0gZnJvbSBcIi4vdGhyZWFkLmpzXCI7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBuZXcgVGhyZWFkKHVwZGF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbmV3IFRocmVhZChkcmF3RnVuY3Rpb24pO1xuXG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlLnN0YXJ0KG9wdGlvbnNbJ3VwZGF0ZUZQUyddKTsgLy91cGRhdGUgWCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIHRoaXMudGhyZWFkRHJhdy5zdGFydChvcHRpb25zWydkcmF3RlBTJ10pOyAvL2RyYXcgWCB0aW1lcyBwZXIgc2Vjb25kXG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRpb25zWydwbGF5SW5Ccm93c2VyJ10pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXMgaW5zdGFkIG9mIGRpcmVjdCBjb25zb2xlIGlucHV0XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpOyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHVzIHRvIHJlYWQga2V5cyBkaXJlY3RseSBmcm9tIGNvbnNvbGUgaW5wdXQgd2l0aG91dCBFTlRFUlxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyBcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ3JlYWRhYmxlJywgZnVuY3Rpb24oZGF0YSkgeyAgIFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9jZXNzLnN0ZGluLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdGtleVByZXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdEtleXByZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0a2V5UHJlc3Nlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdGtleVByZXNzZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlbWVudChvYmosIGludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGxldCBpc09ic3RydWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5vYmV5c1BoeXNpY3MpIHtcbiAgICAgICAgICAgIGxldCBuZXdCb3VuZHMgPSBvYmouZ2V0Qm91bmRzKCkuY29weSgpO1xuICAgICAgICAgICAgbmV3Qm91bmRzLnggKz0gaW50ZW5kZWRQb3NpdGlvbi54IC0gb2JqLmdldFgoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy55ICs9IGludGVuZGVkUG9zaXRpb24ueSAtIG9iai5nZXRZKCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld0JvdW5kcykpLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2JzdHJ1Y3RlZCkge1xuICAgICAgICAgICAgb2JqLnNldFgoaW50ZW5kZWRQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIG9iai5zZXRZKGludGVuZGVkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKTtcblxuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja1BoeXNpY2FsQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG4gICAgICAgIGNvbGxpZGVyT2JqZWN0cy5tYXAoeCA9PiB4LmNoZWNrQ29sbGlkZXJDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgdmFyIHJlbW92YWJsZU9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzKTtcbiAgICAgICAgaWYgKHJlbW92YWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZhYmxlT2JqZWN0cy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoeCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoeCA9PiB4ICE9PSBvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxPYmplY3RzKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIG1heCkgKyAxKTtcbn0iLCJpbXBvcnQge0ZBQ0lOR19VUCwgRkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFR9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5mYWNpbmcgPSBGQUNJTkdfRE9XTjtcbiAgICB9XG5cbiAgICBzZXRGYWNpbmcobmV3RmFjaW5nKSB7XG4gICAgICAgIGlmIChuZXdGYWNpbmcgIT0gdGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nID0gbmV3RmFjaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpbnRlbmRlZFggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIHZhciBpbnRlbmRlZFkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG5cbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIEZBQ0lOR19MRUZUOiBcbiAgICAgICAgICAgIGludGVuZGVkWC0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19MRUZUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1JJR0hUOlxuICAgICAgICAgICAgaW50ZW5kZWRYKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1JJR0hUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1VQOlxuICAgICAgICAgICAgaW50ZW5kZWRZLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1VQKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX0RPV046XG4gICAgICAgICAgICBpbnRlbmRlZFkrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfRE9XTik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBzb21lIHNvcnQgb2YgYm9ndXMgbW92ZW1lbnQuIGRvbid0IGhhbmRsZS5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuaW50ZW5kZWRQb3NpdGlvbiA9IHt4OiBpbnRlbmRlZFgsIHk6IGludGVuZGVkWX07XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTsgICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0c1BvaW50KHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICB4ID49IHRoaXMueCAmJlxuICAgICAgICAgICAgeSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICB5ID49IHRoaXMueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGludGVyc2VjdHMocmVjdGFuZ2xlKSB7XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoIDw9IHJlY3RhbmdsZS54IHx8XG4gICAgICAgICAgICB0aGlzLnggPj0gcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDw9IHJlY3RhbmdsZS55IHx8XG4gICAgICAgICAgICB0aGlzLnkgPj0gcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29weSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdXLCB2aWV3SCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB2aWV3Vywgdmlld0gpO1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsZWFyU2NyZWVuKCkge1xuICAgICAgICAvLyBjbGVhciB0aGUgc2NyZWVuIGFuZCBzZXQgY3Vyc29yIGF0IDAsMFxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgaXNPblNjcmVlbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJhY3Rlci5pc1Zpc2libGUgJiYgY2hhcmFjdGVyLmdldEJvdW5kcygpLmludGVyc2VjdHModGhpcy52aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIHJlbmRlcmFibGVPYmplY3RzID0gdGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKTtcbiAgICAgICAgLy8gcmV2ZXJzZSBzb3J0IGJ5IHogYXhpcywgZ3JhYiBoaWdoZXN0XG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLnNvcnQoKGEsIGIpID0+IGIueiAtIGEueik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cblxuICAgIGdldElzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlydHk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICAvLyBmb3JtYXQgb2YgYSBzcHJpdGVNYXA6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIjxzdGF0ZT5cIjogW3sgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0sXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0gXVxuICAgIC8vIH1cbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVNYXAsIHBhcmVudE9iamVjdCwgaW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwcml0ZU1hcCA9IHNwcml0ZU1hcDtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRPYmplY3QuYm91bmRzO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB0aGlzLnN0YXRlRWxhcHNlZCA9IHRoaXMuc3RhdGVFbGFwc2VkICsgdGltZUVsYXBzZWQ7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJldkZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudEZyYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lICE9IHByZXZGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3Qub25BbmltYXRlZCgpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgdmFyIGZpcnN0Um93ID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdFJvdyA9IDA7XG4gICAgICAgIHZhciBmaXJzdENvbCA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RDb2wgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgY2hhcmFjdGVyUm93c1tyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tyb3ddLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgJiYgc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdyA9IE1hdGgubWluKGZpcnN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gTWF0aC5tYXgobGFzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDb2wgPSBNYXRoLm1pbihmaXJzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbCA9IE1hdGgubWF4KGxhc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBmZWVscyBkaXJ0eVxuICAgICAgICBjb25zdCBuZXdXID0gbGFzdENvbCAtIGZpcnN0Q29sICsgMTtcbiAgICAgICAgY29uc3QgbmV3SCA9IGxhc3RSb3cgLSBmaXJzdFJvdyArIDE7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoID0gbmV3VztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0ID0gbmV3SDtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS54ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpIC0gTWF0aC5mbG9vcihuZXdXIC8gMik7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS55ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpIC0gTWF0aC5mbG9vcihuZXdIIC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHggLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpOyBcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICB5IC09IE1hdGguZmxvb3IodGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ3VycmVudEZyYW1lKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIHRvdGFsVGltZSA9IHNwcml0ZXMucmVkdWNlKGZ1bmN0aW9uKGFjYywgY3VyVmFsKSB7IHJldHVybiBhY2MgKyBjdXJWYWxbXCJkaXNwbGF5VGltZVwiXTsgfSwgMCk7XG4gICAgICAgIHZhciBsZWZ0b3ZlciA9IHRoaXMuc3RhdGVFbGFwc2VkICUgdG90YWxUaW1lO1xuICAgICAgICB2YXIgZnJhbWUgPSAwO1xuICAgICAgICB2YXIgdGltZUFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmcmFtZSA9IGk7XG4gICAgICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCBhIHJlZHVjZSgpXG4gICAgICAgICAgICB2YXIgZGlzcGxheVRpbWUgPSBzcHJpdGVzW2ldW1wiZGlzcGxheVRpbWVcIl07XG4gICAgICAgICAgICBpZiAodGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWUgPiBsZWZ0b3Zlcikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZUFjY3VtdWxhdG9yID0gdGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRYKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyQ29sID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZXMgdGhlIGZpcnN0IHJvdyBpcyB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgb3RoZXIgZnJhbWVzXG4gICAgICAgICAgICBvdXJDb2wgPSBvdXJDb2wgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3NbMF0ubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyQ29sO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWSgpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV1bdGhpcy5mcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgbm90aW9uIG9mIHRoZSBtYXAgbG9jYXRpb24gYW5kIGxvY2FsaXplIHRvIHRoaXMgc3ByaXRlIG9ubHlcbiAgICAgICAgdmFyIG91clJvdyA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvdXJSb3cgPSBvdXJSb3cgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3MubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyUm93O1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gcm93IC0gdGhpcy5nZXRBbmNob3JlZFkoKTtcbiAgICAgICAgdmFyIG91ckNvbCA9IGNvbCAtIHRoaXMuZ2V0QW5jaG9yZWRYKCk7XG5cbiAgICAgICAgaWYgKG91clJvdyA+PSAwICYmIFxuICAgICAgICAgICAgb3VyQ29sID49IDAgJiYgXG4gICAgICAgICAgICBvdXJSb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgb3VyQ29sIDwgY2hhcmFjdGVyUm93c1tvdXJSb3ddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW291clJvd10uY2hhckF0KG91ckNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiLyoqXG4gKiBUYWtlcyBpbiBhIHN0cmluZyBhbmQgYSB3cmFwIHdpZHRoIGFuZCBzcGxpdHMgdGhlIHN0cmluZyBpbnRvXG4gKiBhbiBhcnJheSBvZiB0ZXh0IHN1YnN0cmluZ3MgdGhhdCBhcmUgYWxsIGd1YXJhbnRlZWQgdG8gYmUgbGVzcyB0aGFuIHRoZSB3cmFwIHdpZHRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFRleHQodGV4dCwgd3JhcFdpZHRoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgbGFzdFJvd1N0YXJ0ID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPD0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGkgPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGZpbmFsIGxldHRlclxuICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VyQ2hhciA9IHRleHRbaV07XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VyQ2hhciA9PSAnXFxuJykge1xuICAgICAgICAgICAgLy8gY2FzZTogbGluZSBicmVha1xuICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJDaGFyICE9ICcgJykge1xuICAgICAgICAgICAgbGV0IHdvcmRMZW5ndGggPSAxO1xuICAgICAgICAgICAgLy8gbG9vayBhaGVhZCBhdCBsZW5ndGggb2YgdGhpcyB3b3JkXG4gICAgICAgICAgICBsZXQgeSA9IGk7XG4gICAgICAgICAgICB3aGlsZSAoeSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGlmICh5ID09IHRleHQubGVuZ3RoIHx8IHRleHRbeV0gPT0gJ1xcbicgfHwgdGV4dFt5XSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgd29yZExlbmd0aCA9IHkgLSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSArIHdvcmRMZW5ndGggLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogdGhpcyB3b3JkIHdvbid0IGZpdFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgZ29vZCwgc3RhcnQgZmluZGluZyB0aGUgbmV4dCB3b3JkXG4gICAgICAgICAgICAgICAgaSArPSB3b3JkTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaWYgKGkgLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogd2UgcmFuIG91dCBvZiBsaW5lIHdpZHRoXG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvd3M7XG59IiwiZXhwb3J0IGNsYXNzIFRocmVhZCB7XG4gICAgY29uc3RydWN0b3IoZnVuY3Rpb25Qb2ludGVyKSB7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25Qb2ludGVyID0gZnVuY3Rpb25Qb2ludGVyO1xuICAgIH1cblxuICAgIHN0YXJ0KGRlc2lyZWRGcmFtZXJhdGUpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgbWluaW11bU1pbGxzZWNQZXJGcmFtZSA9IDEwMDAvIGRlc2lyZWRGcmFtZXJhdGU7XG5cbiAgICAgICAgdmFyIGludGVybmFsUnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoYXQuZnVuY3Rpb25Qb2ludGVyKCk7XG4gICAgICAgICAgICB2YXIgYWZ0ZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZnVuY3Rpb24gY2FsbCB0YWtlcyBhIHdoaWxlLCByZWR1Y2UgdGhlIGRlbGF5IHVudGlsIHRoZSBuZXh0IGV4ZWN1dGVcbiAgICAgICAgICAgIHZhciBuZXh0RGVsYXkgPSBNYXRoLm1heCgwLCBtaW5pbXVtTWlsbHNlY1BlckZyYW1lIC0gKGFmdGVyIC0gbm93KSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCBuZXh0RGVsYXkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWwgY2FsbFxuICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCAwKTsgXG4gICAgfVxufSIsIi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BpeGVsQ29sbGlkZXJ9IGZyb20gXCIuL2NvcmUvY29sbGlkZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyfSBmcm9tIFwiLi9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtQbGF5ZXJDaGFyYWN0ZXJ9IGZyb20gXCIuL3BsYXllcl9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15Q2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHNwcml0ZU1hcCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRoaW5rU3BlZWQgPSAoMSAvIDEuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDEwMDsgLy8gVE9ETzogbWFrZSB0aGlzIHBhcnQgb2YgYSBzcGVjXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMsIDApO1xuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBQaXhlbENvbGxpZGVyKHRoaXMsIHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gcmFuZG9tTnVtYmVyKDQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ05PTkUnO1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbSkge1xuICAgICAgICAgICAgY2FzZSAxOiBkaXJlY3Rpb24gPSBGQUNJTkdfTEVGVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGRpcmVjdGlvbiA9IEZBQ0lOR19SSUdIVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGRpcmVjdGlvbiA9IEZBQ0lOR19ET1dOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogZGlyZWN0aW9uID0gRkFDSU5HX1VQOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGhpbmtDb3VudGVyID4gdGhpcy50aGlua1NwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICUgdGhpcy50aGlua1NwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUHJvamVjdGlsZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHdpdGhPYmplY3QucmVjZWl2ZURhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRHYW1lQ29tbWFuZChrZXkpIHtcbiAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICBjYXNlICdhJzogXG4gICAgICAgIGNhc2UgXCI2NVwiOlxuICAgICAgICBjYXNlIFwiMzdcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfTEVGVDtcblxuICAgICAgICBjYXNlICdlJzogXG4gICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgY2FzZSBcIjY4XCI6XG4gICAgICAgIGNhc2UgXCIzOVwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19SSUdIVDtcblxuICAgICAgICBjYXNlICcsJzogXG4gICAgICAgIGNhc2UgJ3cnOiBcbiAgICAgICAgY2FzZSBcIjg3XCI6XG4gICAgICAgIGNhc2UgXCIzOFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19VUDtcblxuICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNhc2UgXCI4M1wiOlxuICAgICAgICBjYXNlIFwiNDBcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfRE9XTjtcblxuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgY2FzZSAnNjcnOlxuICAgICAgICAgICAgcmV0dXJuICdRVUlUJztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgY2FzZSAnNzAnOlxuICAgICAgICBjYXNlICczMic6XG4gICAgICAgICAgICByZXR1cm4gJ0ZJUkUnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjYXNlICc3Mic6XG4gICAgICAgICAgICByZXR1cm4gJ0hFTFAnO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnMTMnOlxuICAgICAgICAgICAgcmV0dXJuICdFTlRFUic7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBEYXRhKSB7XG4gICAgICAgIHRoaXMubWFwRGF0YSA9IG1hcERhdGE7XG4gICAgICAgIHRoaXMud2lkdGggPSBtYXBEYXRhLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBudWxsO1xuICAgIH1cblxuICAgIGdldE1hcENoYXJhY3RlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcblxuICAgICAgICAvLyBhZGQgYWxsIG9mIHRoZSBvYmplY3RzIHdpdGhpbiB0aGUgbGV2ZWxcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcERhdGEubWFwX29iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLm1hcERhdGEubWFwX29iamVjdHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBvYmouaW1hZ2UubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgICAgIHZhciB5ID0gcm93ICsgb2JqLnk7XG4gICAgICAgICAgICAgICAgdmFyIHJvd1N0ciA9IG9iai5pbWFnZVtyb3ddO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHJvd1N0ci5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gb2JqLnggKyBjb2w7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzQ2hhciA9IHJvd1N0ci5jaGFyQXQoY29sKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNDaGFyICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgeSwgdGhpc0NoYXIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpbiBsZWZ0L3JpZ2h0IGxldmVsIGJhcnJpZXJzXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoMCwgeSwgXCJ8XCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHRoaXMud2lkdGggLSAxLCB5LCBcInxcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIHRvcC9ib3R0b20gbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIDAsIFwiLVwiKSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB0aGlzLmhlaWdodCAtIDEsIFwiLVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xuICAgIH1cbn0iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3RlclwiO1xuaW1wb3J0IHtBQ1RJT05fTk9ORX0gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi9jb3JlL3RleHRfaGVscGVycy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IobWVudVNwZWMsIHZpZXdwb3J0LCB6UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zcGVjID0gbWVudVNwZWM7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnpQb3NpdGlvbiA9IHpQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0TnVtT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlYy5vcHRpb25zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXRPcHRpb25WaXNpYmlsaXR5KCkge1xuICAgICAgICAvLyBzZXQgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHNlbGVjdGlvbiBhcnJvd3MgYXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIGxpbmVcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubWFwKGMgPT4gYy5zeW1ib2wgPSAnICcpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzW3RoaXMuc2VsZWN0ZWRPcHRpb25dLnN5bWJvbCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGdhbWVDb21tYW5kKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBBQ1RJT05fTk9ORTtcbiAgICAgICAgbGV0IGV2ZW50QXJncyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19ET1dOKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uICUgdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfVVApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiAtPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIGlmIGl0IG1hdGNoZXMgdGhlIGdhbWVDb21tYW5kXG4gICAgICAgICAgICBsZXQgY3VyT3B0aW9uID0gdGhpcy5zcGVjLm9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbl07XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRBY3Rpb24gPSBjdXJPcHRpb24uYWN0aW9uTWFwLmZpbHRlcihvID0+IG8ua2V5ID09IGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gc2VsZWN0ZWRBY3Rpb25bMF0uYWN0aW9uO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHNlbGVjdGVkQWN0aW9uWzBdLmV2ZW50QXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWN0aW9uOiBhY3Rpb24sIGV2ZW50QXJnczogZXZlbnRBcmdzfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVzIGEgY2hhcmFjdGVyIHRvIHJlbmRlciBpbiB0aGUgbWVudSwgYW5kIGhhbmRsZXMgb3ZlcmhlYWQgZm9yIGl0XG4gICAgY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpIHtcbiAgICAgICAgLy8gYWRkIGV2ZXJ5dGhpbmcgaW5cbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgY2hhcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkcmF3IG9uIHRvcFxuICAgICAgICBjaGFyYWN0ZXIueiA9IHRoaXMuelBvc2l0aW9uO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QoY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBrZWVwIHRoZXNlIGFyb3VuZCBpbiBtZW1vcnkgc28gd2UgY2FuIHJlbW92ZSB0aGVtIGxhdGVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG5cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBkcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHRleHRXLCB0ZXh0SCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0ZXh0VzsgY29sKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgLSAxLCAnLScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSArIHRleHRILCAnLScpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRleHRIOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZpZXdwb3J0Lng7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMudmlld3BvcnQueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdwb3J0LndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dCA9IHRoaXMuc3BlYy5zdW1tYXJ5VGV4dDtcbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHRMZW4gPSBzdW1tYXJ5VGV4dC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHdyYXBXID0gTWF0aC5jZWlsKHdpZHRoICogMC44KTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHggcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF94ID0gbGVmdCArIE1hdGgucm91bmQoKHdpZHRoIC0gd3JhcFcpIC8gMik7XG5cbiAgICAgICAgLy8gZmlndXJlIG91dCB5IHBvc2l0aW9uc1xuICAgICAgICBsZXQgc3RhcnRfeSA9IGJvdHRvbSArIE1hdGgucm91bmQoaGVpZ2h0ICogMC44KTtcblxuICAgICAgICAvLyBzdW1tYXJ5IGlzIHRleHQgYXQgdG9wXG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0Um93cyA9IHdyYXBUZXh0KHN1bW1hcnlUZXh0LCB3cmFwVyk7XG4gICAgICAgIGNvbnN0IG51bVN1bW1hcnlMaW5lcyA9IHN1bW1hcnlUZXh0Um93cy5sZW5ndGg7XG5cbiAgICAgICAgLy8gYWRkIGJsYW5rIGxpbmUgYmV0d2VlblxuICAgICAgICBjb25zdCBudW1TcGFjaW5nTGluZXMgPSAxOyBcbiAgICAgICAgXG4gICAgICAgIC8vIG9wdGlvbiBsaW5lcyBhcmUgc2VsZWN0YWJsZSBieSB1c2VyXG4gICAgICAgIGNvbnN0IG51bU9wdGlvbkxpbmVzID0gdGhpcy5zcGVjLm9wdGlvbnMuZmlsdGVyKG8gPT4gby5vcHRpb25UZXh0ICE9IG51bGwpLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBudW1MaW5lcyA9IG51bVN1bW1hcnlMaW5lcyArIG51bU9wdGlvbkxpbmVzICsgbnVtU3BhY2luZ0xpbmVzOyBcblxuICAgICAgICAvLyBpZiB3ZSB3aWxsIGdvIG92ZXIgdGhlIGJvdHRvbSBwYXJ0IG9mIHRoZSBzY3JlZW4sIGJ1bXAgdXAgYSBub3RjaFxuICAgICAgICBjb25zdCBvZmZzZXQgPSBNYXRoLm1heCgwLCAoc3RhcnRfeSArIG51bUxpbmVzICsgMSkgLSAoYm90dG9tICsgaGVpZ2h0KSk7XG4gICAgICAgIHN0YXJ0X3kgLT0gb2Zmc2V0O1xuXG4gICAgICAgIC8vIGRyYXcgbWVudSBib3ggY29udGFpbmVyXG4gICAgICAgIHRoaXMuZHJhd01lbnVPdXRsaW5lKGdhbWVPYmplY3RzLCBzdGFydF94LCBzdGFydF95LCB3cmFwVywgbnVtTGluZXMpO1xuXG4gICAgICAgIC8vIGRyYXcgdGhlIGluc2lkZSBvZiB0aGUgbWVudSBib3ggY29udGFpbmVyLCBzcGFjZXMgYW5kIHRleHRcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbnVtTGluZXM7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB3cmFwVzsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gc3RhcnRfeCArIGNvbDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gc3RhcnRfeSArIHJvdztcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9ICcgJztcbiAgICAgICAgICAgICAgICBsZXQgaXNTZWxlY3Rpb25DaGFyID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocm93IDwgbnVtU3VtbWFyeUxpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPCBzdW1tYXJ5VGV4dFJvd3Nbcm93XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXIgPSBzdW1tYXJ5VGV4dFJvd3Nbcm93XVtjb2xdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3cgPj0gbnVtU3VtbWFyeUxpbmVzICsgbnVtU3BhY2luZ0xpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNPcHRpb25JbmRleCA9IHJvdyAtIG51bVN1bW1hcnlMaW5lcyAtIG51bVNwYWNpbmdMaW5lcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyT3B0aW9uID0gdGhpcy5zcGVjLm9wdGlvbnNbdGhpc09wdGlvbkluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyVGV4dCA9IFwiLSBcIiArIGN1ck9wdGlvbi5vcHRpb25UZXh0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IGN1clRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gY3VyVGV4dFtjb2xdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbkNoYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpO1xuICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGlvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLnB1c2goY3JlYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgaGlkZShnYW1lT2JqZWN0cykge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKGMgPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGMpKTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQUNUSU9OX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9CQUNLX1RPX0dBTUUgPSAxO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QVVNIX01FTlUgPSAyO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QT1BfTUVOVSA9IDM7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggPSA0O1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XID0gNTsiLCJpbXBvcnQge0FDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9ILCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVywgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcblxuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX01FTlUgPSB7XG4gICAgdHlwZTogXCJPUFRJT05TXCIsXG4gICAgc3VtbWFyeVRleHQ6IFwiQ29uZmlndXJlIHlvdXIgZ2FtZSBleHBlcmllbmNlLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBIZWlnaHRcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0h9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkluY3JlYXNlIFZpZXdwb3J0IFdpZHRoXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJCYWNrXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9QT1BfTUVOVX1dXG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBDT05UUk9MU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNPTlRST0xTXFxuTW92ZW1lbnQ6IEFycm93IGtleXNcXG5GSVJFOiBTcGFjZWJhclxcblBhdXNlOiAnaCdcIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgSEVMUF9NRU5VID0ge1xuICAgIHR5cGU6ICdPUFRJT05TJyxcbiAgICBzdW1tYXJ5VGV4dDogXCJXZWxjb21lISBGaXJlZm94IGlzIHRoZSBiZXN0IGJyb3dzZXIgZm9yIHRoaXMgZ2FtZS4gQ2xpY2sgb24gdGhlIHdlYiBwYWdlIHRvIGNhcHR1cmUga2V5IHByZXNzZXMuXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIlBsYXlcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX0JBQ0tfVE9fR0FNRX1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQ29udHJvbHNcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3tcbiAgICAgICAgICAgICAgICBrZXk6ICdFTlRFUicsIFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1BVU0hfTUVOVSwgXG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IENPTlRST0xTX01FTlVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJPcHRpb25zXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBTRVRUSU5HU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH1cbiAgICBdXG59XG5cbiIsImltcG9ydCB7UHJvamVjdGlsZUNoYXJhY3Rlcn0gZnJvbSBcIi4vcHJvamVjdGlsZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvcmUvY29sbGlkZXIuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV059IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL3RyZWFzdXJlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQTEFZRVJfU1BSSVRFX01BUCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQfSBmcm9tIFwiLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShQTEFZRVJfU1BSSVRFX01BUCwgdGhpcywgRkFDSU5HX0RPV04pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgc3VwZXIub25BbmltYXRlZCgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTdGF0ZSh0aGlzLm1vdmFibGUuZmFjaW5nKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ib3VuZHMueCA9IHRoaXMuaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuYm91bmRzLnkgPSB0aGlzLmluaXRpYWxZO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBoYW5kbGVHYW1lQ29tbWFuZChjb21tYW5kLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAoY29tbWFuZCA9PSAnRklSRScpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBUcmVhc3VyZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkucHVzaCh3aXRoT2JqZWN0LnRyZWFzdXJlVHlwZSk7XG4gICAgICAgICAgICB3aXRoT2JqZWN0LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIHJlY2VpdmVEYW1hZ2UoZGFtYWdlQW1vdW50KSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGRhbWFnZUFtb3VudDtcbiAgICB9XG5cbiAgICBmaXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgcHJvamVjdGlsZSA9IG5ldyBQcm9qZWN0aWxlQ2hhcmFjdGVyKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSwgdGhpcy5tb3ZhYmxlLmZhY2luZywgOCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQKTtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHByb2plY3RpbGUpO1xuICAgIH1cblxuICAgIGhhc1RyZWFzdXJlKHRyZWFzdXJlVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnkuZmlsdGVyKHQgPT4gdCA9PSB0cmVhc3VyZVR5cGUpLmxlbmd0aCA+IDA7XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuL2NvcmUvbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge1dhbGxDaGFyYWN0ZXJ9IGZyb20gXCIuL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIGRpcmVjdGlvbiwgbWF4RGlzdGFuY2UsIHNwcml0ZU1hcCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkID0gMDtcbiAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xuICAgICAgICB0aGlzLnRyYXZlbFNwZWVkID0gKDEgLyA2LjApICogMTAwMDtcbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcblxuICAgICAgICAvLyBzZXQgdXAgb3VyIHNwcml0ZVxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoc3ByaXRlTWFwLCB0aGlzLCBkaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0IHVwIG91ciBhYmlsaXR5IHRvIG1vdmVcbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBjb2xsaXNpb25zIHdpdGggb2JqZWN0c1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFBpeGVsQ29sbGlkZXIodGhpcywgdGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkKys7XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPj0gdGhpcy5tYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciArIHRpbWVFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnRyYXZlbENvdW50ZXIgPj0gdGhpcy50cmF2ZWxTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyIC0gdGhpcy50cmF2ZWxTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudGhpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFdhbGxDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0NoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgfVxuIFxuICAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgIH1cbiB9IiwiXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL2NvcmUvZ2FtZS5qc1wiO1xuaW1wb3J0IHtLZXlNYXB9IGZyb20gXCIuL2tleV9tYXAuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9uSGFuZGxlciwgV2luQW5pbWF0aW9uLCBUZXh0QW5pbWF0b259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9lbmVteV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7R2FtZU9iamVjdHN9IGZyb20gXCIuL2NvcmUvZ2FtZV9vYmplY3RzLmpzXCI7XG5pbXBvcnQge0xFVkVMX1RPV04sIEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQfSBmcm9tIFwiLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuaW1wb3J0IHtNYXB9IGZyb20gXCIuL21hcC5qc1wiO1xuaW1wb3J0IHtyYW5kb21OdW1iZXJ9IGZyb20gXCIuL2NvcmUvbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudV9zcGVjcy5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiB0cnVlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxuICAgICdudW1FbmVtaWVzJzogMTBcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHsgIFxuICAgIHZhciB0aEdhbWUgPSBuZXcgVHJlYXN1cmVIdW50R2FtZSgpO1xuICAgIHRoR2FtZS5pbml0aWFsaXplKGdsb2JhbE9wdGlvbnMpO1xufVxuXG52YXIgZ2FtZU9iamVjdHMgPSBuZXcgR2FtZU9iamVjdHMoKTtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlSHVudEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gc2V0IHVwIGJhc2ljIGdhbWUgb2JqZWN0c1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChMRVZFTF9UT1dOKTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgS2V5TWFwKCk7XG4gICAgICAgIHRoaXMubWVudVN0YWNrID0gW107XG5cbiAgICAgICAgdGhpcy5TVEFURV9SVU5OSU5HID0gMDtcbiAgICAgICAgdGhpcy5TVEFURV9XSU5OTklORyA9IDE7XG4gICAgICAgIHRoaXMuU1RBVEVfREVBRCA9IDI7XG4gICAgICAgIHRoaXMuU1RBVEVfTUVOVSA9IDM7XG5cbiAgICAgICAgLy8gdGhpcyBzaG91bGQgcHJvYmFibHkgdHVybiBpbnRvIGEgc3RhdGUgbWFjaGluZVxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIHRoaXMuRVhQTE9TSU9OX1NQRUVEID0gMjAwMDsgLy8gbnVtIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lcyBvZiBXSU4gZXhwbG9zaW9uICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucmVzZXRMZXZlbFRpbWUgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgdmFyIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuXG4gICAgICAgIC8vIGRvbid0IGxldCB0aGVtIG92ZXJsYXBcbiAgICAgICAgd2hpbGUgKGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmouaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRzKCkuaW50ZXJzZWN0c1BvaW50KHgsIHkpKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICAgICAgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAneCc6IHgsICd5JzogeSB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgLy8gc3RhcnQgYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBtYXBcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoMSwgMSk7XG4gICAgICAgIHBsYXllci5yZXNldCgpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUdvYWwoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgZ29hbFBsYWNlbWVudCA9IHRoaXMuZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApO1xuICAgICAgICByZXR1cm4gbmV3IFRyZWFzdXJlQ2hhcmFjdGVyKGdvYWxQbGFjZW1lbnQueCwgZ29hbFBsYWNlbWVudC55LCAnJCcsICdsZXZlbEdvYWwnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBlbmVtaWVzXG4gICAgICAgIHZhciBlbmVteVBsYWNlbWVudCA9IHRoaXMuZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApO1xuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2hhcmFjdGVyKGVuZW15UGxhY2VtZW50LngsIGVuZW15UGxhY2VtZW50LnksIEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQKTtcbiAgICB9XG4gICAgXG4gICAgcmVzZXRMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfUlVOTklORztcblxuICAgICAgICAvLyBzdGFydCBmcm9tIHNjcmF0Y2hcbiAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG91ciBwbGF5ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jaGFyYWN0ZXIpO1xuXG4gICAgICAgIC8vIGFkZCBhIGxldmVsR29hbCB0byB0aGlzIGxldmVsXG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNyZWF0ZUdvYWwoZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7XG5cbiAgICAgICAgLy8gYWRkIHNvbWUgZW5lbWllc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbE9wdGlvbnNbJ251bUVuZW1pZXMnXTsgaSsrKSB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVFbmVteShnYW1lT2JqZWN0cywgdGhpcy5tYXApKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBvdXIgbWFwIG9iamVjdHNcbiAgICAgICAgdGhpcy5tYXAuZ2V0TWFwQ2hhcmFjdGVycygpLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG5cbiAgICAgICAgLyp0aGlzLmRvb3IgPSBuZXcgRG9vcndheUNoYXJhY3RlcigyLCAyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuZG9vcik7Ki9cbiAgICAgICAgXG4gICAgICAgIC8vIGNlbnRlciBvbiB0aGUgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuXG4gICAgICAgIC8vIHNob3cgaGVscCBtZW51LiB0aGlzIG1heSBjaGFuZ2Ugb24gbmV3IGxldmVscyBldmVudHVhbGx5XG4gICAgICAgIHRoaXMuc2hvd0hlbHBNZW51KCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBibG9ja2luZyBhbmltYXRpb24gdGhhdCAnZXhwbG9kZXMnIHRoZSBcbiAgICAvLy4uLmdvYWwgaW50byBhbiBleHBsb3Npb25cbiAgICBzcGF3bkV4cGxvc2lvbnMobm93LCBjZW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgICAvLyBzcGF3biBhIG5ldyBhbmltYXRpb24gYmFzZWQgb24gRVhQTE9TSU9OX1NQRUVEXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID4gdGhpcy5FWFBMT1NJT05fU1BFRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbihjZW50ZXJlZENoYXJhY3Rlci5nZXRYKCksIGNlbnRlcmVkQ2hhcmFjdGVyLmdldFkoKSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxFeHBsb3Npb24oeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBUZXh0QW5pbWF0b24oeCwgeSwgdGV4dCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oeCwgeSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgIH1cblxuICAgIGNoZWNrRGVhZENvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9ERUFEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsRXhwbG9zaW9uKHRoaXMuY2hhcmFjdGVyLmdldFgoKSwgdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpLCBcIkRFQURcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dpbkNvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhhc1RyZWFzdXJlKCdsZXZlbEdvYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SGVscE1lbnUoKSB7XG4gICAgICAgIC8vIHB1c2ggbWVudSBzdGF0ZSBvblxuICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX01FTlU7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KEhFTFBfTUVOVSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSk7XG4gICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdRVUlUJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGJyaW5nIHVwIGEgUVVJVCBtZW51LiBwcm9jZXNzLmV4aXQoKSBkb2Vzbid0IHdvcmsgaW4gYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7ICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdIRUxQJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIZWxwTWVudSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjaGFyYWN0ZXIgbW92ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuaGFuZGxlR2FtZUNvbW1hbmQoZ2FtZUNvbW1hbmQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iaiA9IHRoaXMubWVudS5oYW5kbGVJbnB1dChnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0JBQ0tfVE9fR0FNRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBtZW51IGFuZCBnbyBiYWNrIHRvIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QVVNIX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnUgYW5kIHB1c2ggaXQgb250byBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVN0YWNrLnB1c2godGhpcy5tZW51KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IG5ldyBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KGFjdGlvbk9iai5ldmVudEFyZ3MubWVudSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BPUF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9wIHByZXYgbWVudSBhbmQgc2hvdyBpdFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2TWVudSA9IHRoaXMubWVudVN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBwcmV2TWVudTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSB0aGlzIGJyZWFrcyBpZiB3ZSBkbyBpdCBieSBhbiBvZGQgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCArPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ID4gZ2xvYmFsT3B0aW9uc1snbWF4Vmlld3BvcnRIZWlnaHQnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ID0gZ2xvYmFsT3B0aW9uc1snbWluVmlld3BvcnRIZWlnaHQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoID4gZ2xvYmFsT3B0aW9uc1snbWF4Vmlld3BvcnRXaWR0aCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCA9IGdsb2JhbE9wdGlvbnNbJ21pblZpZXdwb3J0V2lkdGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlciB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfTUVOVSkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZz9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1dpbkNvbmRpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEZWFkQ29uZGl0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9XSU5OSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9ERUFEKSB7XG4gICAgICAgICAgICAgICAgLy8gd2luL2RpZSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduRXhwbG9zaW9ucyhub3csIHRoaXMuY2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0TGV2ZWxUaW1lID49IDAgJiYgbm93ID4gdGhpcy5yZXNldExldmVsVGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7ICAgICAgXG5cbiAgICAgICAgdmFyIGxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgdXBkYXRlRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVFbGFwc2VkID0gbm93IC0gbGFzdFVwZGF0ZTtcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlID0gbm93O1xuXG4gICAgICAgICAgICAgICAgdGhhdC5oYW5kbGVJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHRoYXQudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LmRyYXdIZWxwKHRoYXQuY2hhcmFjdGVyLmdldENoYXJhY3RlcigpKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcihnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUodXBkYXRlRnVuYywgZHJhd0Z1bmMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGRvIHRoaXMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHBhcmVudFxuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIgPSBuZXcgQW5pbWF0aW9uSGFuZGxlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgfVxuXG4gICAgZHJhd0hlbHAoY2hhcmFjdGVyU3ltYm9sKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnVXNlIEZpcmVmb3ggdG8gcGxheSBpZiB5b3UgYXJlblxcJ3QgYWxyZWFkeSEhXFxuJ1xuICAgICAgICAvKnZhciBvdXRwdXQgPSAnSW5zdHJ1Y3Rpb25zOiBVc2UgRmlyZWZveCBvciBDaHJvbWUgKEZpcmVmb3ggcmVkdWNlcyBmbGlja2VyaW5nISlcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnQnJlYWsgb3V0IHRoZSBkZXYgdG9vbHMgaW50byBhIHNlcGFyYXRlIHdpbmRvdyBhbmQgdGhlbiBjbGljayBvbiBteSBhY3R1YWwgd2ViIHBhZ2UgdG8gZW5hYmxlIGNvbnRyb2xzLlxcblxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICdVc2UgeW91ciBcIicgKyBjaGFyYWN0ZXJTeW1ib2wgKyAnXCIgY2hhcmFjdGVyIGFuZCBnbyBmaW5kIHRoZSB0cmVhc3VyZSAoJCkgYnV0IHdhdGNoIG91dCBmb3IgYmFkIGd1eXMuLi5cXG5cXG4nOyBcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgQ29udHJvbCAgfCBBY3Rpb24gfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8LS0tLS0tLS0tLXwtLS0tLS0tLXxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBzcGFjZWJhciB8IEZJUkUhICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgdyAgICAgICAgfCBVcCAgICAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IGQgICAgICAgIHwgUmlnaHQgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBzICAgICAgICB8IERvd24gICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgYSAgICAgICAgfCBMZWZ0ICAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IGMgICAgICAgIHwgUXVpdCAgIHxcXG4nOyovXG4gICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICAgfVxufVxuXG5ydW4oKTsiLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29yZS9jb2xsaWRlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlYXN1cmVDaGFyYWN0ZXIgZXh0ZW5kcyBTdGF0aWNDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sLCB0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKTtcbiAgICAgICAgIFxuICAgICAgICAgdGhpcy50cmVhc3VyZVR5cGUgPSB0cmVhc3VyZVR5cGU7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgICB9XG4gfVxuICIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vY29yZS9mYWNpbmcuanNcIjtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzEgPSBbXG5cIjwuLj5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzIgPSBbXG5cIjwtb28tPlwiXG5dO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMyA9IFtcblwiICBcXFxcICAvICBcIixcblwiPC0tMDAtLT5cIixcblwiICAvICBcXFxcXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgRU5FTVlfU1BJS0VZX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFwiMFwiOiBbXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTEwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzEgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA5MCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8yIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogNDMwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzMgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA5MCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8yIH0gXG4gICAgICAgIF1cbiAgICB9XG59O1xuXG5jb25zdCBFTkVNWV9URVNUX0ZSQU1FXzEgPSBbXG4gICAgXCIxICAgXCIsXG4gICAgXCIgMiAgXCIsXG4gICAgXCIgIDMgXCIsXG4gICAgXCIgICA0XCIsXG5dO1xuXG5leHBvcnQgY29uc3QgRU5FTVlfVEVTVF9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9URVNUX0ZSQU1FXzEgfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUFJPSkVDVElMRV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMiddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjQnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI4J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJFJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFtGQUNJTkdfTEVGVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUMxJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfVVBdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCMyddIH1dLFxuICAgICAgICBbRkFDSU5HX1JJR0hUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjcnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19ET1dOXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QkQnXSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNQVBfSE9VU0UgPSBbXG5cIiAgICAgX19fX19fX19fICAgICAgXCIsXG5cIiAgIF8vICAgICAgICAgXFxcXF8gICBcIixcblwiIF8vICAgICAgICAgICAgIFxcXFxfIFwiLFxuXCIvX19fX19fX19fX19fX19fX19cXFxcXCIsXG5cIiB8ICAgICAgICAgICAgICAgfCAgXCIsXG5cIiB8ICAgICA9PT09PSAgICAgfCAgXCIsXG5cIiB8IHwrfCAgfCB8ICB8K3wgfCAgXCIsXG5cIiB8X19fX19ffCB8X19fX19ffCAgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX0JVU0ggPSBbXG5cIiAjIyMgXCIsXG5cIiMjIyMjXCIsXG5cIiAjIyMgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTUFQX1RSRUUgPSBbXG5cIiAgICgqKikgICAgICAgXCIsXG5cIiAoKioqKioqKSAgXCIsXG5cIigqKioqKioqKikgXCIsXG5cIiAgKCoqKiopICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAgfHwgICAgXCIsXG5cIiAgIC9fX1xcXFwgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IExFVkVMX1RPV04gPSB7XG5cIndpZHRoXCI6IDEyMixcblwiaGVpZ2h0XCI6IDYwLFxuXCJtYXBfb2JqZWN0c1wiOiBbXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzNywgXCJ5XCI6IDEzIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiAxMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMyLCBcInlcIjogMTAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzOCwgXCJ5XCI6IDkgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDkwLCBcInlcIjogMTggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMTAwLCBcInlcIjogMTYgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDUwLCBcInlcIjogMjIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogNjAsIFwieVwiOiAyMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDc4LCBcInlcIjogMjMgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDcwLCBcInlcIjogNDIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogODAsIFwieVwiOiA0MCB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDIwLCBcInlcIjogODAgfSxcbiAgICBcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDQwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDExLCBcInlcIjogMzggfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTAsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxNiwgXCJ5XCI6IDMyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzAsIFwieVwiOiAzMiB9LFxuICAgIFxuXVxufTsiLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGxDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/collider.js */ "./src/core/collider.js");



class TreasureCharacter extends _core_character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY);
         this.symbol = symbol;
         this.treasureType = treasureType;

        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
        this.children.push(this.collider);
     }
 
     getCharacter(col, row) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZmFjaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZV9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb3ZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91cGRhdGVhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmVteV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleV9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudV9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51X3NwZWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmVhc3VyZV9odW50X2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2FsbF9jaGFyYWN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFD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LEM7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGtCO0FBQ1U7QUFDTjtBQUNQO0FBQ0M7QUFDSztBQUNxQztBQUNsQzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRDO0FBQzVDLDZGQUE2QztBQUM3Qyw0RkFBNEM7QUFDNUMsMEZBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0QwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUMzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxxQ0FBcUM7O0FBRTFDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssd0NBQXdDOztBQUU3QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQzs7QUFFM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssdUNBQXVDOztBQUU1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQzs7QUFFM0M7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUN6SGtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cmVhc3VyZS1odW50LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi9zdGF0aWNfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHsgfVxuXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHsgfVxuXG4gICAgaXNFeHBpcmVkKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEFuaW1hdG9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCB0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwMDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBpZiAodGltZU5vdyAtIHRoaXMubGFzdEZyYW1lID4gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIGFkZCBXSU4gaW4gdGhlIGNlbnRlciBvZiB0aGUgZXhwbG9zaW9uLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeF9vZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMudGV4dC5sZW5ndGggLyAyKSAtIGk7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKG5ldyBTdGF0aWNDaGFyYWN0ZXIodGhpcy5jZW50ZXJYIC0geF9vZmZzZXQsIHRoaXMuY2VudGVyWSwgdGhpcy50ZXh0LmNoYXJBdChpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBuZXZlciBnb2VzIGF3YXlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbkFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IC0xO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICB0aGlzLm1heFkgPSBtYXhZO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cysrO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSBleHBsb3Npb24gcGFydGljbGVzIGluIGEgYmxhc3QgcmFkaXVzIGF3YXkgZnJvbSB0aGUgY2VudGVyXG4gICAgICAgIGZvciAodmFyIHkgPSB0aGlzLmNlbnRlclkgLSB0aGlzLnJhZGl1czsgeSA8PSB0aGlzLmNlbnRlclkgKyB0aGlzLnJhZGl1czsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKHRoaXMuY2VudGVyWSAtIHkpO1xuICAgICAgICAgICAgdmFyIG51bVhzID0gTWF0aC5taW4oMiwgdGhpcy5yYWRpdXMgLSBkaWZmZXJlbmNlICsgMSk7IC8vIGFkZCAxIGJlY2F1c2Ugd2UgYWx3YXlzIHdhbnQgYXQgbGVhc3QgMSBleHBsb3Npb24gb24gZWFjaCBsaW5lXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtWHM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmNlbnRlclggKyAoKHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSkgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCAnKicpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VudGVyWCAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJYICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFggJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRBbmltYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGV2ZXJ5dGhpbmcgKFRPRE86IHdlIHNob3VsZG4ndCBoYXZlIHRvIGRvIHRoaXMpXG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmlzRXhwaXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0IGZyb20gb3VyIGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gdGhpcy5hbmltYXRpb25zW2ldLnNwYXduUmVuZGVyYWJsZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycyAhPSBudWxsICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5pbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuLy8gQmFzZSBjbGFzcyBmb3IgZXZlcnkgdHlwZSBvZiByZW5kZXJhYmxlIGdhbWUgb2JqZWN0XG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsWCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmluaXRpYWxZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBpbml0aWFsWDtcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IGluaXRpYWxZO1xuICAgICAgICB0aGlzLnogPSAwOyAvLyBkZWZhdWx0IHRvIHogYXhpcyBwb3MgYmVpbmcgMFxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoaW5pdGlhbFgsIGluaXRpYWxZLCAxLCAxKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRYKG5ld1gpIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1ggLSB0aGlzLmN1cnJlbnRYO1xuICAgICAgICB0aGlzLmN1cnJlbnRYICs9IGRpZmY7XG4gICAgICAgIHRoaXMuYm91bmRzLnggKz0gZGlmZjtcbiAgICB9XG5cbiAgICBzZXRZKG5ld1kpIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1kgLSB0aGlzLmN1cnJlbnRZO1xuICAgICAgICB0aGlzLmN1cnJlbnRZICs9IGRpZmY7XG4gICAgICAgIHRoaXMuYm91bmRzLnkgKz0gZGlmZjtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kcztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgIH1cblxuICAgIGlzQ29sbGlzaW9uKG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHModGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkpO1xuICAgIH1cblxuICAgIGNoZWNrUGh5c2ljYWxDb2xsaXNpb24oZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRPYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbk9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5pc1BoeXNpY2FsICYmXG4gICAgICAgICAgICB4ICE9PSBwYXJlbnQgJiZcbiAgICAgICAgICAgIHguZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhwYXJlbnQuZ2V0Qm91bmRzKCkpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29sbGlzaW9uT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb2xsaWRlIHdpdGggZWFjaCBvdGhlclxuICAgICAgICAgICAgY29sbGlzaW9uT2JqZWN0cy5tYXAob2JqID0+IHBhcmVudC5jb2xsaWRlKG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaWRlckNvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbk9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyICYmXG4gICAgICAgICAgICB4ICE9PSB0aGF0ICYmXG4gICAgICAgICAgICB4LmlzQ29sbGlzaW9uKHRoYXQpICYmXG4gICAgICAgICAgICB0aGF0LmlzQ29sbGlzaW9uKHgpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqLnBhcmVudE9iamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGl4ZWxDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QsIHNwcml0ZSkge1xuICAgICAgICBzdXBlcihwYXJlbnRPYmplY3QpO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMl9TcHJpdGVzKHNwcml0ZTEsIHNwcml0ZTIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Qm91bmRzID0gc3ByaXRlMS5nZXRCb3VuZHMoKTtcbiAgICAgICAgY29uc3QgaXNQaXhlbCA9IGZ1bmN0aW9uKGNoYXIpIHsgcmV0dXJuIGNoYXIgIT0gbnVsbCAmJiBjaGFyICE9ICcgJzsgfTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcGFyZW50Qm91bmRzLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHBhcmVudEJvdW5kcy53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY29sICsgc3ByaXRlMS5nZXRYKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHJvdyArIHNwcml0ZTEuZ2V0WSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1BpeGVsKHNwcml0ZTEuZ2V0Q2hhcmFjdGVyKHgsIHkpKSAmJlxuICAgICAgICAgICAgICAgICAgICBpc1BpeGVsKHNwcml0ZTIuZ2V0Q2hhcmFjdGVyKHgsIHkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tQaXhlbENvbGxpc29uXzFfU3ByaXRlKHNwcml0ZTEsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Qm91bmRzID0gc3ByaXRlMS5nZXRCb3VuZHMoKTtcbiAgICAgICAgY29uc3QgaXNQaXhlbCA9IGZ1bmN0aW9uKGNoYXIpIHsgcmV0dXJuIGNoYXIgIT0gbnVsbCAmJiBjaGFyICE9ICcgJzsgfTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcGFyZW50Qm91bmRzLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHBhcmVudEJvdW5kcy53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY29sICsgc3ByaXRlMS5nZXRYKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHJvdyArIHNwcml0ZTEuZ2V0WSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1BpeGVsKHNwcml0ZTEuZ2V0Q2hhcmFjdGVyKHgsIHkpKSAmJlxuICAgICAgICAgICAgICAgICAgICBvdGhlckNvbGxpZGVyLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzUG9pbnQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQ29sbGlzaW9uKG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgaW5zdGFuY2VvZiBQaXhlbENvbGxpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMl9TcHJpdGVzKHRoaXMuc3ByaXRlLCBvdGhlckNvbGxpZGVyLnNwcml0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tQaXhlbENvbGxpc29uXzFfU3ByaXRlKHRoaXMuc3ByaXRlLCBvdGhlckNvbGxpZGVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEZBQ0lOR19VUCA9ICdVJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfTEVGVCA9ICdMJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfRE9XTiA9ICdEJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfUklHSFQgPSAnUic7IiwiaW1wb3J0IHtUaHJlYWR9IGZyb20gXCIuL3RocmVhZC5qc1wiO1xuaW1wb3J0IHtSZW5kZXJlcn0gZnJvbSBcIi4vcmVuZGVyZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sYXN0a2V5UHJlc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGhyZWFkRHJhdyA9IG51bGw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUodXBkYXRlRnVuY3Rpb24sIGRyYXdGdW5jdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbmV3IFRocmVhZCh1cGRhdGVGdW5jdGlvbik7XG4gICAgICAgIHRoaXMudGhyZWFkRHJhdyA9IG5ldyBUaHJlYWQoZHJhd0Z1bmN0aW9uKTtcblxuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZS5zdGFydChvcHRpb25zWyd1cGRhdGVGUFMnXSk7IC8vdXBkYXRlIFggdGltZXMgcGVyIHNlY29uZFxuICAgICAgICB0aGlzLnRocmVhZERyYXcuc3RhcnQob3B0aW9uc1snZHJhd0ZQUyddKTsgLy9kcmF3IFggdGltZXMgcGVyIHNlY29uZFxuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgICBpZiAob3B0aW9uc1sncGxheUluQnJvd3NlciddKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdGtleVByZXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGxpc3RlbiB0byB0aGUgYnJvd3NlciBrZXlzIGluc3RhZCBvZiBkaXJlY3QgY29uc29sZSBpbnB1dFxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTsgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIGFsbG93cyB1cyB0byByZWFkIGtleXMgZGlyZWN0bHkgZnJvbSBjb25zb2xlIGlucHV0IHdpdGhvdXQgRU5URVJcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTsgXG4gICAgICAgICAgICBwcm9jZXNzLnN0ZGluLm9uKCdyZWFkYWJsZScsIGZ1bmN0aW9uKGRhdGEpIHsgICBcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcHJvY2Vzcy5zdGRpbi5yZWFkKCk7XG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RrZXlQcmVzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RLZXlwcmVzcygpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdGtleVByZXNzZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RrZXlQcmVzc2VzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW92ZW1lbnQob2JqLCBpbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBsZXQgaXNPYnN0cnVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvYmoub2JleXNQaHlzaWNzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Qm91bmRzID0gb2JqLmdldEJvdW5kcygpLmNvcHkoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy54ICs9IGludGVuZGVkUG9zaXRpb24ueCAtIG9iai5nZXRYKCk7XG4gICAgICAgICAgICBuZXdCb3VuZHMueSArPSBpbnRlbmRlZFBvc2l0aW9uLnkgLSBvYmouZ2V0WSgpO1xuICAgICAgICAgICAgaXNPYnN0cnVjdGVkID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoYyA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICE9PSBvYmogJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhuZXdCb3VuZHMpKS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc09ic3RydWN0ZWQpIHtcbiAgICAgICAgICAgIG9iai5zZXRYKGludGVuZGVkUG9zaXRpb24ueCk7XG4gICAgICAgICAgICBvYmouc2V0WShpbnRlbmRlZFBvc2l0aW9uLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICAvLyB1cGRhdGUgZXZlcnl0aGluZ1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLm1hcCh4ID0+IHgudXBkYXRlKG5vdywgdGltZUVsYXBzZWQpKTtcblxuICAgICAgICAvLyBoYW5kbGUgbW92ZW1lbnQgaW50ZW50aW9uc1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHguaW50ZW5kZWRQb3NpdGlvbiAhPSBudWxsKS5tYXAoeCA9PiB0aGlzLmhhbmRsZU1vdmVtZW50KHgsIHguaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyBjaGVjayBhbGwgY29sbGlzaW9uc1xuICAgICAgICBjb25zdCBjb2xsaWRlck9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBDb2xsaWRlcik7XG5cbiAgICAgICAgY29sbGlkZXJPYmplY3RzLm1hcCh4ID0+IHguY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykpO1xuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgdGhhdCBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgICAgIHZhciByZW1vdmFibGVPYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyk7XG4gICAgICAgIGlmIChyZW1vdmFibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92YWJsZU9iamVjdHMubWFwKHggPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KHgpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5jaGVja1JlZHJhdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKHggPT4geCAhPT0gb2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgMSk7XG59IiwiaW1wb3J0IHtGQUNJTkdfVVAsIEZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hUfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gRkFDSU5HX0RPV047XG4gICAgfVxuXG4gICAgc2V0RmFjaW5nKG5ld0ZhY2luZykge1xuICAgICAgICBpZiAobmV3RmFjaW5nICE9IHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2luZyA9IG5ld0ZhY2luZztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaW50ZW5kZWRYID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICB2YXIgaW50ZW5kZWRZID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBGQUNJTkdfTEVGVDogXG4gICAgICAgICAgICBpbnRlbmRlZFgtLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfTEVGVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19SSUdIVDpcbiAgICAgICAgICAgIGludGVuZGVkWCsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19SSUdIVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19VUDpcbiAgICAgICAgICAgIGludGVuZGVkWS0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19VUCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19ET1dOOlxuICAgICAgICAgICAgaW50ZW5kZWRZKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0RPV04pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc29tZSBzb3J0IG9mIGJvZ3VzIG1vdmVtZW50LiBkb24ndCBoYW5kbGUuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmludGVuZGVkUG9zaXRpb24gPSB7eDogaW50ZW5kZWRYLCB5OiBpbnRlbmRlZFl9O1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7ICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGludGVyc2VjdHNQb2ludCh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgeCA+PSB0aGlzLnggJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgeSA+PSB0aGlzLnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzKHJlY3RhbmdsZSkge1xuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8PSByZWN0YW5nbGUueCB8fFxuICAgICAgICAgICAgdGhpcy54ID49IHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8PSByZWN0YW5nbGUueSB8fFxuICAgICAgICAgICAgdGhpcy55ID49IHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdmlld1csIHZpZXdIKTtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbGVhclNjcmVlbigpIHtcbiAgICAgICAgLy8gY2xlYXIgdGhlIHNjcmVlbiBhbmQgc2V0IGN1cnNvciBhdCAwLDBcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgIH1cblxuICAgIGlzT25TY3JlZW4oY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXIuaXNWaXNpYmxlICYmIGNoYXJhY3Rlci5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHRoaXMudmlld3BvcnQpO1xuICAgIH1cblxuICAgIHJlbmRlcihnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgIHZhciByZW5kZXJhYmxlT2JqZWN0cyA9IHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cyk7XG4gICAgICAgIC8vIHJldmVyc2Ugc29ydCBieSB6IGF4aXMsIGdyYWIgaGlnaGVzdFxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5zb3J0KChhLCBiKSA9PiBiLnogLSBhLnopO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgcm93ID0gdGhpcy52aWV3cG9ydC55OyByb3cgPCB0aGlzLnZpZXdwb3J0LnkgKyB0aGlzLnZpZXdwb3J0LmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IHRoaXMudmlld3BvcnQueDsgY29sIDwgdGhpcy52aWV3cG9ydC54ICsgdGhpcy52aWV3cG9ydC53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IHJlbmRlcmFibGVPYmplY3RzLmZpbHRlcihjID0+IGMuZ2V0Q2hhcmFjdGVyKS5tYXAoYyA9PiBjLmdldENoYXJhY3Rlcihjb2wsIHJvdykpLmZpbHRlcihjID0+IGMgIT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBjaGFyYWN0ZXJzWzBdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICcgJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnXFxuJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIHJlZHJhdyBmbGFnIG9uIGFsbCBvYmplY3RzIHdlIHdlcmUgYWJsZSB0byByZW5kZXJcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMubWFwKGMgPT4gYy5uZWVkc1JlZHJhdyA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICBnZXRJc0RpcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RpcnR5O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRJc0RpcnR5KCkge1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpLmZpbHRlcihjID0+IGMubmVlZHNSZWRyYXcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXJhYmxlID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoYyA9PiBjLmlzVmlzaWJsZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmlzT25TY3JlZW4oYykpO1xuICAgICAgICByZXR1cm4gcmVuZGVyYWJsZTtcbiAgICB9XG5cbiAgICBjZW50ZXJWaWV3cG9ydE9uKGNoYXJhY3RlciwgbWFwKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQueCA9IE1hdGgubWluKG1hcC53aWR0aCAtIHRoaXMudmlld3BvcnQud2lkdGgsIE1hdGgubWF4KDAsIGNoYXJhY3Rlci5nZXRYKCkgLSAodGhpcy52aWV3cG9ydC53aWR0aCAvIDIpKSk7XG4gICAgICAgIHRoaXMudmlld3BvcnQueSA9IE1hdGgubWluKG1hcC5oZWlnaHQgLSB0aGlzLnZpZXdwb3J0LmhlaWdodCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFkoKSAtICh0aGlzLnZpZXdwb3J0LmhlaWdodCAvIDIpKSk7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgLy8gZm9ybWF0IG9mIGEgc3ByaXRlTWFwOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCI8c3RhdGU+XCI6IFt7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9LFxuICAgIC8vICAgICAgICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9IF1cbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3Ioc3ByaXRlTWFwLCBwYXJlbnRPYmplY3QsIGluaXRpYWxTdGF0ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zcHJpdGVNYXAgPSBzcHJpdGVNYXA7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlRWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmJvdW5kcztcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSB0aGlzLnN0YXRlRWxhcHNlZCArIHRpbWVFbGFwc2VkO1xuICAgICAgICBcbiAgICAgICAgdmFyIHByZXZGcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRGcmFtZSgpO1xuICAgICAgICBpZiAodGhpcy5mcmFtZSAhPSBwcmV2RnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV07XG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gc3ByaXRlc1tmcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIHZhciBmaXJzdFJvdyA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RSb3cgPSAwO1xuICAgICAgICB2YXIgZmlyc3RDb2wgPSA5OTk5OTk7XG4gICAgICAgIHZhciBsYXN0Q29sID0gMDtcblxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNoYXJhY3RlclJvd3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbcm93XS5jaGFyQXQoY29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICYmIHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSb3cgPSBNYXRoLm1pbihmaXJzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFJvdyA9IE1hdGgubWF4KGxhc3RSb3csIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q29sID0gTWF0aC5taW4oZmlyc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RDb2wgPSBNYXRoLm1heChsYXN0Q29sLCBjb2wpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZmVlbHMgZGlydHlcbiAgICAgICAgY29uc3QgbmV3VyA9IGxhc3RDb2wgLSBmaXJzdENvbCArIDE7XG4gICAgICAgIGNvbnN0IG5ld0ggPSBsYXN0Um93IC0gZmlyc3RSb3cgKyAxO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCA9IG5ld1c7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCA9IG5ld0g7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKSAtIE1hdGguZmxvb3IobmV3VyAvIDIpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKSAtIE1hdGguZmxvb3IobmV3SCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICBsZXQgeCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICB4IC09IE1hdGguZmxvb3IodGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkud2lkdGggLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICBsZXQgeSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTsgXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgeSAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUN1cnJlbnRGcmFtZSgpIHtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV07XG4gICAgICAgIHZhciB0b3RhbFRpbWUgPSBzcHJpdGVzLnJlZHVjZShmdW5jdGlvbihhY2MsIGN1clZhbCkgeyByZXR1cm4gYWNjICsgY3VyVmFsW1wiZGlzcGxheVRpbWVcIl07IH0sIDApO1xuICAgICAgICB2YXIgbGVmdG92ZXIgPSB0aGlzLnN0YXRlRWxhcHNlZCAlIHRvdGFsVGltZTtcbiAgICAgICAgdmFyIGZyYW1lID0gMDtcbiAgICAgICAgdmFyIHRpbWVBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnJhbWUgPSBpO1xuICAgICAgICAgICAgLy8gVE9ETzogcmVwbGFjZSB0aGlzIHdpdGggYSByZWR1Y2UoKVxuICAgICAgICAgICAgdmFyIGRpc3BsYXlUaW1lID0gc3ByaXRlc1tpXVtcImRpc3BsYXlUaW1lXCJdO1xuICAgICAgICAgICAgaWYgKHRpbWVBY2N1bXVsYXRvciArIGRpc3BsYXlUaW1lID4gbGVmdG92ZXIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVBY2N1bXVsYXRvciA9IHRpbWVBY2N1bXVsYXRvciArIGRpc3BsYXlUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWCgpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV1bdGhpcy5mcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgbm90aW9uIG9mIHRoZSBtYXAgbG9jYXRpb24gYW5kIGxvY2FsaXplIHRvIHRoaXMgc3ByaXRlIG9ubHlcbiAgICAgICAgdmFyIG91ckNvbCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICAvLyBhc3N1bWVzIHRoZSBmaXJzdCByb3cgaXMgdGhlIHNhbWUgd2lkdGggYXMgdGhlIG90aGVyIGZyYW1lc1xuICAgICAgICAgICAgb3VyQ29sID0gb3VyQ29sIC0gTWF0aC5mbG9vcihjaGFyYWN0ZXJSb3dzWzBdLmxlbmd0aCAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91ckNvbDtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFkoKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgb3VyUm93ID0gb3VyUm93IC0gTWF0aC5mbG9vcihjaGFyYWN0ZXJSb3dzLmxlbmd0aCAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91clJvdztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV07XG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gc3ByaXRlc1tmcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgbm90aW9uIG9mIHRoZSBtYXAgbG9jYXRpb24gYW5kIGxvY2FsaXplIHRvIHRoaXMgc3ByaXRlIG9ubHlcbiAgICAgICAgdmFyIG91clJvdyA9IHJvdyAtIHRoaXMuZ2V0QW5jaG9yZWRZKCk7XG4gICAgICAgIHZhciBvdXJDb2wgPSBjb2wgLSB0aGlzLmdldEFuY2hvcmVkWCgpO1xuXG4gICAgICAgIGlmIChvdXJSb3cgPj0gMCAmJiBcbiAgICAgICAgICAgIG91ckNvbCA+PSAwICYmIFxuICAgICAgICAgICAgb3VyUm93IDwgY2hhcmFjdGVyUm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIG91ckNvbCA8IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tvdXJSb3ddLmNoYXJBdChvdXJDb2wpO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsIi8qKlxuICogVGFrZXMgaW4gYSBzdHJpbmcgYW5kIGEgd3JhcCB3aWR0aCBhbmQgc3BsaXRzIHRoZSBzdHJpbmcgaW50b1xuICogYW4gYXJyYXkgb2YgdGV4dCBzdWJzdHJpbmdzIHRoYXQgYXJlIGFsbCBndWFyYW50ZWVkIHRvIGJlIGxlc3MgdGhhbiB0aGUgd3JhcCB3aWR0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUZXh0KHRleHQsIHdyYXBXaWR0aCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGxhc3RSb3dTdGFydCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBmaW5hbCBsZXR0ZXJcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1ckNoYXIgPSB0ZXh0W2ldO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1ckNoYXIgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGxpbmUgYnJlYWtcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgIGxldCB3b3JkTGVuZ3RoID0gMTtcbiAgICAgICAgICAgIC8vIGxvb2sgYWhlYWQgYXQgbGVuZ3RoIG9mIHRoaXMgd29yZFxuICAgICAgICAgICAgbGV0IHkgPSBpO1xuICAgICAgICAgICAgd2hpbGUgKHkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSB0ZXh0Lmxlbmd0aCB8fCB0ZXh0W3ldID09ICdcXG4nIHx8IHRleHRbeV0gPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmRMZW5ndGggPSB5IC0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgKyB3b3JkTGVuZ3RoIC0gbGFzdFJvd1N0YXJ0ID49IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNhc2U6IHRoaXMgd29yZCB3b24ndCBmaXRcbiAgICAgICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsIGdvb2QsIHN0YXJ0IGZpbmRpbmcgdGhlIG5leHQgd29yZFxuICAgICAgICAgICAgICAgIGkgKz0gd29yZExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmIChpIC0gbGFzdFJvd1N0YXJ0ID49IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNhc2U6IHdlIHJhbiBvdXQgb2YgbGluZSB3aWR0aFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3dzO1xufSIsImV4cG9ydCBjbGFzcyBUaHJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGZ1bmN0aW9uUG9pbnRlcikge1xuICAgICAgICB0aGlzLmZ1bmN0aW9uUG9pbnRlciA9IGZ1bmN0aW9uUG9pbnRlcjtcbiAgICB9XG5cbiAgICBzdGFydChkZXNpcmVkRnJhbWVyYXRlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgPSAxMDAwLyBkZXNpcmVkRnJhbWVyYXRlO1xuXG4gICAgICAgIHZhciBpbnRlcm5hbFJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGF0LmZ1bmN0aW9uUG9pbnRlcigpO1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGNhbGwgdGFrZXMgYSB3aGlsZSwgcmVkdWNlIHRoZSBkZWxheSB1bnRpbCB0aGUgbmV4dCBleGVjdXRlXG4gICAgICAgICAgICB2YXIgbmV4dERlbGF5ID0gTWF0aC5tYXgoMCwgbWluaW11bU1pbGxzZWNQZXJGcmFtZSAtIChhZnRlciAtIG5vdykpO1xuICAgICAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgbmV4dERlbGF5KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsIGNhbGxcbiAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgMCk7IFxuICAgIH1cbn0iLCIvLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIGdhbWUgb2JqZWN0XG5leHBvcnQgY2xhc3MgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQcm9qZWN0aWxlQ2hhcmFjdGVyfSBmcm9tIFwiLi9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4vY29yZS9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vY29yZS9mYWNpbmcuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbmVteUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy50aGlua1NwZWVkID0gKDEgLyAxLjApICogMTAwMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAxMDA7IC8vIFRPRE86IG1ha2UgdGhpcyBwYXJ0IG9mIGEgc3BlY1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoc3ByaXRlTWFwLCB0aGlzLCAwKTtcbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgUGl4ZWxDb2xsaWRlcih0aGlzLCB0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IHJhbmRvbU51bWJlcig0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9ICdOT05FJztcbiAgICAgICAgc3dpdGNoIChyYW5kb20pIHtcbiAgICAgICAgICAgIGNhc2UgMTogZGlyZWN0aW9uID0gRkFDSU5HX0xFRlQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiBkaXJlY3Rpb24gPSBGQUNJTkdfUklHSFQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBkaXJlY3Rpb24gPSBGQUNJTkdfRE9XTjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6IGRpcmVjdGlvbiA9IEZBQ0lOR19VUDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSB0aGlzLnRoaW5rQ291bnRlciArIHRpbWVFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnRoaW5rQ291bnRlciA+IHRoaXMudGhpbmtTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSB0aGlzLnRoaW5rQ291bnRlciAlIHRoaXMudGhpbmtTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudGhpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFByb2plY3RpbGVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB3aXRoT2JqZWN0LnJlY2VpdmVEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vY29yZS9mYWNpbmcuanNcIjtcblxuZXhwb3J0IGNsYXNzIEtleU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0R2FtZUNvbW1hbmQoa2V5KSB7XG4gICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgY2FzZSAnYSc6IFxuICAgICAgICBjYXNlIFwiNjVcIjpcbiAgICAgICAgY2FzZSBcIjM3XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0xFRlQ7XG5cbiAgICAgICAgY2FzZSAnZSc6IFxuICAgICAgICBjYXNlICdkJzogXG4gICAgICAgIGNhc2UgXCI2OFwiOlxuICAgICAgICBjYXNlIFwiMzlcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfUklHSFQ7XG5cbiAgICAgICAgY2FzZSAnLCc6IFxuICAgICAgICBjYXNlICd3JzogXG4gICAgICAgIGNhc2UgXCI4N1wiOlxuICAgICAgICBjYXNlIFwiMzhcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfVVA7XG5cbiAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBjYXNlIFwiODNcIjpcbiAgICAgICAgY2FzZSBcIjQwXCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0RPV047XG5cbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgIGNhc2UgJzY3JzpcbiAgICAgICAgICAgIHJldHVybiAnUVVJVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgIGNhc2UgJzcwJzpcbiAgICAgICAgY2FzZSAnMzInOlxuICAgICAgICAgICAgcmV0dXJuICdGSVJFJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgY2FzZSAnNzInOlxuICAgICAgICAgICAgcmV0dXJuICdIRUxQJztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJzEzJzpcbiAgICAgICAgICAgIHJldHVybiAnRU5URVInO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7V2FsbENoYXJhY3Rlcn0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwRGF0YSkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSBtYXBEYXRhO1xuICAgICAgICB0aGlzLndpZHRoID0gbWFwRGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRNYXBDaGFyYWN0ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG5cbiAgICAgICAgLy8gYWRkIGFsbCBvZiB0aGUgb2JqZWN0cyB3aXRoaW4gdGhlIGxldmVsXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXBEYXRhLm1hcF9vYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy5tYXBEYXRhLm1hcF9vYmplY3RzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgb2JqLmltYWdlLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHJvdyArIG9iai55O1xuICAgICAgICAgICAgICAgIHZhciByb3dTdHIgPSBvYmouaW1hZ2Vbcm93XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCByb3dTdHIubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IG9iai54ICsgY29sO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0NoYXIgPSByb3dTdHIuY2hhckF0KGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHksIHRoaXNDaGFyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gbGVmdC9yaWdodCBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKDAsIHksIFwifFwiKSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih0aGlzLndpZHRoIC0gMSwgeSwgXCJ8XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpbiB0b3AvYm90dG9tIGxldmVsIGJhcnJpZXJzXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCAwLCBcIi1cIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgdGhpcy5oZWlnaHQgLSAxLCBcIi1cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICB9XG59IiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXJcIjtcbmltcG9ydCB7QUNUSU9OX05PTkV9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX1VQfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHt3cmFwVGV4dH0gZnJvbSBcIi4vY29yZS90ZXh0X2hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BlYyA9IG1lbnVTcGVjO1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy56UG9zaXRpb24gPSB6UG9zaXRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gJyAnKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVyc1t0aGlzLnNlbGVjdGVkT3B0aW9uXS5zeW1ib2wgPSAnLSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChnYW1lQ29tbWFuZCkge1xuICAgICAgICBsZXQgYWN0aW9uID0gQUNUSU9OX05PTkU7XG4gICAgICAgIGxldCBldmVudEFyZ3MgPSBudWxsO1xuXG4gICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfRE9XTikge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHRocm91Z2ggbWVudSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZE9wdGlvbiAlIHRoaXMuZ2V0TnVtT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUNvbW1hbmQgPT0gRkFDSU5HX1VQKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gLT0gMTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnNlbGVjdGVkT3B0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgb3B0aW9uIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLCBpZiBpdCBtYXRjaGVzIHRoZSBnYW1lQ29tbWFuZFxuICAgICAgICAgICAgbGV0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25dO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQWN0aW9uID0gY3VyT3B0aW9uLmFjdGlvbk1hcC5maWx0ZXIobyA9PiBvLmtleSA9PSBnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHNlbGVjdGVkQWN0aW9uWzBdLmFjdGlvbjtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MgPSBzZWxlY3RlZEFjdGlvblswXS5ldmVudEFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2FjdGlvbjogYWN0aW9uLCBldmVudEFyZ3M6IGV2ZW50QXJnc307XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlcyBhIGNoYXJhY3RlciB0byByZW5kZXIgaW4gdGhlIG1lbnUsIGFuZCBoYW5kbGVzIG92ZXJoZWFkIGZvciBpdFxuICAgIGNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKSB7XG4gICAgICAgIC8vIGFkZCBldmVyeXRoaW5nIGluXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKHgsIHksIGNoYXIpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZHJhdyBvbiB0b3BcbiAgICAgICAgY2hhcmFjdGVyLnogPSB0aGlzLnpQb3NpdGlvbjtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KGNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8ga2VlcCB0aGVzZSBhcm91bmQgaW4gbWVtb3J5IHNvIHdlIGNhbiByZW1vdmUgdGhlbSBsYXRlclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgZHJhd01lbnVPdXRsaW5lKGdhbWVPYmplY3RzLCBzdGFydF94LCBzdGFydF95LCB0ZXh0VywgdGV4dEgpIHtcbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyB0ZXh0SCwgJyonKTtcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgdGV4dFc7IGNvbCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgY29sLCBzdGFydF95IC0gMSwgJy0nKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgKyB0ZXh0SCwgJy0nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0ZXh0SDsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy52aWV3cG9ydC54O1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLnZpZXdwb3J0Lnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3cG9ydC53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHQgPSB0aGlzLnNwZWMuc3VtbWFyeVRleHQ7XG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0TGVuID0gc3VtbWFyeVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCB3cmFwVyA9IE1hdGguY2VpbCh3aWR0aCAqIDAuOCk7XG5cbiAgICAgICAgLy8gZmlndXJlIG91dCB4IHBvc2l0aW9uc1xuICAgICAgICBsZXQgc3RhcnRfeCA9IGxlZnQgKyBNYXRoLnJvdW5kKCh3aWR0aCAtIHdyYXBXKSAvIDIpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeSBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3kgPSBib3R0b20gKyBNYXRoLnJvdW5kKGhlaWdodCAqIDAuOCk7XG5cbiAgICAgICAgLy8gc3VtbWFyeSBpcyB0ZXh0IGF0IHRvcFxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dFJvd3MgPSB3cmFwVGV4dChzdW1tYXJ5VGV4dCwgd3JhcFcpO1xuICAgICAgICBjb25zdCBudW1TdW1tYXJ5TGluZXMgPSBzdW1tYXJ5VGV4dFJvd3MubGVuZ3RoO1xuXG4gICAgICAgIC8vIGFkZCBibGFuayBsaW5lIGJldHdlZW5cbiAgICAgICAgY29uc3QgbnVtU3BhY2luZ0xpbmVzID0gMTsgXG4gICAgICAgIFxuICAgICAgICAvLyBvcHRpb24gbGluZXMgYXJlIHNlbGVjdGFibGUgYnkgdXNlclxuICAgICAgICBjb25zdCBudW1PcHRpb25MaW5lcyA9IHRoaXMuc3BlYy5vcHRpb25zLmZpbHRlcihvID0+IG8ub3B0aW9uVGV4dCAhPSBudWxsKS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgbnVtTGluZXMgPSBudW1TdW1tYXJ5TGluZXMgKyBudW1PcHRpb25MaW5lcyArIG51bVNwYWNpbmdMaW5lczsgXG5cbiAgICAgICAgLy8gaWYgd2Ugd2lsbCBnbyBvdmVyIHRoZSBib3R0b20gcGFydCBvZiB0aGUgc2NyZWVuLCBidW1wIHVwIGEgbm90Y2hcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHN0YXJ0X3kgKyBudW1MaW5lcyArIDEpIC0gKGJvdHRvbSArIGhlaWdodCkpO1xuICAgICAgICBzdGFydF95IC09IG9mZnNldDtcblxuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgd3JhcFcsIG51bUxpbmVzKTtcblxuICAgICAgICAvLyBkcmF3IHRoZSBpbnNpZGUgb2YgdGhlIG1lbnUgYm94IGNvbnRhaW5lciwgc3BhY2VzIGFuZCB0ZXh0XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG51bUxpbmVzOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgd3JhcFc7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0X3ggKyBjb2w7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0X3kgKyByb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSAnICc7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG51bVN1bW1hcnlMaW5lcyArIG51bVNwYWNpbmdMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzT3B0aW9uSW5kZXggPSByb3cgLSBudW1TdW1tYXJ5TGluZXMgLSBudW1TcGFjaW5nTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXNPcHRpb25JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1clRleHQgPSBcIi0gXCIgKyBjdXJPcHRpb24ub3B0aW9uVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPCBjdXJUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9IGN1clRleHRbY29sXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3Rpb25DaGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb25DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycy5wdXNoKGNyZWF0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgIH1cblxuICAgIGhpZGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm1hcChjID0+IGdhbWVPYmplY3RzLnJlbW92ZU9iamVjdChjKSk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEFDVElPTl9OT05FID0gMDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fQkFDS19UT19HQU1FID0gMTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUFVTSF9NRU5VID0gMjtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUE9QX01FTlUgPSAzO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IID0gNDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVyA9IDU7IiwiaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1csIEFDVElPTl9CQUNLX1RPX0dBTUUsIEFDVElPTl9QT1BfTUVOVSwgQUNUSU9OX1BVU0hfTUVOVX0gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNvbmZpZ3VyZSB5b3VyIGdhbWUgZXhwZXJpZW5jZS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgSGVpZ2h0XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBXaWR0aFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTFNfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDT05UUk9MU1xcbk1vdmVtZW50OiBBcnJvdyBrZXlzXFxuRklSRTogU3BhY2ViYXJcXG5QYXVzZTogJ2gnXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIENsaWNrIG9uIHRoZSB3ZWIgcGFnZSB0byBjYXB0dXJlIGtleSBwcmVzc2VzLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJQbGF5XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkNvbnRyb2xzXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBDT05UUk9MU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogU0VUVElOR1NfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9XG4gICAgXVxufVxuXG4iLCJpbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4vY29yZS9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UExBWUVSX1NQUklURV9NQVAsIFBST0pFQ1RJTEVfU1BSSVRFX01BUH0gZnJvbSBcIi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoUExBWUVSX1NQUklURV9NQVAsIHRoaXMsIEZBQ0lOR19ET1dOKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIG9uQW5pbWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUodGhpcy5tb3ZhYmxlLmZhY2luZyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYm91bmRzLnggPSB0aGlzLmluaXRpYWxYO1xuICAgICAgICB0aGlzLmJvdW5kcy55ID0gdGhpcy5pbml0aWFsWTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZUNvbW1hbmQoY29tbWFuZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ0ZJUkUnKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgVHJlYXN1cmVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LnB1c2god2l0aE9iamVjdC50cmVhc3VyZVR5cGUpO1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZUFtb3VudCkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2VBbW91bnQ7XG4gICAgfVxuXG4gICAgZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZUNoYXJhY3Rlcih0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCksIHRoaXMubW92YWJsZS5mYWNpbmcsIDgsIFBST0pFQ1RJTEVfU1BSSVRFX01BUCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChwcm9qZWN0aWxlKTtcbiAgICB9XG5cbiAgICBoYXNUcmVhc3VyZSh0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5LmZpbHRlcih0ID0+IHQgPT0gdHJlYXN1cmVUeXBlKS5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UGl4ZWxDb2xsaWRlcn0gZnJvbSBcIi4vY29yZS9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBkaXJlY3Rpb24sIG1heERpc3RhbmNlLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcbiAgICAgICAgdGhpcy50cmF2ZWxTcGVlZCA9ICgxIC8gNi4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IHVwIG91ciBzcHJpdGVcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCB1cCBvdXIgYWJpbGl0eSB0byBtb3ZlXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgY29sbGlzaW9ucyB3aXRoIG9iamVjdHNcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBQaXhlbENvbGxpZGVyKHRoaXMsIHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB0aGlzLm1vdmFibGUubW92ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCsrO1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZVRyYXZlbGVkID49IHRoaXMubWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50cmF2ZWxDb3VudGVyID49IHRoaXMudHJhdmVsU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciAtIHRoaXMudHJhdmVsU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBXYWxsQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsIlxuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9jb3JlL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFdpbkFuaW1hdGlvbiwgVGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtFbmVteUNoYXJhY3Rlcn0gZnJvbSBcIi4vZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9jb3JlL2dhbWVfb2JqZWN0cy5qc1wiO1xuaW1wb3J0IHtMRVZFTF9UT1dOLCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUH0gZnJvbSBcIi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcbmltcG9ydCB7TWFwfSBmcm9tIFwiLi9tYXAuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyfSBmcm9tIFwiLi9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuaW1wb3J0IHtUcmVhc3VyZUNoYXJhY3Rlcn0gZnJvbSBcIi4vdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9CQUNLX1RPX0dBTUUsIEFDVElPTl9QT1BfTUVOVSwgQUNUSU9OX1BVU0hfTUVOVSwgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1d9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuaW1wb3J0IHtIRUxQX01FTlV9IGZyb20gXCIuL21lbnVfc3BlY3MuanNcIjtcblxuLy8gT3B0aW9ucyB0aGF0IGNvbnRyb2wgdGhlIGZsb3cgb2YgdGhlIGdhbWVcbnZhciBnbG9iYWxPcHRpb25zID0ge1xuICAgICdwbGF5SW5Ccm93c2VyJzogdHJ1ZSxcbiAgICAnZHJhd0ZQUyc6IDEwLFxuICAgICd1cGRhdGVGUFMnOiAxMCxcbiAgICAndmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtaW5WaWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21heFZpZXdwb3J0V2lkdGgnOiA2MCxcbiAgICAndmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWluVmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWF4Vmlld3BvcnRIZWlnaHQnOiAyMCxcbiAgICAnbnVtRW5lbWllcyc6IDEwXG59O1xuXG5mdW5jdGlvbiBydW4oKSB7ICBcbiAgICB2YXIgdGhHYW1lID0gbmV3IFRyZWFzdXJlSHVudEdhbWUoKTtcbiAgICB0aEdhbWUuaW5pdGlhbGl6ZShnbG9iYWxPcHRpb25zKTtcbn1cblxudmFyIGdhbWVPYmplY3RzID0gbmV3IEdhbWVPYmplY3RzKCk7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUh1bnRHYW1lIGV4dGVuZHMgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNpYyBnYW1lIG9iamVjdHNcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoTEVWRUxfVE9XTik7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IEtleU1hcCgpO1xuICAgICAgICB0aGlzLm1lbnVTdGFjayA9IFtdO1xuXG4gICAgICAgIHRoaXMuU1RBVEVfUlVOTklORyA9IDA7XG4gICAgICAgIHRoaXMuU1RBVEVfV0lOTk5JTkcgPSAxO1xuICAgICAgICB0aGlzLlNUQVRFX0RFQUQgPSAyO1xuICAgICAgICB0aGlzLlNUQVRFX01FTlUgPSAzO1xuXG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIHByb2JhYmx5IHR1cm4gaW50byBhIHN0YXRlIG1hY2hpbmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfUlVOTklORztcblxuICAgICAgICB0aGlzLkVYUExPU0lPTl9TUEVFRCA9IDIwMDA7IC8vIG51bSBtaWxsaXNlY29uZHMgYmV0d2VlbiBmcmFtZXMgb2YgV0lOIGV4cGxvc2lvbiAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gLTE7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgdmFyIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgIHZhciB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcblxuICAgICAgICAvLyBkb24ndCBsZXQgdGhlbSBvdmVybGFwXG4gICAgICAgIHdoaWxlIChnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgICAgIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgJ3gnOiB4LCAneSc6IHkgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIC8vIHN0YXJ0IGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgbWFwXG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyQ2hhcmFjdGVyKDEsIDEpO1xuICAgICAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICBjcmVhdGVHb2FsKGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgdmFyIGdvYWxQbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVhc3VyZUNoYXJhY3Rlcihnb2FsUGxhY2VtZW50LngsIGdvYWxQbGFjZW1lbnQueSwgJyQnLCAnbGV2ZWxHb2FsJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICAvLyBjcmVhdGUgZW5lbWllc1xuICAgICAgICB2YXIgZW5lbXlQbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNoYXJhY3RlcihlbmVteVBsYWNlbWVudC54LCBlbmVteVBsYWNlbWVudC55LCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSBzY3JhdGNoXG4gICAgICAgIGdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmNsZWFyQW5pbWF0aW9ucygpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBvdXIgcGxheWVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBhZGQgYSBsZXZlbEdvYWwgdG8gdGhpcyBsZXZlbFxuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVHb2FsKGdhbWVPYmplY3RzLCB0aGlzLm1hcCkpO1xuXG4gICAgICAgIC8vIGFkZCBzb21lIGVuZW1pZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnbG9iYWxPcHRpb25zWydudW1FbmVtaWVzJ107IGkrKykge1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlRW5lbXkoZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgb3VyIG1hcCBvYmplY3RzXG4gICAgICAgIHRoaXMubWFwLmdldE1hcENoYXJhY3RlcnMoKS5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuXG4gICAgICAgIC8qdGhpcy5kb29yID0gbmV3IERvb3J3YXlDaGFyYWN0ZXIoMiwgMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmRvb3IpOyovXG4gICAgICAgIFxuICAgICAgICAvLyBjZW50ZXIgb24gdGhlIGNoYXJhY3RlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcblxuICAgICAgICAvLyBzaG93IGhlbHAgbWVudS4gdGhpcyBtYXkgY2hhbmdlIG9uIG5ldyBsZXZlbHMgZXZlbnR1YWxseVxuICAgICAgICB0aGlzLnNob3dIZWxwTWVudSgpO1xuXG4gICAgICAgIC8vIGZpcnN0IGRyYXcgb2YgcmVuZGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIGEgYmxvY2tpbmcgYW5pbWF0aW9uIHRoYXQgJ2V4cGxvZGVzJyB0aGUgXG4gICAgLy8uLi5nb2FsIGludG8gYW4gZXhwbG9zaW9uXG4gICAgc3Bhd25FeHBsb3Npb25zKG5vdywgY2VudGVyZWRDaGFyYWN0ZXIpIHtcbiAgICAgICAgLy8gc3Bhd24gYSBuZXcgYW5pbWF0aW9uIGJhc2VkIG9uIEVYUExPU0lPTl9TUEVFRFxuICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA+IHRoaXMuRVhQTE9TSU9OX1NQRUVEKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oY2VudGVyZWRDaGFyYWN0ZXIuZ2V0WCgpLCBjZW50ZXJlZENoYXJhY3Rlci5nZXRZKCksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICAgICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBub3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVJbml0aWFsRXhwbG9zaW9uKHgsIHksIHRleHQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgVGV4dEFuaW1hdG9uKHgsIHksIHRleHQpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKHgsIHksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICB9XG5cbiAgICBjaGVja0RlYWRDb25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfREVBRDtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJERUFEXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oYXNUcmVhc3VyZSgnbGV2ZWxHb2FsJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1dJTk5JTkc7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxFeHBsb3Npb24odGhpcy5jaGFyYWN0ZXIuZ2V0WCgpLCB0aGlzLmNoYXJhY3Rlci5nZXRZKCksIFwiV0lOXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0hlbHBNZW51KCkge1xuICAgICAgICAvLyBwdXNoIG1lbnUgc3RhdGUgb25cbiAgICAgICAgdGhpcy5wcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9NRU5VO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudShIRUxQX01FTlUsIHRoaXMucmVuZGVyZXIudmlld3BvcnQsIDEpO1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgICBpZiAobnVsbCAhPT0ga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2FtZUNvbW1hbmQgPSB0aGlzLmtleU1hcC5nZXRHYW1lQ29tbWFuZChrZXkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBicmluZyB1cCBhIFFVSVQgbWVudS4gcHJvY2Vzcy5leGl0KCkgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykgeyAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnSEVMUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfTUVOVSkge1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25PYmogPSB0aGlzLm1lbnUuaGFuZGxlSW5wdXQoZ2FtZUNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9CQUNLX1RPX0dBTUUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGN1cnJlbnQgbWVudSBhbmQgZ28gYmFjayB0byBnYW1lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByZXZTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fUFVTSF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51IGFuZCBwdXNoIGl0IG9udG8gc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdGFjay5wdXNoKHRoaXMubWVudSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBuZXcgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudShhY3Rpb25PYmouZXZlbnRBcmdzLm1lbnUsIHRoaXMucmVuZGVyZXIudmlld3BvcnQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QT1BfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvcCBwcmV2IG1lbnUgYW5kIHNob3cgaXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldk1lbnUgPSB0aGlzLm1lbnVTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gcHJldk1lbnU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0SGVpZ2h0J10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA9IGdsb2JhbE9wdGlvbnNbJ21pblZpZXdwb3J0SGVpZ2h0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSBnbG9iYWxPcHRpb25zWydtaW5WaWV3cG9ydFdpZHRoJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjZW50ZXIgdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgICAgIFxuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcmF3RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoYXQucmVuZGVyZXIuZ2V0SXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLmNsZWFyU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgdGhhdC5kcmF3SGVscCh0aGF0LmNoYXJhY3Rlci5nZXRDaGFyYWN0ZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cblxuICAgIGRyYXdIZWxwKGNoYXJhY3RlclN5bWJvbCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJ1VzZSBGaXJlZm94IHRvIHBsYXkgaWYgeW91IGFyZW5cXCd0IGFscmVhZHkhIVxcbidcbiAgICAgICAgLyp2YXIgb3V0cHV0ID0gJ0luc3RydWN0aW9uczogVXNlIEZpcmVmb3ggb3IgQ2hyb21lIChGaXJlZm94IHJlZHVjZXMgZmxpY2tlcmluZyEpXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ0JyZWFrIG91dCB0aGUgZGV2IHRvb2xzIGludG8gYSBzZXBhcmF0ZSB3aW5kb3cgYW5kIHRoZW4gY2xpY2sgb24gbXkgYWN0dWFsIHdlYiBwYWdlIHRvIGVuYWJsZSBjb250cm9scy5cXG5cXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnVXNlIHlvdXIgXCInICsgY2hhcmFjdGVyU3ltYm9sICsgJ1wiIGNoYXJhY3RlciBhbmQgZ28gZmluZCB0aGUgdHJlYXN1cmUgKCQpIGJ1dCB3YXRjaCBvdXQgZm9yIGJhZCBndXlzLi4uXFxuXFxuJzsgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IENvbnRyb2wgIHwgQWN0aW9uIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfC0tLS0tLS0tLS18LS0tLS0tLS18XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgc3BhY2ViYXIgfCBGSVJFISAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHcgICAgICAgIHwgVXAgICAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBkICAgICAgICB8IFJpZ2h0ICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgcyAgICAgICAgfCBEb3duICAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IGEgICAgICAgIHwgTGVmdCAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBjICAgICAgICB8IFF1aXQgICB8XFxuJzsqL1xuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgIH1cbn1cblxucnVuKCk7IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wsIHRyZWFzdXJlVHlwZSkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICAgdGhpcy50cmVhc3VyZVR5cGUgPSB0cmVhc3VyZVR5cGU7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgICB9XG4gXG4gICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgfVxuIH0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IFxuICAgICAgICBdXG4gICAgfVxufTtcblxuY29uc3QgRU5FTVlfVEVTVF9GUkFNRV8xID0gW1xuICAgIFwiMSAgIFwiLFxuICAgIFwiIDIgIFwiLFxuICAgIFwiICAzIFwiLFxuICAgIFwiICAgNFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1RFU1RfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogRU5FTVlfVEVTVF9GUkFNRV8xIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJTEVfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzInXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI0J10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCOCddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRSddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMSddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjMnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI3J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJEJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0hPVVNFID0gW1xuXCIgICAgIF9fX19fX19fXyAgICAgIFwiLFxuXCIgICBfLyAgICAgICAgIFxcXFxfICAgXCIsXG5cIiBfLyAgICAgICAgICAgICBcXFxcXyBcIixcblwiL19fX19fX19fX19fX19fX19fXFxcXFwiLFxuXCIgfCAgICAgICAgICAgICAgIHwgIFwiLFxuXCIgfCAgICAgPT09PT0gICAgIHwgIFwiLFxuXCIgfCB8K3wgIHwgfCAgfCt8IHwgIFwiLFxuXCIgfF9fX19fX3wgfF9fX19fX3wgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9CVVNIID0gW1xuXCIgIyMjIFwiLFxuXCIjIyMjI1wiLFxuXCIgIyMjIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9UUkVFID0gW1xuXCIgICAoKiopICAgICAgIFwiLFxuXCIgKCoqKioqKikgIFwiLFxuXCIoKioqKioqKiopIFwiLFxuXCIgICgqKioqKSAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAvX19cXFxcICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9UT1dOID0ge1xuXCJ3aWR0aFwiOiAxMjIsXG5cImhlaWdodFwiOiA2MCxcblwibWFwX29iamVjdHNcIjogW1xuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMCwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzcsIFwieVwiOiAxMyB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMTIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMiwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzgsIFwieVwiOiA5IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA5MCwgXCJ5XCI6IDE4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwMCwgXCJ5XCI6IDE2IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA1MCwgXCJ5XCI6IDIyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDYwLCBcInlcIjogMjAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3OCwgXCJ5XCI6IDIzIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3MCwgXCJ5XCI6IDQyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDgwLCBcInlcIjogNDAgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAyMCwgXCJ5XCI6IDgwIH0sXG4gICAgXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMSwgXCJ5XCI6IDM4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTQsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDEwLCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiAzMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMwLCBcInlcIjogMzIgfSxcbiAgICBcbl1cbn07IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5pc1BoeXNpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
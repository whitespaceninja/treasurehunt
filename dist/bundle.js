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

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider, PixelCollider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelCollider", function() { return PixelCollider; });
/* harmony import */ var _updateable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateable.js */ "./src/updateable.js");


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
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player_character.js */ "./src/player_character.js");









class EnemyCharacter extends _character_js__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.isVisible = true;
        this.obeysPhysics = true;
        this.thinkCounter = 0;
        this.thinkSpeed = (1 / 1.0) * 1000;
        this.damage = 100; // TODO: make this part of a spec
        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this, 0);
        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_4__["Movable"](this);
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_2__["PixelCollider"](this, this.sprite);

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

        if (withObject instanceof _player_character_js__WEBPACK_IMPORTED_MODULE_7__["PlayerCharacter"]) {
            withObject.receiveDamage(this.damage);
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
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collider.js */ "./src/collider.js");




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

        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__["PLAYER_SPRITE_MAP"], this, _facing_js__WEBPACK_IMPORTED_MODULE_5__["FACING_DOWN"]);
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
        if (withObject instanceof _treasure_character_js__WEBPACK_IMPORTED_MODULE_7__["TreasureCharacter"]) {
            this.inventory.push(withObject.treasureType);
            withObject.removeFromGameObjects = true;
        }        
    }

    receiveDamage(damageAmount) {
        this.health -= damageAmount;
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
        this.sprite = new _sprite_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"](spriteMap, this, direction);
        this.children.push(this.sprite);
        
        // set up our ability to move
        this.movable = new _movable_js__WEBPACK_IMPORTED_MODULE_2__["Movable"](this);
        this.children.push(this.movable);

        // check for collisions with objects
        this.collider = new _collider_js__WEBPACK_IMPORTED_MODULE_1__["PixelCollider"](this, this.sprite);
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

    copy() {
        return new Rectangle(this.x, this.y, this.width, this.height);
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
 
     getCharacter(col, row) {
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
                                                 obj.getBounds().intersectsPoint(x, y)).length > 0) {
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
                    showHelpMenu();
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

    getCharacter(col, row) {
        if (this.getX() == col && this.getY() == row) {
            return this.symbol;
        }
        return null;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mYWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlLWh1bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VwZGF0ZWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhbGxfY2hhcmFjdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUsscUNBQXFDOztBQUUxQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHdDQUF3Qzs7QUFFN0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx1Q0FBdUM7QUFDNUMsS0FBSyxzQ0FBc0M7O0FBRTNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssdUNBQXVDOztBQUU1QyxLQUFLLHVDQUF1Qzs7QUFFNUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyxzQ0FBc0M7O0FBRTNDO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNQa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RyZWFzdXJlLWh1bnQuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkgeyB9XG5cbiAgICBzcGF3blJlbmRlcmFibGVzKCkgeyB9XG5cbiAgICBpc0V4cGlyZWQoKSB7IHJldHVybiB0cnVlOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0QW5pbWF0b24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNlbnRlclgsIGNlbnRlclksIHRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWDtcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgdGhpcy5mcmFtZVNwZWVkID0gNjAwO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIGlmICh0aW1lTm93IC0gdGhpcy5sYXN0RnJhbWUgPiB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gIXRoaXMuaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAgICAgLy8gYWRkIFdJTiBpbiB0aGUgY2VudGVyIG9mIHRoZSBleHBsb3Npb24uXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB4X29mZnNldCA9IE1hdGguZmxvb3IodGhpcy50ZXh0Lmxlbmd0aCAvIDIpIC0gaTtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2gobmV3IFN0YXRpY0NoYXJhY3Rlcih0aGlzLmNlbnRlclggLSB4X29mZnNldCwgdGhpcy5jZW50ZXJZLCB0aGlzLnRleHQuY2hhckF0KGkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uIG5ldmVyIGdvZXMgYXdheVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gLTE7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHZhciBlbGFwc2VkID0gdGltZU5vdyAtIHRoaXMubGFzdEZyYW1lO1xuICAgICAgICBpZiAoZWxhcHNlZCA+PSB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzKys7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVOb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHtcbiAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIGV4cGxvc2lvbiBwYXJ0aWNsZXMgaW4gYSBibGFzdCByYWRpdXMgYXdheSBmcm9tIHRoZSBjZW50ZXJcbiAgICAgICAgZm9yICh2YXIgeSA9IHRoaXMuY2VudGVyWSAtIHRoaXMucmFkaXVzOyB5IDw9IHRoaXMuY2VudGVyWSArIHRoaXMucmFkaXVzOyB5KyspIHtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5jZW50ZXJZIC0geSk7XG4gICAgICAgICAgICB2YXIgbnVtWHMgPSBNYXRoLm1pbigyLCB0aGlzLnJhZGl1cyAtIGRpZmZlcmVuY2UgKyAxKTsgLy8gYWRkIDEgYmVjYXVzZSB3ZSBhbHdheXMgd2FudCBhdCBsZWFzdCAxIGV4cGxvc2lvbiBvbiBlYWNoIGxpbmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1YczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuY2VudGVyWCArICgodGhpcy5yYWRpdXMgLSBkaWZmZXJlbmNlKSAqIG11bHRpcGxpZXIpO1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKHgsIHksICcqJyk7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnM7XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXJYIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclggKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25IYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEFuaW1hdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY2xlYXIgZXZlcnl0aGluZyAoVE9ETzogd2Ugc2hvdWxkbid0IGhhdmUgdG8gZG8gdGhpcylcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwIDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb25zW2ldO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb24uaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXQgZnJvbSBvdXIgbGlzdFxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSB0aGlzLmFuaW1hdGlvbnNbaV0uc3Bhd25SZW5kZXJhYmxlcygpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzICE9IG51bGwgJiYgY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubWFwKHggPT4gZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckFuaW1hdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdXG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG4vLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIHJlbmRlcmFibGUgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMueiA9IDA7IC8vIGRlZmF1bHQgdG8geiBheGlzIHBvcyBiZWluZyAwXG4gICAgICAgIHRoaXMuYm91bmRzID0gbmV3IFJlY3RhbmdsZShpbml0aWFsWCwgaW5pdGlhbFksIDEsIDEpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHNldFgobmV3WCkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WCAtIHRoaXMuY3VycmVudFg7XG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueCArPSBkaWZmO1xuICAgIH1cblxuICAgIHNldFkobmV3WSkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WSAtIHRoaXMuY3VycmVudFk7XG4gICAgICAgIHRoaXMuY3VycmVudFkgKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueSArPSBkaWZmO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYO1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRZO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICByZXR1cm4gb3RoZXJDb2xsaWRlci5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LmlzUGh5c2ljYWwgJiZcbiAgICAgICAgICAgIHggIT09IHBhcmVudCAmJlxuICAgICAgICAgICAgeC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHBhcmVudC5nZXRCb3VuZHMoKSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50T2JqZWN0O1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4IGluc3RhbmNlb2YgQ29sbGlkZXIgJiZcbiAgICAgICAgICAgIHggIT09IHRoYXQgJiZcbiAgICAgICAgICAgIHguaXNDb2xsaXNpb24odGhhdCkgJiZcbiAgICAgICAgICAgIHRoYXQuaXNDb2xsaXNpb24oeClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29sbGlkZSB3aXRoIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbk9iamVjdHMubWFwKG9iaiA9PiBwYXJlbnQuY29sbGlkZShvYmoucGFyZW50T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXhlbENvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCwgc3ByaXRlKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudE9iamVjdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cblxuICAgIGNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXMoc3ByaXRlMSwgc3ByaXRlMikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIGlzUGl4ZWwoc3ByaXRlMi5nZXRDaGFyYWN0ZXIoeCwgeSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUoc3ByaXRlMSwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlciBpbnN0YW5jZW9mIFBpeGVsQ29sbGlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXModGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIuc3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUodGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyLCBQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHsgUGxheWVyQ2hhcmFjdGVyIH0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXlDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGhpbmtTcGVlZCA9ICgxIC8gMS4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTAwOyAvLyBUT0RPOiBtYWtlIHRoaXMgcGFydCBvZiBhIHNwZWNcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgMCk7XG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFBpeGVsQ29sbGlkZXIodGhpcywgdGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHZhciByYW5kb20gPSByYW5kb21OdW1iZXIoNCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAnTk9ORSc7XG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XG4gICAgICAgICAgICBjYXNlIDE6IGRpcmVjdGlvbiA9IEZBQ0lOR19MRUZUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogZGlyZWN0aW9uID0gRkFDSU5HX1JJR0hUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogZGlyZWN0aW9uID0gRkFDSU5HX0RPV047IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiBkaXJlY3Rpb24gPSBGQUNJTkdfVVA7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmFibGUubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50aGlua0NvdW50ZXIgPiB0aGlzLnRoaW5rU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgJSB0aGlzLnRoaW5rU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFBsYXllckNoYXJhY3Rlcikge1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZWNlaXZlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRkFDSU5HX1VQID0gJ1UnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19MRUZUID0gJ0wnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19ET1dOID0gJ0QnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19SSUdIVCA9ICdSJzsiLCJpbXBvcnQge1RocmVhZH0gZnJvbSBcIi4vdGhyZWFkLmpzXCI7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBuZXcgVGhyZWFkKHVwZGF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbmV3IFRocmVhZChkcmF3RnVuY3Rpb24pO1xuXG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlLnN0YXJ0KG9wdGlvbnNbJ3VwZGF0ZUZQUyddKTsgLy91cGRhdGUgWCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIHRoaXMudGhyZWFkRHJhdy5zdGFydChvcHRpb25zWydkcmF3RlBTJ10pOyAvL2RyYXcgWCB0aW1lcyBwZXIgc2Vjb25kXG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRpb25zWydwbGF5SW5Ccm93c2VyJ10pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXMgaW5zdGFkIG9mIGRpcmVjdCBjb25zb2xlIGlucHV0XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpOyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHVzIHRvIHJlYWQga2V5cyBkaXJlY3RseSBmcm9tIGNvbnNvbGUgaW5wdXQgd2l0aG91dCBFTlRFUlxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyBcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ3JlYWRhYmxlJywgZnVuY3Rpb24oZGF0YSkgeyAgIFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9jZXNzLnN0ZGluLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdGtleVByZXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdEtleXByZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0a2V5UHJlc3Nlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdGtleVByZXNzZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlbWVudChvYmosIGludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGxldCBpc09ic3RydWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5vYmV5c1BoeXNpY3MpIHtcbiAgICAgICAgICAgIGxldCBuZXdCb3VuZHMgPSBvYmouZ2V0Qm91bmRzKCkuY29weSgpO1xuICAgICAgICAgICAgbmV3Qm91bmRzLnggKz0gaW50ZW5kZWRQb3NpdGlvbi54IC0gb2JqLmdldFgoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy55ICs9IGludGVuZGVkUG9zaXRpb24ueSAtIG9iai5nZXRZKCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld0JvdW5kcykpLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2JzdHJ1Y3RlZCkge1xuICAgICAgICAgICAgb2JqLnNldFgoaW50ZW5kZWRQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIG9iai5zZXRZKGludGVuZGVkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKTtcblxuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja1BoeXNpY2FsQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG4gICAgICAgIGNvbGxpZGVyT2JqZWN0cy5tYXAoeCA9PiB4LmNoZWNrQ29sbGlkZXJDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgdmFyIHJlbW92YWJsZU9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzKTtcbiAgICAgICAgaWYgKHJlbW92YWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZhYmxlT2JqZWN0cy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoeCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoeCA9PiB4ICE9PSBvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxPYmplY3RzKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcblxuZXhwb3J0IGNsYXNzIEtleU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0R2FtZUNvbW1hbmQoa2V5KSB7XG4gICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgY2FzZSAnYSc6IFxuICAgICAgICBjYXNlIFwiNjVcIjpcbiAgICAgICAgY2FzZSBcIjM3XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0xFRlQ7XG5cbiAgICAgICAgY2FzZSAnZSc6IFxuICAgICAgICBjYXNlICdkJzogXG4gICAgICAgIGNhc2UgXCI2OFwiOlxuICAgICAgICBjYXNlIFwiMzlcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfUklHSFQ7XG5cbiAgICAgICAgY2FzZSAnLCc6IFxuICAgICAgICBjYXNlICd3JzogXG4gICAgICAgIGNhc2UgXCI4N1wiOlxuICAgICAgICBjYXNlIFwiMzhcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfVVA7XG5cbiAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBjYXNlIFwiODNcIjpcbiAgICAgICAgY2FzZSBcIjQwXCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0RPV047XG5cbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgIGNhc2UgJzY3JzpcbiAgICAgICAgICAgIHJldHVybiAnUVVJVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgIGNhc2UgJzcwJzpcbiAgICAgICAgY2FzZSAnMzInOlxuICAgICAgICAgICAgcmV0dXJuICdGSVJFJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgY2FzZSAnNzInOlxuICAgICAgICAgICAgcmV0dXJuICdIRUxQJztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJzEzJzpcbiAgICAgICAgICAgIHJldHVybiAnRU5URVInO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7V2FsbENoYXJhY3Rlcn0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwRGF0YSkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSBtYXBEYXRhO1xuICAgICAgICB0aGlzLndpZHRoID0gbWFwRGF0YS53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRNYXBDaGFyYWN0ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG5cbiAgICAgICAgLy8gYWRkIGFsbCBvZiB0aGUgb2JqZWN0cyB3aXRoaW4gdGhlIGxldmVsXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXBEYXRhLm1hcF9vYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy5tYXBEYXRhLm1hcF9vYmplY3RzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgb2JqLmltYWdlLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHJvdyArIG9iai55O1xuICAgICAgICAgICAgICAgIHZhciByb3dTdHIgPSBvYmouaW1hZ2Vbcm93XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCByb3dTdHIubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IG9iai54ICsgY29sO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0NoYXIgPSByb3dTdHIuY2hhckF0KGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHksIHRoaXNDaGFyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gbGVmdC9yaWdodCBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKDAsIHksIFwifFwiKSk7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih0aGlzLndpZHRoIC0gMSwgeSwgXCJ8XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBpbiB0b3AvYm90dG9tIGxldmVsIGJhcnJpZXJzXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCAwLCBcIi1cIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgdGhpcy5oZWlnaHQgLSAxLCBcIi1cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIG1heCkgKyAxKTtcbn0iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3RlclwiO1xuaW1wb3J0IHtBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fTk9ORSwgQUNUSU9OX1BVU0hfTUVOVSwgQUNUSU9OX1BPUF9NRU5VfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19VUH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi90ZXh0X2hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BlYyA9IG1lbnVTcGVjO1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy56UG9zaXRpb24gPSB6UG9zaXRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gJyAnKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVyc1t0aGlzLnNlbGVjdGVkT3B0aW9uXS5zeW1ib2wgPSAnLSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChnYW1lQ29tbWFuZCkge1xuICAgICAgICBsZXQgYWN0aW9uID0gQUNUSU9OX05PTkU7XG4gICAgICAgIGxldCBldmVudEFyZ3MgPSBudWxsO1xuXG4gICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfRE9XTikge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHRocm91Z2ggbWVudSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZE9wdGlvbiAlIHRoaXMuZ2V0TnVtT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUNvbW1hbmQgPT0gRkFDSU5HX1VQKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gLT0gMTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnNlbGVjdGVkT3B0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgb3B0aW9uIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLCBpZiBpdCBtYXRjaGVzIHRoZSBnYW1lQ29tbWFuZFxuICAgICAgICAgICAgbGV0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25dO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQWN0aW9uID0gY3VyT3B0aW9uLmFjdGlvbk1hcC5maWx0ZXIobyA9PiBvLmtleSA9PSBnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHNlbGVjdGVkQWN0aW9uWzBdLmFjdGlvbjtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MgPSBzZWxlY3RlZEFjdGlvblswXS5ldmVudEFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2FjdGlvbjogYWN0aW9uLCBldmVudEFyZ3M6IGV2ZW50QXJnc307XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlcyBhIGNoYXJhY3RlciB0byByZW5kZXIgaW4gdGhlIG1lbnUsIGFuZCBoYW5kbGVzIG92ZXJoZWFkIGZvciBpdFxuICAgIGNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKSB7XG4gICAgICAgIC8vIGFkZCBldmVyeXRoaW5nIGluXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKHgsIHksIGNoYXIpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZHJhdyBvbiB0b3BcbiAgICAgICAgY2hhcmFjdGVyLnogPSB0aGlzLnpQb3NpdGlvbjtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KGNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8ga2VlcCB0aGVzZSBhcm91bmQgaW4gbWVtb3J5IHNvIHdlIGNhbiByZW1vdmUgdGhlbSBsYXRlclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgZHJhd01lbnVPdXRsaW5lKGdhbWVPYmplY3RzLCBzdGFydF94LCBzdGFydF95LCB0ZXh0VywgdGV4dEgpIHtcbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyB0ZXh0SCwgJyonKTtcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgdGV4dFc7IGNvbCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgY29sLCBzdGFydF95IC0gMSwgJy0nKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgKyB0ZXh0SCwgJy0nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0ZXh0SDsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy52aWV3cG9ydC54O1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLnZpZXdwb3J0Lnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3cG9ydC53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHQgPSB0aGlzLnNwZWMuc3VtbWFyeVRleHQ7XG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0TGVuID0gc3VtbWFyeVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCB3cmFwVyA9IE1hdGguY2VpbCh3aWR0aCAqIDAuOCk7XG5cbiAgICAgICAgLy8gZmlndXJlIG91dCB4IHBvc2l0aW9uc1xuICAgICAgICBsZXQgc3RhcnRfeCA9IGxlZnQgKyBNYXRoLnJvdW5kKCh3aWR0aCAtIHdyYXBXKSAvIDIpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeSBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3kgPSBib3R0b20gKyBNYXRoLnJvdW5kKGhlaWdodCAqIDAuOCk7XG5cbiAgICAgICAgLy8gc3VtbWFyeSBpcyB0ZXh0IGF0IHRvcFxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dFJvd3MgPSB3cmFwVGV4dChzdW1tYXJ5VGV4dCwgd3JhcFcpO1xuICAgICAgICBjb25zdCBudW1TdW1tYXJ5TGluZXMgPSBzdW1tYXJ5VGV4dFJvd3MubGVuZ3RoO1xuXG4gICAgICAgIC8vIGFkZCBibGFuayBsaW5lIGJldHdlZW5cbiAgICAgICAgY29uc3QgbnVtU3BhY2luZ0xpbmVzID0gMTsgXG4gICAgICAgIFxuICAgICAgICAvLyBvcHRpb24gbGluZXMgYXJlIHNlbGVjdGFibGUgYnkgdXNlclxuICAgICAgICBjb25zdCBudW1PcHRpb25MaW5lcyA9IHRoaXMuc3BlYy5vcHRpb25zLmZpbHRlcihvID0+IG8ub3B0aW9uVGV4dCAhPSBudWxsKS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgbnVtTGluZXMgPSBudW1TdW1tYXJ5TGluZXMgKyBudW1PcHRpb25MaW5lcyArIG51bVNwYWNpbmdMaW5lczsgXG5cbiAgICAgICAgLy8gaWYgd2Ugd2lsbCBnbyBvdmVyIHRoZSBib3R0b20gcGFydCBvZiB0aGUgc2NyZWVuLCBidW1wIHVwIGEgbm90Y2hcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHN0YXJ0X3kgKyBudW1MaW5lcyArIDEpIC0gKGJvdHRvbSArIGhlaWdodCkpO1xuICAgICAgICBzdGFydF95IC09IG9mZnNldDtcblxuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgd3JhcFcsIG51bUxpbmVzKTtcblxuICAgICAgICAvLyBkcmF3IHRoZSBpbnNpZGUgb2YgdGhlIG1lbnUgYm94IGNvbnRhaW5lciwgc3BhY2VzIGFuZCB0ZXh0XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG51bUxpbmVzOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgd3JhcFc7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0X3ggKyBjb2w7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0X3kgKyByb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSAnICc7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG51bVN1bW1hcnlMaW5lcyArIG51bVNwYWNpbmdMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzT3B0aW9uSW5kZXggPSByb3cgLSBudW1TdW1tYXJ5TGluZXMgLSBudW1TcGFjaW5nTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXNPcHRpb25JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1clRleHQgPSBcIi0gXCIgKyBjdXJPcHRpb24ub3B0aW9uVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPCBjdXJUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9IGN1clRleHRbY29sXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3Rpb25DaGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb25DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycy5wdXNoKGNyZWF0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgIH1cblxuICAgIGhpZGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm1hcChjID0+IGdhbWVPYmplY3RzLnJlbW92ZU9iamVjdChjKSk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEFDVElPTl9OT05FID0gMDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fQkFDS19UT19HQU1FID0gMTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUFVTSF9NRU5VID0gMjtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUE9QX01FTlUgPSAzO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IID0gNDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVyA9IDU7IiwiaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1csIEFDVElPTl9CQUNLX1RPX0dBTUUsIEFDVElPTl9QT1BfTUVOVSwgQUNUSU9OX1BVU0hfTUVOVX0gZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNvbmZpZ3VyZSB5b3VyIGdhbWUgZXhwZXJpZW5jZS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgSGVpZ2h0XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBXaWR0aFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTFNfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDT05UUk9MU1xcbk1vdmVtZW50OiBBcnJvdyBrZXlzXFxuRklSRTogU3BhY2ViYXJcXG5QYXVzZTogJ2gnXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIENsaWNrIG9uIHRoZSB3ZWIgcGFnZSB0byBjYXB0dXJlIGtleSBwcmVzc2VzLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJQbGF5XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkNvbnRyb2xzXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBDT05UUk9MU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogU0VUVElOR1NfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9XG4gICAgXVxufVxuXG4iLCJpbXBvcnQge0ZBQ0lOR19VUCwgRkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFR9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5mYWNpbmcgPSBGQUNJTkdfRE9XTjtcbiAgICB9XG5cbiAgICBzZXRGYWNpbmcobmV3RmFjaW5nKSB7XG4gICAgICAgIGlmIChuZXdGYWNpbmcgIT0gdGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nID0gbmV3RmFjaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpbnRlbmRlZFggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIHZhciBpbnRlbmRlZFkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG5cbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIEZBQ0lOR19MRUZUOiBcbiAgICAgICAgICAgIGludGVuZGVkWC0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19MRUZUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1JJR0hUOlxuICAgICAgICAgICAgaW50ZW5kZWRYKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1JJR0hUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1VQOlxuICAgICAgICAgICAgaW50ZW5kZWRZLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1VQKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX0RPV046XG4gICAgICAgICAgICBpbnRlbmRlZFkrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfRE9XTik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBzb21lIHNvcnQgb2YgYm9ndXMgbW92ZW1lbnQuIGRvbid0IGhhbmRsZS5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuaW50ZW5kZWRQb3NpdGlvbiA9IHt4OiBpbnRlbmRlZFgsIHk6IGludGVuZGVkWX07XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTsgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9lbmVteV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4vbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlciwgUGl4ZWxDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV059IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtUcmVhc3VyZUNoYXJhY3Rlcn0gZnJvbSBcIi4vdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BMQVlFUl9TUFJJVEVfTUFQLCBQUk9KRUNUSUxFX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKFBMQVlFUl9TUFJJVEVfTUFQLCB0aGlzLCBGQUNJTkdfRE9XTik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICBzdXBlci5vbkFuaW1hdGVkKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKHRoaXMubW92YWJsZS5mYWNpbmcpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmJvdW5kcy54ID0gdGhpcy5pbml0aWFsWDtcbiAgICAgICAgdGhpcy5ib3VuZHMueSA9IHRoaXMuaW5pdGlhbFk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGhhbmRsZUdhbWVDb21tYW5kKGNvbW1hbmQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmIChjb21tYW5kID09ICdGSVJFJykge1xuICAgICAgICAgICAgdGhpcy5maXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmFibGUubW92ZShjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFRyZWFzdXJlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeS5wdXNoKHdpdGhPYmplY3QudHJlYXN1cmVUeXBlKTtcbiAgICAgICAgICAgIHdpdGhPYmplY3QucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2VBbW91bnQpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gZGFtYWdlQW1vdW50O1xuICAgIH1cblxuICAgIGZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aWxlID0gbmV3IFByb2plY3RpbGVDaGFyYWN0ZXIodGhpcy5nZXRYKCksIHRoaXMuZ2V0WSgpLCB0aGlzLm1vdmFibGUuZmFjaW5nLCA4LCBQUk9KRUNUSUxFX1NQUklURV9NQVApO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QocHJvamVjdGlsZSk7XG4gICAgfVxuXG4gICAgaGFzVHJlYXN1cmUodHJlYXN1cmVUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludmVudG9yeS5maWx0ZXIodCA9PiB0ID09IHRyZWFzdXJlVHlwZSkubGVuZ3RoID4gMDtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlLmpzXCI7XG5pbXBvcnQgeyBXYWxsQ2hhcmFjdGVyIH0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGVDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgZGlyZWN0aW9uLCBtYXhEaXN0YW5jZSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPSAwO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gbWF4RGlzdGFuY2U7XG4gICAgICAgIHRoaXMudHJhdmVsU3BlZWQgPSAoMSAvIDYuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCB1cCBvdXIgc3ByaXRlXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMsIGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdXAgb3VyIGFiaWxpdHkgdG8gbW92ZVxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBvYmplY3RzXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgUGl4ZWxDb2xsaWRlcih0aGlzLCB0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQrKztcbiAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA+PSB0aGlzLm1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHJhdmVsQ291bnRlciA+PSB0aGlzLnRyYXZlbFNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgLSB0aGlzLnRyYXZlbFNwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgV2FsbENoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzUG9pbnQoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHggPj0gdGhpcy54ICYmXG4gICAgICAgICAgICB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0cyhyZWN0YW5nbGUpIHtcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPD0gcmVjdGFuZ2xlLnggfHxcbiAgICAgICAgICAgIHRoaXMueCA+PSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCB8fFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPD0gcmVjdGFuZ2xlLnkgfHxcbiAgICAgICAgICAgIHRoaXMueSA+PSByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHZpZXdXLCB2aWV3SCk7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xlYXJTY3JlZW4oKSB7XG4gICAgICAgIC8vIGNsZWFyIHRoZSBzY3JlZW4gYW5kIHNldCBjdXJzb3IgYXQgMCwwXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpc09uU2NyZWVuKGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmlzVmlzaWJsZSAmJiBjaGFyYWN0ZXIuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnZpZXdwb3J0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZU9iamVjdHMgPSB0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpO1xuICAgICAgICAvLyByZXZlcnNlIHNvcnQgYnkgeiBheGlzLCBncmFiIGhpZ2hlc3RcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMuc29ydCgoYSwgYikgPT4gYi56IC0gYS56KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIHJvdyA9IHRoaXMudmlld3BvcnQueTsgcm93IDwgdGhpcy52aWV3cG9ydC55ICsgdGhpcy52aWV3cG9ydC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSB0aGlzLnZpZXdwb3J0Lng7IGNvbCA8IHRoaXMudmlld3BvcnQueCArIHRoaXMudmlld3BvcnQud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSByZW5kZXJhYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLmdldENoYXJhY3RlcikubWFwKGMgPT4gYy5nZXRDaGFyYWN0ZXIoY29sLCByb3cpKS5maWx0ZXIoYyA9PiBjICE9IG51bGwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgY2hhcmFjdGVyc1swXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ1xcbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSByZWRyYXcgZmxhZyBvbiBhbGwgb2JqZWN0cyB3ZSB3ZXJlIGFibGUgdG8gcmVuZGVyXG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLm1hcChjID0+IGMubmVlZHNSZWRyYXcgPSBmYWxzZSk7XG4gICAgfVxuXG4gICAgZ2V0SXNEaXJ0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXJ0eTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0SXNEaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGVja1JlZHJhdyhnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKS5maWx0ZXIoYyA9PiBjLm5lZWRzUmVkcmF3KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldElzRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZSA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKGMgPT4gYy5pc1Zpc2libGUgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc09uU2NyZWVuKGMpKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGU7XG4gICAgfVxuXG4gICAgY2VudGVyVmlld3BvcnRPbihjaGFyYWN0ZXIsIG1hcCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnggPSBNYXRoLm1pbihtYXAud2lkdGggLSB0aGlzLnZpZXdwb3J0LndpZHRoLCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WCgpIC0gKHRoaXMudmlld3BvcnQud2lkdGggLyAyKSkpO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnkgPSBNYXRoLm1pbihtYXAuaGVpZ2h0IC0gdGhpcy52aWV3cG9ydC5oZWlnaHQsIE1hdGgubWF4KDAsIGNoYXJhY3Rlci5nZXRZKCkgLSAodGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKSkpO1xuICAgIH1cbn0iLCJpbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIC8vIGZvcm1hdCBvZiBhIHNwcml0ZU1hcDpcbiAgICAvLyB7XG4gICAgLy8gICAgIFwiPHN0YXRlPlwiOiBbeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSxcbiAgICAvLyAgICAgICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSBdXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZU1hcCwgcGFyZW50T2JqZWN0LCBpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0gc3ByaXRlTWFwO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5ib3VuZHM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gdGhpcy5zdGF0ZUVsYXBzZWQgKyB0aW1lRWxhcHNlZDtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcmV2RnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50RnJhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgIT0gcHJldkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNpemUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICB2YXIgZmlyc3RSb3cgPSA5OTk5OTk7XG4gICAgICAgIHZhciBsYXN0Um93ID0gMDtcbiAgICAgICAgdmFyIGZpcnN0Q29sID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdENvbCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgY2hhcmFjdGVyUm93cy5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBjaGFyYWN0ZXJSb3dzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW3Jvd10uY2hhckF0KGNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAmJiBzeW1ib2wgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um93ID0gTWF0aC5taW4oZmlyc3RSb3csIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSb3cgPSBNYXRoLm1heChsYXN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENvbCA9IE1hdGgubWluKGZpcnN0Q29sLCBjb2wpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q29sID0gTWF0aC5tYXgobGFzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGZlZWxzIGRpcnR5XG4gICAgICAgIGNvbnN0IG5ld1cgPSBsYXN0Q29sIC0gZmlyc3RDb2wgKyAxO1xuICAgICAgICBjb25zdCBuZXdIID0gbGFzdFJvdyAtIGZpcnN0Um93ICsgMTtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkud2lkdGggPSBuZXdXO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgPSBuZXdIO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCkgLSBNYXRoLmZsb29yKG5ld1cgLyAyKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCkgLSBNYXRoLmZsb29yKG5ld0ggLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0WCgpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgeCAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7IFxuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHkgLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDdXJyZW50RnJhbWUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgdG90YWxUaW1lID0gc3ByaXRlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJWYWwpIHsgcmV0dXJuIGFjYyArIGN1clZhbFtcImRpc3BsYXlUaW1lXCJdOyB9LCAwKTtcbiAgICAgICAgdmFyIGxlZnRvdmVyID0gdGhpcy5zdGF0ZUVsYXBzZWQgJSB0b3RhbFRpbWU7XG4gICAgICAgIHZhciBmcmFtZSA9IDA7XG4gICAgICAgIHZhciB0aW1lQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZyYW1lID0gaTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVkdWNlKClcbiAgICAgICAgICAgIHZhciBkaXNwbGF5VGltZSA9IHNwcml0ZXNbaV1bXCJkaXNwbGF5VGltZVwiXTtcbiAgICAgICAgICAgIGlmICh0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZSA+IGxlZnRvdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lQWNjdW11bGF0b3IgPSB0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFgoKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJDb2wgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgLy8gYXNzdW1lcyB0aGUgZmlyc3Qgcm93IGlzIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSBvdGhlciBmcmFtZXNcbiAgICAgICAgICAgIG91ckNvbCA9IG91ckNvbCAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93c1swXS5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJDb2w7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRZKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG91clJvdyA9IG91clJvdyAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93cy5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJSb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSByb3cgLSB0aGlzLmdldEFuY2hvcmVkWSgpO1xuICAgICAgICB2YXIgb3VyQ29sID0gY29sIC0gdGhpcy5nZXRBbmNob3JlZFgoKTtcblxuICAgICAgICBpZiAob3VyUm93ID49IDAgJiYgXG4gICAgICAgICAgICBvdXJDb2wgPj0gMCAmJiBcbiAgICAgICAgICAgIG91clJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICBvdXJDb2wgPCBjaGFyYWN0ZXJSb3dzW291clJvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5jaGFyQXQob3VyQ29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsIi8qKlxuICogVGFrZXMgaW4gYSBzdHJpbmcgYW5kIGEgd3JhcCB3aWR0aCBhbmQgc3BsaXRzIHRoZSBzdHJpbmcgaW50b1xuICogYW4gYXJyYXkgb2YgdGV4dCBzdWJzdHJpbmdzIHRoYXQgYXJlIGFsbCBndWFyYW50ZWVkIHRvIGJlIGxlc3MgdGhhbiB0aGUgd3JhcCB3aWR0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUZXh0KHRleHQsIHdyYXBXaWR0aCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGxhc3RSb3dTdGFydCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBmaW5hbCBsZXR0ZXJcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1ckNoYXIgPSB0ZXh0W2ldO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1ckNoYXIgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGxpbmUgYnJlYWtcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgIGxldCB3b3JkTGVuZ3RoID0gMTtcbiAgICAgICAgICAgIC8vIGxvb2sgYWhlYWQgYXQgbGVuZ3RoIG9mIHRoaXMgd29yZFxuICAgICAgICAgICAgbGV0IHkgPSBpO1xuICAgICAgICAgICAgd2hpbGUgKHkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSB0ZXh0Lmxlbmd0aCB8fCB0ZXh0W3ldID09ICdcXG4nIHx8IHRleHRbeV0gPT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmRMZW5ndGggPSB5IC0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgKyB3b3JkTGVuZ3RoIC0gbGFzdFJvd1N0YXJ0ID49IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNhc2U6IHRoaXMgd29yZCB3b24ndCBmaXRcbiAgICAgICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWxsIGdvb2QsIHN0YXJ0IGZpbmRpbmcgdGhlIG5leHQgd29yZFxuICAgICAgICAgICAgICAgIGkgKz0gd29yZExlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmIChpIC0gbGFzdFJvd1N0YXJ0ID49IHdyYXBXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGNhc2U6IHdlIHJhbiBvdXQgb2YgbGluZSB3aWR0aFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByb3dzO1xufSIsImV4cG9ydCBjbGFzcyBUaHJlYWQge1xuICAgIGNvbnN0cnVjdG9yKGZ1bmN0aW9uUG9pbnRlcikge1xuICAgICAgICB0aGlzLmZ1bmN0aW9uUG9pbnRlciA9IGZ1bmN0aW9uUG9pbnRlcjtcbiAgICB9XG5cbiAgICBzdGFydChkZXNpcmVkRnJhbWVyYXRlKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgPSAxMDAwLyBkZXNpcmVkRnJhbWVyYXRlO1xuXG4gICAgICAgIHZhciBpbnRlcm5hbFJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGF0LmZ1bmN0aW9uUG9pbnRlcigpO1xuICAgICAgICAgICAgdmFyIGFmdGVyID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGNhbGwgdGFrZXMgYSB3aGlsZSwgcmVkdWNlIHRoZSBkZWxheSB1bnRpbCB0aGUgbmV4dCBleGVjdXRlXG4gICAgICAgICAgICB2YXIgbmV4dERlbGF5ID0gTWF0aC5tYXgoMCwgbWluaW11bU1pbGxzZWNQZXJGcmFtZSAtIChhZnRlciAtIG5vdykpO1xuICAgICAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgbmV4dERlbGF5KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBpbml0aWFsIGNhbGxcbiAgICAgICAgc2V0VGltZW91dChpbnRlcm5hbFJ1biwgMCk7IFxuICAgIH1cbn0iLCJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IHtLZXlNYXB9IGZyb20gXCIuL2tleV9tYXAuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9uSGFuZGxlciwgV2luQW5pbWF0aW9uLCBUZXh0QW5pbWF0b259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9lbmVteV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7R2FtZU9iamVjdHN9IGZyb20gXCIuL2dhbWVfb2JqZWN0cy5qc1wiO1xuaW1wb3J0IHtMRVZFTF9UT1dOLCBFTkVNWV9URVNUX1NQUklURV9NQVAsIEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQfSBmcm9tIFwiLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuaW1wb3J0IHtNYXB9IGZyb20gXCIuL21hcC5qc1wiO1xuaW1wb3J0IHtyYW5kb21OdW1iZXJ9IGZyb20gXCIuL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuaW1wb3J0IHtUcmVhc3VyZUNoYXJhY3Rlcn0gZnJvbSBcIi4vdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9CQUNLX1RPX0dBTUUsIEFDVElPTl9QT1BfTUVOVSwgQUNUSU9OX1BVU0hfTUVOVSwgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1d9IGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuaW1wb3J0IHtIRUxQX01FTlV9IGZyb20gXCIuL21lbnVfc3BlY3MuanNcIjtcblxuLy8gT3B0aW9ucyB0aGF0IGNvbnRyb2wgdGhlIGZsb3cgb2YgdGhlIGdhbWVcbnZhciBnbG9iYWxPcHRpb25zID0ge1xuICAgICdwbGF5SW5Ccm93c2VyJzogdHJ1ZSxcbiAgICAnZHJhd0ZQUyc6IDEwLFxuICAgICd1cGRhdGVGUFMnOiAxMCxcbiAgICAndmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtaW5WaWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21heFZpZXdwb3J0V2lkdGgnOiA2MCxcbiAgICAndmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWluVmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWF4Vmlld3BvcnRIZWlnaHQnOiAyMCxcbiAgICAnbnVtRW5lbWllcyc6IDEwXG59O1xuXG5mdW5jdGlvbiBydW4oKSB7ICBcbiAgICB2YXIgdGhHYW1lID0gbmV3IFRyZWFzdXJlSHVudEdhbWUoKTtcbiAgICB0aEdhbWUuaW5pdGlhbGl6ZShnbG9iYWxPcHRpb25zKTtcbn1cblxudmFyIGdhbWVPYmplY3RzID0gbmV3IEdhbWVPYmplY3RzKCk7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUh1bnRHYW1lIGV4dGVuZHMgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNpYyBnYW1lIG9iamVjdHNcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoTEVWRUxfVE9XTik7XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IEtleU1hcCgpO1xuICAgICAgICB0aGlzLm1lbnVTdGFjayA9IFtdO1xuXG4gICAgICAgIHRoaXMuU1RBVEVfUlVOTklORyA9IDA7XG4gICAgICAgIHRoaXMuU1RBVEVfV0lOTk5JTkcgPSAxO1xuICAgICAgICB0aGlzLlNUQVRFX0RFQUQgPSAyO1xuICAgICAgICB0aGlzLlNUQVRFX01FTlUgPSAzO1xuXG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIHByb2JhYmx5IHR1cm4gaW50byBhIHN0YXRlIG1hY2hpbmVcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfUlVOTklORztcblxuICAgICAgICB0aGlzLkVYUExPU0lPTl9TUEVFRCA9IDIwMDA7IC8vIG51bSBtaWxsaXNlY29uZHMgYmV0d2VlbiBmcmFtZXMgb2YgV0lOIGV4cGxvc2lvbiAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gLTE7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgdmFyIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgIHZhciB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcblxuICAgICAgICAvLyBkb24ndCBsZXQgdGhlbSBvdmVybGFwXG4gICAgICAgIHdoaWxlIChnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihvYmogPT4gb2JqLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgICAgIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgJ3gnOiB4LCAneSc6IHkgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIC8vIHN0YXJ0IGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgbWFwXG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyQ2hhcmFjdGVyKDEsIDEpO1xuICAgICAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICBjcmVhdGVHb2FsKGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgdmFyIGdvYWxQbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVhc3VyZUNoYXJhY3Rlcihnb2FsUGxhY2VtZW50LngsIGdvYWxQbGFjZW1lbnQueSwgJyQnLCAnbGV2ZWxHb2FsJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRW5lbXkoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICAvLyBjcmVhdGUgZW5lbWllc1xuICAgICAgICB2YXIgZW5lbXlQbGFjZW1lbnQgPSB0aGlzLmdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNoYXJhY3RlcihlbmVteVBsYWNlbWVudC54LCBlbmVteVBsYWNlbWVudC55LCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSBzY3JhdGNoXG4gICAgICAgIGdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmNsZWFyQW5pbWF0aW9ucygpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBvdXIgcGxheWVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBhZGQgYSBsZXZlbEdvYWwgdG8gdGhpcyBsZXZlbFxuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVHb2FsKGdhbWVPYmplY3RzLCB0aGlzLm1hcCkpO1xuXG4gICAgICAgIC8vIGFkZCBzb21lIGVuZW1pZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnbG9iYWxPcHRpb25zWydudW1FbmVtaWVzJ107IGkrKykge1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlRW5lbXkoZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgb3VyIG1hcCBvYmplY3RzXG4gICAgICAgIHRoaXMubWFwLmdldE1hcENoYXJhY3RlcnMoKS5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuXG4gICAgICAgIC8qdGhpcy5kb29yID0gbmV3IERvb3J3YXlDaGFyYWN0ZXIoMiwgMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmRvb3IpOyovXG4gICAgICAgIFxuICAgICAgICAvLyBjZW50ZXIgb24gdGhlIGNoYXJhY3RlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcblxuICAgICAgICAvLyBzaG93IGhlbHAgbWVudS4gdGhpcyBtYXkgY2hhbmdlIG9uIG5ldyBsZXZlbHMgZXZlbnR1YWxseVxuICAgICAgICB0aGlzLnNob3dIZWxwTWVudSgpO1xuXG4gICAgICAgIC8vIGZpcnN0IGRyYXcgb2YgcmVuZGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIGEgYmxvY2tpbmcgYW5pbWF0aW9uIHRoYXQgJ2V4cGxvZGVzJyB0aGUgXG4gICAgLy8uLi5nb2FsIGludG8gYW4gZXhwbG9zaW9uXG4gICAgc3Bhd25FeHBsb3Npb25zKG5vdywgY2VudGVyZWRDaGFyYWN0ZXIpIHtcbiAgICAgICAgLy8gc3Bhd24gYSBuZXcgYW5pbWF0aW9uIGJhc2VkIG9uIEVYUExPU0lPTl9TUEVFRFxuICAgICAgICBpZiAobm93IC0gdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA+IHRoaXMuRVhQTE9TSU9OX1NQRUVEKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oY2VudGVyZWRDaGFyYWN0ZXIuZ2V0WCgpLCBjZW50ZXJlZENoYXJhY3Rlci5nZXRZKCksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICAgICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBub3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVJbml0aWFsRXhwbG9zaW9uKHgsIHksIHRleHQpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgVGV4dEFuaW1hdG9uKHgsIHksIHRleHQpKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKHgsIHksIHRoaXMubWFwLndpZHRoLCB0aGlzLm1hcC5oZWlnaHQpKTtcbiAgICB9XG5cbiAgICBjaGVja0RlYWRDb25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfREVBRDtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJERUFEXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oYXNUcmVhc3VyZSgnbGV2ZWxHb2FsJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1dJTk5JTkc7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUluaXRpYWxFeHBsb3Npb24odGhpcy5jaGFyYWN0ZXIuZ2V0WCgpLCB0aGlzLmNoYXJhY3Rlci5nZXRZKCksIFwiV0lOXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0hlbHBNZW51KCkge1xuICAgICAgICAvLyBwdXNoIG1lbnUgc3RhdGUgb25cbiAgICAgICAgdGhpcy5wcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9NRU5VO1xuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudShIRUxQX01FTlUsIHRoaXMucmVuZGVyZXIudmlld3BvcnQsIDEpO1xuICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgICBpZiAobnVsbCAhPT0ga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2FtZUNvbW1hbmQgPSB0aGlzLmtleU1hcC5nZXRHYW1lQ29tbWFuZChrZXkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBicmluZyB1cCBhIFFVSVQgbWVudS4gcHJvY2Vzcy5leGl0KCkgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykgeyAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnSEVMUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hlbHBNZW51KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNoYXJhY3RlciBtb3ZlbWVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5oYW5kbGVHYW1lQ29tbWFuZChnYW1lQ29tbWFuZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uT2JqID0gdGhpcy5tZW51LmhhbmRsZUlucHV0KGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fQkFDS19UT19HQU1FKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjdXJyZW50IG1lbnUgYW5kIGdvIGJhY2sgdG8gZ2FtZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcmV2U3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BVU0hfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudSBhbmQgcHVzaCBpdCBvbnRvIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLmV2ZW50QXJncy5tZW51LCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fUE9QX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3AgcHJldiBtZW51IGFuZCBzaG93IGl0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZW51ID0gdGhpcy5tZW51U3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IHByZXZNZW51O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IHRoaXMgYnJlYWtzIGlmIHdlIGRvIGl0IGJ5IGFuIG9kZCBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgPiBnbG9iYWxPcHRpb25zWydtYXhWaWV3cG9ydEhlaWdodCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgPSBnbG9iYWxPcHRpb25zWydtaW5WaWV3cG9ydEhlaWdodCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPiBnbG9iYWxPcHRpb25zWydtYXhWaWV3cG9ydFdpZHRoJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoID0gZ2xvYmFsT3B0aW9uc1snbWluVmlld3BvcnRXaWR0aCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2VudGVyIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldElzRGlydHkoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZWRyYXcgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nP1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX1JVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrV2luQ29uZGl0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0RlYWRDb25kaXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX1dJTk5JTkcgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX0RFQUQpIHtcbiAgICAgICAgICAgICAgICAvLyB3aW4vZGllIGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25FeHBsb3Npb25zKG5vdywgdGhpcy5jaGFyYWN0ZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRMZXZlbFRpbWUgPj0gMCAmJiBub3cgPiB0aGlzLnJlc2V0TGV2ZWxUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpczsgICAgICBcblxuICAgICAgICB2YXIgbGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciB1cGRhdGVGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB2YXIgdGltZUVsYXBzZWQgPSBub3cgLSBsYXN0VXBkYXRlO1xuICAgICAgICAgICAgICAgIGxhc3RVcGRhdGUgPSBub3c7XG5cbiAgICAgICAgICAgICAgICB0aGF0LmhhbmRsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgdGhhdC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJhd0Z1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGF0LnJlbmRlcmVyLmdldElzRGlydHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5jbGVhclNjcmVlbigpO1xuICAgICAgICAgICAgICAgIHRoYXQuZHJhd0hlbHAodGhhdC5jaGFyYWN0ZXIuZ2V0Q2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIucmVuZGVyKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSh1cGRhdGVGdW5jLCBkcmF3RnVuYywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gZG8gdGhpcyBhZnRlciBpbml0aWFsaXppbmcgcGFyZW50XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlciA9IG5ldyBBbmltYXRpb25IYW5kbGVyKHRoaXMucmVuZGVyZXIpO1xuICAgICAgICB0aGlzLnJlc2V0TGV2ZWwoKTtcbiAgICB9XG5cbiAgICBkcmF3SGVscChjaGFyYWN0ZXJTeW1ib2wpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICdVc2UgRmlyZWZveCB0byBwbGF5IGlmIHlvdSBhcmVuXFwndCBhbHJlYWR5ISFcXG4nXG4gICAgICAgIC8qdmFyIG91dHB1dCA9ICdJbnN0cnVjdGlvbnM6IFVzZSBGaXJlZm94IG9yIENocm9tZSAoRmlyZWZveCByZWR1Y2VzIGZsaWNrZXJpbmchKVxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICdCcmVhayBvdXQgdGhlIGRldiB0b29scyBpbnRvIGEgc2VwYXJhdGUgd2luZG93IGFuZCB0aGVuIGNsaWNrIG9uIG15IGFjdHVhbCB3ZWIgcGFnZSB0byBlbmFibGUgY29udHJvbHMuXFxuXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ1VzZSB5b3VyIFwiJyArIGNoYXJhY3RlclN5bWJvbCArICdcIiBjaGFyYWN0ZXIgYW5kIGdvIGZpbmQgdGhlIHRyZWFzdXJlICgkKSBidXQgd2F0Y2ggb3V0IGZvciBiYWQgZ3V5cy4uLlxcblxcbic7IFxuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBDb250cm9sICB8IEFjdGlvbiB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wtLS0tLS0tLS0tfC0tLS0tLS0tfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHNwYWNlYmFyIHwgRklSRSEgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCB3ICAgICAgICB8IFVwICAgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgZCAgICAgICAgfCBSaWdodCAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHMgICAgICAgIHwgRG93biAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBhICAgICAgICB8IExlZnQgICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgYyAgICAgICAgfCBRdWl0ICAgfFxcbic7Ki9cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbiAgICB9XG59XG5cbnJ1bigpOyIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wsIHRyZWFzdXJlVHlwZSkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICAgdGhpcy50cmVhc3VyZVR5cGUgPSB0cmVhc3VyZVR5cGU7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgICB9XG4gXG4gICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgfVxuIH0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMSA9IFtcblwiPC4uPlwiXG5dO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMiA9IFtcblwiPC1vby0+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8zID0gW1xuXCIgIFxcXFwgIC8gIFwiLFxuXCI8LS0wMC0tPlwiLFxuXCIgIC8gIFxcXFxcIixcbl07XG5cbmV4cG9ydCBjb25zdCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFtcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA5MTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMSB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA0MzAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMyB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSBcbiAgICAgICAgXVxuICAgIH1cbn07XG5cbmNvbnN0IEVORU1ZX1RFU1RfRlJBTUVfMSA9IFtcbiAgICBcIjEgICBcIixcbiAgICBcIiAyICBcIixcbiAgICBcIiAgMyBcIixcbiAgICBcIiAgIDRcIixcbl07XG5cbmV4cG9ydCBjb25zdCBFTkVNWV9URVNUX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFwiMFwiOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1RFU1RfRlJBTUVfMSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUSUxFX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFtGQUNJTkdfTEVGVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUMyJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfVVBdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCNCddIH1dLFxuICAgICAgICBbRkFDSU5HX1JJR0hUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjgnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19ET1dOXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QkUnXSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzEnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUIzJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCNyddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRCddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1BUF9IT1VTRSA9IFtcblwiICAgICBfX19fX19fX18gICAgICBcIixcblwiICAgXy8gICAgICAgICBcXFxcXyAgIFwiLFxuXCIgXy8gICAgICAgICAgICAgXFxcXF8gXCIsXG5cIi9fX19fX19fX19fX19fX19fX1xcXFxcIixcblwiIHwgICAgICAgICAgICAgICB8ICBcIixcblwiIHwgICAgID09PT09ICAgICB8ICBcIixcblwiIHwgfCt8ICB8IHwgIHwrfCB8ICBcIixcblwiIHxfX19fX198IHxfX19fX198ICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBNQVBfQlVTSCA9IFtcblwiICMjIyBcIixcblwiIyMjIyNcIixcblwiICMjIyBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBNQVBfVFJFRSA9IFtcblwiICAgKCoqKSAgICAgICBcIixcblwiICgqKioqKiopICBcIixcblwiKCoqKioqKioqKSBcIixcblwiICAoKioqKikgIFwiLFxuXCIgICAgfHwgICAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgL19fXFxcXCAgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTEVWRUxfVE9XTiA9IHtcblwid2lkdGhcIjogMTIyLFxuXCJoZWlnaHRcIjogNjAsXG5cIm1hcF9vYmplY3RzXCI6IFtcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMTAsIFwieVwiOiAxMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDM3LCBcInlcIjogMTMgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDEyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzIsIFwieVwiOiAxMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDM4LCBcInlcIjogOSB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogOTAsIFwieVwiOiAxOCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMDAsIFwieVwiOiAxNiB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNTAsIFwieVwiOiAyMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiA2MCwgXCJ5XCI6IDIwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNzgsIFwieVwiOiAyMyB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNzAsIFwieVwiOiA0MiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiA4MCwgXCJ5XCI6IDQwIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMjAsIFwieVwiOiA4MCB9LFxuICAgIFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE2LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDQwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTEsIFwieVwiOiAzOCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE0LCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE2LCBcInlcIjogMzIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMCwgXCJ5XCI6IDMyIH0sXG4gICAgXG5dXG59OyIsIi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2FsbENoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
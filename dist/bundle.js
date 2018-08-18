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
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/static_character.js */ "./src/characters/static_character.js");


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
                characters.push(new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](this.centerX - x_offset, this.centerY, this.text.charAt(i)));
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
                var character = new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, '*');
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

/***/ "./src/characters/enemy_character.js":
/*!*******************************************!*\
  !*** ./src/characters/enemy_character.js ***!
  \*******************************************/
/*! exports provided: EnemyCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyCharacter", function() { return EnemyCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");
/* harmony import */ var _projectile_character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile_character.js */ "./src/characters/projectile_character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/facing.js */ "./src/core/facing.js");
/* harmony import */ var _player_character_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player_character.js */ "./src/characters/player_character.js");









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

/***/ "./src/characters/player_character.js":
/*!********************************************!*\
  !*** ./src/characters/player_character.js ***!
  \********************************************/
/*! exports provided: PlayerCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacter", function() { return PlayerCharacter; });
/* harmony import */ var _projectile_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectile_character.js */ "./src/characters/projectile_character.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_facing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/facing.js */ "./src/core/facing.js");
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");
/* harmony import */ var _treasure_character_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasure_character.js */ "./src/characters/treasure_character.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../treasure_hunt_art.js */ "./src/treasure_hunt_art.js");









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

/***/ "./src/characters/projectile_character.js":
/*!************************************************!*\
  !*** ./src/characters/projectile_character.js ***!
  \************************************************/
/*! exports provided: ProjectileCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectileCharacter", function() { return ProjectileCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/collider.js */ "./src/core/collider.js");
/* harmony import */ var _core_movable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/movable.js */ "./src/core/movable.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _wall_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wall_character.js */ "./src/characters/wall_character.js");






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

/***/ "./src/characters/static_character.js":
/*!********************************************!*\
  !*** ./src/characters/static_character.js ***!
  \********************************************/
/*! exports provided: StaticCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticCharacter", function() { return StaticCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");


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

/***/ "./src/characters/treasure_character.js":
/*!**********************************************!*\
  !*** ./src/characters/treasure_character.js ***!
  \**********************************************/
/*! exports provided: TreasureCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureCharacter", function() { return TreasureCharacter; });
/* harmony import */ var _static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/collider.js */ "./src/core/collider.js");



class TreasureCharacter extends _static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"] {
    constructor(initialX, initialY, symbol, treasureType) {
         super(initialX, initialY, symbol);
         
         this.treasureType = treasureType;

        this.collider = new _core_collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"](this);
        this.children.push(this.collider);
     }
 }
 

/***/ }),

/***/ "./src/characters/wall_character.js":
/*!******************************************!*\
  !*** ./src/characters/wall_character.js ***!
  \******************************************/
/*! exports provided: WallCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallCharacter", function() { return WallCharacter; });
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");


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
/* harmony import */ var _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/wall_character.js */ "./src/characters/wall_character.js");


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
                        this.characters.push(new _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, y, thisChar));
                    }
                }
            }
        }

        // add in left/right level barriers
        for (var y = 0; y < this.height; y++) {
            this.characters.push(new _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](0, y, "|"));
            this.characters.push(new _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](this.width - 1, y, "|"));
        }

        // add in top/bottom level barriers
        for (var x = 0; x < this.width; x++) {
            this.characters.push(new _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, 0, "-"));
            this.characters.push(new _characters_wall_character_js__WEBPACK_IMPORTED_MODULE_0__["WallCharacter"](x, this.height - 1, "-"));
        }

        return this.characters;
    }
}

/***/ }),

/***/ "./src/menus/menu.js":
/*!***************************!*\
  !*** ./src/menus/menu.js ***!
  \***************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _characters_static_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characters/static_character */ "./src/characters/static_character.js");
/* harmony import */ var _menu_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_actions.js */ "./src/menus/menu_actions.js");
/* harmony import */ var _core_facing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/facing */ "./src/core/facing.js");
/* harmony import */ var _core_text_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/text_helpers */ "./src/core/text_helpers.js");





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

        if (gameCommand == _core_facing__WEBPACK_IMPORTED_MODULE_2__["FACING_DOWN"]) {
            // scroll through menu options
            this.selectedOption += 1;
            this.selectedOption = this.selectedOption % this.getNumOptions();
            this.setOptionVisibility();
        } else if (gameCommand == _core_facing__WEBPACK_IMPORTED_MODULE_2__["FACING_UP"]) {
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
        let character = new _characters_static_character__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, char);
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
        const summaryTextRows = Object(_core_text_helpers__WEBPACK_IMPORTED_MODULE_3__["wrapText"])(summaryText, wrapW);
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

/***/ "./src/menus/menu_actions.js":
/*!***********************************!*\
  !*** ./src/menus/menu_actions.js ***!
  \***********************************/
/*! exports provided: ACTION_NONE, ACTION_BACK_TO_GAME, ACTION_PUSH_MENU, ACTION_POP_MENU, ACTION_INCREASE_VIEWPORT_H, ACTION_INCREASE_VIEWPORT_W, ACTION_RESET_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_NONE", function() { return ACTION_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_BACK_TO_GAME", function() { return ACTION_BACK_TO_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_PUSH_MENU", function() { return ACTION_PUSH_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_POP_MENU", function() { return ACTION_POP_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INCREASE_VIEWPORT_H", function() { return ACTION_INCREASE_VIEWPORT_H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_INCREASE_VIEWPORT_W", function() { return ACTION_INCREASE_VIEWPORT_W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_RESET_LEVEL", function() { return ACTION_RESET_LEVEL; });
const ACTION_NONE = 0;
const ACTION_BACK_TO_GAME = 1;
const ACTION_PUSH_MENU = 2;
const ACTION_POP_MENU = 3;
const ACTION_INCREASE_VIEWPORT_H = 4;
const ACTION_INCREASE_VIEWPORT_W = 5;
const ACTION_RESET_LEVEL = 6;

/***/ }),

/***/ "./src/menus/menu_specs.js":
/*!*********************************!*\
  !*** ./src/menus/menu_specs.js ***!
  \*********************************/
/*! exports provided: SETTINGS_MENU, CONTROLS_MENU, HELP_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_MENU", function() { return SETTINGS_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS_MENU", function() { return CONTROLS_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HELP_MENU", function() { return HELP_MENU; });
/* harmony import */ var _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_actions.js */ "./src/menus/menu_actions.js");


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
        },
        {
            optionText: "Reset Level",
            actionMap: [{
                key: 'ENTER',
                action: _menu_actions_js__WEBPACK_IMPORTED_MODULE_0__["ACTION_RESET_LEVEL"]
            }],
        }
    ]
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
/* harmony import */ var _characters_player_character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/player_character.js */ "./src/characters/player_character.js");
/* harmony import */ var _characters_enemy_character_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/enemy_character.js */ "./src/characters/enemy_character.js");
/* harmony import */ var _core_game_objects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/game_objects.js */ "./src/core/game_objects.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _characters_treasure_character_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/treasure_character.js */ "./src/characters/treasure_character.js");
/* harmony import */ var _menus_menu_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menus/menu.js */ "./src/menus/menu.js");
/* harmony import */ var _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menus/menu_actions.js */ "./src/menus/menu_actions.js");
/* harmony import */ var _menus_menu_specs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menus/menu_specs.js */ "./src/menus/menu_specs.js");















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
        var player = new _characters_player_character_js__WEBPACK_IMPORTED_MODULE_3__["PlayerCharacter"](1, 1);
        player.reset();
        return player;
    }

    createGoal(gameObjects, map) {
        var goalPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _characters_treasure_character_js__WEBPACK_IMPORTED_MODULE_9__["TreasureCharacter"](goalPlacement.x, goalPlacement.y, '$', 'levelGoal');
    }

    createEnemy(gameObjects, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _characters_enemy_character_js__WEBPACK_IMPORTED_MODULE_4__["EnemyCharacter"](enemyPlacement.x, enemyPlacement.y, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_6__["ENEMY_SPIKEY_SPRITE_MAP"]);
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
        this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](_menus_menu_specs_js__WEBPACK_IMPORTED_MODULE_12__["HELP_MENU"], this.renderer.viewport, 1);
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
                if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_BACK_TO_GAME"]) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(gameObjects);
                    this.menu = null;
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_RESET_LEVEL"]) {
                    // reset this level
                    this.resetLevel();
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_PUSH_MENU"]) {
                    // hide current menu and push it onto stack
                    this.menu.hide(gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](actionObj.eventArgs.menu, this.renderer.viewport, 1);
                    this.menu.show(gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_POP_MENU"]) {
                    // hide current menu
                    this.menu.hide(gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"] || 
                           actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_W"]) {
                    if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"]) {
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9lbmVteV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvcGxheWVyX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXJzL3RyZWFzdXJlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy93YWxsX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZmFjaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZV9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb3ZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91cGRhdGVhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZXlfbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudXMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNM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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDRCO0FBQ2I7QUFDQztBQUNDO0FBQ0c7QUFDRjtBQUNRO0FBQ3VCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVrQjtBQUNJO0FBQ047QUFDRDtBQUNPOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3QjtBQUNQOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5QixrREFBa0Q7QUFDM0UsdUVBQXVCLGtEQUFrRDtBQUN6RSwwRUFBMEIsa0RBQWtEO0FBQzVFLHlFQUF5QixrREFBa0Q7QUFDM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUIsa0RBQWtEO0FBQzNFLHVFQUF1QixrREFBa0Q7QUFDekUsMEVBQTBCLGtEQUFrRDtBQUM1RSx5RUFBeUIsa0RBQWtEO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHFDQUFxQzs7QUFFMUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx3Q0FBd0M7O0FBRTdDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssc0NBQXNDOztBQUUzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1Qzs7QUFFNUMsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDOztBQUUzQztBQUNBLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHJlYXN1cmUtaHVudC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHsgfVxuXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHsgfVxuXG4gICAgaXNFeHBpcmVkKCkgeyByZXR1cm4gdHJ1ZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEFuaW1hdG9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCB0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwMDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBpZiAodGltZU5vdyAtIHRoaXMubGFzdEZyYW1lID4gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIGFkZCBXSU4gaW4gdGhlIGNlbnRlciBvZiB0aGUgZXhwbG9zaW9uLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeF9vZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMudGV4dC5sZW5ndGggLyAyKSAtIGk7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5wdXNoKG5ldyBTdGF0aWNDaGFyYWN0ZXIodGhpcy5jZW50ZXJYIC0geF9vZmZzZXQsIHRoaXMuY2VudGVyWSwgdGhpcy50ZXh0LmNoYXJBdChpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBuZXZlciBnb2VzIGF3YXlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbkFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IC0xO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDtcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xuICAgICAgICB0aGlzLm1heFkgPSBtYXhZO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cysrO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgIC8vIGNyZWF0ZSBleHBsb3Npb24gcGFydGljbGVzIGluIGEgYmxhc3QgcmFkaXVzIGF3YXkgZnJvbSB0aGUgY2VudGVyXG4gICAgICAgIGZvciAodmFyIHkgPSB0aGlzLmNlbnRlclkgLSB0aGlzLnJhZGl1czsgeSA8PSB0aGlzLmNlbnRlclkgKyB0aGlzLnJhZGl1czsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKHRoaXMuY2VudGVyWSAtIHkpO1xuICAgICAgICAgICAgdmFyIG51bVhzID0gTWF0aC5taW4oMiwgdGhpcy5yYWRpdXMgLSBkaWZmZXJlbmNlICsgMSk7IC8vIGFkZCAxIGJlY2F1c2Ugd2UgYWx3YXlzIHdhbnQgYXQgbGVhc3QgMSBleHBsb3Npb24gb24gZWFjaCBsaW5lXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtWHM7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gMTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxpZXIgPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmNlbnRlclggKyAoKHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSkgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCAnKicpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VudGVyWCAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJYICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFggJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSAtICh0aGlzLnJhZGl1cyAqIDIpIDwgMCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZICsgKHRoaXMucmFkaXVzICogMikgPiB0aGlzLm1heFk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRBbmltYXRpb24oYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGV2ZXJ5dGhpbmcgKFRPRE86IHdlIHNob3VsZG4ndCBoYXZlIHRvIGRvIHRoaXMpXG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLmlzRXhwaXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0IGZyb20gb3VyIGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gdGhpcy5hbmltYXRpb25zW2ldLnNwYXduUmVuZGVyYWJsZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycyAhPSBudWxsICYmIGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BpeGVsQ29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyfSBmcm9tIFwiLi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXlDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGhpbmtTcGVlZCA9ICgxIC8gMS4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTAwOyAvLyBUT0RPOiBtYWtlIHRoaXMgcGFydCBvZiBhIHNwZWNcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgMCk7XG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFBpeGVsQ29sbGlkZXIodGhpcywgdGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHZhciByYW5kb20gPSByYW5kb21OdW1iZXIoNCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAnTk9ORSc7XG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XG4gICAgICAgICAgICBjYXNlIDE6IGRpcmVjdGlvbiA9IEZBQ0lOR19MRUZUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogZGlyZWN0aW9uID0gRkFDSU5HX1JJR0hUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogZGlyZWN0aW9uID0gRkFDSU5HX0RPV047IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiBkaXJlY3Rpb24gPSBGQUNJTkdfVVA7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmFibGUubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50aGlua0NvdW50ZXIgPiB0aGlzLnRoaW5rU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgJSB0aGlzLnRoaW5rU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFBsYXllckNoYXJhY3Rlcikge1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZWNlaXZlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOfSBmcm9tIFwiLi4vY29yZS9mYWNpbmcuanNcIjtcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL3RyZWFzdXJlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQTEFZRVJfU1BSSVRFX01BUCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQfSBmcm9tIFwiLi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoUExBWUVSX1NQUklURV9NQVAsIHRoaXMsIEZBQ0lOR19ET1dOKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIG9uQW5pbWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUodGhpcy5tb3ZhYmxlLmZhY2luZyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYm91bmRzLnggPSB0aGlzLmluaXRpYWxYO1xuICAgICAgICB0aGlzLmJvdW5kcy55ID0gdGhpcy5pbml0aWFsWTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZUNvbW1hbmQoY29tbWFuZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ0ZJUkUnKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgVHJlYXN1cmVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LnB1c2god2l0aE9iamVjdC50cmVhc3VyZVR5cGUpO1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZUFtb3VudCkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2VBbW91bnQ7XG4gICAgfVxuXG4gICAgZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZUNoYXJhY3Rlcih0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCksIHRoaXMubW92YWJsZS5mYWNpbmcsIDgsIFBST0pFQ1RJTEVfU1BSSVRFX01BUCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChwcm9qZWN0aWxlKTtcbiAgICB9XG5cbiAgICBoYXNUcmVhc3VyZSh0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5LmZpbHRlcih0ID0+IHQgPT0gdHJlYXN1cmVUeXBlKS5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BpeGVsQ29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7V2FsbENoYXJhY3Rlcn0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGVDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgZGlyZWN0aW9uLCBtYXhEaXN0YW5jZSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPSAwO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gbWF4RGlzdGFuY2U7XG4gICAgICAgIHRoaXMudHJhdmVsU3BlZWQgPSAoMSAvIDYuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCB1cCBvdXIgc3ByaXRlXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMsIGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdXAgb3VyIGFiaWxpdHkgdG8gbW92ZVxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBvYmplY3RzXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgUGl4ZWxDb2xsaWRlcih0aGlzLCB0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQrKztcbiAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA+PSB0aGlzLm1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHJhdmVsQ291bnRlciA+PSB0aGlzLnRyYXZlbFNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgLSB0aGlzLnRyYXZlbFNwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgV2FsbENoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0NoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgfVxuIFxuICAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgIH1cbiB9IiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUNoYXJhY3RlciBleHRlbmRzIFN0YXRpY0NoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wsIHRyZWFzdXJlVHlwZSkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpO1xuICAgICAgICAgXG4gICAgICAgICB0aGlzLnRyZWFzdXJlVHlwZSA9IHRyZWFzdXJlVHlwZTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgIH1cbiB9XG4gIiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2FsbENoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG4vLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIHJlbmRlcmFibGUgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMueiA9IDA7IC8vIGRlZmF1bHQgdG8geiBheGlzIHBvcyBiZWluZyAwXG4gICAgICAgIHRoaXMuYm91bmRzID0gbmV3IFJlY3RhbmdsZShpbml0aWFsWCwgaW5pdGlhbFksIDEsIDEpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHNldFgobmV3WCkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WCAtIHRoaXMuY3VycmVudFg7XG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueCArPSBkaWZmO1xuICAgIH1cblxuICAgIHNldFkobmV3WSkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WSAtIHRoaXMuY3VycmVudFk7XG4gICAgICAgIHRoaXMuY3VycmVudFkgKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueSArPSBkaWZmO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYO1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRZO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICByZXR1cm4gb3RoZXJDb2xsaWRlci5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LmlzUGh5c2ljYWwgJiZcbiAgICAgICAgICAgIHggIT09IHBhcmVudCAmJlxuICAgICAgICAgICAgeC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHBhcmVudC5nZXRCb3VuZHMoKSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50T2JqZWN0O1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4IGluc3RhbmNlb2YgQ29sbGlkZXIgJiZcbiAgICAgICAgICAgIHggIT09IHRoYXQgJiZcbiAgICAgICAgICAgIHguaXNDb2xsaXNpb24odGhhdCkgJiZcbiAgICAgICAgICAgIHRoYXQuaXNDb2xsaXNpb24oeClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29sbGlkZSB3aXRoIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbk9iamVjdHMubWFwKG9iaiA9PiBwYXJlbnQuY29sbGlkZShvYmoucGFyZW50T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXhlbENvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCwgc3ByaXRlKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudE9iamVjdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cblxuICAgIGNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXMoc3ByaXRlMSwgc3ByaXRlMikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIGlzUGl4ZWwoc3ByaXRlMi5nZXRDaGFyYWN0ZXIoeCwgeSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUoc3ByaXRlMSwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlciBpbnN0YW5jZW9mIFBpeGVsQ29sbGlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXModGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIuc3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUodGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRkFDSU5HX1VQID0gJ1UnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19MRUZUID0gJ0wnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19ET1dOID0gJ0QnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19SSUdIVCA9ICdSJzsiLCJpbXBvcnQge1RocmVhZH0gZnJvbSBcIi4vdGhyZWFkLmpzXCI7XG5pbXBvcnQge1JlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUgPSBuZXcgVGhyZWFkKHVwZGF0ZUZ1bmN0aW9uKTtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbmV3IFRocmVhZChkcmF3RnVuY3Rpb24pO1xuXG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlLnN0YXJ0KG9wdGlvbnNbJ3VwZGF0ZUZQUyddKTsgLy91cGRhdGUgWCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgICAgIHRoaXMudGhyZWFkRHJhdy5zdGFydChvcHRpb25zWydkcmF3RlBTJ10pOyAvL2RyYXcgWCB0aW1lcyBwZXIgc2Vjb25kXG5cbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRpb25zWydwbGF5SW5Ccm93c2VyJ10pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZS5rZXlDb2RlO1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXMgaW5zdGFkIG9mIGRpcmVjdCBjb25zb2xlIGlucHV0XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpOyAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMgYWxsb3dzIHVzIHRvIHJlYWQga2V5cyBkaXJlY3RseSBmcm9tIGNvbnNvbGUgaW5wdXQgd2l0aG91dCBFTlRFUlxuICAgICAgICAgICAgcHJvY2Vzcy5zdGRpbi5zZXRSYXdNb2RlKHRydWUpOyBcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkaW4ub24oJ3JlYWRhYmxlJywgZnVuY3Rpb24oZGF0YSkgeyAgIFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwcm9jZXNzLnN0ZGluLnJlYWQoKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdGtleVByZXNzZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGFzdEtleXByZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0a2V5UHJlc3Nlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdGtleVByZXNzZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlbWVudChvYmosIGludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGxldCBpc09ic3RydWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5vYmV5c1BoeXNpY3MpIHtcbiAgICAgICAgICAgIGxldCBuZXdCb3VuZHMgPSBvYmouZ2V0Qm91bmRzKCkuY29weSgpO1xuICAgICAgICAgICAgbmV3Qm91bmRzLnggKz0gaW50ZW5kZWRQb3NpdGlvbi54IC0gb2JqLmdldFgoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy55ICs9IGludGVuZGVkUG9zaXRpb24ueSAtIG9iai5nZXRZKCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld0JvdW5kcykpLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2JzdHJ1Y3RlZCkge1xuICAgICAgICAgICAgb2JqLnNldFgoaW50ZW5kZWRQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIG9iai5zZXRZKGludGVuZGVkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKTtcblxuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja1BoeXNpY2FsQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG4gICAgICAgIGNvbGxpZGVyT2JqZWN0cy5tYXAoeCA9PiB4LmNoZWNrQ29sbGlkZXJDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgdmFyIHJlbW92YWJsZU9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzKTtcbiAgICAgICAgaWYgKHJlbW92YWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZhYmxlT2JqZWN0cy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoeCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoeCA9PiB4ICE9PSBvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxPYmplY3RzKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIG1heCkgKyAxKTtcbn0iLCJpbXBvcnQge0ZBQ0lOR19VUCwgRkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFR9IGZyb20gXCIuL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ZhYmxlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5mYWNpbmcgPSBGQUNJTkdfRE9XTjtcbiAgICB9XG5cbiAgICBzZXRGYWNpbmcobmV3RmFjaW5nKSB7XG4gICAgICAgIGlmIChuZXdGYWNpbmcgIT0gdGhpcy5mYWNpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjaW5nID0gbmV3RmFjaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpbnRlbmRlZFggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIHZhciBpbnRlbmRlZFkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG5cbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIEZBQ0lOR19MRUZUOiBcbiAgICAgICAgICAgIGludGVuZGVkWC0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19MRUZUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1JJR0hUOlxuICAgICAgICAgICAgaW50ZW5kZWRYKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1JJR0hUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX1VQOlxuICAgICAgICAgICAgaW50ZW5kZWRZLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX1VQKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgRkFDSU5HX0RPV046XG4gICAgICAgICAgICBpbnRlbmRlZFkrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfRE9XTik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gbXVzdCBiZSBzb21lIHNvcnQgb2YgYm9ndXMgbW92ZW1lbnQuIGRvbid0IGhhbmRsZS5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuaW50ZW5kZWRQb3NpdGlvbiA9IHt4OiBpbnRlbmRlZFgsIHk6IGludGVuZGVkWX07XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTsgICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0c1BvaW50KHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCB0aGlzLnggKyB0aGlzLndpZHRoICYmXG4gICAgICAgICAgICB4ID49IHRoaXMueCAmJlxuICAgICAgICAgICAgeSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICB5ID49IHRoaXMueSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGludGVyc2VjdHMocmVjdGFuZ2xlKSB7XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoIDw9IHJlY3RhbmdsZS54IHx8XG4gICAgICAgICAgICB0aGlzLnggPj0gcmVjdGFuZ2xlLnggKyByZWN0YW5nbGUud2lkdGggfHxcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IDw9IHJlY3RhbmdsZS55IHx8XG4gICAgICAgICAgICB0aGlzLnkgPj0gcmVjdGFuZ2xlLnkgKyByZWN0YW5nbGUuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29weSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdXLCB2aWV3SCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB2aWV3Vywgdmlld0gpO1xuICAgICAgICB0aGlzLmlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsZWFyU2NyZWVuKCkge1xuICAgICAgICAvLyBjbGVhciB0aGUgc2NyZWVuIGFuZCBzZXQgY3Vyc29yIGF0IDAsMFxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgaXNPblNjcmVlbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJhY3Rlci5pc1Zpc2libGUgJiYgY2hhcmFjdGVyLmdldEJvdW5kcygpLmludGVyc2VjdHModGhpcy52aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIHJlbmRlcmFibGVPYmplY3RzID0gdGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKTtcbiAgICAgICAgLy8gcmV2ZXJzZSBzb3J0IGJ5IHogYXhpcywgZ3JhYiBoaWdoZXN0XG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLnNvcnQoKGEsIGIpID0+IGIueiAtIGEueik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cblxuICAgIGdldElzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlydHk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICAvLyBmb3JtYXQgb2YgYSBzcHJpdGVNYXA6XG4gICAgLy8ge1xuICAgIC8vICAgICBcIjxzdGF0ZT5cIjogW3sgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0sXG4gICAgLy8gICAgICAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA8dGltZUluTWlsbGlzZWM+LCBcImNoYXJhY3RlcnNcIjogWzxyb3cxc3RyaW5nPiwgPHJvdzJzdHJpbmc+LCBldGNdIH0gXVxuICAgIC8vIH1cbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVNYXAsIHBhcmVudE9iamVjdCwgaW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwcml0ZU1hcCA9IHNwcml0ZU1hcDtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRPYmplY3QuYm91bmRzO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB0aGlzLnN0YXRlRWxhcHNlZCA9IHRoaXMuc3RhdGVFbGFwc2VkICsgdGltZUVsYXBzZWQ7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJldkZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudEZyYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lICE9IHByZXZGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3Qub25BbmltYXRlZCgpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgdmFyIGZpcnN0Um93ID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdFJvdyA9IDA7XG4gICAgICAgIHZhciBmaXJzdENvbCA9IDk5OTk5OTtcbiAgICAgICAgdmFyIGxhc3RDb2wgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgY2hhcmFjdGVyUm93c1tyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tyb3ddLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgJiYgc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdyA9IE1hdGgubWluKGZpcnN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gTWF0aC5tYXgobGFzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDb2wgPSBNYXRoLm1pbihmaXJzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdENvbCA9IE1hdGgubWF4KGxhc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBmZWVscyBkaXJ0eVxuICAgICAgICBjb25zdCBuZXdXID0gbGFzdENvbCAtIGZpcnN0Q29sICsgMTtcbiAgICAgICAgY29uc3QgbmV3SCA9IGxhc3RSb3cgLSBmaXJzdFJvdyArIDE7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoID0gbmV3VztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0ID0gbmV3SDtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS54ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpIC0gTWF0aC5mbG9vcihuZXdXIC8gMik7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS55ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpIC0gTWF0aC5mbG9vcihuZXdIIC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHggLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpOyBcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICB5IC09IE1hdGguZmxvb3IodGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlQ3VycmVudEZyYW1lKCkge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIHRvdGFsVGltZSA9IHNwcml0ZXMucmVkdWNlKGZ1bmN0aW9uKGFjYywgY3VyVmFsKSB7IHJldHVybiBhY2MgKyBjdXJWYWxbXCJkaXNwbGF5VGltZVwiXTsgfSwgMCk7XG4gICAgICAgIHZhciBsZWZ0b3ZlciA9IHRoaXMuc3RhdGVFbGFwc2VkICUgdG90YWxUaW1lO1xuICAgICAgICB2YXIgZnJhbWUgPSAwO1xuICAgICAgICB2YXIgdGltZUFjY3VtdWxhdG9yID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmcmFtZSA9IGk7XG4gICAgICAgICAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgd2l0aCBhIHJlZHVjZSgpXG4gICAgICAgICAgICB2YXIgZGlzcGxheVRpbWUgPSBzcHJpdGVzW2ldW1wiZGlzcGxheVRpbWVcIl07XG4gICAgICAgICAgICBpZiAodGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWUgPiBsZWZ0b3Zlcikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZUFjY3VtdWxhdG9yID0gdGltZUFjY3VtdWxhdG9yICsgZGlzcGxheVRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRYKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyQ29sID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZXMgdGhlIGZpcnN0IHJvdyBpcyB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgb3RoZXIgZnJhbWVzXG4gICAgICAgICAgICBvdXJDb2wgPSBvdXJDb2wgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3NbMF0ubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyQ29sO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWSgpIHtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV1bdGhpcy5mcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgbm90aW9uIG9mIHRoZSBtYXAgbG9jYXRpb24gYW5kIGxvY2FsaXplIHRvIHRoaXMgc3ByaXRlIG9ubHlcbiAgICAgICAgdmFyIG91clJvdyA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvdXJSb3cgPSBvdXJSb3cgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3MubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyUm93O1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gcm93IC0gdGhpcy5nZXRBbmNob3JlZFkoKTtcbiAgICAgICAgdmFyIG91ckNvbCA9IGNvbCAtIHRoaXMuZ2V0QW5jaG9yZWRYKCk7XG5cbiAgICAgICAgaWYgKG91clJvdyA+PSAwICYmIFxuICAgICAgICAgICAgb3VyQ29sID49IDAgJiYgXG4gICAgICAgICAgICBvdXJSb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgb3VyQ29sIDwgY2hhcmFjdGVyUm93c1tvdXJSb3ddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW291clJvd10uY2hhckF0KG91ckNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiLyoqXG4gKiBUYWtlcyBpbiBhIHN0cmluZyBhbmQgYSB3cmFwIHdpZHRoIGFuZCBzcGxpdHMgdGhlIHN0cmluZyBpbnRvXG4gKiBhbiBhcnJheSBvZiB0ZXh0IHN1YnN0cmluZ3MgdGhhdCBhcmUgYWxsIGd1YXJhbnRlZWQgdG8gYmUgbGVzcyB0aGFuIHRoZSB3cmFwIHdpZHRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcFRleHQodGV4dCwgd3JhcFdpZHRoKSB7XG4gICAgbGV0IHJvd3MgPSBbXTtcbiAgICBsZXQgbGFzdFJvd1N0YXJ0ID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPD0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGkgPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGZpbmFsIGxldHRlclxuICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VyQ2hhciA9IHRleHRbaV07XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VyQ2hhciA9PSAnXFxuJykge1xuICAgICAgICAgICAgLy8gY2FzZTogbGluZSBicmVha1xuICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJDaGFyICE9ICcgJykge1xuICAgICAgICAgICAgbGV0IHdvcmRMZW5ndGggPSAxO1xuICAgICAgICAgICAgLy8gbG9vayBhaGVhZCBhdCBsZW5ndGggb2YgdGhpcyB3b3JkXG4gICAgICAgICAgICBsZXQgeSA9IGk7XG4gICAgICAgICAgICB3aGlsZSAoeSA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgICAgIGlmICh5ID09IHRleHQubGVuZ3RoIHx8IHRleHRbeV0gPT0gJ1xcbicgfHwgdGV4dFt5XSA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgd29yZExlbmd0aCA9IHkgLSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSArIHdvcmRMZW5ndGggLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogdGhpcyB3b3JkIHdvbid0IGZpdFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgZ29vZCwgc3RhcnQgZmluZGluZyB0aGUgbmV4dCB3b3JkXG4gICAgICAgICAgICAgICAgaSArPSB3b3JkTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaWYgKGkgLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogd2UgcmFuIG91dCBvZiBsaW5lIHdpZHRoXG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvd3M7XG59IiwiZXhwb3J0IGNsYXNzIFRocmVhZCB7XG4gICAgY29uc3RydWN0b3IoZnVuY3Rpb25Qb2ludGVyKSB7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25Qb2ludGVyID0gZnVuY3Rpb25Qb2ludGVyO1xuICAgIH1cblxuICAgIHN0YXJ0KGRlc2lyZWRGcmFtZXJhdGUpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgbWluaW11bU1pbGxzZWNQZXJGcmFtZSA9IDEwMDAvIGRlc2lyZWRGcmFtZXJhdGU7XG5cbiAgICAgICAgdmFyIGludGVybmFsUnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoYXQuZnVuY3Rpb25Qb2ludGVyKCk7XG4gICAgICAgICAgICB2YXIgYWZ0ZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZnVuY3Rpb24gY2FsbCB0YWtlcyBhIHdoaWxlLCByZWR1Y2UgdGhlIGRlbGF5IHVudGlsIHRoZSBuZXh0IGV4ZWN1dGVcbiAgICAgICAgICAgIHZhciBuZXh0RGVsYXkgPSBNYXRoLm1heCgwLCBtaW5pbXVtTWlsbHNlY1BlckZyYW1lIC0gKGFmdGVyIC0gbm93KSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCBuZXh0RGVsYXkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWwgY2FsbFxuICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCAwKTsgXG4gICAgfVxufSIsIi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgS2V5TWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBnZXRHYW1lQ29tbWFuZChrZXkpIHtcbiAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICBjYXNlICdhJzogXG4gICAgICAgIGNhc2UgXCI2NVwiOlxuICAgICAgICBjYXNlIFwiMzdcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfTEVGVDtcblxuICAgICAgICBjYXNlICdlJzogXG4gICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgY2FzZSBcIjY4XCI6XG4gICAgICAgIGNhc2UgXCIzOVwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19SSUdIVDtcblxuICAgICAgICBjYXNlICcsJzogXG4gICAgICAgIGNhc2UgJ3cnOiBcbiAgICAgICAgY2FzZSBcIjg3XCI6XG4gICAgICAgIGNhc2UgXCIzOFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19VUDtcblxuICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNhc2UgXCI4M1wiOlxuICAgICAgICBjYXNlIFwiNDBcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfRE9XTjtcblxuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgY2FzZSAnNjcnOlxuICAgICAgICAgICAgcmV0dXJuICdRVUlUJztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgY2FzZSAnNzAnOlxuICAgICAgICBjYXNlICczMic6XG4gICAgICAgICAgICByZXR1cm4gJ0ZJUkUnO1xuXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBjYXNlICc3Mic6XG4gICAgICAgICAgICByZXR1cm4gJ0hFTFAnO1xuICAgICAgICBcbiAgICAgICAgY2FzZSAnMTMnOlxuICAgICAgICAgICAgcmV0dXJuICdFTlRFUic7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gbWFwRGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcERhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TWFwQ2hhcmFjdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBsZXZlbFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG9iai5pbWFnZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSByb3cgKyBvYmoueTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U3RyID0gb2JqLmltYWdlW3Jvd107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgcm93U3RyLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBvYmoueCArIGNvbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNDaGFyID0gcm93U3RyLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0NoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB5LCB0aGlzQ2hhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIGxlZnQvcmlnaHQgbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3RlcigwLCB5LCBcInxcIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIodGhpcy53aWR0aCAtIDEsIHksIFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gdG9wL2JvdHRvbSBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgMCwgXCItXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHRoaXMuaGVpZ2h0IC0gMSwgXCItXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgfVxufSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FDVElPTl9OT05FfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi4vY29yZS90ZXh0X2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc3BlYyA9IG1lbnVTcGVjO1xuICAgICAgICB0aGlzLnZpZXdwb3J0ID0gdmlld3BvcnQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy56UG9zaXRpb24gPSB6UG9zaXRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSAwO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gJyAnKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVyc1t0aGlzLnNlbGVjdGVkT3B0aW9uXS5zeW1ib2wgPSAnLSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dChnYW1lQ29tbWFuZCkge1xuICAgICAgICBsZXQgYWN0aW9uID0gQUNUSU9OX05PTkU7XG4gICAgICAgIGxldCBldmVudEFyZ3MgPSBudWxsO1xuXG4gICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfRE9XTikge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHRocm91Z2ggbWVudSBvcHRpb25zXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uICs9IDE7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5zZWxlY3RlZE9wdGlvbiAlIHRoaXMuZ2V0TnVtT3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZUNvbW1hbmQgPT0gRkFDSU5HX1VQKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gLT0gMTtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnNlbGVjdGVkT3B0aW9uIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgb3B0aW9uIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLCBpZiBpdCBtYXRjaGVzIHRoZSBnYW1lQ29tbWFuZFxuICAgICAgICAgICAgbGV0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRPcHRpb25dO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQWN0aW9uID0gY3VyT3B0aW9uLmFjdGlvbk1hcC5maWx0ZXIobyA9PiBvLmtleSA9PSBnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHNlbGVjdGVkQWN0aW9uWzBdLmFjdGlvbjtcbiAgICAgICAgICAgICAgICBldmVudEFyZ3MgPSBzZWxlY3RlZEFjdGlvblswXS5ldmVudEFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2FjdGlvbjogYWN0aW9uLCBldmVudEFyZ3M6IGV2ZW50QXJnc307XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlcyBhIGNoYXJhY3RlciB0byByZW5kZXIgaW4gdGhlIG1lbnUsIGFuZCBoYW5kbGVzIG92ZXJoZWFkIGZvciBpdFxuICAgIGNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKSB7XG4gICAgICAgIC8vIGFkZCBldmVyeXRoaW5nIGluXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKHgsIHksIGNoYXIpO1xuICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZHJhdyBvbiB0b3BcbiAgICAgICAgY2hhcmFjdGVyLnogPSB0aGlzLnpQb3NpdGlvbjtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KGNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8ga2VlcCB0aGVzZSBhcm91bmQgaW4gbWVtb3J5IHNvIHdlIGNhbiByZW1vdmUgdGhlbSBsYXRlclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIpO1xuXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgZHJhd01lbnVPdXRsaW5lKGdhbWVPYmplY3RzLCBzdGFydF94LCBzdGFydF95LCB0ZXh0VywgdGV4dEgpIHtcbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgLSAxLCAnKicpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyB0ZXh0SCwgJyonKTtcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgdGV4dFc7IGNvbCsrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgY29sLCBzdGFydF95IC0gMSwgJy0nKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgKyB0ZXh0SCwgJy0nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0ZXh0SDsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIHRleHRXLCBzdGFydF95ICsgcm93LCAnfCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdyhnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy52aWV3cG9ydC54O1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLnZpZXdwb3J0Lnk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy52aWV3cG9ydC53aWR0aDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy52aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHQgPSB0aGlzLnNwZWMuc3VtbWFyeVRleHQ7XG4gICAgICAgIGNvbnN0IHN1bW1hcnlUZXh0TGVuID0gc3VtbWFyeVRleHQubGVuZ3RoO1xuICAgICAgICBjb25zdCB3cmFwVyA9IE1hdGguY2VpbCh3aWR0aCAqIDAuOCk7XG5cbiAgICAgICAgLy8gZmlndXJlIG91dCB4IHBvc2l0aW9uc1xuICAgICAgICBsZXQgc3RhcnRfeCA9IGxlZnQgKyBNYXRoLnJvdW5kKCh3aWR0aCAtIHdyYXBXKSAvIDIpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeSBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3kgPSBib3R0b20gKyBNYXRoLnJvdW5kKGhlaWdodCAqIDAuOCk7XG5cbiAgICAgICAgLy8gc3VtbWFyeSBpcyB0ZXh0IGF0IHRvcFxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dFJvd3MgPSB3cmFwVGV4dChzdW1tYXJ5VGV4dCwgd3JhcFcpO1xuICAgICAgICBjb25zdCBudW1TdW1tYXJ5TGluZXMgPSBzdW1tYXJ5VGV4dFJvd3MubGVuZ3RoO1xuXG4gICAgICAgIC8vIGFkZCBibGFuayBsaW5lIGJldHdlZW5cbiAgICAgICAgY29uc3QgbnVtU3BhY2luZ0xpbmVzID0gMTsgXG4gICAgICAgIFxuICAgICAgICAvLyBvcHRpb24gbGluZXMgYXJlIHNlbGVjdGFibGUgYnkgdXNlclxuICAgICAgICBjb25zdCBudW1PcHRpb25MaW5lcyA9IHRoaXMuc3BlYy5vcHRpb25zLmZpbHRlcihvID0+IG8ub3B0aW9uVGV4dCAhPSBudWxsKS5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgbnVtTGluZXMgPSBudW1TdW1tYXJ5TGluZXMgKyBudW1PcHRpb25MaW5lcyArIG51bVNwYWNpbmdMaW5lczsgXG5cbiAgICAgICAgLy8gaWYgd2Ugd2lsbCBnbyBvdmVyIHRoZSBib3R0b20gcGFydCBvZiB0aGUgc2NyZWVuLCBidW1wIHVwIGEgbm90Y2hcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgKHN0YXJ0X3kgKyBudW1MaW5lcyArIDEpIC0gKGJvdHRvbSArIGhlaWdodCkpO1xuICAgICAgICBzdGFydF95IC09IG9mZnNldDtcblxuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmRyYXdNZW51T3V0bGluZShnYW1lT2JqZWN0cywgc3RhcnRfeCwgc3RhcnRfeSwgd3JhcFcsIG51bUxpbmVzKTtcblxuICAgICAgICAvLyBkcmF3IHRoZSBpbnNpZGUgb2YgdGhlIG1lbnUgYm94IGNvbnRhaW5lciwgc3BhY2VzIGFuZCB0ZXh0XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG51bUxpbmVzOyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgd3JhcFc7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0X3ggKyBjb2w7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0X3kgKyByb3c7XG4gICAgICAgICAgICAgICAgbGV0IGNoYXIgPSAnICc7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG51bVN1bW1hcnlMaW5lcyArIG51bVNwYWNpbmdMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzT3B0aW9uSW5kZXggPSByb3cgLSBudW1TdW1tYXJ5TGluZXMgLSBudW1TcGFjaW5nTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ck9wdGlvbiA9IHRoaXMuc3BlYy5vcHRpb25zW3RoaXNPcHRpb25JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1clRleHQgPSBcIi0gXCIgKyBjdXJPcHRpb24ub3B0aW9uVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wgPCBjdXJUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9IGN1clRleHRbY29sXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3Rpb25DaGFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCB4LCB5LCBjaGFyKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb25DaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycy5wdXNoKGNyZWF0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgIH1cblxuICAgIGhpZGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm1hcChjID0+IGdhbWVPYmplY3RzLnJlbW92ZU9iamVjdChjKSk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEFDVElPTl9OT05FID0gMDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fQkFDS19UT19HQU1FID0gMTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUFVTSF9NRU5VID0gMjtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUE9QX01FTlUgPSAzO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IID0gNDtcbmV4cG9ydCBjb25zdCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVyA9IDU7XG5leHBvcnQgY29uc3QgQUNUSU9OX1JFU0VUX0xFVkVMID0gNjsiLCJpbXBvcnQge1xuICAgIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9ILCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfVywgXG4gICAgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBcbiAgICBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fUkVTRVRfTEVWRUwgfVxuICAgIGZyb20gXCIuL21lbnVfYWN0aW9ucy5qc1wiO1xuXG5leHBvcnQgY29uc3QgU0VUVElOR1NfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDb25maWd1cmUgeW91ciBnYW1lIGV4cGVyaWVuY2UuXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkluY3JlYXNlIFZpZXdwb3J0IEhlaWdodFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSH1dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgV2lkdGhcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX1d9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlRST0xTX01FTlUgPSB7XG4gICAgdHlwZTogXCJPUFRJT05TXCIsXG4gICAgc3VtbWFyeVRleHQ6IFwiQ09OVFJPTFNcXG5Nb3ZlbWVudDogQXJyb3cga2V5c1xcbkZJUkU6IFNwYWNlYmFyXFxuUGF1c2U6ICdoJ1wiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJCYWNrXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9QT1BfTUVOVX1dXG4gICAgICAgIH1cbiAgICBdXG59XG5cbmV4cG9ydCBjb25zdCBIRUxQX01FTlUgPSB7XG4gICAgdHlwZTogJ09QVElPTlMnLFxuICAgIHN1bW1hcnlUZXh0OiBcIldlbGNvbWUhIEZpcmVmb3ggaXMgdGhlIGJlc3QgYnJvd3NlciBmb3IgdGhpcyBnYW1lLiBDbGljayBvbiB0aGUgd2ViIHBhZ2UgdG8gY2FwdHVyZSBrZXkgcHJlc3Nlcy5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiUGxheVwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fQkFDS19UT19HQU1FfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJDb250cm9sc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogQ09OVFJPTFNfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIk9wdGlvbnNcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3tcbiAgICAgICAgICAgICAgICBrZXk6ICdFTlRFUicsIFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1BVU0hfTUVOVSwgXG4gICAgICAgICAgICAgICAgZXZlbnRBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IFNFVFRJTkdTX01FTlVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJSZXNldCBMZXZlbFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9SRVNFVF9MRVZFTFxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH1cbiAgICBdXG59XG5cbiIsIlxuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9jb3JlL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFdpbkFuaW1hdGlvbiwgVGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVycy9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL2VuZW15X2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtHYW1lT2JqZWN0c30gZnJvbSBcIi4vY29yZS9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3RlcnMvdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCIuL21lbnVzL21lbnUuanNcIjtcbmltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9SRVNFVF9MRVZFTCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudXMvbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudXMvbWVudV9zcGVjcy5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiB0cnVlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxuICAgICdudW1FbmVtaWVzJzogMTBcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHsgIFxuICAgIHZhciB0aEdhbWUgPSBuZXcgVHJlYXN1cmVIdW50R2FtZSgpO1xuICAgIHRoR2FtZS5pbml0aWFsaXplKGdsb2JhbE9wdGlvbnMpO1xufVxuXG52YXIgZ2FtZU9iamVjdHMgPSBuZXcgR2FtZU9iamVjdHMoKTtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlSHVudEdhbWUgZXh0ZW5kcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gc2V0IHVwIGJhc2ljIGdhbWUgb2JqZWN0c1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChMRVZFTF9UT1dOKTtcbiAgICAgICAgdGhpcy5rZXlNYXAgPSBuZXcgS2V5TWFwKCk7XG4gICAgICAgIHRoaXMubWVudVN0YWNrID0gW107XG5cbiAgICAgICAgdGhpcy5TVEFURV9SVU5OSU5HID0gMDtcbiAgICAgICAgdGhpcy5TVEFURV9XSU5OTklORyA9IDE7XG4gICAgICAgIHRoaXMuU1RBVEVfREVBRCA9IDI7XG4gICAgICAgIHRoaXMuU1RBVEVfTUVOVSA9IDM7XG5cbiAgICAgICAgLy8gdGhpcyBzaG91bGQgcHJvYmFibHkgdHVybiBpbnRvIGEgc3RhdGUgbWFjaGluZVxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIHRoaXMuRVhQTE9TSU9OX1NQRUVEID0gMjAwMDsgLy8gbnVtIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGZyYW1lcyBvZiBXSU4gZXhwbG9zaW9uICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucmVzZXRMZXZlbFRpbWUgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgeCA9IHJhbmRvbU51bWJlcihtYXAud2lkdGggLSAxKTtcbiAgICAgICAgdmFyIHkgPSByYW5kb21OdW1iZXIobWFwLmhlaWdodCAtIDEpO1xuXG4gICAgICAgIC8vIGRvbid0IGxldCB0aGVtIG92ZXJsYXBcbiAgICAgICAgd2hpbGUgKGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKG9iaiA9PiBvYmouaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRzKCkuaW50ZXJzZWN0c1BvaW50KHgsIHkpKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICAgICAgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAneCc6IHgsICd5JzogeSB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgLy8gc3RhcnQgYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBtYXBcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoMSwgMSk7XG4gICAgICAgIHBsYXllci5yZXNldCgpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUdvYWwoZ2FtZU9iamVjdHMsIG1hcCkge1xuICAgICAgICB2YXIgZ29hbFBsYWNlbWVudCA9IHRoaXMuZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApO1xuICAgICAgICByZXR1cm4gbmV3IFRyZWFzdXJlQ2hhcmFjdGVyKGdvYWxQbGFjZW1lbnQueCwgZ29hbFBsYWNlbWVudC55LCAnJCcsICdsZXZlbEdvYWwnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteShnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBlbmVtaWVzXG4gICAgICAgIHZhciBlbmVteVBsYWNlbWVudCA9IHRoaXMuZ2V0UmFuZG9tTWFwUGxhY2VtZW50KGdhbWVPYmplY3RzLCBtYXApO1xuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2hhcmFjdGVyKGVuZW15UGxhY2VtZW50LngsIGVuZW15UGxhY2VtZW50LnksIEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQKTtcbiAgICB9XG4gICAgXG4gICAgcmVzZXRMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfUlVOTklORztcblxuICAgICAgICAvLyBzdGFydCBmcm9tIHNjcmF0Y2hcbiAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG91ciBwbGF5ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jaGFyYWN0ZXIpO1xuXG4gICAgICAgIC8vIGFkZCBhIGxldmVsR29hbCB0byB0aGlzIGxldmVsXG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNyZWF0ZUdvYWwoZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7XG5cbiAgICAgICAgLy8gYWRkIHNvbWUgZW5lbWllc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdsb2JhbE9wdGlvbnNbJ251bUVuZW1pZXMnXTsgaSsrKSB7XG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVFbmVteShnYW1lT2JqZWN0cywgdGhpcy5tYXApKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBvdXIgbWFwIG9iamVjdHNcbiAgICAgICAgdGhpcy5tYXAuZ2V0TWFwQ2hhcmFjdGVycygpLm1hcCh4ID0+IGdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG5cbiAgICAgICAgLyp0aGlzLmRvb3IgPSBuZXcgRG9vcndheUNoYXJhY3RlcigyLCAyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuZG9vcik7Ki9cbiAgICAgICAgXG4gICAgICAgIC8vIGNlbnRlciBvbiB0aGUgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuXG4gICAgICAgIC8vIHNob3cgaGVscCBtZW51LiB0aGlzIG1heSBjaGFuZ2Ugb24gbmV3IGxldmVscyBldmVudHVhbGx5XG4gICAgICAgIHRoaXMuc2hvd0hlbHBNZW51KCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBibG9ja2luZyBhbmltYXRpb24gdGhhdCAnZXhwbG9kZXMnIHRoZSBcbiAgICAvLy4uLmdvYWwgaW50byBhbiBleHBsb3Npb25cbiAgICBzcGF3bkV4cGxvc2lvbnMobm93LCBjZW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgICAvLyBzcGF3biBhIG5ldyBhbmltYXRpb24gYmFzZWQgb24gRVhQTE9TSU9OX1NQRUVEXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID4gdGhpcy5FWFBMT1NJT05fU1BFRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbihjZW50ZXJlZENoYXJhY3Rlci5nZXRYKCksIGNlbnRlcmVkQ2hhcmFjdGVyLmdldFkoKSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxFeHBsb3Npb24oeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBUZXh0QW5pbWF0b24oeCwgeSwgdGV4dCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oeCwgeSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgIH1cblxuICAgIGNoZWNrRGVhZENvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9ERUFEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsRXhwbG9zaW9uKHRoaXMuY2hhcmFjdGVyLmdldFgoKSwgdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpLCBcIkRFQURcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dpbkNvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhhc1RyZWFzdXJlKCdsZXZlbEdvYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SGVscE1lbnUoKSB7XG4gICAgICAgIC8vIHB1c2ggbWVudSBzdGF0ZSBvblxuICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX01FTlU7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KEhFTFBfTUVOVSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSk7XG4gICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdRVUlUJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGJyaW5nIHVwIGEgUVVJVCBtZW51LiBwcm9jZXNzLmV4aXQoKSBkb2Vzbid0IHdvcmsgaW4gYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9SVU5OSU5HKSB7ICAgXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVDb21tYW5kID09ICdIRUxQJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dIZWxwTWVudSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjaGFyYWN0ZXIgbW92ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuaGFuZGxlR2FtZUNvbW1hbmQoZ2FtZUNvbW1hbmQsIGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iaiA9IHRoaXMubWVudS5oYW5kbGVJbnB1dChnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0JBQ0tfVE9fR0FNRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBtZW51IGFuZCBnbyBiYWNrIHRvIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9SRVNFVF9MRVZFTCkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCB0aGlzIGxldmVsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uT2JqLmFjdGlvbiA9PSBBQ1RJT05fUFVTSF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51IGFuZCBwdXNoIGl0IG9udG8gc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdGFjay5wdXNoKHRoaXMubWVudSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBuZXcgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudShhY3Rpb25PYmouZXZlbnRBcmdzLm1lbnUsIHRoaXMucmVuZGVyZXIudmlld3BvcnQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyhnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QT1BfTUVOVSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGN1cnJlbnQgbWVudVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZShnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBvcCBwcmV2IG1lbnUgYW5kIHNob3cgaXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldk1lbnUgPSB0aGlzLm1lbnVTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gcHJldk1lbnU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0SGVpZ2h0J10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA9IGdsb2JhbE9wdGlvbnNbJ21pblZpZXdwb3J0SGVpZ2h0J107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LndpZHRoICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCA+IGdsb2JhbE9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSBnbG9iYWxPcHRpb25zWydtaW5WaWV3cG9ydFdpZHRoJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBjZW50ZXIgdmlld3BvcnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LnNob3coZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgICAgIFxuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcmF3RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoYXQucmVuZGVyZXIuZ2V0SXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLmNsZWFyU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgdGhhdC5kcmF3SGVscCh0aGF0LmNoYXJhY3Rlci5nZXRDaGFyYWN0ZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJlci5yZW5kZXIoZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cblxuICAgIGRyYXdIZWxwKGNoYXJhY3RlclN5bWJvbCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJ1VzZSBGaXJlZm94IHRvIHBsYXkgaWYgeW91IGFyZW5cXCd0IGFscmVhZHkhIVxcbidcbiAgICAgICAgLyp2YXIgb3V0cHV0ID0gJ0luc3RydWN0aW9uczogVXNlIEZpcmVmb3ggb3IgQ2hyb21lIChGaXJlZm94IHJlZHVjZXMgZmxpY2tlcmluZyEpXFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ0JyZWFrIG91dCB0aGUgZGV2IHRvb2xzIGludG8gYSBzZXBhcmF0ZSB3aW5kb3cgYW5kIHRoZW4gY2xpY2sgb24gbXkgYWN0dWFsIHdlYiBwYWdlIHRvIGVuYWJsZSBjb250cm9scy5cXG5cXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnVXNlIHlvdXIgXCInICsgY2hhcmFjdGVyU3ltYm9sICsgJ1wiIGNoYXJhY3RlciBhbmQgZ28gZmluZCB0aGUgdHJlYXN1cmUgKCQpIGJ1dCB3YXRjaCBvdXQgZm9yIGJhZCBndXlzLi4uXFxuXFxuJzsgXG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IENvbnRyb2wgIHwgQWN0aW9uIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfC0tLS0tLS0tLS18LS0tLS0tLS18XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgc3BhY2ViYXIgfCBGSVJFISAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IHcgICAgICAgIHwgVXAgICAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBkICAgICAgICB8IFJpZ2h0ICB8XFxuJztcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ3wgcyAgICAgICAgfCBEb3duICAgfFxcbic7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArICd8IGEgICAgICAgIHwgTGVmdCAgIHxcXG4nO1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnfCBjICAgICAgICB8IFF1aXQgICB8XFxuJzsqL1xuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgIH1cbn1cblxucnVuKCk7IiwiaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi9jb3JlL2ZhY2luZy5qc1wiO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMSA9IFtcblwiPC4uPlwiXG5dO1xuXG5jb25zdCBFTkVNWV9TUElLRVlfRlJBTUVfMiA9IFtcblwiPC1vby0+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8zID0gW1xuXCIgIFxcXFwgIC8gIFwiLFxuXCI8LS0wMC0tPlwiLFxuXCIgIC8gIFxcXFxcIixcbl07XG5cbmV4cG9ydCBjb25zdCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFtcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA5MTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMSB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA0MzAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMyB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogRU5FTVlfU1BJS0VZX0ZSQU1FXzIgfSBcbiAgICAgICAgXVxuICAgIH1cbn07XG5cbmNvbnN0IEVORU1ZX1RFU1RfRlJBTUVfMSA9IFtcbiAgICBcIjEgICBcIixcbiAgICBcIiAyICBcIixcbiAgICBcIiAgMyBcIixcbiAgICBcIiAgIDRcIixcbl07XG5cbmV4cG9ydCBjb25zdCBFTkVNWV9URVNUX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFwiMFwiOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1RFU1RfRlJBTUVfMSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQUk9KRUNUSUxFX1NQUklURV9NQVAgPSB7XG4gICAgXCJhbmNob3JcIjogXCJjZW50ZXJcIixcbiAgICBcInN0YXRlc1wiOiB7XG4gICAgICAgIFtGQUNJTkdfTEVGVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUMyJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfVVBdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCNCddIH1dLFxuICAgICAgICBbRkFDSU5HX1JJR0hUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjgnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19ET1dOXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QkUnXSB9XVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzEnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUIzJ10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCNyddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRCddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1BUF9IT1VTRSA9IFtcblwiICAgICBfX19fX19fX18gICAgICBcIixcblwiICAgXy8gICAgICAgICBcXFxcXyAgIFwiLFxuXCIgXy8gICAgICAgICAgICAgXFxcXF8gXCIsXG5cIi9fX19fX19fX19fX19fX19fX1xcXFxcIixcblwiIHwgICAgICAgICAgICAgICB8ICBcIixcblwiIHwgICAgID09PT09ICAgICB8ICBcIixcblwiIHwgfCt8ICB8IHwgIHwrfCB8ICBcIixcblwiIHxfX19fX198IHxfX19fX198ICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBNQVBfQlVTSCA9IFtcblwiICMjIyBcIixcblwiIyMjIyNcIixcblwiICMjIyBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBNQVBfVFJFRSA9IFtcblwiICAgKCoqKSAgICAgICBcIixcblwiICgqKioqKiopICBcIixcblwiKCoqKioqKioqKSBcIixcblwiICAoKioqKikgIFwiLFxuXCIgICAgfHwgICAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgL19fXFxcXCAgXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTEVWRUxfVE9XTiA9IHtcblwid2lkdGhcIjogMTIyLFxuXCJoZWlnaHRcIjogNjAsXG5cIm1hcF9vYmplY3RzXCI6IFtcbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMTAsIFwieVwiOiAxMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDM3LCBcInlcIjogMTMgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDEyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzIsIFwieVwiOiAxMCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDM4LCBcInlcIjogOSB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogOTAsIFwieVwiOiAxOCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMDAsIFwieVwiOiAxNiB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNTAsIFwieVwiOiAyMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiA2MCwgXCJ5XCI6IDIwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNzgsIFwieVwiOiAyMyB9LFxuXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogNzAsIFwieVwiOiA0MiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiA4MCwgXCJ5XCI6IDQwIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX0hPVVNFLCBcInhcIjogMjAsIFwieVwiOiA4MCB9LFxuICAgIFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE2LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDQwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTEsIFwieVwiOiAzOCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE0LCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMjgsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDE2LCBcInlcIjogMzIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMCwgXCJ5XCI6IDMyIH0sXG4gICAgXG5dXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
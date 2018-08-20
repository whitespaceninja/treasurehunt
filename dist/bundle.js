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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: Animation, TextAnimaton, WinAnimation, RainAnimation, AnimationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnimaton", function() { return TextAnimaton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinAnimation", function() { return WinAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainAnimation", function() { return RainAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHandler", function() { return AnimationHandler; });
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");



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

class RainAnimation extends Animation {
    constructor(maxX, maxY) {
        super();
        this.raindrops = [];
        // higher, the number, slower it goes
        this.frameSpeed = 100;
        this.lastFrame = Date.now();
        this.maxX = maxX;
        this.maxY = maxY;
    }

    createRaindrop() {
        const x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumber"])(this.maxX);
        const y = 0;

        const dropTypeSpin = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumber"])(100);
        let dropChar = "|";
        if (dropTypeSpin > 80) {
            dropChar = "!"
        }
        
        return new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, dropChar);
    }

    createRaindropWave() {
        const numDrops = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumberRange"])(2, 6);
        for (let i = 0; i < numDrops; i++) {
            this.raindrops.push(this.createRaindrop());
        }
    }

    update(timeNow, timeElapsed) {
        var elapsed = timeNow - this.lastFrame;
        if (elapsed >= this.frameSpeed) {
            this.createRaindropWave();
            this.lastFrame = timeNow;
            for (let i = this.raindrops.length - 1; i >= 0; i--) {
                // TODO: make this better
                const raindrop = this.raindrops[i];
                raindrop.setY(raindrop.getY() + 1);
                if (raindrop.getY() > this.maxY) {
                    this.raindrops.splice(i, 1);
                }
            }
        }
    }
    
    spawnRenderables() {
        return this.raindrops;
    }

    isExpired() {
        return false;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _thread_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread.js */ "./src/core/thread.js");
/* harmony import */ var _collider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collider.js */ "./src/core/collider.js");



class Game {
    constructor() {
        this.lastkeyPresses = [];
        this.threadUpdate = null;
        this.threadDraw = null;
        this.renderer = null;
    }

    initialize(updateFunction, drawFunction, renderer, options) {
        this.renderer = renderer;
        
        this.threadUpdate = new _thread_js__WEBPACK_IMPORTED_MODULE_0__["Thread"](updateFunction);
        this.threadDraw = new _thread_js__WEBPACK_IMPORTED_MODULE_0__["Thread"](drawFunction);

        this.threadUpdate.start(options['updateFPS']); //update X times per second
        this.threadDraw.start(options['drawFPS']); //draw X times per second

        var that = this;
        function keyDownHandler(e) {
            var key = e.keyCode;
            if (key) {
                that.lastkeyPresses.push(key);
            }
        };

        // listen to the browser keys
        document.addEventListener("keydown", keyDownHandler, false);    
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
        const colliderObjects = gameObjects.objects.filter(x => x instanceof _collider_js__WEBPACK_IMPORTED_MODULE_1__["Collider"]);

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
/*! exports provided: randomNumber, randomNumberRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumber", function() { return randomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumberRange", function() { return randomNumberRange; });
function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
}

function randomNumberRange(min, max) {
    const diff = max - min;
    const addition = Math.random() * diff;
    return Math.floor(min + addition + 1);    
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
/*! exports provided: Renderer, ConsoleRenderer, HtmlRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleRenderer", function() { return ConsoleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlRenderer", function() { return HtmlRenderer; });
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
        // override this to do something useful
    }

    getSpaceCharacter() {
        // this is different depending on the environment
        return ' ';
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

class ConsoleRenderer extends Renderer {
    constructor(viewW, viewH) {
        super(viewW, viewH);
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
}

class HtmlRenderer extends Renderer {
    constructor(viewW, viewH) {
        super(viewW, viewH);
    }

    getSpaceCharacter() {
        // html strips out regular spaces
        return '&nbsp;';
    }

    render(gameObjects) {
        var output = '<p>';
        var renderableObjects = this.getRenderableObjectsOnScreen(gameObjects);
        // reverse sort by z axis, grab highest
        renderableObjects.sort((a, b) => b.z - a.z);
        
        for (var row = this.viewport.y; row < this.viewport.y + this.viewport.height; row++) {
            for (var col = this.viewport.x; col < this.viewport.x + this.viewport.width; col++) {
                var characters = renderableObjects.filter(c => c.getCharacter).map(c => c.getCharacter(col, row)).filter(c => c != null);
                if (characters.length > 0) {
                    output += characters[0];
                } else {
                    output += this.getSpaceCharacter();
                }
            }
            output += '</p><p>';
        }
        output += '<p>';

        document.getElementById('game').innerHTML = output;

        // clear the redraw flag on all objects we were able to render
        renderableObjects.map(c => c.needsRedraw = false);
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
 * Assumes you are starting on a 
 */
function getWordLength(text, startIndex) {
    let i = startIndex;
    let wordLength = 1;
    while (i <= text.length) {
        if (i == text.length || text[i] == '\n' || text[i] == ' ') {
            wordLength = i - startIndex;
            break;
        }
        i++;
    }
    return wordLength;
}

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
            // look ahead at length of this word
            const wordLength = getWordLength(text, i);

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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treasure_hunt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treasure-hunt.js */ "./src/treasure-hunt.js");
/* harmony import */ var _make_it_rain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-it-rain.js */ "./src/make-it-rain.js");



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
            var rainGame = new _make_it_rain_js__WEBPACK_IMPORTED_MODULE_1__["MakeItRainGame"]();
            rainGame.initialize(rainOptions);
        }
    }

    var thGame = new _treasure_hunt_js__WEBPACK_IMPORTED_MODULE_0__["TreasureHuntGame"]();
    thGame.initialize(globalOptions);
}

run();


/***/ }),

/***/ "./src/make-it-rain.js":
/*!*****************************!*\
  !*** ./src/make-it-rain.js ***!
  \*****************************/
/*! exports provided: MakeItRainGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeItRainGame", function() { return MakeItRainGame; });
/* harmony import */ var _core_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/game.js */ "./src/core/game.js");
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.js */ "./src/animations.js");
/* harmony import */ var _core_game_objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/game_objects.js */ "./src/core/game_objects.js");
/* harmony import */ var _core_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/renderer.js */ "./src/core/renderer.js");






class MakeItRainGame extends _core_game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
    constructor() {
        // set up basic game objects
        super();

        this.gameObjects = new _core_game_objects_js__WEBPACK_IMPORTED_MODULE_2__["GameObjects"]();
    }
    
    resetLevel() {
        // start from scratch
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        this.animationHandler.addAnimation(new _animations_js__WEBPACK_IMPORTED_MODULE_1__["RainAnimation"](this.width, this.height));

        // first draw of render
        this.renderer.render(this.gameObjects);
    }


    handleInput() {
        var key = this.getLastKeypress();
        if (null !== key) {
            var gameCommand = this.keyMap.getGameCommand(key.toString());
            // TODO: make the rain go left or right?
        }
    }

    update(now, timeElapsed, gameObjects) {
        super.update(now, timeElapsed, gameObjects);
        this.animationHandler.update(now, timeElapsed, gameObjects);
    }

    initialize(options) {
        var that = this;  
        
        this.options = options;

        var lastUpdate = Date.now();
        var updateFunc = function () {
            try {
                var now = Date.now();
                var timeElapsed = now - lastUpdate;
                lastUpdate = now;

                that.handleInput();
                that.update(now, timeElapsed, that.gameObjects);
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
                that.renderer.render(that.gameObjects);
            } catch (err){
                console.log(err.message);
            }
        }

        let renderer = null;
        if (options['playInBrowser']) {
            // random guess that its 10 pixels per character
            // override options for now
            options['viewportWidth'] = Math.floor(window.innerWidth / 4.2);
            options['viewportHeight'] = Math.floor(window.innerHeight / 10);
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_3__["HtmlRenderer"](options['viewportWidth'], options['viewportHeight']);
        } else {
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_3__["ConsoleRenderer"](options['viewportWidth'], options['viewportHeight']);
        }

        this.width = options['viewportWidth'];
        this.height = options['viewportHeight'];

        super.initialize(updateFunc, drawFunc, renderer, this.options);

        // do this after initializing parent
        this.animationHandler = new _animations_js__WEBPACK_IMPORTED_MODULE_1__["AnimationHandler"](this.renderer);
        this.resetLevel();
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
    constructor(menuSpec, viewport, zPosition, spaceChar) {
        this.spec = menuSpec;
        this.viewport = viewport;
        this.characters = [];
        this.selectionCharacters = [];
        this.zPosition = zPosition;
        this.selectedOption = 0;
        this.spaceChar = spaceChar;
    }

    getNumOptions() {
        return this.spec.options.length;
    }

    setOptionVisibility() {
        // set the visibility of the selection arrows at the beginning of each line
        if (this.selectionCharacters.length > 0) {
            this.selectionCharacters.map(c => c.symbol = this.spaceChar);
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
                let char = this.spaceChar;
                let isSelectionChar = false;
                const optionStartRow = numSummaryLines + numSpacingLines;

                if (row < numSummaryLines) {
                    if (col < summaryTextRows[row].length) {
                        char = summaryTextRows[row][col];
                    }
                } else if (row >= optionStartRow) {
                    const thisOptionIndex = row - optionStartRow;
                    const curOption = this.spec.options[thisOptionIndex];
                    const curText = "-" + this.spaceChar + curOption.optionText;
                    
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
/* harmony import */ var _core_renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/renderer.js */ "./src/core/renderer.js");
















class TreasureHuntGame extends _core_game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
    constructor() {
        // set up basic game objects
        super();

        this.gameObjects = new _core_game_objects_js__WEBPACK_IMPORTED_MODULE_5__["GameObjects"]();

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
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();

        // create our player
        this.character = this.createPlayer();
        this.gameObjects.addObject(this.character);

        // add a levelGoal to this level
        this.gameObjects.addObject(this.createGoal(this.gameObjects, this.map));

        // add some enemies
        for (var i = 0; i < this.options['numEnemies']; i++) {
            this.gameObjects.addObject(this.createEnemy(this.gameObjects, this.map));            
        }

        // add our map objects
        const that = this;
        this.map.getMapCharacters().map(x => that.gameObjects.addObject(x));

        /*this.door = new DoorwayCharacter(2, 2, function() {
            window.location.href = 'http://www.google.com';
            });

            gameObjects.addObject(this.door);*/
        
        // center on the character
        this.renderer.centerViewportOn(this.character, this.map);

        // show help menu. this may change on new levels eventually
        this.showHelpMenu();

        // first draw of render
        this.renderer.render(this.gameObjects);
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
        this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](_menus_menu_specs_js__WEBPACK_IMPORTED_MODULE_12__["HELP_MENU"], this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
        this.menu.show(this.gameObjects);
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
                    this.character.handleGameCommand(gameCommand, this.gameObjects);
                }
            } else if (this.state == this.STATE_MENU) {
                let actionObj = this.menu.handleInput(gameCommand);
                if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_BACK_TO_GAME"]) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(this.gameObjects);
                    this.menu = null;
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_RESET_LEVEL"]) {
                    // reset this level
                    this.resetLevel();
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_PUSH_MENU"]) {
                    // hide current menu and push it onto stack
                    this.menu.hide(this.gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_10__["Menu"](actionObj.eventArgs.menu, this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_POP_MENU"]) {
                    // hide current menu
                    this.menu.hide(this.gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"] || 
                           actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_W"]) {
                    if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_11__["ACTION_INCREASE_VIEWPORT_H"]) {
                        // currently this breaks if we do it by an odd number
                        this.renderer.viewport.height += 2;
                        if (this.renderer.viewport.height > this.options['maxViewportHeight']) {
                            this.renderer.viewport.height = this.options['minViewportHeight'];
                        }
                    } else {
                        this.renderer.viewport.width += 4;
                        if (this.renderer.viewport.width > this.options['maxViewportWidth']) {
                            this.renderer.viewport.width = this.options['minViewportWidth'];
                        }
                    }

                    // center viewport
                    this.renderer.centerViewportOn(this.character, this.map);
                    this.renderer.setIsDirty();

                    // redraw menu
                    this.menu.hide(this.gameObjects);
                    this.menu.show(this.gameObjects);
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
        
        this.options = options;

        var lastUpdate = Date.now();
        var updateFunc = function () {
            try {
                var now = Date.now();
                var timeElapsed = now - lastUpdate;
                lastUpdate = now;

                that.handleInput();
                that.update(now, timeElapsed, that.gameObjects);
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
                that.renderer.render(that.gameObjects);
            } catch (err){
                console.log(err.message);
            }
        }

        let renderer = null;
        if (options['playInBrowser']) {
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_13__["HtmlRenderer"](options['viewportWidth'], options['viewportHeight']);
        } else {
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_13__["ConsoleRenderer"](options['viewportWidth'], options['viewportHeight']);
        }

        super.initialize(updateFunc, drawFunc, renderer, this.options);

        // do this after initializing parent
        this.animationHandler = new _animations_js__WEBPACK_IMPORTED_MODULE_2__["AnimationHandler"](this.renderer);
        this.resetLevel();
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXJzL3BsYXllcl9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvcHJvamVjdGlsZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy90cmVhc3VyZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvd2FsbF9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2ZhY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RleHRfaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS90aHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXBkYXRlYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFrZS1pdC1yYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudXMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZ3QjtBQUNlOztBQUV2QztBQUNBLG1CQUFtQjs7QUFFbkIsa0NBQWtDOztBQUVsQyx3QkFBd0I7O0FBRXhCLGlCQUFpQixhQUFhO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpQ0FBaUM7QUFDakY7QUFDQSxrRUFBa0U7O0FBRWxFLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TGtCO0FBQ1U7QUFDTjtBQUNQO0FBQ0M7QUFDSztBQUNxQztBQUNsQzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRDO0FBQzVDLDZGQUE2QztBQUM3Qyw0RkFBNEM7QUFDNUMsMEZBQTBDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNENEI7QUFDYjtBQUNDO0FBQ0M7QUFDRztBQUNGO0FBQ1E7QUFDdUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRWtCO0FBQ0k7QUFDTjtBQUNEO0FBQ087O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUM7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUDBEOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNoRHlCO0FBQ0Y7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDYTtBQUMyQjtBQUNwQjtBQUNr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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyLHJhbmRvbU51bWJlclJhbmdlfSBmcm9tIFwiLi9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7IH1cblxuICAgIHNwYXduUmVuZGVyYWJsZXMoKSB7IH1cblxuICAgIGlzRXhwaXJlZCgpIHsgcmV0dXJuIHRydWU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRBbmltYXRvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgdGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgaWYgKHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZSA+IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVOb3c7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXJzID0gW107XG4gICAgICAgICAgICAvLyBhZGQgV0lOIGluIHRoZSBjZW50ZXIgb2YgdGhlIGV4cGxvc2lvbi5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHhfb2Zmc2V0ID0gTWF0aC5mbG9vcih0aGlzLnRleHQubGVuZ3RoIC8gMikgLSBpO1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMucHVzaChuZXcgU3RhdGljQ2hhcmFjdGVyKHRoaXMuY2VudGVyWCAtIHhfb2Zmc2V0LCB0aGlzLmNlbnRlclksIHRoaXMudGV4dC5jaGFyQXQoaSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gbmV2ZXIgZ29lcyBhd2F5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGNlbnRlclgsIGNlbnRlclksIG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAtMTtcbiAgICAgICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWDtcbiAgICAgICAgdGhpcy5jZW50ZXJZID0gY2VudGVyWTtcbiAgICAgICAgdGhpcy5mcmFtZVNwZWVkID0gNjA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSB0aW1lTm93IC0gdGhpcy5sYXN0RnJhbWU7XG4gICAgICAgIGlmIChlbGFwc2VkID49IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMrKztcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZU5vdztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzcGF3blJlbmRlcmFibGVzKCkge1xuICAgICAgICBsZXQgY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAvLyBjcmVhdGUgZXhwbG9zaW9uIHBhcnRpY2xlcyBpbiBhIGJsYXN0IHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlclxuICAgICAgICBmb3IgKHZhciB5ID0gdGhpcy5jZW50ZXJZIC0gdGhpcy5yYWRpdXM7IHkgPD0gdGhpcy5jZW50ZXJZICsgdGhpcy5yYWRpdXM7IHkrKykge1xuICAgICAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmNlbnRlclkgLSB5KTtcbiAgICAgICAgICAgIHZhciBudW1YcyA9IE1hdGgubWluKDIsIHRoaXMucmFkaXVzIC0gZGlmZmVyZW5jZSArIDEpOyAvLyBhZGQgMSBiZWNhdXNlIHdlIGFsd2F5cyB3YW50IGF0IGxlYXN0IDEgZXhwbG9zaW9uIG9uIGVhY2ggbGluZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5jZW50ZXJYICsgKCh0aGlzLnJhZGl1cyAtIGRpZmZlcmVuY2UpICogbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgJyonKTtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhcmFjdGVycztcbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlclggLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhYICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhZO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWluZHJvcHMgPSBbXTtcbiAgICAgICAgLy8gaGlnaGVyLCB0aGUgbnVtYmVyLCBzbG93ZXIgaXQgZ29lc1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcbiAgICB9XG5cbiAgICBjcmVhdGVSYWluZHJvcCgpIHtcbiAgICAgICAgY29uc3QgeCA9IHJhbmRvbU51bWJlcih0aGlzLm1heFgpO1xuICAgICAgICBjb25zdCB5ID0gMDtcblxuICAgICAgICBjb25zdCBkcm9wVHlwZVNwaW4gPSByYW5kb21OdW1iZXIoMTAwKTtcbiAgICAgICAgbGV0IGRyb3BDaGFyID0gXCJ8XCI7XG4gICAgICAgIGlmIChkcm9wVHlwZVNwaW4gPiA4MCkge1xuICAgICAgICAgICAgZHJvcENoYXIgPSBcIiFcIlxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCBkcm9wQ2hhcik7XG4gICAgfVxuXG4gICAgY3JlYXRlUmFpbmRyb3BXYXZlKCkge1xuICAgICAgICBjb25zdCBudW1Ecm9wcyA9IHJhbmRvbU51bWJlclJhbmdlKDIsIDYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURyb3BzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmFpbmRyb3BzLnB1c2godGhpcy5jcmVhdGVSYWluZHJvcCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IHRpbWVOb3cgLSB0aGlzLmxhc3RGcmFtZTtcbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJhaW5kcm9wV2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lTm93O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMucmFpbmRyb3BzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogbWFrZSB0aGlzIGJldHRlclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhaW5kcm9wID0gdGhpcy5yYWluZHJvcHNbaV07XG4gICAgICAgICAgICAgICAgcmFpbmRyb3Auc2V0WShyYWluZHJvcC5nZXRZKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBpZiAocmFpbmRyb3AuZ2V0WSgpID4gdGhpcy5tYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFpbmRyb3BzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3Bhd25SZW5kZXJhYmxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFpbmRyb3BzO1xuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjbGVhciBldmVyeXRoaW5nIChUT0RPOiB3ZSBzaG91bGRuJ3QgaGF2ZSB0byBkbyB0aGlzKVxuICAgICAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24udXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5pc0V4cGlyZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdCBmcm9tIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IHRoaXMuYW5pbWF0aW9uc1tpXS5zcGF3blJlbmRlcmFibGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMgIT0gbnVsbCAmJiBjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVycy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyQW5pbWF0aW9ucygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW11cbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQcm9qZWN0aWxlQ2hhcmFjdGVyfSBmcm9tIFwiLi9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi4vY29yZS9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi4vY29yZS9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4uL2NvcmUvbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuLi9jb3JlL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtQbGF5ZXJDaGFyYWN0ZXJ9IGZyb20gXCIuL3BsYXllcl9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15Q2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHNwcml0ZU1hcCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnRoaW5rU3BlZWQgPSAoMSAvIDEuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDEwMDsgLy8gVE9ETzogbWFrZSB0aGlzIHBhcnQgb2YgYSBzcGVjXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMsIDApO1xuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBQaXhlbENvbGxpZGVyKHRoaXMsIHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB2YXIgcmFuZG9tID0gcmFuZG9tTnVtYmVyKDQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gJ05PTkUnO1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbSkge1xuICAgICAgICAgICAgY2FzZSAxOiBkaXJlY3Rpb24gPSBGQUNJTkdfTEVGVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6IGRpcmVjdGlvbiA9IEZBQ0lOR19SSUdIVDsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IGRpcmVjdGlvbiA9IEZBQ0lOR19ET1dOOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogZGlyZWN0aW9uID0gRkFDSU5HX1VQOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGhpbmtDb3VudGVyID4gdGhpcy50aGlua1NwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IHRoaXMudGhpbmtDb3VudGVyICUgdGhpcy50aGlua1NwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUHJvamVjdGlsZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHdpdGhPYmplY3QucmVjZWl2ZURhbWFnZSh0aGlzLmRhbWFnZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtQcm9qZWN0aWxlQ2hhcmFjdGVyfSBmcm9tIFwiLi9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi4vY29yZS9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi4vY29yZS9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTn0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nLmpzXCI7XG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1RyZWFzdXJlQ2hhcmFjdGVyfSBmcm9tIFwiLi90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UExBWUVSX1NQUklURV9NQVAsIFBST0pFQ1RJTEVfU1BSSVRFX01BUH0gZnJvbSBcIi4uL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG5cbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKFBMQVlFUl9TUFJJVEVfTUFQLCB0aGlzLCBGQUNJTkdfRE9XTik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICBzdXBlci5vbkFuaW1hdGVkKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFN0YXRlKHRoaXMubW92YWJsZS5mYWNpbmcpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmJvdW5kcy54ID0gdGhpcy5pbml0aWFsWDtcbiAgICAgICAgdGhpcy5ib3VuZHMueSA9IHRoaXMuaW5pdGlhbFk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGhhbmRsZUdhbWVDb21tYW5kKGNvbW1hbmQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmIChjb21tYW5kID09ICdGSVJFJykge1xuICAgICAgICAgICAgdGhpcy5maXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1vdmFibGUubW92ZShjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFRyZWFzdXJlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeS5wdXNoKHdpdGhPYmplY3QudHJlYXN1cmVUeXBlKTtcbiAgICAgICAgICAgIHdpdGhPYmplY3QucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2VBbW91bnQpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gZGFtYWdlQW1vdW50O1xuICAgIH1cblxuICAgIGZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aWxlID0gbmV3IFByb2plY3RpbGVDaGFyYWN0ZXIodGhpcy5nZXRYKCksIHRoaXMuZ2V0WSgpLCB0aGlzLm1vdmFibGUuZmFjaW5nLCA4LCBQUk9KRUNUSUxFX1NQUklURV9NQVApO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QocHJvamVjdGlsZSk7XG4gICAgfVxuXG4gICAgaGFzVHJlYXN1cmUodHJlYXN1cmVUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludmVudG9yeS5maWx0ZXIodCA9PiB0ID09IHRyZWFzdXJlVHlwZSkubGVuZ3RoID4gMDtcbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQaXhlbENvbGxpZGVyfSBmcm9tIFwiLi4vY29yZS9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtNb3ZhYmxlfSBmcm9tIFwiLi4vY29yZS9tb3ZhYmxlLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge1dhbGxDaGFyYWN0ZXJ9IGZyb20gXCIuL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIGRpcmVjdGlvbiwgbWF4RGlzdGFuY2UsIHNwcml0ZU1hcCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkID0gMDtcbiAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xuICAgICAgICB0aGlzLnRyYXZlbFNwZWVkID0gKDEgLyA2LjApICogMTAwMDtcbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcblxuICAgICAgICAvLyBzZXQgdXAgb3VyIHNwcml0ZVxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoc3ByaXRlTWFwLCB0aGlzLCBkaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0IHVwIG91ciBhYmlsaXR5IHRvIG1vdmVcbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBjb2xsaXNpb25zIHdpdGggb2JqZWN0c1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFBpeGVsQ29sbGlkZXIodGhpcywgdGhpcy5zcHJpdGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRyYXZlbGVkKys7XG4gICAgICAgIGlmICh0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPj0gdGhpcy5tYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciArIHRpbWVFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnRyYXZlbENvdW50ZXIgPj0gdGhpcy50cmF2ZWxTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyIC0gdGhpcy50cmF2ZWxTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudGhpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFdhbGxDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgIH1cbiBcbiAgICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICB9XG4gfSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi9zdGF0aWNfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi4vY29yZS9jb2xsaWRlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlYXN1cmVDaGFyYWN0ZXIgZXh0ZW5kcyBTdGF0aWNDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sLCB0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKTtcbiAgICAgICAgIFxuICAgICAgICAgdGhpcy50cmVhc3VyZVR5cGUgPSB0cmVhc3VyZVR5cGU7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgICB9XG4gfVxuICIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGxDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ltYm9sKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICBpZiAodGhpcy5nZXRYKCkgPT0gY29sICYmIHRoaXMuZ2V0WSgpID09IHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5pbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuLy8gQmFzZSBjbGFzcyBmb3IgZXZlcnkgdHlwZSBvZiByZW5kZXJhYmxlIGdhbWUgb2JqZWN0XG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsWCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmluaXRpYWxZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBpbml0aWFsWDtcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IGluaXRpYWxZO1xuICAgICAgICB0aGlzLnogPSAwOyAvLyBkZWZhdWx0IHRvIHogYXhpcyBwb3MgYmVpbmcgMFxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoaW5pdGlhbFgsIGluaXRpYWxZLCAxLCAxKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGh5c2ljYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRYKG5ld1gpIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1ggLSB0aGlzLmN1cnJlbnRYO1xuICAgICAgICB0aGlzLmN1cnJlbnRYICs9IGRpZmY7XG4gICAgICAgIHRoaXMuYm91bmRzLnggKz0gZGlmZjtcbiAgICB9XG5cbiAgICBzZXRZKG5ld1kpIHtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1kgLSB0aGlzLmN1cnJlbnRZO1xuICAgICAgICB0aGlzLmN1cnJlbnRZICs9IGRpZmY7XG4gICAgICAgIHRoaXMuYm91bmRzLnkgKz0gZGlmZjtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WDtcbiAgICB9XG5cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kcztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgdGhpcy5uZWVkc1JlZHJhdyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgIH1cblxuICAgIGlzQ29sbGlzaW9uKG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHModGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkpO1xuICAgIH1cblxuICAgIGNoZWNrUGh5c2ljYWxDb2xsaXNpb24oZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRPYmplY3Q7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbk9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geC5pc1BoeXNpY2FsICYmXG4gICAgICAgICAgICB4ICE9PSBwYXJlbnQgJiZcbiAgICAgICAgICAgIHguZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhwYXJlbnQuZ2V0Qm91bmRzKCkpXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29sbGlzaW9uT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb2xsaWRlIHdpdGggZWFjaCBvdGhlclxuICAgICAgICAgICAgY29sbGlzaW9uT2JqZWN0cy5tYXAob2JqID0+IHBhcmVudC5jb2xsaWRlKG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaWRlckNvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbk9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihcbiAgICAgICAgICAgIHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyICYmXG4gICAgICAgICAgICB4ICE9PSB0aGF0ICYmXG4gICAgICAgICAgICB4LmlzQ29sbGlzaW9uKHRoYXQpICYmXG4gICAgICAgICAgICB0aGF0LmlzQ29sbGlzaW9uKHgpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqLnBhcmVudE9iamVjdCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGl4ZWxDb2xsaWRlciBleHRlbmRzIENvbGxpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QsIHNwcml0ZSkge1xuICAgICAgICBzdXBlcihwYXJlbnRPYmplY3QpO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHNwcml0ZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMl9TcHJpdGVzKHNwcml0ZTEsIHNwcml0ZTIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Qm91bmRzID0gc3ByaXRlMS5nZXRCb3VuZHMoKTtcbiAgICAgICAgY29uc3QgaXNQaXhlbCA9IGZ1bmN0aW9uKGNoYXIpIHsgcmV0dXJuIGNoYXIgIT0gbnVsbCAmJiBjaGFyICE9ICcgJzsgfTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcGFyZW50Qm91bmRzLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHBhcmVudEJvdW5kcy53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY29sICsgc3ByaXRlMS5nZXRYKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHJvdyArIHNwcml0ZTEuZ2V0WSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1BpeGVsKHNwcml0ZTEuZ2V0Q2hhcmFjdGVyKHgsIHkpKSAmJlxuICAgICAgICAgICAgICAgICAgICBpc1BpeGVsKHNwcml0ZTIuZ2V0Q2hhcmFjdGVyKHgsIHkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tQaXhlbENvbGxpc29uXzFfU3ByaXRlKHNwcml0ZTEsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50Qm91bmRzID0gc3ByaXRlMS5nZXRCb3VuZHMoKTtcbiAgICAgICAgY29uc3QgaXNQaXhlbCA9IGZ1bmN0aW9uKGNoYXIpIHsgcmV0dXJuIGNoYXIgIT0gbnVsbCAmJiBjaGFyICE9ICcgJzsgfTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcGFyZW50Qm91bmRzLmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHBhcmVudEJvdW5kcy53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gY29sICsgc3ByaXRlMS5nZXRYKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHJvdyArIHNwcml0ZTEuZ2V0WSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1BpeGVsKHNwcml0ZTEuZ2V0Q2hhcmFjdGVyKHgsIHkpKSAmJlxuICAgICAgICAgICAgICAgICAgICBvdGhlckNvbGxpZGVyLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzUG9pbnQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlzQ29sbGlzaW9uKG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIgaW5zdGFuY2VvZiBQaXhlbENvbGxpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMl9TcHJpdGVzKHRoaXMuc3ByaXRlLCBvdGhlckNvbGxpZGVyLnNwcml0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tQaXhlbENvbGxpc29uXzFfU3ByaXRlKHRoaXMuc3ByaXRlLCBvdGhlckNvbGxpZGVyKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEZBQ0lOR19VUCA9ICdVJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfTEVGVCA9ICdMJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfRE9XTiA9ICdEJztcbmV4cG9ydCBjb25zdCBGQUNJTkdfUklHSFQgPSAnUic7IiwiaW1wb3J0IHtUaHJlYWR9IGZyb20gXCIuL3RocmVhZC5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4vY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCByZW5kZXJlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG5ldyBUaHJlYWQodXBkYXRlRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBuZXcgVGhyZWFkKGRyYXdGdW5jdGlvbik7XG5cbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUuc3RhcnQob3B0aW9uc1sndXBkYXRlRlBTJ10pOyAvL3VwZGF0ZSBYIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgdGhpcy50aHJlYWREcmF3LnN0YXJ0KG9wdGlvbnNbJ2RyYXdGUFMnXSk7IC8vZHJhdyBYIHRpbWVzIHBlciBzZWNvbmRcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTsgICAgXG4gICAgfVxuXG4gICAgZ2V0TGFzdEtleXByZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0a2V5UHJlc3Nlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdGtleVByZXNzZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3ZlbWVudChvYmosIGludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGxldCBpc09ic3RydWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9iai5vYmV5c1BoeXNpY3MpIHtcbiAgICAgICAgICAgIGxldCBuZXdCb3VuZHMgPSBvYmouZ2V0Qm91bmRzKCkuY29weSgpO1xuICAgICAgICAgICAgbmV3Qm91bmRzLnggKz0gaW50ZW5kZWRQb3NpdGlvbi54IC0gb2JqLmdldFgoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy55ICs9IGludGVuZGVkUG9zaXRpb24ueSAtIG9iai5nZXRZKCk7XG4gICAgICAgICAgICBpc09ic3RydWN0ZWQgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgIT09IG9iaiAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUGh5c2ljYWwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKG5ld0JvdW5kcykpLmxlbmd0aCA+IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzT2JzdHJ1Y3RlZCkge1xuICAgICAgICAgICAgb2JqLnNldFgoaW50ZW5kZWRQb3NpdGlvbi54KTtcbiAgICAgICAgICAgIG9iai5zZXRZKGludGVuZGVkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmouaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMubWFwKHggPT4geC51cGRhdGUobm93LCB0aW1lRWxhcHNlZCkpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBtb3ZlbWVudCBpbnRlbnRpb25zXG4gICAgICAgIGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5pbnRlbmRlZFBvc2l0aW9uICE9IG51bGwpLm1hcCh4ID0+IHRoaXMuaGFuZGxlTW92ZW1lbnQoeCwgeC5pbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIGNoZWNrIGFsbCBjb2xsaXNpb25zXG4gICAgICAgIGNvbnN0IGNvbGxpZGVyT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geCBpbnN0YW5jZW9mIENvbGxpZGVyKTtcblxuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja1BoeXNpY2FsQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG4gICAgICAgIGNvbGxpZGVyT2JqZWN0cy5tYXAoeCA9PiB4LmNoZWNrQ29sbGlkZXJDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlcnl0aGluZyB0aGF0IG5lZWRzIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgdmFyIHJlbW92YWJsZU9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzKTtcbiAgICAgICAgaWYgKHJlbW92YWJsZU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZhYmxlT2JqZWN0cy5tYXAoeCA9PiBnYW1lT2JqZWN0cy5yZW1vdmVPYmplY3QoeCkpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNoZWNrUmVkcmF3KGdhbWVPYmplY3RzKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVPYmplY3RzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0KG9iaikge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRkT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IHRoaXMub2JqZWN0cy5maWx0ZXIoeCA9PiB4ICE9PSBvYmopO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgb2JqLmNoaWxkcmVuICYmIGkgPCBvYmouY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlT2JqZWN0KG9iai5jaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxPYmplY3RzKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIG1heCkgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlclJhbmdlKG1pbiwgbWF4KSB7XG4gICAgY29uc3QgZGlmZiA9IG1heCAtIG1pbjtcbiAgICBjb25zdCBhZGRpdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBkaWZmO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIGFkZGl0aW9uICsgMSk7ICAgIFxufSIsImltcG9ydCB7RkFDSU5HX1VQLCBGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLmZhY2luZyA9IEZBQ0lOR19ET1dOO1xuICAgIH1cblxuICAgIHNldEZhY2luZyhuZXdGYWNpbmcpIHtcbiAgICAgICAgaWYgKG5ld0ZhY2luZyAhPSB0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgdGhpcy5mYWNpbmcgPSBuZXdGYWNpbmc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGludGVuZGVkWCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgdmFyIGludGVuZGVkWSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRkFDSU5HX0xFRlQ6IFxuICAgICAgICAgICAgaW50ZW5kZWRYLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0xFRlQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfUklHSFQ6XG4gICAgICAgICAgICBpbnRlbmRlZFgrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfUklHSFQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfVVA6XG4gICAgICAgICAgICBpbnRlbmRlZFktLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfVVApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfRE9XTjpcbiAgICAgICAgICAgIGludGVuZGVkWSsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19ET1dOKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIHNvbWUgc29ydCBvZiBib2d1cyBtb3ZlbWVudC4gZG9uJ3QgaGFuZGxlLlxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5pbnRlbmRlZFBvc2l0aW9uID0ge3g6IGludGVuZGVkWCwgeTogaW50ZW5kZWRZfTtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3Qub25BbmltYXRlZCgpOyAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzUG9pbnQoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHggPj0gdGhpcy54ICYmXG4gICAgICAgICAgICB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0cyhyZWN0YW5nbGUpIHtcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPD0gcmVjdGFuZ2xlLnggfHxcbiAgICAgICAgICAgIHRoaXMueCA+PSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCB8fFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPD0gcmVjdGFuZ2xlLnkgfHxcbiAgICAgICAgICAgIHRoaXMueSA+PSByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHZpZXdXLCB2aWV3SCk7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xlYXJTY3JlZW4oKSB7XG4gICAgICAgIC8vIGNsZWFyIHRoZSBzY3JlZW4gYW5kIHNldCBjdXJzb3IgYXQgMCwwXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpc09uU2NyZWVuKGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmlzVmlzaWJsZSAmJiBjaGFyYWN0ZXIuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnZpZXdwb3J0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhpcyB0byBkbyBzb21ldGhpbmcgdXNlZnVsXG4gICAgfVxuXG4gICAgZ2V0U3BhY2VDaGFyYWN0ZXIoKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGlmZmVyZW50IGRlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnRcbiAgICAgICAgcmV0dXJuICcgJztcbiAgICB9XG5cbiAgICBnZXRJc0RpcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RpcnR5OyAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHN1cGVyKHZpZXdXLCB2aWV3SCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIHJlbmRlcmFibGVPYmplY3RzID0gdGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKTtcbiAgICAgICAgLy8gcmV2ZXJzZSBzb3J0IGJ5IHogYXhpcywgZ3JhYiBoaWdoZXN0XG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLnNvcnQoKGEsIGIpID0+IGIueiAtIGEueik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgc3VwZXIodmlld1csIHZpZXdIKTtcbiAgICB9XG5cbiAgICBnZXRTcGFjZUNoYXJhY3RlcigpIHtcbiAgICAgICAgLy8gaHRtbCBzdHJpcHMgb3V0IHJlZ3VsYXIgc3BhY2VzXG4gICAgICAgIHJldHVybiAnJm5ic3A7JztcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICc8cD4nO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZU9iamVjdHMgPSB0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpO1xuICAgICAgICAvLyByZXZlcnNlIHNvcnQgYnkgeiBheGlzLCBncmFiIGhpZ2hlc3RcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMuc29ydCgoYSwgYikgPT4gYi56IC0gYS56KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIHJvdyA9IHRoaXMudmlld3BvcnQueTsgcm93IDwgdGhpcy52aWV3cG9ydC55ICsgdGhpcy52aWV3cG9ydC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSB0aGlzLnZpZXdwb3J0Lng7IGNvbCA8IHRoaXMudmlld3BvcnQueCArIHRoaXMudmlld3BvcnQud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSByZW5kZXJhYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLmdldENoYXJhY3RlcikubWFwKGMgPT4gYy5nZXRDaGFyYWN0ZXIoY29sLCByb3cpKS5maWx0ZXIoYyA9PiBjICE9IG51bGwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuZ2V0U3BhY2VDaGFyYWN0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgKz0gJzwvcD48cD4nO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSAnPHA+JztcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmlubmVySFRNTCA9IG91dHB1dDtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cbn0iLCJpbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIC8vIGZvcm1hdCBvZiBhIHNwcml0ZU1hcDpcbiAgICAvLyB7XG4gICAgLy8gICAgIFwiPHN0YXRlPlwiOiBbeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSxcbiAgICAvLyAgICAgICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSBdXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZU1hcCwgcGFyZW50T2JqZWN0LCBpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0gc3ByaXRlTWFwO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5ib3VuZHM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gdGhpcy5zdGF0ZUVsYXBzZWQgKyB0aW1lRWxhcHNlZDtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcmV2RnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50RnJhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgIT0gcHJldkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNpemUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICB2YXIgZmlyc3RSb3cgPSA5OTk5OTk7XG4gICAgICAgIHZhciBsYXN0Um93ID0gMDtcbiAgICAgICAgdmFyIGZpcnN0Q29sID0gOTk5OTk5O1xuICAgICAgICB2YXIgbGFzdENvbCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgY2hhcmFjdGVyUm93cy5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBjaGFyYWN0ZXJSb3dzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW3Jvd10uY2hhckF0KGNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAmJiBzeW1ib2wgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um93ID0gTWF0aC5taW4oZmlyc3RSb3csIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RSb3cgPSBNYXRoLm1heChsYXN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICBmaXJzdENvbCA9IE1hdGgubWluKGZpcnN0Q29sLCBjb2wpO1xuICAgICAgICAgICAgICAgICAgICBsYXN0Q29sID0gTWF0aC5tYXgobGFzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGZlZWxzIGRpcnR5XG4gICAgICAgIGNvbnN0IG5ld1cgPSBsYXN0Q29sIC0gZmlyc3RDb2wgKyAxO1xuICAgICAgICBjb25zdCBuZXdIID0gbGFzdFJvdyAtIGZpcnN0Um93ICsgMTtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkud2lkdGggPSBuZXdXO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgPSBuZXdIO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCkgLSBNYXRoLmZsb29yKG5ld1cgLyAyKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCkgLSBNYXRoLmZsb29yKG5ld0ggLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0WCgpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgeCAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7IFxuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHkgLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDdXJyZW50RnJhbWUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgdG90YWxUaW1lID0gc3ByaXRlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJWYWwpIHsgcmV0dXJuIGFjYyArIGN1clZhbFtcImRpc3BsYXlUaW1lXCJdOyB9LCAwKTtcbiAgICAgICAgdmFyIGxlZnRvdmVyID0gdGhpcy5zdGF0ZUVsYXBzZWQgJSB0b3RhbFRpbWU7XG4gICAgICAgIHZhciBmcmFtZSA9IDA7XG4gICAgICAgIHZhciB0aW1lQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZyYW1lID0gaTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVkdWNlKClcbiAgICAgICAgICAgIHZhciBkaXNwbGF5VGltZSA9IHNwcml0ZXNbaV1bXCJkaXNwbGF5VGltZVwiXTtcbiAgICAgICAgICAgIGlmICh0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZSA+IGxlZnRvdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lQWNjdW11bGF0b3IgPSB0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFgoKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJDb2wgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgLy8gYXNzdW1lcyB0aGUgZmlyc3Qgcm93IGlzIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSBvdGhlciBmcmFtZXNcbiAgICAgICAgICAgIG91ckNvbCA9IG91ckNvbCAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93c1swXS5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJDb2w7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yZWRZKCkge1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG91clJvdyA9IG91clJvdyAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93cy5sZW5ndGggLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXJSb3c7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSByb3cgLSB0aGlzLmdldEFuY2hvcmVkWSgpO1xuICAgICAgICB2YXIgb3VyQ29sID0gY29sIC0gdGhpcy5nZXRBbmNob3JlZFgoKTtcblxuICAgICAgICBpZiAob3VyUm93ID49IDAgJiYgXG4gICAgICAgICAgICBvdXJDb2wgPj0gMCAmJiBcbiAgICAgICAgICAgIG91clJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICBvdXJDb2wgPCBjaGFyYWN0ZXJSb3dzW291clJvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5jaGFyQXQob3VyQ29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCIvKipcbiAqIEFzc3VtZXMgeW91IGFyZSBzdGFydGluZyBvbiBhIFxuICovXG5mdW5jdGlvbiBnZXRXb3JkTGVuZ3RoKHRleHQsIHN0YXJ0SW5kZXgpIHtcbiAgICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gICAgbGV0IHdvcmRMZW5ndGggPSAxO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoIHx8IHRleHRbaV0gPT0gJ1xcbicgfHwgdGV4dFtpXSA9PSAnICcpIHtcbiAgICAgICAgICAgIHdvcmRMZW5ndGggPSBpIC0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRMZW5ndGg7XG59XG5cbi8qKlxuICogVGFrZXMgaW4gYSBzdHJpbmcgYW5kIGEgd3JhcCB3aWR0aCBhbmQgc3BsaXRzIHRoZSBzdHJpbmcgaW50b1xuICogYW4gYXJyYXkgb2YgdGV4dCBzdWJzdHJpbmdzIHRoYXQgYXJlIGFsbCBndWFyYW50ZWVkIHRvIGJlIGxlc3MgdGhhbiB0aGUgd3JhcCB3aWR0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUZXh0KHRleHQsIHdyYXBXaWR0aCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGxhc3RSb3dTdGFydCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBmaW5hbCBsZXR0ZXJcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1ckNoYXIgPSB0ZXh0W2ldO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1ckNoYXIgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGxpbmUgYnJlYWtcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgIC8vIGxvb2sgYWhlYWQgYXQgbGVuZ3RoIG9mIHRoaXMgd29yZFxuICAgICAgICAgICAgY29uc3Qgd29yZExlbmd0aCA9IGdldFdvcmRMZW5ndGgodGV4dCwgaSk7XG5cbiAgICAgICAgICAgIGlmIChpICsgd29yZExlbmd0aCAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB0aGlzIHdvcmQgd29uJ3QgZml0XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBnb29kLCBzdGFydCBmaW5kaW5nIHRoZSBuZXh0IHdvcmRcbiAgICAgICAgICAgICAgICBpICs9IHdvcmRMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBpZiAoaSAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB3ZSByYW4gb3V0IG9mIGxpbmUgd2lkdGhcbiAgICAgICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93cztcbn0iLCJleHBvcnQgY2xhc3MgVGhyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihmdW5jdGlvblBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5mdW5jdGlvblBvaW50ZXIgPSBmdW5jdGlvblBvaW50ZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoZGVzaXJlZEZyYW1lcmF0ZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBtaW5pbXVtTWlsbHNlY1BlckZyYW1lID0gMTAwMC8gZGVzaXJlZEZyYW1lcmF0ZTtcblxuICAgICAgICB2YXIgaW50ZXJuYWxSdW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhhdC5mdW5jdGlvblBvaW50ZXIoKTtcbiAgICAgICAgICAgIHZhciBhZnRlciA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBjYWxsIHRha2VzIGEgd2hpbGUsIHJlZHVjZSB0aGUgZGVsYXkgdW50aWwgdGhlIG5leHQgZXhlY3V0ZVxuICAgICAgICAgICAgdmFyIG5leHREZWxheSA9IE1hdGgubWF4KDAsIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgLSAoYWZ0ZXIgLSBub3cpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIG5leHREZWxheSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5pdGlhbCBjYWxsXG4gICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIDApOyBcbiAgICB9XG59IiwiLy8gQmFzZSBjbGFzcyBmb3IgZXZlcnkgdHlwZSBvZiBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgIH1cbn0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBLZXlNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldEdhbWVDb21tYW5kKGtleSkge1xuICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgIGNhc2UgJ2EnOiBcbiAgICAgICAgY2FzZSBcIjY1XCI6XG4gICAgICAgIGNhc2UgXCIzN1wiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19MRUZUO1xuXG4gICAgICAgIGNhc2UgJ2UnOiBcbiAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICBjYXNlIFwiNjhcIjpcbiAgICAgICAgY2FzZSBcIjM5XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1JJR0hUO1xuXG4gICAgICAgIGNhc2UgJywnOiBcbiAgICAgICAgY2FzZSAndyc6IFxuICAgICAgICBjYXNlIFwiODdcIjpcbiAgICAgICAgY2FzZSBcIjM4XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1VQO1xuXG4gICAgICAgIGNhc2UgJ28nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgY2FzZSBcIjgzXCI6XG4gICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19ET1dOO1xuXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICc2Nyc6XG4gICAgICAgICAgICByZXR1cm4gJ1FVSVQnO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICc3MCc6XG4gICAgICAgIGNhc2UgJzMyJzpcbiAgICAgICAgICAgIHJldHVybiAnRklSRSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGNhc2UgJzcyJzpcbiAgICAgICAgICAgIHJldHVybiAnSEVMUCc7XG4gICAgICAgIFxuICAgICAgICBjYXNlICcxMyc6XG4gICAgICAgICAgICByZXR1cm4gJ0VOVEVSJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1RyZWFzdXJlSHVudEdhbWV9IGZyb20gXCIuL3RyZWFzdXJlLWh1bnQuanNcIjtcbmltcG9ydCB7TWFrZUl0UmFpbkdhbWV9IGZyb20gXCIuL21ha2UtaXQtcmFpbi5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiBmYWxzZSxcbiAgICAnZHJhd0ZQUyc6IDIsXG4gICAgJ3VwZGF0ZUZQUyc6IDIsXG4gICAgJ3ZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWluVmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtYXhWaWV3cG9ydFdpZHRoJzogNjAsXG4gICAgJ3ZpZXdwb3J0SGVpZ2h0JzogMTQsXG4gICAgJ21pblZpZXdwb3J0SGVpZ2h0JzogMTQsXG4gICAgJ21heFZpZXdwb3J0SGVpZ2h0JzogMjAsXG4gICAgJ251bUVuZW1pZXMnOiAxMFxufTtcblxudmFyIHJhaW5PcHRpb25zID0ge1xuICAgICdwbGF5SW5Ccm93c2VyJzogdHJ1ZSxcbiAgICAnZHJhd0ZQUyc6IDEwLFxuICAgICd1cGRhdGVGUFMnOiAxMCxcbiAgICAndmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtaW5WaWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21heFZpZXdwb3J0V2lkdGgnOiA2MCxcbiAgICAndmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWluVmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWF4Vmlld3BvcnRIZWlnaHQnOiAyMCxcbn07XG5cbmZ1bmN0aW9uIHJ1bigpIHsgIFxuICAgIGxldCBpc1JhaW5pbmcgPSBmYWxzZTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1ha2VpdHJhaW5cIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoIWlzUmFpbmluZykge1xuICAgICAgICAgICAgaXNSYWluaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciByYWluR2FtZSA9IG5ldyBNYWtlSXRSYWluR2FtZSgpO1xuICAgICAgICAgICAgcmFpbkdhbWUuaW5pdGlhbGl6ZShyYWluT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdGhHYW1lID0gbmV3IFRyZWFzdXJlSHVudEdhbWUoKTtcbiAgICB0aEdhbWUuaW5pdGlhbGl6ZShnbG9iYWxPcHRpb25zKTtcbn1cblxucnVuKCk7XG4iLCJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vY29yZS9nYW1lLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFJhaW5BbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7R2FtZU9iamVjdHN9IGZyb20gXCIuL2NvcmUvZ2FtZV9vYmplY3RzLmpzXCI7XG5pbXBvcnQge0h0bWxSZW5kZXJlciwgQ29uc29sZVJlbmRlcmVyfSBmcm9tIFwiLi9jb3JlL3JlbmRlcmVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWtlSXRSYWluR2FtZSBleHRlbmRzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzZXQgdXAgYmFzaWMgZ2FtZSBvYmplY3RzXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IG5ldyBHYW1lT2JqZWN0cygpO1xuICAgIH1cbiAgICBcbiAgICByZXNldExldmVsKCkge1xuICAgICAgICAvLyBzdGFydCBmcm9tIHNjcmF0Y2hcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5yZW1vdmVBbGxPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5jbGVhckFuaW1hdGlvbnMoKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBSYWluQW5pbWF0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vIFRPRE86IG1ha2UgdGhlIHJhaW4gZ28gbGVmdCBvciByaWdodD9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgLy8gcmFuZG9tIGd1ZXNzIHRoYXQgaXRzIDEwIHBpeGVscyBwZXIgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBvdmVycmlkZSBvcHRpb25zIGZvciBub3dcbiAgICAgICAgICAgIG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyA0LjIpO1xuICAgICAgICAgICAgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gMTApO1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zWyd2aWV3cG9ydFdpZHRoJ107XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXTtcblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCByZW5kZXJlciwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gbWFwRGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcERhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TWFwQ2hhcmFjdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBsZXZlbFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG9iai5pbWFnZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSByb3cgKyBvYmoueTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U3RyID0gb2JqLmltYWdlW3Jvd107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgcm93U3RyLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBvYmoueCArIGNvbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNDaGFyID0gcm93U3RyLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0NoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB5LCB0aGlzQ2hhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIGxlZnQvcmlnaHQgbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3RlcigwLCB5LCBcInxcIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIodGhpcy53aWR0aCAtIDEsIHksIFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gdG9wL2JvdHRvbSBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgMCwgXCItXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHRoaXMuaGVpZ2h0IC0gMSwgXCItXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgfVxufSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FDVElPTl9OT05FfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi4vY29yZS90ZXh0X2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uLCBzcGFjZUNoYXIpIHtcbiAgICAgICAgdGhpcy5zcGVjID0gbWVudVNwZWM7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnpQb3NpdGlvbiA9IHpQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc3BhY2VDaGFyID0gc3BhY2VDaGFyO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gdGhpcy5zcGFjZUNoYXIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzW3RoaXMuc2VsZWN0ZWRPcHRpb25dLnN5bWJvbCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGdhbWVDb21tYW5kKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBBQ1RJT05fTk9ORTtcbiAgICAgICAgbGV0IGV2ZW50QXJncyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19ET1dOKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uICUgdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfVVApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiAtPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIGlmIGl0IG1hdGNoZXMgdGhlIGdhbWVDb21tYW5kXG4gICAgICAgICAgICBsZXQgY3VyT3B0aW9uID0gdGhpcy5zcGVjLm9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbl07XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRBY3Rpb24gPSBjdXJPcHRpb24uYWN0aW9uTWFwLmZpbHRlcihvID0+IG8ua2V5ID09IGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gc2VsZWN0ZWRBY3Rpb25bMF0uYWN0aW9uO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHNlbGVjdGVkQWN0aW9uWzBdLmV2ZW50QXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWN0aW9uOiBhY3Rpb24sIGV2ZW50QXJnczogZXZlbnRBcmdzfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVzIGEgY2hhcmFjdGVyIHRvIHJlbmRlciBpbiB0aGUgbWVudSwgYW5kIGhhbmRsZXMgb3ZlcmhlYWQgZm9yIGl0XG4gICAgY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpIHtcbiAgICAgICAgLy8gYWRkIGV2ZXJ5dGhpbmcgaW5cbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgY2hhcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkcmF3IG9uIHRvcFxuICAgICAgICBjaGFyYWN0ZXIueiA9IHRoaXMuelBvc2l0aW9uO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QoY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBrZWVwIHRoZXNlIGFyb3VuZCBpbiBtZW1vcnkgc28gd2UgY2FuIHJlbW92ZSB0aGVtIGxhdGVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG5cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBkcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHRleHRXLCB0ZXh0SCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0ZXh0VzsgY29sKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgLSAxLCAnLScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSArIHRleHRILCAnLScpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRleHRIOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZpZXdwb3J0Lng7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMudmlld3BvcnQueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdwb3J0LndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dCA9IHRoaXMuc3BlYy5zdW1tYXJ5VGV4dDtcbiAgICAgICAgY29uc3Qgd3JhcFcgPSBNYXRoLmNlaWwod2lkdGggKiAwLjgpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeCBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3ggPSBsZWZ0ICsgTWF0aC5yb3VuZCgod2lkdGggLSB3cmFwVykgLyAyKTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHkgcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF95ID0gYm90dG9tICsgTWF0aC5yb3VuZChoZWlnaHQgKiAwLjgpO1xuXG4gICAgICAgIC8vIHN1bW1hcnkgaXMgdGV4dCBhdCB0b3BcbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHRSb3dzID0gd3JhcFRleHQoc3VtbWFyeVRleHQsIHdyYXBXKTtcbiAgICAgICAgY29uc3QgbnVtU3VtbWFyeUxpbmVzID0gc3VtbWFyeVRleHRSb3dzLmxlbmd0aDtcblxuICAgICAgICAvLyBhZGQgYmxhbmsgbGluZSBiZXR3ZWVuXG4gICAgICAgIGNvbnN0IG51bVNwYWNpbmdMaW5lcyA9IDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gb3B0aW9uIGxpbmVzIGFyZSBzZWxlY3RhYmxlIGJ5IHVzZXJcbiAgICAgICAgY29uc3QgbnVtT3B0aW9uTGluZXMgPSB0aGlzLnNwZWMub3B0aW9ucy5maWx0ZXIobyA9PiBvLm9wdGlvblRleHQgIT0gbnVsbCkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IG51bUxpbmVzID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtT3B0aW9uTGluZXMgKyBudW1TcGFjaW5nTGluZXM7IFxuXG4gICAgICAgIC8vIGlmIHdlIHdpbGwgZ28gb3ZlciB0aGUgYm90dG9tIHBhcnQgb2YgdGhlIHNjcmVlbiwgYnVtcCB1cCBhIG5vdGNoXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIChzdGFydF95ICsgbnVtTGluZXMgKyAxKSAtIChib3R0b20gKyBoZWlnaHQpKTtcbiAgICAgICAgc3RhcnRfeSAtPSBvZmZzZXQ7XG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5kcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHdyYXBXLCBudW1MaW5lcyk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgaW5zaWRlIG9mIHRoZSBtZW51IGJveCBjb250YWluZXIsIHNwYWNlcyBhbmQgdGV4dFxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBudW1MaW5lczsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdyYXBXOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydF94ICsgY29sO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydF95ICsgcm93O1xuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5zcGFjZUNoYXI7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblN0YXJ0Um93ID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtU3BhY2luZ0xpbmVzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG9wdGlvblN0YXJ0Um93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNPcHRpb25JbmRleCA9IHJvdyAtIG9wdGlvblN0YXJ0Um93O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gXCItXCIgKyB0aGlzLnNwYWNlQ2hhciArIGN1ck9wdGlvbi5vcHRpb25UZXh0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IGN1clRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gY3VyVGV4dFtjb2xdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbkNoYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpO1xuICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGlvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLnB1c2goY3JlYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgaGlkZShnYW1lT2JqZWN0cykge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKGMgPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGMpKTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQUNUSU9OX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9CQUNLX1RPX0dBTUUgPSAxO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QVVNIX01FTlUgPSAyO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QT1BfTUVOVSA9IDM7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggPSA0O1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XID0gNTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUkVTRVRfTEVWRUwgPSA2OyIsImltcG9ydCB7XG4gICAgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XLCBcbiAgICBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIFxuICAgIEFDVElPTl9QVVNIX01FTlUsIEFDVElPTl9SRVNFVF9MRVZFTCB9XG4gICAgZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNvbmZpZ3VyZSB5b3VyIGdhbWUgZXhwZXJpZW5jZS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgSGVpZ2h0XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBXaWR0aFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTFNfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDT05UUk9MU1xcbk1vdmVtZW50OiBBcnJvdyBrZXlzXFxuRklSRTogU3BhY2ViYXJcXG5QYXVzZTogJ2gnXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIENsaWNrIG9uIHRoZSB3ZWIgcGFnZSB0byBjYXB0dXJlIGtleSBwcmVzc2VzLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJQbGF5XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkNvbnRyb2xzXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBDT05UUk9MU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogU0VUVElOR1NfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIlJlc2V0IExldmVsXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1JFU0VUX0xFVkVMXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuIiwiXG5pbXBvcnQge0dhbWV9IGZyb20gXCIuL2NvcmUvZ2FtZS5qc1wiO1xuaW1wb3J0IHtLZXlNYXB9IGZyb20gXCIuL2tleV9tYXAuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9uSGFuZGxlciwgV2luQW5pbWF0aW9uLCBUZXh0QW5pbWF0b259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3BsYXllcl9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7RW5lbXlDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3RlcnMvZW5lbXlfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9jb3JlL2dhbWVfb2JqZWN0cy5qc1wiO1xuaW1wb3J0IHtMRVZFTF9UT1dOLCBFTkVNWV9TUElLRVlfU1BSSVRFX01BUH0gZnJvbSBcIi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcbmltcG9ydCB7TWFwfSBmcm9tIFwiLi9tYXAuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyfSBmcm9tIFwiLi9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuaW1wb3J0IHtUcmVhc3VyZUNoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVycy90cmVhc3VyZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7TWVudX0gZnJvbSBcIi4vbWVudXMvbWVudS5qc1wiO1xuaW1wb3J0IHtBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfSCwgQUNUSU9OX1JFU0VUX0xFVkVMLCBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIEFDVElPTl9QVVNIX01FTlUsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XfSBmcm9tIFwiLi9tZW51cy9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7SEVMUF9NRU5VfSBmcm9tIFwiLi9tZW51cy9tZW51X3NwZWNzLmpzXCI7XG5pbXBvcnQge0h0bWxSZW5kZXJlciwgQ29uc29sZVJlbmRlcmVyfSBmcm9tIFwiLi9jb3JlL3JlbmRlcmVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUh1bnRHYW1lIGV4dGVuZHMgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHNldCB1cCBiYXNpYyBnYW1lIG9iamVjdHNcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gbmV3IEdhbWVPYmplY3RzKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKExFVkVMX1RPV04pO1xuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBLZXlNYXAoKTtcbiAgICAgICAgdGhpcy5tZW51U3RhY2sgPSBbXTtcblxuICAgICAgICB0aGlzLlNUQVRFX1JVTk5JTkcgPSAwO1xuICAgICAgICB0aGlzLlNUQVRFX1dJTk5OSU5HID0gMTtcbiAgICAgICAgdGhpcy5TVEFURV9ERUFEID0gMjtcbiAgICAgICAgdGhpcy5TVEFURV9NRU5VID0gMztcblxuICAgICAgICAvLyB0aGlzIHNob3VsZCBwcm9iYWJseSB0dXJuIGludG8gYSBzdGF0ZSBtYWNoaW5lXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgdGhpcy5FWFBMT1NJT05fU1BFRUQgPSAyMDAwOyAvLyBudW0gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzIG9mIFdJTiBleHBsb3Npb24gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IC0xO1xuICAgIH1cblxuICAgIGdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICB2YXIgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG5cbiAgICAgICAgLy8gZG9uJ3QgbGV0IHRoZW0gb3ZlcmxhcFxuICAgICAgICB3aGlsZSAoZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzUG9pbnQoeCwgeSkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlR29hbChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgVHJlYXN1cmVDaGFyYWN0ZXIoZ29hbFBsYWNlbWVudC54LCBnb2FsUGxhY2VtZW50LnksICckJywgJ2xldmVsR29hbCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVuZW1pZXNcbiAgICAgICAgdmFyIGVuZW15UGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cbiAgICBcbiAgICByZXNldExldmVsKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9SVU5OSU5HO1xuXG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmNsZWFyQW5pbWF0aW9ucygpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBvdXIgcGxheWVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gdGhpcy5jcmVhdGVQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jaGFyYWN0ZXIpO1xuXG4gICAgICAgIC8vIGFkZCBhIGxldmVsR29hbCB0byB0aGlzIGxldmVsXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlR29hbCh0aGlzLmdhbWVPYmplY3RzLCB0aGlzLm1hcCkpO1xuXG4gICAgICAgIC8vIGFkZCBzb21lIGVuZW1pZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnNbJ251bUVuZW1pZXMnXTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNyZWF0ZUVuZW15KHRoaXMuZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgb3VyIG1hcCBvYmplY3RzXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLm1hcC5nZXRNYXBDaGFyYWN0ZXJzKCkubWFwKHggPT4gdGhhdC5nYW1lT2JqZWN0cy5hZGRPYmplY3QoeCkpO1xuXG4gICAgICAgIC8qdGhpcy5kb29yID0gbmV3IERvb3J3YXlDaGFyYWN0ZXIoMiwgMiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmRvb3IpOyovXG4gICAgICAgIFxuICAgICAgICAvLyBjZW50ZXIgb24gdGhlIGNoYXJhY3RlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcblxuICAgICAgICAvLyBzaG93IGhlbHAgbWVudS4gdGhpcyBtYXkgY2hhbmdlIG9uIG5ldyBsZXZlbHMgZXZlbnR1YWxseVxuICAgICAgICB0aGlzLnNob3dIZWxwTWVudSgpO1xuXG4gICAgICAgIC8vIGZpcnN0IGRyYXcgb2YgcmVuZGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBibG9ja2luZyBhbmltYXRpb24gdGhhdCAnZXhwbG9kZXMnIHRoZSBcbiAgICAvLy4uLmdvYWwgaW50byBhbiBleHBsb3Npb25cbiAgICBzcGF3bkV4cGxvc2lvbnMobm93LCBjZW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgICAvLyBzcGF3biBhIG5ldyBhbmltYXRpb24gYmFzZWQgb24gRVhQTE9TSU9OX1NQRUVEXG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID4gdGhpcy5FWFBMT1NJT05fU1BFRUQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbihjZW50ZXJlZENoYXJhY3Rlci5nZXRYKCksIGNlbnRlcmVkQ2hhcmFjdGVyLmdldFkoKSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUluaXRpYWxFeHBsb3Npb24oeCwgeSwgdGV4dCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBUZXh0QW5pbWF0b24oeCwgeSwgdGV4dCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuYWRkQW5pbWF0aW9uKG5ldyBXaW5BbmltYXRpb24oeCwgeSwgdGhpcy5tYXAud2lkdGgsIHRoaXMubWFwLmhlaWdodCkpO1xuICAgIH1cblxuICAgIGNoZWNrRGVhZENvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURV9ERUFEO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbml0aWFsRXhwbG9zaW9uKHRoaXMuY2hhcmFjdGVyLmdldFgoKSwgdGhpcy5jaGFyYWN0ZXIuZ2V0WSgpLCBcIkRFQURcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1dpbkNvbmRpdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyLmhhc1RyZWFzdXJlKCdsZXZlbEdvYWwnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVfV0lOTklORztcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SGVscE1lbnUoKSB7XG4gICAgICAgIC8vIHB1c2ggbWVudSBzdGF0ZSBvblxuICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX01FTlU7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KEhFTFBfTUVOVSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSwgdGhpcy5yZW5kZXJlci5nZXRTcGFjZUNoYXJhY3RlcigpKTtcbiAgICAgICAgdGhpcy5tZW51LnNob3codGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgICBpZiAobnVsbCAhPT0ga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2FtZUNvbW1hbmQgPSB0aGlzLmtleU1hcC5nZXRHYW1lQ29tbWFuZChrZXkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBicmluZyB1cCBhIFFVSVQgbWVudS4gcHJvY2Vzcy5leGl0KCkgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykgeyAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnSEVMUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCB0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iaiA9IHRoaXMubWVudS5oYW5kbGVJbnB1dChnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0JBQ0tfVE9fR0FNRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBtZW51IGFuZCBnbyBiYWNrIHRvIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1JFU0VUX0xFVkVMKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoaXMgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QVVNIX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnUgYW5kIHB1c2ggaXQgb250byBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLmV2ZW50QXJncy5tZW51LCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxLCB0aGlzLnJlbmRlcmVyLmdldFNwYWNlQ2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BPUF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3AgcHJldiBtZW51IGFuZCBzaG93IGl0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZW51ID0gdGhpcy5tZW51U3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IHByZXZNZW51O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IHRoaXMub3B0aW9uc1snbWF4Vmlld3BvcnRIZWlnaHQnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ID0gdGhpcy5vcHRpb25zWydtaW5WaWV3cG9ydEhlaWdodCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPiB0aGlzLm9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSB0aGlzLm9wdGlvbnNbJ21pblZpZXdwb3J0V2lkdGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlciB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUodXBkYXRlRnVuYywgZHJhd0Z1bmMsIHJlbmRlcmVyLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGRvIHRoaXMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHBhcmVudFxuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIgPSBuZXcgQW5pbWF0aW9uSGFuZGxlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IFxuICAgICAgICBdXG4gICAgfVxufTtcblxuY29uc3QgRU5FTVlfVEVTVF9GUkFNRV8xID0gW1xuICAgIFwiMSAgIFwiLFxuICAgIFwiIDIgIFwiLFxuICAgIFwiICAzIFwiLFxuICAgIFwiICAgNFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1RFU1RfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogRU5FTVlfVEVTVF9GUkFNRV8xIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJTEVfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzInXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI0J10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCOCddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRSddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMSddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjMnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI3J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJEJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0hPVVNFID0gW1xuXCIgICAgIF9fX19fX19fXyAgICAgIFwiLFxuXCIgICBfLyAgICAgICAgIFxcXFxfICAgXCIsXG5cIiBfLyAgICAgICAgICAgICBcXFxcXyBcIixcblwiL19fX19fX19fX19fX19fX19fXFxcXFwiLFxuXCIgfCAgICAgICAgICAgICAgIHwgIFwiLFxuXCIgfCAgICAgPT09PT0gICAgIHwgIFwiLFxuXCIgfCB8K3wgIHwgfCAgfCt8IHwgIFwiLFxuXCIgfF9fX19fX3wgfF9fX19fX3wgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9CVVNIID0gW1xuXCIgIyMjIFwiLFxuXCIjIyMjI1wiLFxuXCIgIyMjIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9UUkVFID0gW1xuXCIgICAoKiopICAgICAgIFwiLFxuXCIgKCoqKioqKikgIFwiLFxuXCIoKioqKioqKiopIFwiLFxuXCIgICgqKioqKSAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAvX19cXFxcICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9UT1dOID0ge1xuXCJ3aWR0aFwiOiAxMjIsXG5cImhlaWdodFwiOiA2MCxcblwibWFwX29iamVjdHNcIjogW1xuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMCwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzcsIFwieVwiOiAxMyB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMTIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMiwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzgsIFwieVwiOiA5IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA5MCwgXCJ5XCI6IDE4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwMCwgXCJ5XCI6IDE2IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA1MCwgXCJ5XCI6IDIyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDYwLCBcInlcIjogMjAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3OCwgXCJ5XCI6IDIzIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3MCwgXCJ5XCI6IDQyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDgwLCBcInlcIjogNDAgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAyMCwgXCJ5XCI6IDgwIH0sXG4gICAgXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMSwgXCJ5XCI6IDM4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTQsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDEwLCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiAzMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMwLCBcInlcIjogMzIgfSxcbiAgICBcbl1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
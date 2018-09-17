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
/*! exports provided: Animation, TextAnimaton, WinAnimation, RainDropSplash, RainAnimation, AnimationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnimaton", function() { return TextAnimaton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinAnimation", function() { return WinAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainDropSplash", function() { return RainDropSplash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainAnimation", function() { return RainAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHandler", function() { return AnimationHandler; });
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/character.js */ "./src/core/character.js");
/* harmony import */ var _rain_art_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rain_art.js */ "./src/rain_art.js");






class Animation {
    constructor() { }

    update(timeNow, timeElapsed, gameObjects) { }

    isExpired() { return true; }

    // called to clean up this animation after it expires
    cleanup() { }
}

class TextAnimaton extends Animation {
    constructor(centerX, centerY, text) {
        super();
        this.frameSpeed = 600;
        this.frameElapsed = 0;
        this.isInGameObjects = false;

        this.characters = [];
        // add text to the center of the animation
        for (var i = 0; i < text.length; i++) {
            const x_offset = Math.floor(text.length / 2) - i;
            const thisChar = new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](centerX - x_offset, centerY, text.charAt(i)); 
            // show this above other animations (TODO: move to parameter)
            thisChar.z = 2;
            this.characters.push(thisChar);
        }

        // do this after setting character array
        this.setVisibility(false);
        
    }

    setVisibility(isVisible) {
        this.isVisible = isVisible;
        this.characters.map(x => x.isVisible = isVisible);
    }

    update(timeNow, timeElapsed, gameObjects) {
        if (!this.isInGameObjects) {
            gameObjects.addObjects(this.characters);
        }

        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            this.setVisibility(!this.isVisible);
        }
    }

    isExpired() {
        // this animation never goes away
        return false;
    }

    cleanup() {
        this.characters.map(x => x.removeFromGameObjects = true);
    }
}

class WinAnimation extends Animation {
    constructor(centerX, centerY, maxX, maxY) {
        super();
        this.radius = -1;
        this.centerX = centerX;
        this.centerY = centerY;
        this.frameSpeed = 60;
        this.frameElapsed = 0;
        this.characters = [];
        
        this.maxX = maxX;
        this.maxY = maxY;
    }

    getNewExplosionRing(centerX, centerY, radius) {
        let ring = [];
        // create explosion particles in a blast radius away from the center
        for (var y = centerY - radius; y <= centerY + radius; y++) {
            var difference = Math.abs(centerY - y);
            var numXs = Math.min(2, radius - difference + 1); // add 1 because we always want at least 1 explosion on each line
            
            for (var i = 0; i < numXs; i++) {
                var multiplier = 1;
                if (i == 0) {
                    multiplier = -1;
                }
                
                var x = centerX + ((radius - difference) * multiplier);
                var character = new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, '*');
                ring.push(character);
            }
        }

        return ring;
    }

    update(timeNow, timeElapsed, gameObjects) {
        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            this.radius++;

            // remove old characters
            this.characters.map(x => x.removeFromGameObjects = true);

            // get new characters and add them
            this.characters = this.getNewExplosionRing(this.centerX, this.centerY, this.radius);
            gameObjects.addObjects(this.characters);
        }
    }

    isExpired() {
        return this.centerX - (this.radius * 2) < 0 &&
            this.centerX + (this.radius * 2) > this.maxX &&
            this.centerY - (this.radius * 2) < 0 &&
            this.centerY + (this.radius * 2) > this.maxY;
    }

    cleanup() {
        this.characters.map(x => x.removeFromGameObjects = true);
    }
}

class RainDropSplash extends _core_character_js__WEBPACK_IMPORTED_MODULE_3__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.sprite = new _core_sprite_js__WEBPACK_IMPORTED_MODULE_1__["Sprite"](spriteMap, this, "0");
        this.children.push(this.sprite);
    }
}

class RainAnimation extends Animation {
    constructor(maxX, maxY) {
        super();
        this.raindrops = [];
        // higher, the number, slower it goes
        this.frameSpeed = 100;
        this.frameElapsed = 0;
        this.minRainDropsPerWave = 2;
        this.maxRainDropsPerWave = 5;
        this.depth = 1;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    createRaindrop() {
        const x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_2__["randomNumberRange"])(1, this.maxX - 1);
        const y = 0;

        const dropTypeSpin = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_2__["randomNumber"])(100);
        let dropChar = "|";
        if (dropTypeSpin > 80) {
            dropChar = "!"
        }

        // choose a random depth for this raindrop
        const depth = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_2__["randomNumber"])(this.depth);
        
        let raindrop = new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, dropChar);
        raindrop.depth = depth;
        return raindrop;
    }

    getNewRaindropWave() {
        let drops = [];
        const numDrops = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_2__["randomNumberRange"])(this.minRainDropsPerWave, this.maxRainDropsPerWave);
        for (let i = 0; i < numDrops; i++) {
            drops.push(this.createRaindrop());
        }
        return drops;
    }

    tickRainDrop(raindrop) {
        raindrop.setY(raindrop.getY() + 1);
    }

    removeExpiredRaindrops(raindrops, maxY, gameObjects) {
        for (let i = raindrops.length - 1; i >= 0; i--) {
            let raindrop = raindrops[i];
            if (raindrop.getY() == maxY - raindrop.depth) {
                // remove from gameObjects as well as our list
                let deadRaindrop = raindrops.splice(i, 1)[0];
                gameObjects.removeObject(deadRaindrop);

                let splash = new RainDropSplash(deadRaindrop.getX(), deadRaindrop.getY() + 1, _rain_art_js__WEBPACK_IMPORTED_MODULE_4__["SPLASH_SPRITE_ART"]);
                gameObjects.addObject(splash);
            }
        }
    }

    update(timeNow, timeElapsed, gameObjects) {
        this.frameElapsed += timeElapsed;
        if (this.frameElapsed >= this.frameSpeed) {
            this.frameElapsed -= this.frameSpeed;
            
            // move all raindrops downwards
            for (let i = this.raindrops.length - 1; i >= 0; i--) {
                this.tickRainDrop(this.raindrops[i]);
            }

            this.removeExpiredRaindrops(this.raindrops, this.maxY, gameObjects);

            // add a new raindrop wave
            let newDrops = this.getNewRaindropWave();
            const that = this;
            newDrops.map(x => that.raindrops.push(x));
            gameObjects.addObjects(newDrops);
        }
    }

    isExpired() {
        return false;
    }

    cleanup() {
        this.raindrops.map(x => x.removeFromGameObjects = true);
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
            animation.update(timeNow, timeElapsed, gameObjects);

            if (animation.isExpired()) {
                // remove it from our list
                const expiredAnimation = this.animations.splice(i, 1)[0];
                expiredAnimation.cleanup();
            }
        }
    }

    clearAnimations() {
        this.animations.map(x => x.cleanup());
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
/* harmony import */ var _game_objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_objects.js */ "./src/core/game_objects.js");




class Game {
    constructor() {
        this.lastkeyPresses = [];
        this.threadUpdate = null;
        this.threadDraw = null;
        this.renderer = null;
        this.gameObjects = new _game_objects_js__WEBPACK_IMPORTED_MODULE_2__["GameObjects"]();
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

    stop() {
        // stopping threads and removing all gameObjects should be enough
        this.threadDraw.stop();
        this.threadUpdate.stop();
        this.gameObjects.removeAllObjects();

        // one more render to clear everything
        this.renderer.render(this.gameObjects);
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

    addObjects(objList) {
        const that = this;
        objList.map(x => that.addObject(x));
    }

    removeObject(obj) {
        // recursively filter out the object that was passed in and its children
        this.objects = this.objects.filter(x => x !== obj);
        for (var i = 0; obj.children && i < obj.children.length; i++) {
            this.removeObject(obj.children[i]);
        }
    }

    removeObjects(objList) {
        const that = this;
        objList.map(x => that.removeObject(x));
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
    return Math.floor(min + addition);    
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
        this.expired = false;
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
            if (this.frame == -1) {
                this.expired = true;
                this.parentObject.removeFromGameObjects = true;
            }
            this.parentObject.onAnimated();
            this.calculateSize();
        }
    }

    calculateSize() {
        let newW = 0;
        let newH = 0;

        if (!this.expired) {            
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
            newW = lastCol - firstCol + 1;
            newH = lastRow - firstRow + 1;
        }

        this.parentObject.getBounds().width = newW;
        this.parentObject.getBounds().height = newH;
        if (this.spriteMap.anchor == "bcenter") {
            this.parentObject.getBounds().x = this.parentObject.getX() - Math.floor(newW / 2);
            this.parentObject.getBounds().y = this.parentObject.getY() - Math.floor(newH);
        }
        else if (this.spriteMap.anchor == "center") {
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
        if (this.spriteMap.anchor == "center" || this.spriteMap.anchor == "bcenter") {
            x -= Math.floor(this.parentObject.getBounds().width / 2);
        }
        return x;
    }

    getY() {
        let y = this.parentObject.getY(); 
        if (this.spriteMap.anchor == "bcenter") {
            y -= Math.floor(this.parentObject.getBounds().height);
        }
        else if (this.spriteMap.anchor == "center") {
            y -= Math.floor(this.parentObject.getBounds().height / 2);
        }
        return y;
    }

    calculateCurrentFrame() {
        var sprites = this.spriteMap.states[this.state];
        var totalTime = sprites.reduce(function(acc, curVal) { return acc + curVal["displayTime"]; }, 0);
        
        if (this.stateElapsed > totalTime && this.spriteMap.loop == "none") {
            return -1;
        } 

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
        if (this.expired) {
            return this.parentObject.getX()
        }
        
        let characterRows = this.spriteMap.states[this.state][this.frame]["characters"];
        
        // Remove any notion of the map location and localize to this sprite only
        var ourCol = this.parentObject.getX();
        if (this.spriteMap.anchor == "center" || this.spriteMap.anchor == "bcenter") {
            // assumes the first row is the same width as the other frames
            ourCol = ourCol - Math.floor(characterRows[0].length / 2);
        }

        return ourCol;
    }

    getAnchoredY() {
        if (this.expired) {
            return this.parentObject.getY()
        }
        let characterRows = this.spriteMap.states[this.state][this.frame]["characters"];

        // Remove any notion of the map location and localize to this sprite only
        var ourRow = this.parentObject.getY();
        if (this.spriteMap.anchor == "bcenter") {
            ourRow = ourRow - Math.floor(characterRows.length);
        }
        else if (this.spriteMap.anchor == "center") {
            ourRow = ourRow - Math.floor(characterRows.length / 2);
        }

        return ourRow;
    }

    getCharacter(col, row) {
        if (this.frame < 0) {
            return null;
        }
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
        this.isRunning = false;
    }

    start(desiredFramerate) {
        var that = this;
        that.isRunning = true;
        var minimumMillsecPerFrame = 1000/ desiredFramerate;

        var internalRun = function() {
            if (that.isRunning) {
                var now = Date.now();
                that.functionPointer();
                var after = Date.now();

                // if the function call takes a while, reduce the delay until the next execute
                var nextDelay = Math.max(0, minimumMillsecPerFrame - (after - now));
            
                setTimeout(internalRun, nextDelay);
            }
        };

        // initial call
        setTimeout(internalRun, 0); 
    }

    stop() {
        this.isRunning = false;
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
var treasureHuntOptions = {
    'playInBrowser': false,
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
    var rainGame = new _make_it_rain_js__WEBPACK_IMPORTED_MODULE_1__["MakeItRainGame"]();
    const button = document.getElementById("makeitrain");
    button.onclick = function(){
        if (!isRaining) {
            isRaining = true;
            rainGame.initialize(rainOptions);
        } else {
            isRaining = false;
            rainGame.stop();
        }
    }

    // this will run in the console
    var thGame = new _treasure_hunt_js__WEBPACK_IMPORTED_MODULE_0__["TreasureHuntGame"]();
    thGame.initialize(treasureHuntOptions);
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
            options['viewportHeight'] = Math.floor(window.innerHeight / 45);
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

/***/ "./src/rain_art.js":
/*!*************************!*\
  !*** ./src/rain_art.js ***!
  \*************************/
/*! exports provided: SPLASH_SPRITE_ART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPLASH_SPRITE_ART", function() { return SPLASH_SPRITE_ART; });
const SPLASH_FRAME_1 = [
    "_"//"\\     /",
    //"   _   "
];

const SPLASH_FRAME_2 = [
    "._."//",       ,",
    //"         ",
    //"    .   "
];

const SPLASH_FRAME_3 = [
    ". ."//"           ",
    //".         .",
    //"           "
];

const SPLASH_SPRITE_ART = {
    "anchor": "bcenter",
    "loop": "none",
    "states": {
        "0": [
            { "displayTime": 90, "characters": SPLASH_FRAME_1 },
            { "displayTime": 70, "characters": SPLASH_FRAME_2 },
            { "displayTime": 60, "characters": SPLASH_FRAME_3 }
        ]
    }
};

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

    clearLevel() {
        this.gameObjects.removeAllObjects();
        this.animationHandler.clearAnimations();
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
            this.clearLevel();
            this.createInitialExplosion(this.character.getX(), this.character.getY(), "DEAD");
            this.resetLevelTime = Date.now() + 6000;
        }
    }

    checkWinCondition() {
        if (this.character.hasTreasure('levelGoal')) {
            this.state = this.STATE_WINNING;
            this.clearLevel();
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
    "loop": "circle",
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
    "loop": "circle",
    "states": {
        "0": [{ "displayTime": 999999, "characters": ENEMY_TEST_FRAME_1 }]
    }
};

const PROJECTILE_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
    "states": {
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_LEFT"]]: [{ "displayTime": 999999, "characters": ['\u25C2'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_UP"]]: [{ "displayTime": 999999, "characters": ['\u25B4'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_RIGHT"]]: [{ "displayTime": 999999, "characters": ['\u25B8'] }],
        [_core_facing_js__WEBPACK_IMPORTED_MODULE_0__["FACING_DOWN"]]: [{ "displayTime": 999999, "characters": ['\u25BE'] }]
    }
};

const PLAYER_SPRITE_MAP = {
    "anchor": "center",
    "loop": "circle",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvZW5lbXlfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXJzL3BsYXllcl9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvcHJvamVjdGlsZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvc3RhdGljX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy90cmVhc3VyZV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvd2FsbF9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2ZhY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWVfb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tYXRoX2V4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbW92YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RleHRfaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS90aHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdXBkYXRlYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5X21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFrZS1pdC1yYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnVzL21lbnVfYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudXMvbWVudV9zcGVjcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFpbl9hcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlLWh1bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWFzdXJlX2h1bnRfYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRndCO0FBQ1Q7QUFDd0I7QUFDckI7QUFDUTs7QUFFMUI7QUFDQSxtQkFBbUI7O0FBRW5CLCtDQUErQzs7QUFFL0MsaUJBQWlCLGFBQWE7O0FBRTlCO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBLDhKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUJBQXVCO0FBQzdEO0FBQ0EsNkRBQTZEOztBQUU3RCwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELFFBQVE7QUFDM0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVQa0I7QUFDVTtBQUNOO0FBQ1A7QUFDQztBQUNLO0FBQ3FDO0FBQ2xDOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEM7QUFDNUMsNkZBQTZDO0FBQzdDLDRGQUE0QztBQUM1QywwRkFBMEM7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0Q0QjtBQUNiO0FBQ0M7QUFDQztBQUNHO0FBQ0Y7QUFDUTtBQUN1Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFa0I7QUFDSTtBQUNOO0FBQ0Q7QUFDTzs7QUFFdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUN2RGtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkd0I7QUFDUDs7QUFFakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWmtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrQjtBQUNDOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFEbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0Msb0NBQW9DO0FBQzVFLHlCQUF5QiwyQkFBMkI7QUFDcEQsNkJBQTZCLDBCQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLG9DQUFvQztBQUM1RSx5QkFBeUIsMkJBQTJCO0FBQ3BELDZCQUE2QiwwQkFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0EseUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFDRTtBQUNHOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQztBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSMEQ7QUFDdkM7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDO0FBQzlDLHVDO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qyw4Q0FBOEM7QUFDckYsMkNBQTJDLDZDQUE2QztBQUN4RjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLDhDQUE4QztBQUNyRiwyQ0FBMkMsNkNBQTZDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDckhtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1GQUFtRjtBQUMzRyx3QkFBd0IsbUZBQW1GO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDRCQUE0QjtBQUN6RCxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQsb0NBQW9DLEVBQUU7O0FBRXBHO0FBQ0E7QUFDQSxTOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1AwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDaER5QjtBQUNGOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NhO0FBQzJCO0FBQ3BCO0FBQ2tCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHFDQUFxQztBQUM1RDtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Dd0I7QUFDSjtBQUNXO0FBQ2Q7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0M7O0FBRUE7QUFDQTs7QUFFQSw0RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekMsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0dBQWlEO0FBQzFFLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLGtHQUFpRDtBQUMxRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5Qix1RkFBc0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1RkFBc0M7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyRkFBMEM7QUFDbkUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsa0RBQWtEO0FBQy9ELGFBQWE7QUFDYjtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmE7QUFDRTtBQUNzQztBQUM3QjtBQUNEO0FBQ0g7QUFDd0I7QUFDaEM7QUFDUztBQUNLO0FBQ2I7QUFDOEg7QUFDekg7QUFDb0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQzs7QUFFcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQscUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsNkNBQTZDOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2QztBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclMwRDs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RSxhQUFhLHdEQUF3RDtBQUNyRSxhQUFhLHlEQUF5RDtBQUN0RSxhQUFhLHdEO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQTBEO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUIsa0RBQWtEO0FBQzNFLHVFQUF1QixrREFBa0Q7QUFDekUsMEVBQTBCLGtEQUFrRDtBQUM1RSx5RUFBeUIsa0RBQWtEO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUIsa0RBQWtEO0FBQzNFLHVFQUF1QixrREFBa0Q7QUFDekUsMEVBQTBCLGtEQUFrRDtBQUM1RSx5RUFBeUIsa0RBQWtEO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHFDQUFxQzs7QUFFMUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx3Q0FBd0M7O0FBRTdDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssc0NBQXNDOztBQUUzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1Qzs7QUFFNUMsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDOztBQUUzQztBQUNBLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtyYW5kb21OdW1iZXIscmFuZG9tTnVtYmVyUmFuZ2V9IGZyb20gXCIuL2NvcmUvbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U1BMQVNIX1NQUklURV9BUlR9IGZyb20gXCIuL3JhaW5fYXJ0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7IH1cblxuICAgIGlzRXhwaXJlZCgpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIC8vIGNhbGxlZCB0byBjbGVhbiB1cCB0aGlzIGFuaW1hdGlvbiBhZnRlciBpdCBleHBpcmVzXG4gICAgY2xlYW51cCgpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dEFuaW1hdG9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCB0ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwMDtcbiAgICAgICAgdGhpcy5mcmFtZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmlzSW5HYW1lT2JqZWN0cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICAvLyBhZGQgdGV4dCB0byB0aGUgY2VudGVyIG9mIHRoZSBhbmltYXRpb25cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4X29mZnNldCA9IE1hdGguZmxvb3IodGV4dC5sZW5ndGggLyAyKSAtIGk7XG4gICAgICAgICAgICBjb25zdCB0aGlzQ2hhciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoY2VudGVyWCAtIHhfb2Zmc2V0LCBjZW50ZXJZLCB0ZXh0LmNoYXJBdChpKSk7IFxuICAgICAgICAgICAgLy8gc2hvdyB0aGlzIGFib3ZlIG90aGVyIGFuaW1hdGlvbnMgKFRPRE86IG1vdmUgdG8gcGFyYW1ldGVyKVxuICAgICAgICAgICAgdGhpc0NoYXIueiA9IDI7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaCh0aGlzQ2hhcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIHNldHRpbmcgY2hhcmFjdGVyIGFycmF5XG4gICAgICAgIHRoaXMuc2V0VmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNldFZpc2liaWxpdHkoaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKHggPT4geC5pc1Zpc2libGUgPSBpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5HYW1lT2JqZWN0cykge1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0cyh0aGlzLmNoYXJhY3RlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcmFtZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lRWxhcHNlZCA+PSB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkIC09IHRoaXMuZnJhbWVTcGVlZDtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJpbGl0eSghdGhpcy5pc1Zpc2libGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICAvLyB0aGlzIGFuaW1hdGlvbiBuZXZlciBnb2VzIGF3YXlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5tYXAoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbkFuaW1hdGlvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IC0xO1xuICAgICAgICB0aGlzLmNlbnRlclggPSBjZW50ZXJYO1xuICAgICAgICB0aGlzLmNlbnRlclkgPSBjZW50ZXJZO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDtcbiAgICAgICAgdGhpcy5mcmFtZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgfVxuXG4gICAgZ2V0TmV3RXhwbG9zaW9uUmluZyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMpIHtcbiAgICAgICAgbGV0IHJpbmcgPSBbXTtcbiAgICAgICAgLy8gY3JlYXRlIGV4cGxvc2lvbiBwYXJ0aWNsZXMgaW4gYSBibGFzdCByYWRpdXMgYXdheSBmcm9tIHRoZSBjZW50ZXJcbiAgICAgICAgZm9yICh2YXIgeSA9IGNlbnRlclkgLSByYWRpdXM7IHkgPD0gY2VudGVyWSArIHJhZGl1czsgeSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGNlbnRlclkgLSB5KTtcbiAgICAgICAgICAgIHZhciBudW1YcyA9IE1hdGgubWluKDIsIHJhZGl1cyAtIGRpZmZlcmVuY2UgKyAxKTsgLy8gYWRkIDEgYmVjYXVzZSB3ZSBhbHdheXMgd2FudCBhdCBsZWFzdCAxIGV4cGxvc2lvbiBvbiBlYWNoIGxpbmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1YczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSAxO1xuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGNlbnRlclggKyAoKHJhZGl1cyAtIGRpZmZlcmVuY2UpICogbXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgJyonKTtcbiAgICAgICAgICAgICAgICByaW5nLnB1c2goY2hhcmFjdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByaW5nO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdGhpcy5mcmFtZUVsYXBzZWQgKz0gdGltZUVsYXBzZWQ7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lRWxhcHNlZCA+PSB0aGlzLmZyYW1lU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkIC09IHRoaXMuZnJhbWVTcGVlZDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzKys7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY2hhcmFjdGVyc1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm1hcCh4ID0+IHgucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIGdldCBuZXcgY2hhcmFjdGVycyBhbmQgYWRkIHRoZW1cbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZ2V0TmV3RXhwbG9zaW9uUmluZyh0aGlzLmNlbnRlclgsIHRoaXMuY2VudGVyWSwgdGhpcy5yYWRpdXMpO1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0cyh0aGlzLmNoYXJhY3RlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZW50ZXJYIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclggKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WCAmJlxuICAgICAgICAgICAgdGhpcy5jZW50ZXJZIC0gKHRoaXMucmFkaXVzICogMikgPCAwICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgKyAodGhpcy5yYWRpdXMgKiAyKSA+IHRoaXMubWF4WTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKHggPT4geC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYWluRHJvcFNwbGFzaCBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgXCIwXCIpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJhaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWluZHJvcHMgPSBbXTtcbiAgICAgICAgLy8gaGlnaGVyLCB0aGUgbnVtYmVyLCBzbG93ZXIgaXQgZ29lc1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5taW5SYWluRHJvcHNQZXJXYXZlID0gMjtcbiAgICAgICAgdGhpcy5tYXhSYWluRHJvcHNQZXJXYXZlID0gNTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDE7XG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgfVxuXG4gICAgY3JlYXRlUmFpbmRyb3AoKSB7XG4gICAgICAgIGNvbnN0IHggPSByYW5kb21OdW1iZXJSYW5nZSgxLCB0aGlzLm1heFggLSAxKTtcbiAgICAgICAgY29uc3QgeSA9IDA7XG5cbiAgICAgICAgY29uc3QgZHJvcFR5cGVTcGluID0gcmFuZG9tTnVtYmVyKDEwMCk7XG4gICAgICAgIGxldCBkcm9wQ2hhciA9IFwifFwiO1xuICAgICAgICBpZiAoZHJvcFR5cGVTcGluID4gODApIHtcbiAgICAgICAgICAgIGRyb3BDaGFyID0gXCIhXCJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNob29zZSBhIHJhbmRvbSBkZXB0aCBmb3IgdGhpcyByYWluZHJvcFxuICAgICAgICBjb25zdCBkZXB0aCA9IHJhbmRvbU51bWJlcih0aGlzLmRlcHRoKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByYWluZHJvcCA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgZHJvcENoYXIpO1xuICAgICAgICByYWluZHJvcC5kZXB0aCA9IGRlcHRoO1xuICAgICAgICByZXR1cm4gcmFpbmRyb3A7XG4gICAgfVxuXG4gICAgZ2V0TmV3UmFpbmRyb3BXYXZlKCkge1xuICAgICAgICBsZXQgZHJvcHMgPSBbXTtcbiAgICAgICAgY29uc3QgbnVtRHJvcHMgPSByYW5kb21OdW1iZXJSYW5nZSh0aGlzLm1pblJhaW5Ecm9wc1BlcldhdmUsIHRoaXMubWF4UmFpbkRyb3BzUGVyV2F2ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRHJvcHM7IGkrKykge1xuICAgICAgICAgICAgZHJvcHMucHVzaCh0aGlzLmNyZWF0ZVJhaW5kcm9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcm9wcztcbiAgICB9XG5cbiAgICB0aWNrUmFpbkRyb3AocmFpbmRyb3ApIHtcbiAgICAgICAgcmFpbmRyb3Auc2V0WShyYWluZHJvcC5nZXRZKCkgKyAxKTtcbiAgICB9XG5cbiAgICByZW1vdmVFeHBpcmVkUmFpbmRyb3BzKHJhaW5kcm9wcywgbWF4WSwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJhaW5kcm9wcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHJhaW5kcm9wID0gcmFpbmRyb3BzW2ldO1xuICAgICAgICAgICAgaWYgKHJhaW5kcm9wLmdldFkoKSA9PSBtYXhZIC0gcmFpbmRyb3AuZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZnJvbSBnYW1lT2JqZWN0cyBhcyB3ZWxsIGFzIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgbGV0IGRlYWRSYWluZHJvcCA9IHJhaW5kcm9wcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGRlYWRSYWluZHJvcCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3BsYXNoID0gbmV3IFJhaW5Ecm9wU3BsYXNoKGRlYWRSYWluZHJvcC5nZXRYKCksIGRlYWRSYWluZHJvcC5nZXRZKCkgKyAxLCBTUExBU0hfU1BSSVRFX0FSVCk7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHNwbGFzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lRWxhcHNlZCAtPSB0aGlzLmZyYW1lU3BlZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG1vdmUgYWxsIHJhaW5kcm9wcyBkb3dud2FyZHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJhaW5kcm9wcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlja1JhaW5Ecm9wKHRoaXMucmFpbmRyb3BzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFeHBpcmVkUmFpbmRyb3BzKHRoaXMucmFpbmRyb3BzLCB0aGlzLm1heFksIGdhbWVPYmplY3RzKTtcblxuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IHJhaW5kcm9wIHdhdmVcbiAgICAgICAgICAgIGxldCBuZXdEcm9wcyA9IHRoaXMuZ2V0TmV3UmFpbmRyb3BXYXZlKCk7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIG5ld0Ryb3BzLm1hcCh4ID0+IHRoYXQucmFpbmRyb3BzLnB1c2goeCkpO1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0cyhuZXdEcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICB0aGlzLnJhaW5kcm9wcy5tYXAoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24udXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb24uaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXQgZnJvbSBvdXIgbGlzdFxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZWRBbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICAgICAgICAgIGV4cGlyZWRBbmltYXRpb24uY2xlYW51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMubWFwKHggPT4geC5jbGVhbnVwKCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BpeGVsQ29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7cmFuZG9tTnVtYmVyfSBmcm9tIFwiLi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vcGxheWVyX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXlDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRoaW5rQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMudGhpbmtTcGVlZCA9ICgxIC8gMS4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMTAwOyAvLyBUT0RPOiBtYWtlIHRoaXMgcGFydCBvZiBhIHNwZWNcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgMCk7XG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IFBpeGVsQ29sbGlkZXIodGhpcywgdGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLm1vdmFibGUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgdGhpbmsoKSB7XG4gICAgICAgIHZhciByYW5kb20gPSByYW5kb21OdW1iZXIoNCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAnTk9ORSc7XG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XG4gICAgICAgICAgICBjYXNlIDE6IGRpcmVjdGlvbiA9IEZBQ0lOR19MRUZUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogZGlyZWN0aW9uID0gRkFDSU5HX1JJR0hUOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzogZGlyZWN0aW9uID0gRkFDSU5HX0RPV047IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiBkaXJlY3Rpb24gPSBGQUNJTkdfVVA7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1vdmFibGUubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICBzdXBlci51cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpO1xuXG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50aGlua0NvdW50ZXIgPiB0aGlzLnRoaW5rU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gdGhpcy50aGlua0NvdW50ZXIgJSB0aGlzLnRoaW5rU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFBsYXllckNoYXJhY3Rlcikge1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZWNlaXZlRGFtYWdlKHRoaXMuZGFtYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1Byb2plY3RpbGVDaGFyYWN0ZXJ9IGZyb20gXCIuL3Byb2plY3RpbGVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL2NvcmUvc3ByaXRlLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge0ZBQ0lOR19ET1dOfSBmcm9tIFwiLi4vY29yZS9mYWNpbmcuanNcIjtcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL3RyZWFzdXJlX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtQTEFZRVJfU1BSSVRFX01BUCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQfSBmcm9tIFwiLi4vdHJlYXN1cmVfaHVudF9hcnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcblxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoUExBWUVSX1NQUklURV9NQVAsIHRoaXMsIEZBQ0lOR19ET1dOKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcblxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIG9uQW5pbWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0U3RhdGUodGhpcy5tb3ZhYmxlLmZhY2luZyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYm91bmRzLnggPSB0aGlzLmluaXRpYWxYO1xuICAgICAgICB0aGlzLmJvdW5kcy55ID0gdGhpcy5pbml0aWFsWTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5ID0gW107XG4gICAgfVxuXG4gICAgaGFuZGxlR2FtZUNvbW1hbmQoY29tbWFuZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ0ZJUkUnKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVQcm9qZWN0aWxlKGdhbWVPYmplY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgVHJlYXN1cmVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5LnB1c2god2l0aE9iamVjdC50cmVhc3VyZVR5cGUpO1xuICAgICAgICAgICAgd2l0aE9iamVjdC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG5cbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZUFtb3VudCkge1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2VBbW91bnQ7XG4gICAgfVxuXG4gICAgZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZUNoYXJhY3Rlcih0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCksIHRoaXMubW92YWJsZS5mYWNpbmcsIDgsIFBST0pFQ1RJTEVfU1BSSVRFX01BUCk7XG4gICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdChwcm9qZWN0aWxlKTtcbiAgICB9XG5cbiAgICBoYXNUcmVhc3VyZSh0cmVhc3VyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52ZW50b3J5LmZpbHRlcih0ID0+IHQgPT0gdHJlYXN1cmVUeXBlKS5sZW5ndGggPiAwO1xuICAgIH1cbn0iLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BpeGVsQ29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge01vdmFibGV9IGZyb20gXCIuLi9jb3JlL21vdmFibGUuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7V2FsbENoYXJhY3Rlcn0gZnJvbSBcIi4vd2FsbF9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGVDaGFyYWN0ZXIgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSwgZGlyZWN0aW9uLCBtYXhEaXN0YW5jZSwgc3ByaXRlTWFwKSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQgPSAwO1xuICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gbWF4RGlzdGFuY2U7XG4gICAgICAgIHRoaXMudHJhdmVsU3BlZWQgPSAoMSAvIDYuMCkgKiAxMDAwO1xuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCB1cCBvdXIgc3ByaXRlXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShzcHJpdGVNYXAsIHRoaXMsIGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdXAgb3VyIGFiaWxpdHkgdG8gbW92ZVxuICAgICAgICB0aGlzLm1vdmFibGUgPSBuZXcgTW92YWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGNvbGxpc2lvbnMgd2l0aCBvYmplY3RzXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgUGl4ZWxDb2xsaWRlcih0aGlzLCB0aGlzLnNwcml0ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpc3RhbmNlVHJhdmVsZWQrKztcbiAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA+PSB0aGlzLm1heERpc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50cmF2ZWxDb3VudGVyID0gdGhpcy50cmF2ZWxDb3VudGVyICsgdGltZUVsYXBzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudHJhdmVsQ291bnRlciA+PSB0aGlzLnRyYXZlbFNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgLSB0aGlzLnRyYXZlbFNwZWVkO1xuICAgICAgICAgICAgdGhpcy50aGluaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlkZSh3aXRoT2JqZWN0KSB7XG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgV2FsbENoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0NoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgIHN1cGVyKGluaXRpYWxYLCBpbml0aWFsWSk7XG4gICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgfVxuIFxuICAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ltYm9sO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgIH1cbiB9IiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuLi9jb3JlL2NvbGxpZGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVhc3VyZUNoYXJhY3RlciBleHRlbmRzIFN0YXRpY0NoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wsIHRyZWFzdXJlVHlwZSkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpO1xuICAgICAgICAgXG4gICAgICAgICB0aGlzLnRyZWFzdXJlVHlwZSA9IHRyZWFzdXJlVHlwZTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgIH1cbiB9XG4gIiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2FsbENoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzeW1ib2wpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIGlmICh0aGlzLmdldFgoKSA9PSBjb2wgJiYgdGhpcy5nZXRZKCkgPT0gcm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG4vLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIHJlbmRlcmFibGUgZ2FtZSBvYmplY3RcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IGluaXRpYWxYO1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gaW5pdGlhbFk7XG4gICAgICAgIHRoaXMueiA9IDA7IC8vIGRlZmF1bHQgdG8geiBheGlzIHBvcyBiZWluZyAwXG4gICAgICAgIHRoaXMuYm91bmRzID0gbmV3IFJlY3RhbmdsZShpbml0aWFsWCwgaW5pdGlhbFksIDEsIDEpO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNQaHlzaWNhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25MaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHNldFgobmV3WCkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WCAtIHRoaXMuY3VycmVudFg7XG4gICAgICAgIHRoaXMuY3VycmVudFggKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueCArPSBkaWZmO1xuICAgIH1cblxuICAgIHNldFkobmV3WSkge1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3WSAtIHRoaXMuY3VycmVudFk7XG4gICAgICAgIHRoaXMuY3VycmVudFkgKz0gZGlmZjtcbiAgICAgICAgdGhpcy5ib3VuZHMueSArPSBkaWZmO1xuICAgIH1cblxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRYO1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRZO1xuICAgIH1cblxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRzO1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBvbkFuaW1hdGVkKCkge1xuICAgICAgICB0aGlzLm5lZWRzUmVkcmF3ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICB9XG59IiwiaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICByZXR1cm4gb3RoZXJDb2xsaWRlci5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE9iamVjdDtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4LmlzUGh5c2ljYWwgJiZcbiAgICAgICAgICAgIHggIT09IHBhcmVudCAmJlxuICAgICAgICAgICAgeC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHBhcmVudC5nZXRCb3VuZHMoKSlcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjb2xsaXNpb25PYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbGxpZGUgd2l0aCBlYWNoIG90aGVyXG4gICAgICAgICAgICBjb2xsaXNpb25PYmplY3RzLm1hcChvYmogPT4gcGFyZW50LmNvbGxpZGUob2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50T2JqZWN0O1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgeCA9PiB4IGluc3RhbmNlb2YgQ29sbGlkZXIgJiZcbiAgICAgICAgICAgIHggIT09IHRoYXQgJiZcbiAgICAgICAgICAgIHguaXNDb2xsaXNpb24odGhhdCkgJiZcbiAgICAgICAgICAgIHRoYXQuaXNDb2xsaXNpb24oeClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29sbGlkZSB3aXRoIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbk9iamVjdHMubWFwKG9iaiA9PiBwYXJlbnQuY29sbGlkZShvYmoucGFyZW50T2JqZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQaXhlbENvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCwgc3ByaXRlKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudE9iamVjdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlO1xuICAgIH1cblxuICAgIGNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXMoc3ByaXRlMSwgc3ByaXRlMikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIGlzUGl4ZWwoc3ByaXRlMi5nZXRDaGFyYWN0ZXIoeCwgeSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUoc3ByaXRlMSwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zdCBwYXJlbnRCb3VuZHMgPSBzcHJpdGUxLmdldEJvdW5kcygpO1xuICAgICAgICBjb25zdCBpc1BpeGVsID0gZnVuY3Rpb24oY2hhcikgeyByZXR1cm4gY2hhciAhPSBudWxsICYmIGNoYXIgIT0gJyAnOyB9O1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwYXJlbnRCb3VuZHMuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgcGFyZW50Qm91bmRzLndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBjb2wgKyBzcHJpdGUxLmdldFgoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gcm93ICsgc3ByaXRlMS5nZXRZKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzUGl4ZWwoc3ByaXRlMS5nZXRDaGFyYWN0ZXIoeCwgeSkpICYmXG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29sbGlkZXIucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmludGVyc2VjdHNQb2ludCh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDb2xsaXNpb24ob3RoZXJDb2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXJDb2xsaWRlciBpbnN0YW5jZW9mIFBpeGVsQ29sbGlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGl4ZWxDb2xsaXNvbl8yX1Nwcml0ZXModGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIuc3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1BpeGVsQ29sbGlzb25fMV9TcHJpdGUodGhpcy5zcHJpdGUsIG90aGVyQ29sbGlkZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgRkFDSU5HX1VQID0gJ1UnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19MRUZUID0gJ0wnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19ET1dOID0gJ0QnO1xuZXhwb3J0IGNvbnN0IEZBQ0lOR19SSUdIVCA9ICdSJzsiLCJpbXBvcnQge1RocmVhZH0gZnJvbSBcIi4vdGhyZWFkLmpzXCI7XG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tIFwiLi9jb2xsaWRlci5qc1wiO1xuaW1wb3J0IHtHYW1lT2JqZWN0c30gZnJvbSBcIi4vZ2FtZV9vYmplY3RzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sYXN0a2V5UHJlc3NlcyA9IFtdO1xuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGhyZWFkRHJhdyA9IG51bGw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gbmV3IEdhbWVPYmplY3RzKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSh1cGRhdGVGdW5jdGlvbiwgZHJhd0Z1bmN0aW9uLCByZW5kZXJlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZSA9IG5ldyBUaHJlYWQodXBkYXRlRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnRocmVhZERyYXcgPSBuZXcgVGhyZWFkKGRyYXdGdW5jdGlvbik7XG5cbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUuc3RhcnQob3B0aW9uc1sndXBkYXRlRlBTJ10pOyAvL3VwZGF0ZSBYIHRpbWVzIHBlciBzZWNvbmRcbiAgICAgICAgdGhpcy50aHJlYWREcmF3LnN0YXJ0KG9wdGlvbnNbJ2RyYXdGUFMnXSk7IC8vZHJhdyBYIHRpbWVzIHBlciBzZWNvbmRcblxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0a2V5UHJlc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbGlzdGVuIHRvIHRoZSBicm93c2VyIGtleXNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTsgICAgXG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgLy8gc3RvcHBpbmcgdGhyZWFkcyBhbmQgcmVtb3ZpbmcgYWxsIGdhbWVPYmplY3RzIHNob3VsZCBiZSBlbm91Z2hcbiAgICAgICAgdGhpcy50aHJlYWREcmF3LnN0b3AoKTtcbiAgICAgICAgdGhpcy50aHJlYWRVcGRhdGUuc3RvcCgpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcblxuICAgICAgICAvLyBvbmUgbW9yZSByZW5kZXIgdG8gY2xlYXIgZXZlcnl0aGluZ1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBnZXRMYXN0S2V5cHJlc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RrZXlQcmVzc2VzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0a2V5UHJlc3Nlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdmVtZW50KG9iaiwgaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgbGV0IGlzT2JzdHJ1Y3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob2JqLm9iZXlzUGh5c2ljcykge1xuICAgICAgICAgICAgbGV0IG5ld0JvdW5kcyA9IG9iai5nZXRCb3VuZHMoKS5jb3B5KCk7XG4gICAgICAgICAgICBuZXdCb3VuZHMueCArPSBpbnRlbmRlZFBvc2l0aW9uLnggLSBvYmouZ2V0WCgpO1xuICAgICAgICAgICAgbmV3Qm91bmRzLnkgKz0gaW50ZW5kZWRQb3NpdGlvbi55IC0gb2JqLmdldFkoKTtcbiAgICAgICAgICAgIGlzT2JzdHJ1Y3RlZCA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKGMgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyAhPT0gb2JqICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuaXNQaHlzaWNhbCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmdldEJvdW5kcygpLmludGVyc2VjdHMobmV3Qm91bmRzKSkubGVuZ3RoID4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNPYnN0cnVjdGVkKSB7XG4gICAgICAgICAgICBvYmouc2V0WChpbnRlbmRlZFBvc2l0aW9uLngpO1xuICAgICAgICAgICAgb2JqLnNldFkoaW50ZW5kZWRQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iai5pbnRlbmRlZFBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgLy8gdXBkYXRlIGV2ZXJ5dGhpbmdcbiAgICAgICAgZ2FtZU9iamVjdHMub2JqZWN0cy5tYXAoeCA9PiB4LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkKSk7XG5cbiAgICAgICAgLy8gaGFuZGxlIG1vdmVtZW50IGludGVudGlvbnNcbiAgICAgICAgZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4LmludGVuZGVkUG9zaXRpb24gIT0gbnVsbCkubWFwKHggPT4gdGhpcy5oYW5kbGVNb3ZlbWVudCh4LCB4LmludGVuZGVkUG9zaXRpb24sIGdhbWVPYmplY3RzKSk7XG5cbiAgICAgICAgLy8gY2hlY2sgYWxsIGNvbGxpc2lvbnNcbiAgICAgICAgY29uc3QgY29sbGlkZXJPYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4IGluc3RhbmNlb2YgQ29sbGlkZXIpO1xuXG4gICAgICAgIGNvbGxpZGVyT2JqZWN0cy5tYXAoeCA9PiB4LmNoZWNrUGh5c2ljYWxDb2xsaXNpb24oZ2FtZU9iamVjdHMpKTtcbiAgICAgICAgY29sbGlkZXJPYmplY3RzLm1hcCh4ID0+IHguY2hlY2tDb2xsaWRlckNvbGxpc2lvbihnYW1lT2JqZWN0cykpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBldmVyeXRoaW5nIHRoYXQgbmVlZHMgdG8gYmUgcmVtb3ZlZFxuICAgICAgICB2YXIgcmVtb3ZhYmxlT2JqZWN0cyA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKHggPT4geC5yZW1vdmVGcm9tR2FtZU9iamVjdHMpO1xuICAgICAgICBpZiAocmVtb3ZhYmxlT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZW1vdmFibGVPYmplY3RzLm1hcCh4ID0+IGdhbWVPYmplY3RzLnJlbW92ZU9iamVjdCh4KSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldElzRGlydHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgR2FtZU9iamVjdHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5wdXNoKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBvYmouY2hpbGRyZW4gJiYgaSA8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGRPYmplY3Qob2JqLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZE9iamVjdHMob2JqTGlzdCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgb2JqTGlzdC5tYXAoeCA9PiB0aGF0LmFkZE9iamVjdCh4KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iaikge1xuICAgICAgICAvLyByZWN1cnNpdmVseSBmaWx0ZXIgb3V0IHRoZSBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGluIGFuZCBpdHMgY2hpbGRyZW5cbiAgICAgICAgdGhpcy5vYmplY3RzID0gdGhpcy5vYmplY3RzLmZpbHRlcih4ID0+IHggIT09IG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBvYmouY2hpbGRyZW4gJiYgaSA8IG9iai5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVPYmplY3Qob2JqLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdHMob2JqTGlzdCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgb2JqTGlzdC5tYXAoeCA9PiB0aGF0LnJlbW92ZU9iamVjdCh4KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21OdW1iZXJSYW5nZShtaW4sIG1heCkge1xuICAgIGNvbnN0IGRpZmYgPSBtYXggLSBtaW47XG4gICAgY29uc3QgYWRkaXRpb24gPSBNYXRoLnJhbmRvbSgpICogZGlmZjtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBhZGRpdGlvbik7ICAgIFxufSIsImltcG9ydCB7RkFDSU5HX1VQLCBGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVH0gZnJvbSBcIi4vZmFjaW5nLmpzXCI7XG5pbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmFibGUgZXh0ZW5kcyBVcGRhdGVhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRPYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLmZhY2luZyA9IEZBQ0lOR19ET1dOO1xuICAgIH1cblxuICAgIHNldEZhY2luZyhuZXdGYWNpbmcpIHtcbiAgICAgICAgaWYgKG5ld0ZhY2luZyAhPSB0aGlzLmZhY2luZykge1xuICAgICAgICAgICAgdGhpcy5mYWNpbmcgPSBuZXdGYWNpbmc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGludGVuZGVkWCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgdmFyIGludGVuZGVkWSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKTtcblxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRkFDSU5HX0xFRlQ6IFxuICAgICAgICAgICAgaW50ZW5kZWRYLS07IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0xFRlQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfUklHSFQ6XG4gICAgICAgICAgICBpbnRlbmRlZFgrKzsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfUklHSFQpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfVVA6XG4gICAgICAgICAgICBpbnRlbmRlZFktLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfVVApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBGQUNJTkdfRE9XTjpcbiAgICAgICAgICAgIGludGVuZGVkWSsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19ET1dOKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBtdXN0IGJlIHNvbWUgc29ydCBvZiBib2d1cyBtb3ZlbWVudC4gZG9uJ3QgaGFuZGxlLlxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5pbnRlbmRlZFBvc2l0aW9uID0ge3g6IGludGVuZGVkWCwgeTogaW50ZW5kZWRZfTtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3Qub25BbmltYXRlZCgpOyAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzUG9pbnQoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgICAgICAgIHggPj0gdGhpcy54ICYmXG4gICAgICAgICAgICB5IDwgdGhpcy55ICsgdGhpcy5oZWlnaHQgJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0cyhyZWN0YW5nbGUpIHtcbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMud2lkdGggPD0gcmVjdGFuZ2xlLnggfHxcbiAgICAgICAgICAgIHRoaXMueCA+PSByZWN0YW5nbGUueCArIHJlY3RhbmdsZS53aWR0aCB8fFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPD0gcmVjdGFuZ2xlLnkgfHxcbiAgICAgICAgICAgIHRoaXMueSA+PSByZWN0YW5nbGUueSArIHJlY3RhbmdsZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHZpZXdXLCB2aWV3SCk7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xlYXJTY3JlZW4oKSB7XG4gICAgICAgIC8vIGNsZWFyIHRoZSBzY3JlZW4gYW5kIHNldCBjdXJzb3IgYXQgMCwwXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBpc09uU2NyZWVuKGNoYXJhY3Rlcikge1xuICAgICAgICByZXR1cm4gY2hhcmFjdGVyLmlzVmlzaWJsZSAmJiBjaGFyYWN0ZXIuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyh0aGlzLnZpZXdwb3J0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhpcyB0byBkbyBzb21ldGhpbmcgdXNlZnVsXG4gICAgfVxuXG4gICAgZ2V0U3BhY2VDaGFyYWN0ZXIoKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgZGlmZmVyZW50IGRlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnRcbiAgICAgICAgcmV0dXJuICcgJztcbiAgICB9XG5cbiAgICBnZXRJc0RpcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0RpcnR5OyAgIFxuICAgIH1cblxuICAgIHNldElzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hlY2tSZWRyYXcoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cykuZmlsdGVyKGMgPT4gYy5uZWVkc1JlZHJhdykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJc0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHJlbmRlcmFibGUgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcihjID0+IGMuaXNWaXNpYmxlICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaXNPblNjcmVlbihjKSk7XG4gICAgICAgIHJldHVybiByZW5kZXJhYmxlO1xuICAgIH1cblxuICAgIGNlbnRlclZpZXdwb3J0T24oY2hhcmFjdGVyLCBtYXApIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC54ID0gTWF0aC5taW4obWFwLndpZHRoIC0gdGhpcy52aWV3cG9ydC53aWR0aCwgTWF0aC5tYXgoMCwgY2hhcmFjdGVyLmdldFgoKSAtICh0aGlzLnZpZXdwb3J0LndpZHRoIC8gMikpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC55ID0gTWF0aC5taW4obWFwLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0LCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WSgpIC0gKHRoaXMudmlld3BvcnQuaGVpZ2h0IC8gMikpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zb2xlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iodmlld1csIHZpZXdIKSB7XG4gICAgICAgIHN1cGVyKHZpZXdXLCB2aWV3SCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgdmFyIHJlbmRlcmFibGVPYmplY3RzID0gdGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKTtcbiAgICAgICAgLy8gcmV2ZXJzZSBzb3J0IGJ5IHogYXhpcywgZ3JhYiBoaWdoZXN0XG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLnNvcnQoKGEsIGIpID0+IGIueiAtIGEueik7XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciByb3cgPSB0aGlzLnZpZXdwb3J0Lnk7IHJvdyA8IHRoaXMudmlld3BvcnQueSArIHRoaXMudmlld3BvcnQuaGVpZ2h0OyByb3crKykge1xuICAgICAgICAgICAgZm9yICh2YXIgY29sID0gdGhpcy52aWV3cG9ydC54OyBjb2wgPCB0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJzID0gcmVuZGVyYWJsZU9iamVjdHMuZmlsdGVyKGMgPT4gYy5nZXRDaGFyYWN0ZXIpLm1hcChjID0+IGMuZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSkuZmlsdGVyKGMgPT4gYyAhPSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArICdcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWxSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgc3VwZXIodmlld1csIHZpZXdIKTtcbiAgICB9XG5cbiAgICBnZXRTcGFjZUNoYXJhY3RlcigpIHtcbiAgICAgICAgLy8gaHRtbCBzdHJpcHMgb3V0IHJlZ3VsYXIgc3BhY2VzXG4gICAgICAgIHJldHVybiAnJm5ic3A7JztcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICc8cD4nO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZU9iamVjdHMgPSB0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpO1xuICAgICAgICAvLyByZXZlcnNlIHNvcnQgYnkgeiBheGlzLCBncmFiIGhpZ2hlc3RcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMuc29ydCgoYSwgYikgPT4gYi56IC0gYS56KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIHJvdyA9IHRoaXMudmlld3BvcnQueTsgcm93IDwgdGhpcy52aWV3cG9ydC55ICsgdGhpcy52aWV3cG9ydC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSB0aGlzLnZpZXdwb3J0Lng7IGNvbCA8IHRoaXMudmlld3BvcnQueCArIHRoaXMudmlld3BvcnQud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSByZW5kZXJhYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLmdldENoYXJhY3RlcikubWFwKGMgPT4gYy5nZXRDaGFyYWN0ZXIoY29sLCByb3cpKS5maWx0ZXIoYyA9PiBjICE9IG51bGwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXJhY3RlcnNbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMuZ2V0U3BhY2VDaGFyYWN0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXQgKz0gJzwvcD48cD4nO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSAnPHA+JztcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmlubmVySFRNTCA9IG91dHB1dDtcblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVkcmF3IGZsYWcgb24gYWxsIG9iamVjdHMgd2Ugd2VyZSBhYmxlIHRvIHJlbmRlclxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5tYXAoYyA9PiBjLm5lZWRzUmVkcmF3ID0gZmFsc2UpO1xuICAgIH1cbn0iLCJpbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNwcml0ZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIC8vIGZvcm1hdCBvZiBhIHNwcml0ZU1hcDpcbiAgICAvLyB7XG4gICAgLy8gICAgIFwiPHN0YXRlPlwiOiBbeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSxcbiAgICAvLyAgICAgICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDx0aW1lSW5NaWxsaXNlYz4sIFwiY2hhcmFjdGVyc1wiOiBbPHJvdzFzdHJpbmc+LCA8cm93MnN0cmluZz4sIGV0Y10gfSBdXG4gICAgLy8gfVxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZU1hcCwgcGFyZW50T2JqZWN0LCBpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3ByaXRlTWFwID0gc3ByaXRlTWFwO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgdGhpcy5leHBpcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRPYmplY3QuYm91bmRzO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgICAgICB0aGlzLnN0YXRlRWxhcHNlZCA9IHRoaXMuc3RhdGVFbGFwc2VkICsgdGltZUVsYXBzZWQ7XG4gICAgICAgIFxuICAgICAgICB2YXIgcHJldkZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudEZyYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lICE9IHByZXZGcmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWUgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNpemUoKSB7XG4gICAgICAgIGxldCBuZXdXID0gMDtcbiAgICAgICAgbGV0IG5ld0ggPSAwO1xuXG4gICAgICAgIGlmICghdGhpcy5leHBpcmVkKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IHRoaXMuZnJhbWU7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAgICAgdmFyIGZpcnN0Um93ID0gOTk5OTk5O1xuICAgICAgICAgICAgdmFyIGxhc3RSb3cgPSAwO1xuICAgICAgICAgICAgdmFyIGZpcnN0Q29sID0gOTk5OTk5O1xuICAgICAgICAgICAgdmFyIGxhc3RDb2wgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBjaGFyYWN0ZXJSb3dzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sID0gY2hhcmFjdGVyUm93c1tyb3ddLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICYmIHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0Um93ID0gTWF0aC5taW4oZmlyc3RSb3csIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Um93ID0gTWF0aC5tYXgobGFzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0Q29sID0gTWF0aC5taW4oZmlyc3RDb2wsIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0Q29sID0gTWF0aC5tYXgobGFzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBmZWVscyBkaXJ0eVxuICAgICAgICAgICAgbmV3VyA9IGxhc3RDb2wgLSBmaXJzdENvbCArIDE7XG4gICAgICAgICAgICBuZXdIID0gbGFzdFJvdyAtIGZpcnN0Um93ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoID0gbmV3VztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0ID0gbmV3SDtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImJjZW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKSAtIE1hdGguZmxvb3IobmV3VyAvIDIpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKSAtIE1hdGguZmxvb3IobmV3SCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCkgLSBNYXRoLmZsb29yKG5ld1cgLyAyKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLnkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCkgLSBNYXRoLmZsb29yKG5ld0ggLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaXplKCk7XG4gICAgfVxuXG4gICAgZ2V0WCgpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIiB8fCB0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHggLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS53aWR0aCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGdldFkoKSB7XG4gICAgICAgIGxldCB5ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpOyBcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImJjZW50ZXJcIikge1xuICAgICAgICAgICAgeSAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIHkgLT0gTWF0aC5mbG9vcih0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVDdXJyZW50RnJhbWUoKSB7XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgdG90YWxUaW1lID0gc3ByaXRlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBjdXJWYWwpIHsgcmV0dXJuIGFjYyArIGN1clZhbFtcImRpc3BsYXlUaW1lXCJdOyB9LCAwKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnN0YXRlRWxhcHNlZCA+IHRvdGFsVGltZSAmJiB0aGlzLnNwcml0ZU1hcC5sb29wID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gXG5cbiAgICAgICAgdmFyIGxlZnRvdmVyID0gdGhpcy5zdGF0ZUVsYXBzZWQgJSB0b3RhbFRpbWU7XG4gICAgICAgIHZhciBmcmFtZSA9IDA7XG4gICAgICAgIHZhciB0aW1lQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZyYW1lID0gaTtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlcGxhY2UgdGhpcyB3aXRoIGEgcmVkdWNlKClcbiAgICAgICAgICAgIHZhciBkaXNwbGF5VGltZSA9IHNwcml0ZXNbaV1bXCJkaXNwbGF5VGltZVwiXTtcbiAgICAgICAgICAgIGlmICh0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZSA+IGxlZnRvdmVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lQWNjdW11bGF0b3IgPSB0aW1lQWNjdW11bGF0b3IgKyBkaXNwbGF5VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFgoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5nZXRYKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNoYXJhY3RlclJvd3MgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV1bdGhpcy5mcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyQ29sID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiY2VudGVyXCIgfHwgdGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiYmNlbnRlclwiKSB7XG4gICAgICAgICAgICAvLyBhc3N1bWVzIHRoZSBmaXJzdCByb3cgaXMgdGhlIHNhbWUgd2lkdGggYXMgdGhlIG90aGVyIGZyYW1lc1xuICAgICAgICAgICAgb3VyQ29sID0gb3VyQ29sIC0gTWF0aC5mbG9vcihjaGFyYWN0ZXJSb3dzWzBdLmxlbmd0aCAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91ckNvbDtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JlZFkoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5nZXRZKClcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiYmNlbnRlclwiKSB7XG4gICAgICAgICAgICBvdXJSb3cgPSBvdXJSb3cgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgb3VyUm93ID0gb3VyUm93IC0gTWF0aC5mbG9vcihjaGFyYWN0ZXJSb3dzLmxlbmd0aCAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91clJvdztcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3ByaXRlcyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXTtcbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgdmFyIGNoYXJhY3RlclJvd3MgPSBzcHJpdGVzW2ZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBub3Rpb24gb2YgdGhlIG1hcCBsb2NhdGlvbiBhbmQgbG9jYWxpemUgdG8gdGhpcyBzcHJpdGUgb25seVxuICAgICAgICB2YXIgb3VyUm93ID0gcm93IC0gdGhpcy5nZXRBbmNob3JlZFkoKTtcbiAgICAgICAgdmFyIG91ckNvbCA9IGNvbCAtIHRoaXMuZ2V0QW5jaG9yZWRYKCk7XG5cbiAgICAgICAgaWYgKG91clJvdyA+PSAwICYmIFxuICAgICAgICAgICAgb3VyQ29sID49IDAgJiYgXG4gICAgICAgICAgICBvdXJSb3cgPCBjaGFyYWN0ZXJSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgb3VyQ29sIDwgY2hhcmFjdGVyUm93c1tvdXJSb3ddLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW291clJvd10uY2hhckF0KG91ckNvbCk7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbCAhPSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiLyoqXG4gKiBBc3N1bWVzIHlvdSBhcmUgc3RhcnRpbmcgb24gYSBcbiAqL1xuZnVuY3Rpb24gZ2V0V29yZExlbmd0aCh0ZXh0LCBzdGFydEluZGV4KSB7XG4gICAgbGV0IGkgPSBzdGFydEluZGV4O1xuICAgIGxldCB3b3JkTGVuZ3RoID0gMTtcbiAgICB3aGlsZSAoaSA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBpZiAoaSA9PSB0ZXh0Lmxlbmd0aCB8fCB0ZXh0W2ldID09ICdcXG4nIHx8IHRleHRbaV0gPT0gJyAnKSB7XG4gICAgICAgICAgICB3b3JkTGVuZ3RoID0gaSAtIHN0YXJ0SW5kZXg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiB3b3JkTGVuZ3RoO1xufVxuXG4vKipcbiAqIFRha2VzIGluIGEgc3RyaW5nIGFuZCBhIHdyYXAgd2lkdGggYW5kIHNwbGl0cyB0aGUgc3RyaW5nIGludG9cbiAqIGFuIGFycmF5IG9mIHRleHQgc3Vic3RyaW5ncyB0aGF0IGFyZSBhbGwgZ3VhcmFudGVlZCB0byBiZSBsZXNzIHRoYW4gdGhlIHdyYXAgd2lkdGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwVGV4dCh0ZXh0LCB3cmFwV2lkdGgpIHtcbiAgICBsZXQgcm93cyA9IFtdO1xuICAgIGxldCBsYXN0Um93U3RhcnQgPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICBpZiAoaSA9PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY2FzZTogZmluYWwgbGV0dGVyXG4gICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJDaGFyID0gdGV4dFtpXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJDaGFyID09ICdcXG4nKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBsaW5lIGJyZWFrXG4gICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1ckNoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAvLyBsb29rIGFoZWFkIGF0IGxlbmd0aCBvZiB0aGlzIHdvcmRcbiAgICAgICAgICAgIGNvbnN0IHdvcmRMZW5ndGggPSBnZXRXb3JkTGVuZ3RoKHRleHQsIGkpO1xuXG4gICAgICAgICAgICBpZiAoaSArIHdvcmRMZW5ndGggLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogdGhpcyB3b3JkIHdvbid0IGZpdFxuICAgICAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgICAgICBsYXN0Um93U3RhcnQgPSBpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgZ29vZCwgc3RhcnQgZmluZGluZyB0aGUgbmV4dCB3b3JkXG4gICAgICAgICAgICAgICAgaSArPSB3b3JkTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgaWYgKGkgLSBsYXN0Um93U3RhcnQgPj0gd3JhcFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FzZTogd2UgcmFuIG91dCBvZiBsaW5lIHdpZHRoXG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvd3M7XG59IiwiZXhwb3J0IGNsYXNzIFRocmVhZCB7XG4gICAgY29uc3RydWN0b3IoZnVuY3Rpb25Qb2ludGVyKSB7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25Qb2ludGVyID0gZnVuY3Rpb25Qb2ludGVyO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KGRlc2lyZWRGcmFtZXJhdGUpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGF0LmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHZhciBtaW5pbXVtTWlsbHNlY1BlckZyYW1lID0gMTAwMC8gZGVzaXJlZEZyYW1lcmF0ZTtcblxuICAgICAgICB2YXIgaW50ZXJuYWxSdW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzUnVubmluZykge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoYXQuZnVuY3Rpb25Qb2ludGVyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGFmdGVyID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBjYWxsIHRha2VzIGEgd2hpbGUsIHJlZHVjZSB0aGUgZGVsYXkgdW50aWwgdGhlIG5leHQgZXhlY3V0ZVxuICAgICAgICAgICAgICAgIHZhciBuZXh0RGVsYXkgPSBNYXRoLm1heCgwLCBtaW5pbXVtTWlsbHNlY1BlckZyYW1lIC0gKGFmdGVyIC0gbm93KSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCBuZXh0RGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGluaXRpYWwgY2FsbFxuICAgICAgICBzZXRUaW1lb3V0KGludGVybmFsUnVuLCAwKTsgXG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG59IiwiLy8gQmFzZSBjbGFzcyBmb3IgZXZlcnkgdHlwZSBvZiBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCkge1xuICAgIH1cbn0iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBLZXlNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGdldEdhbWVDb21tYW5kKGtleSkge1xuICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgIGNhc2UgJ2EnOiBcbiAgICAgICAgY2FzZSBcIjY1XCI6XG4gICAgICAgIGNhc2UgXCIzN1wiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19MRUZUO1xuXG4gICAgICAgIGNhc2UgJ2UnOiBcbiAgICAgICAgY2FzZSAnZCc6IFxuICAgICAgICBjYXNlIFwiNjhcIjpcbiAgICAgICAgY2FzZSBcIjM5XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1JJR0hUO1xuXG4gICAgICAgIGNhc2UgJywnOiBcbiAgICAgICAgY2FzZSAndyc6IFxuICAgICAgICBjYXNlIFwiODdcIjpcbiAgICAgICAgY2FzZSBcIjM4XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX1VQO1xuXG4gICAgICAgIGNhc2UgJ28nOlxuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgY2FzZSBcIjgzXCI6XG4gICAgICAgIGNhc2UgXCI0MFwiOlxuICAgICAgICAgICAgcmV0dXJuIEZBQ0lOR19ET1dOO1xuXG4gICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBjYXNlICc2Nyc6XG4gICAgICAgICAgICByZXR1cm4gJ1FVSVQnO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICBjYXNlICc3MCc6XG4gICAgICAgIGNhc2UgJzMyJzpcbiAgICAgICAgICAgIHJldHVybiAnRklSRSc7XG5cbiAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgIGNhc2UgJzcyJzpcbiAgICAgICAgICAgIHJldHVybiAnSEVMUCc7XG4gICAgICAgIFxuICAgICAgICBjYXNlICcxMyc6XG4gICAgICAgICAgICByZXR1cm4gJ0VOVEVSJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQge1RyZWFzdXJlSHVudEdhbWV9IGZyb20gXCIuL3RyZWFzdXJlLWh1bnQuanNcIjtcbmltcG9ydCB7TWFrZUl0UmFpbkdhbWV9IGZyb20gXCIuL21ha2UtaXQtcmFpbi5qc1wiO1xuXG4vLyBPcHRpb25zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiB0aGUgZ2FtZVxudmFyIHRyZWFzdXJlSHVudE9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiBmYWxzZSxcbiAgICAnZHJhd0ZQUyc6IDEwLFxuICAgICd1cGRhdGVGUFMnOiAxMCxcbiAgICAndmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtaW5WaWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21heFZpZXdwb3J0V2lkdGgnOiA2MCxcbiAgICAndmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWluVmlld3BvcnRIZWlnaHQnOiAxNCxcbiAgICAnbWF4Vmlld3BvcnRIZWlnaHQnOiAyMCxcbiAgICAnbnVtRW5lbWllcyc6IDEwXG59O1xuXG52YXIgcmFpbk9wdGlvbnMgPSB7XG4gICAgJ3BsYXlJbkJyb3dzZXInOiB0cnVlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxufTtcblxuZnVuY3Rpb24gcnVuKCkgeyAgXG4gICAgbGV0IGlzUmFpbmluZyA9IGZhbHNlO1xuICAgIHZhciByYWluR2FtZSA9IG5ldyBNYWtlSXRSYWluR2FtZSgpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFrZWl0cmFpblwiKTtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICghaXNSYWluaW5nKSB7XG4gICAgICAgICAgICBpc1JhaW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmFpbkdhbWUuaW5pdGlhbGl6ZShyYWluT3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1JhaW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJhaW5HYW1lLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMgd2lsbCBydW4gaW4gdGhlIGNvbnNvbGVcbiAgICB2YXIgdGhHYW1lID0gbmV3IFRyZWFzdXJlSHVudEdhbWUoKTtcbiAgICB0aEdhbWUuaW5pdGlhbGl6ZSh0cmVhc3VyZUh1bnRPcHRpb25zKTtcbn1cblxucnVuKCk7XG4iLCJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vY29yZS9nYW1lLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFJhaW5BbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvbnMuanNcIjtcbmltcG9ydCB7R2FtZU9iamVjdHN9IGZyb20gXCIuL2NvcmUvZ2FtZV9vYmplY3RzLmpzXCI7XG5pbXBvcnQge0h0bWxSZW5kZXJlciwgQ29uc29sZVJlbmRlcmVyfSBmcm9tIFwiLi9jb3JlL3JlbmRlcmVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWtlSXRSYWluR2FtZSBleHRlbmRzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzZXQgdXAgYmFzaWMgZ2FtZSBvYmplY3RzXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmNsZWFyQW5pbWF0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFJhaW5BbmltYXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcblxuICAgICAgICAvLyBmaXJzdCBkcmF3IG9mIHJlbmRlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vIFRPRE86IG1ha2UgdGhlIHJhaW4gZ28gbGVmdCBvciByaWdodD9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgLy8gcmFuZG9tIGd1ZXNzIHRoYXQgaXRzIDEwIHBpeGVscyBwZXIgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBvdmVycmlkZSBvcHRpb25zIGZvciBub3dcbiAgICAgICAgICAgIG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyA0LjIpO1xuICAgICAgICAgICAgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gNDUpO1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zWyd2aWV3cG9ydFdpZHRoJ107XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXTtcblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCByZW5kZXJlciwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gbWFwRGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcERhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TWFwQ2hhcmFjdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBsZXZlbFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG9iai5pbWFnZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSByb3cgKyBvYmoueTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U3RyID0gb2JqLmltYWdlW3Jvd107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgcm93U3RyLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBvYmoueCArIGNvbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNDaGFyID0gcm93U3RyLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0NoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB5LCB0aGlzQ2hhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIGxlZnQvcmlnaHQgbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3RlcigwLCB5LCBcInxcIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIodGhpcy53aWR0aCAtIDEsIHksIFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gdG9wL2JvdHRvbSBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgMCwgXCItXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHRoaXMuaGVpZ2h0IC0gMSwgXCItXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgfVxufSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FDVElPTl9OT05FfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi4vY29yZS90ZXh0X2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uLCBzcGFjZUNoYXIpIHtcbiAgICAgICAgdGhpcy5zcGVjID0gbWVudVNwZWM7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnpQb3NpdGlvbiA9IHpQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc3BhY2VDaGFyID0gc3BhY2VDaGFyO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gdGhpcy5zcGFjZUNoYXIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzW3RoaXMuc2VsZWN0ZWRPcHRpb25dLnN5bWJvbCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGdhbWVDb21tYW5kKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBBQ1RJT05fTk9ORTtcbiAgICAgICAgbGV0IGV2ZW50QXJncyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19ET1dOKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uICUgdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfVVApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiAtPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIGlmIGl0IG1hdGNoZXMgdGhlIGdhbWVDb21tYW5kXG4gICAgICAgICAgICBsZXQgY3VyT3B0aW9uID0gdGhpcy5zcGVjLm9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbl07XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRBY3Rpb24gPSBjdXJPcHRpb24uYWN0aW9uTWFwLmZpbHRlcihvID0+IG8ua2V5ID09IGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gc2VsZWN0ZWRBY3Rpb25bMF0uYWN0aW9uO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHNlbGVjdGVkQWN0aW9uWzBdLmV2ZW50QXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWN0aW9uOiBhY3Rpb24sIGV2ZW50QXJnczogZXZlbnRBcmdzfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVzIGEgY2hhcmFjdGVyIHRvIHJlbmRlciBpbiB0aGUgbWVudSwgYW5kIGhhbmRsZXMgb3ZlcmhlYWQgZm9yIGl0XG4gICAgY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpIHtcbiAgICAgICAgLy8gYWRkIGV2ZXJ5dGhpbmcgaW5cbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgY2hhcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkcmF3IG9uIHRvcFxuICAgICAgICBjaGFyYWN0ZXIueiA9IHRoaXMuelBvc2l0aW9uO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QoY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBrZWVwIHRoZXNlIGFyb3VuZCBpbiBtZW1vcnkgc28gd2UgY2FuIHJlbW92ZSB0aGVtIGxhdGVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG5cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBkcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHRleHRXLCB0ZXh0SCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0ZXh0VzsgY29sKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgLSAxLCAnLScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSArIHRleHRILCAnLScpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRleHRIOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZpZXdwb3J0Lng7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMudmlld3BvcnQueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdwb3J0LndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dCA9IHRoaXMuc3BlYy5zdW1tYXJ5VGV4dDtcbiAgICAgICAgY29uc3Qgd3JhcFcgPSBNYXRoLmNlaWwod2lkdGggKiAwLjgpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeCBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3ggPSBsZWZ0ICsgTWF0aC5yb3VuZCgod2lkdGggLSB3cmFwVykgLyAyKTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHkgcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF95ID0gYm90dG9tICsgTWF0aC5yb3VuZChoZWlnaHQgKiAwLjgpO1xuXG4gICAgICAgIC8vIHN1bW1hcnkgaXMgdGV4dCBhdCB0b3BcbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHRSb3dzID0gd3JhcFRleHQoc3VtbWFyeVRleHQsIHdyYXBXKTtcbiAgICAgICAgY29uc3QgbnVtU3VtbWFyeUxpbmVzID0gc3VtbWFyeVRleHRSb3dzLmxlbmd0aDtcblxuICAgICAgICAvLyBhZGQgYmxhbmsgbGluZSBiZXR3ZWVuXG4gICAgICAgIGNvbnN0IG51bVNwYWNpbmdMaW5lcyA9IDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gb3B0aW9uIGxpbmVzIGFyZSBzZWxlY3RhYmxlIGJ5IHVzZXJcbiAgICAgICAgY29uc3QgbnVtT3B0aW9uTGluZXMgPSB0aGlzLnNwZWMub3B0aW9ucy5maWx0ZXIobyA9PiBvLm9wdGlvblRleHQgIT0gbnVsbCkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IG51bUxpbmVzID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtT3B0aW9uTGluZXMgKyBudW1TcGFjaW5nTGluZXM7IFxuXG4gICAgICAgIC8vIGlmIHdlIHdpbGwgZ28gb3ZlciB0aGUgYm90dG9tIHBhcnQgb2YgdGhlIHNjcmVlbiwgYnVtcCB1cCBhIG5vdGNoXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIChzdGFydF95ICsgbnVtTGluZXMgKyAxKSAtIChib3R0b20gKyBoZWlnaHQpKTtcbiAgICAgICAgc3RhcnRfeSAtPSBvZmZzZXQ7XG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5kcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHdyYXBXLCBudW1MaW5lcyk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgaW5zaWRlIG9mIHRoZSBtZW51IGJveCBjb250YWluZXIsIHNwYWNlcyBhbmQgdGV4dFxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBudW1MaW5lczsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdyYXBXOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydF94ICsgY29sO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydF95ICsgcm93O1xuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5zcGFjZUNoYXI7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblN0YXJ0Um93ID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtU3BhY2luZ0xpbmVzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG9wdGlvblN0YXJ0Um93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNPcHRpb25JbmRleCA9IHJvdyAtIG9wdGlvblN0YXJ0Um93O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gXCItXCIgKyB0aGlzLnNwYWNlQ2hhciArIGN1ck9wdGlvbi5vcHRpb25UZXh0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IGN1clRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gY3VyVGV4dFtjb2xdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbkNoYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpO1xuICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGlvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLnB1c2goY3JlYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgaGlkZShnYW1lT2JqZWN0cykge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKGMgPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGMpKTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQUNUSU9OX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9CQUNLX1RPX0dBTUUgPSAxO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QVVNIX01FTlUgPSAyO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QT1BfTUVOVSA9IDM7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggPSA0O1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XID0gNTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUkVTRVRfTEVWRUwgPSA2OyIsImltcG9ydCB7XG4gICAgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XLCBcbiAgICBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIFxuICAgIEFDVElPTl9QVVNIX01FTlUsIEFDVElPTl9SRVNFVF9MRVZFTCB9XG4gICAgZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNvbmZpZ3VyZSB5b3VyIGdhbWUgZXhwZXJpZW5jZS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgSGVpZ2h0XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBXaWR0aFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTFNfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDT05UUk9MU1xcbk1vdmVtZW50OiBBcnJvdyBrZXlzXFxuRklSRTogU3BhY2ViYXJcXG5QYXVzZTogJ2gnXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIENsaWNrIG9uIHRoZSB3ZWIgcGFnZSB0byBjYXB0dXJlIGtleSBwcmVzc2VzLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJQbGF5XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkNvbnRyb2xzXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBDT05UUk9MU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogU0VUVElOR1NfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIlJlc2V0IExldmVsXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1JFU0VUX0xFVkVMXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuIiwiY29uc3QgU1BMQVNIX0ZSQU1FXzEgPSBbXG4gICAgXCJfXCIvL1wiXFxcXCAgICAgL1wiLFxuICAgIC8vXCIgICBfICAgXCJcbl07XG5cbmNvbnN0IFNQTEFTSF9GUkFNRV8yID0gW1xuICAgIFwiLl8uXCIvL1wiLCAgICAgICAsXCIsXG4gICAgLy9cIiAgICAgICAgIFwiLFxuICAgIC8vXCIgICAgLiAgIFwiXG5dO1xuXG5jb25zdCBTUExBU0hfRlJBTUVfMyA9IFtcbiAgICBcIi4gLlwiLy9cIiAgICAgICAgICAgXCIsXG4gICAgLy9cIi4gICAgICAgICAuXCIsXG4gICAgLy9cIiAgICAgICAgICAgXCJcbl07XG5cbmV4cG9ydCBjb25zdCBTUExBU0hfU1BSSVRFX0FSVCA9IHtcbiAgICBcImFuY2hvclwiOiBcImJjZW50ZXJcIixcbiAgICBcImxvb3BcIjogXCJub25lXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogU1BMQVNIX0ZSQU1FXzEgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA3MCwgXCJjaGFyYWN0ZXJzXCI6IFNQTEFTSF9GUkFNRV8yIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogNjAsIFwiY2hhcmFjdGVyc1wiOiBTUExBU0hfRlJBTUVfMyB9XG4gICAgICAgIF1cbiAgICB9XG59OyIsIlxuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9jb3JlL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXIsIFdpbkFuaW1hdGlvbiwgVGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVycy9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL2VuZW15X2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtHYW1lT2JqZWN0c30gZnJvbSBcIi4vY29yZS9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3RlcnMvdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCIuL21lbnVzL21lbnUuanNcIjtcbmltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9SRVNFVF9MRVZFTCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudXMvbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudXMvbWVudV9zcGVjcy5qc1wiO1xuaW1wb3J0IHtIdG1sUmVuZGVyZXIsIENvbnNvbGVSZW5kZXJlcn0gZnJvbSBcIi4vY29yZS9yZW5kZXJlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlYXN1cmVIdW50R2FtZSBleHRlbmRzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzZXQgdXAgYmFzaWMgZ2FtZSBvYmplY3RzXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKExFVkVMX1RPV04pO1xuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBLZXlNYXAoKTtcbiAgICAgICAgdGhpcy5tZW51U3RhY2sgPSBbXTtcblxuICAgICAgICB0aGlzLlNUQVRFX1JVTk5JTkcgPSAwO1xuICAgICAgICB0aGlzLlNUQVRFX1dJTk5OSU5HID0gMTtcbiAgICAgICAgdGhpcy5TVEFURV9ERUFEID0gMjtcbiAgICAgICAgdGhpcy5TVEFURV9NRU5VID0gMztcblxuICAgICAgICAvLyB0aGlzIHNob3VsZCBwcm9iYWJseSB0dXJuIGludG8gYSBzdGF0ZSBtYWNoaW5lXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgdGhpcy5FWFBMT1NJT05fU1BFRUQgPSAyMDAwOyAvLyBudW0gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzIG9mIFdJTiBleHBsb3Npb24gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IC0xO1xuICAgIH1cblxuICAgIGdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICB2YXIgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG5cbiAgICAgICAgLy8gZG9uJ3QgbGV0IHRoZW0gb3ZlcmxhcFxuICAgICAgICB3aGlsZSAoZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzUG9pbnQoeCwgeSkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlR29hbChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgVHJlYXN1cmVDaGFyYWN0ZXIoZ29hbFBsYWNlbWVudC54LCBnb2FsUGxhY2VtZW50LnksICckJywgJ2xldmVsR29hbCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVuZW1pZXNcbiAgICAgICAgdmFyIGVuZW15UGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cblxuICAgIGNsZWFyTGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSBzY3JhdGNoXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG91ciBwbGF5ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8gYWRkIGEgbGV2ZWxHb2FsIHRvIHRoaXMgbGV2ZWxcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVHb2FsKHRoaXMuZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7XG5cbiAgICAgICAgLy8gYWRkIHNvbWUgZW5lbWllc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uc1snbnVtRW5lbWllcyddOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlRW5lbXkodGhpcy5nYW1lT2JqZWN0cywgdGhpcy5tYXApKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBvdXIgbWFwIG9iamVjdHNcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubWFwLmdldE1hcENoYXJhY3RlcnMoKS5tYXAoeCA9PiB0aGF0LmdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG5cbiAgICAgICAgLyp0aGlzLmRvb3IgPSBuZXcgRG9vcndheUNoYXJhY3RlcigyLCAyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuZG9vcik7Ki9cbiAgICAgICAgXG4gICAgICAgIC8vIGNlbnRlciBvbiB0aGUgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuXG4gICAgICAgIC8vIHNob3cgaGVscCBtZW51LiB0aGlzIG1heSBjaGFuZ2Ugb24gbmV3IGxldmVscyBldmVudHVhbGx5XG4gICAgICAgIHRoaXMuc2hvd0hlbHBNZW51KCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBhIGJsb2NraW5nIGFuaW1hdGlvbiB0aGF0ICdleHBsb2RlcycgdGhlIFxuICAgIC8vLi4uZ29hbCBpbnRvIGFuIGV4cGxvc2lvblxuICAgIHNwYXduRXhwbG9zaW9ucyhub3csIGNlbnRlcmVkQ2hhcmFjdGVyKSB7XG4gICAgICAgIC8vIHNwYXduIGEgbmV3IGFuaW1hdGlvbiBiYXNlZCBvbiBFWFBMT1NJT05fU1BFRURcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPiB0aGlzLkVYUExPU0lPTl9TUEVFRCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKGNlbnRlcmVkQ2hhcmFjdGVyLmdldFgoKSwgY2VudGVyZWRDaGFyYWN0ZXIuZ2V0WSgpLCB0aGlzLm1hcC53aWR0aCwgdGhpcy5tYXAuaGVpZ2h0KSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gbm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih4LCB5LCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFRleHRBbmltYXRvbih4LCB5LCB0ZXh0KSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbih4LCB5LCB0aGlzLm1hcC53aWR0aCwgdGhpcy5tYXAuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgY2hlY2tEZWFkQ29uZGl0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX0RFQUQ7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJERUFEXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oYXNUcmVhc3VyZSgnbGV2ZWxHb2FsJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1dJTk5JTkc7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SGVscE1lbnUoKSB7XG4gICAgICAgIC8vIHB1c2ggbWVudSBzdGF0ZSBvblxuICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX01FTlU7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KEhFTFBfTUVOVSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSwgdGhpcy5yZW5kZXJlci5nZXRTcGFjZUNoYXJhY3RlcigpKTtcbiAgICAgICAgdGhpcy5tZW51LnNob3codGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgICBpZiAobnVsbCAhPT0ga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2FtZUNvbW1hbmQgPSB0aGlzLmtleU1hcC5nZXRHYW1lQ29tbWFuZChrZXkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBicmluZyB1cCBhIFFVSVQgbWVudS4gcHJvY2Vzcy5leGl0KCkgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykgeyAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnSEVMUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCB0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iaiA9IHRoaXMubWVudS5oYW5kbGVJbnB1dChnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0JBQ0tfVE9fR0FNRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBtZW51IGFuZCBnbyBiYWNrIHRvIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1JFU0VUX0xFVkVMKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoaXMgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QVVNIX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnUgYW5kIHB1c2ggaXQgb250byBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLmV2ZW50QXJncy5tZW51LCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxLCB0aGlzLnJlbmRlcmVyLmdldFNwYWNlQ2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BPUF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3AgcHJldiBtZW51IGFuZCBzaG93IGl0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZW51ID0gdGhpcy5tZW51U3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IHByZXZNZW51O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IHRoaXMub3B0aW9uc1snbWF4Vmlld3BvcnRIZWlnaHQnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ID0gdGhpcy5vcHRpb25zWydtaW5WaWV3cG9ydEhlaWdodCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPiB0aGlzLm9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSB0aGlzLm9wdGlvbnNbJ21pblZpZXdwb3J0V2lkdGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlciB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUodXBkYXRlRnVuYywgZHJhd0Z1bmMsIHJlbmRlcmVyLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGRvIHRoaXMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHBhcmVudFxuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIgPSBuZXcgQW5pbWF0aW9uSGFuZGxlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsb29wXCI6IFwiY2lyY2xlXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IFxuICAgICAgICBdXG4gICAgfVxufTtcblxuY29uc3QgRU5FTVlfVEVTVF9GUkFNRV8xID0gW1xuICAgIFwiMSAgIFwiLFxuICAgIFwiIDIgIFwiLFxuICAgIFwiICAzIFwiLFxuICAgIFwiICAgNFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1RFU1RfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwibG9vcFwiOiBcImNpcmNsZVwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogRU5FTVlfVEVTVF9GUkFNRV8xIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJTEVfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwibG9vcFwiOiBcImNpcmNsZVwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzInXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI0J10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCOCddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRSddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsb29wXCI6IFwiY2lyY2xlXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMSddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjMnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI3J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJEJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0hPVVNFID0gW1xuXCIgICAgIF9fX19fX19fXyAgICAgIFwiLFxuXCIgICBfLyAgICAgICAgIFxcXFxfICAgXCIsXG5cIiBfLyAgICAgICAgICAgICBcXFxcXyBcIixcblwiL19fX19fX19fX19fX19fX19fXFxcXFwiLFxuXCIgfCAgICAgICAgICAgICAgIHwgIFwiLFxuXCIgfCAgICAgPT09PT0gICAgIHwgIFwiLFxuXCIgfCB8K3wgIHwgfCAgfCt8IHwgIFwiLFxuXCIgfF9fX19fX3wgfF9fX19fX3wgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9CVVNIID0gW1xuXCIgIyMjIFwiLFxuXCIjIyMjI1wiLFxuXCIgIyMjIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9UUkVFID0gW1xuXCIgICAoKiopICAgICAgIFwiLFxuXCIgKCoqKioqKikgIFwiLFxuXCIoKioqKioqKiopIFwiLFxuXCIgICgqKioqKSAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAvX19cXFxcICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9UT1dOID0ge1xuXCJ3aWR0aFwiOiAxMjIsXG5cImhlaWdodFwiOiA2MCxcblwibWFwX29iamVjdHNcIjogW1xuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMCwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzcsIFwieVwiOiAxMyB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMTIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMiwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzgsIFwieVwiOiA5IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA5MCwgXCJ5XCI6IDE4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwMCwgXCJ5XCI6IDE2IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA1MCwgXCJ5XCI6IDIyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDYwLCBcInlcIjogMjAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3OCwgXCJ5XCI6IDIzIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3MCwgXCJ5XCI6IDQyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDgwLCBcInlcIjogNDAgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAyMCwgXCJ5XCI6IDgwIH0sXG4gICAgXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMSwgXCJ5XCI6IDM4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTQsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDEwLCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiAzMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMwLCBcInlcIjogMzIgfSxcbiAgICBcbl1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
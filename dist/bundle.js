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

/***/ "./src/animations/animation.js":
/*!*************************************!*\
  !*** ./src/animations/animation.js ***!
  \*************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
class Animation {
    constructor() { }

    update(timeNow, timeElapsed, gameObjects) { }

    isExpired() { return true; }

    // called to clean up this animation after it expires
    cleanup() { }
}


/***/ }),

/***/ "./src/animations/animation_handler.js":
/*!*********************************************!*\
  !*** ./src/animations/animation_handler.js ***!
  \*********************************************/
/*! exports provided: AnimationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationHandler", function() { return AnimationHandler; });
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

/***/ "./src/animations/rain_animation.js":
/*!******************************************!*\
  !*** ./src/animations/rain_animation.js ***!
  \******************************************/
/*! exports provided: RainAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainAnimation", function() { return RainAnimation; });
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characters/static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _rain_art_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rain_art.js */ "./src/rain_art.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation.js */ "./src/animations/animation.js");
/* harmony import */ var _rain_drop_splash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rain_drop_splash.js */ "./src/animations/rain_drop_splash.js");






class RainAnimation extends _animation_js__WEBPACK_IMPORTED_MODULE_3__["Animation"] {
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
        const x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumberRange"])(1, this.maxX - 1);
        const y = 0;

        const dropTypeSpin = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumber"])(100);
        let dropChar = "|";
        if (dropTypeSpin > 80) {
            dropChar = "!"
        }

        // choose a random depth for this raindrop
        const depth = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumber"])(this.depth);
        
        let raindrop = new _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__["StaticCharacter"](x, y, dropChar);
        raindrop.depth = depth;
        return raindrop;
    }

    getNewRaindropWave() {
        let drops = [];
        const numDrops = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_1__["randomNumberRange"])(this.minRainDropsPerWave, this.maxRainDropsPerWave);
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

                let splash = new _rain_drop_splash_js__WEBPACK_IMPORTED_MODULE_4__["RainDropSplash"](deadRaindrop.getX(), deadRaindrop.getY() + 1, _rain_art_js__WEBPACK_IMPORTED_MODULE_2__["SPLASH_SPRITE_ART"]);
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


/***/ }),

/***/ "./src/animations/rain_drop_splash.js":
/*!********************************************!*\
  !*** ./src/animations/rain_drop_splash.js ***!
  \********************************************/
/*! exports provided: RainDropSplash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainDropSplash", function() { return RainDropSplash; });
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sprite.js */ "./src/core/sprite.js");
/* harmony import */ var _core_character_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/character.js */ "./src/core/character.js");



class RainDropSplash extends _core_character_js__WEBPACK_IMPORTED_MODULE_1__["Character"] {
    constructor(initialX, initialY, spriteMap) {
        super(initialX, initialY);
        this.sprite = new _core_sprite_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](spriteMap, this, "0");
        this.children.push(this.sprite);
    }
}


/***/ }),

/***/ "./src/animations/text_animation.js":
/*!******************************************!*\
  !*** ./src/animations/text_animation.js ***!
  \******************************************/
/*! exports provided: TextAnimaton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAnimaton", function() { return TextAnimaton; });
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characters/static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./src/animations/animation.js");



class TextAnimaton extends _animation_js__WEBPACK_IMPORTED_MODULE_1__["Animation"] {
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


/***/ }),

/***/ "./src/animations/win_animation.js":
/*!*****************************************!*\
  !*** ./src/animations/win_animation.js ***!
  \*****************************************/
/*! exports provided: WinAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinAnimation", function() { return WinAnimation; });
/* harmony import */ var _characters_static_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../characters/static_character.js */ "./src/characters/static_character.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ "./src/animations/animation.js");



class WinAnimation extends _animation_js__WEBPACK_IMPORTED_MODULE_1__["Animation"] {
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
/* harmony import */ var _animations_animation_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/animation_handler.js */ "./src/animations/animation_handler.js");
/* harmony import */ var _animations_rain_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/rain_animation */ "./src/animations/rain_animation.js");
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

        this.animationHandler.addAnimation(new _animations_rain_animation__WEBPACK_IMPORTED_MODULE_2__["RainAnimation"](this.width, this.height));

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
        this.animationHandler = new _animations_animation_handler_js__WEBPACK_IMPORTED_MODULE_1__["AnimationHandler"](this.renderer);
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
/* harmony import */ var _animations_animation_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/animation_handler.js */ "./src/animations/animation_handler.js");
/* harmony import */ var _animations_win_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/win_animation.js */ "./src/animations/win_animation.js");
/* harmony import */ var _animations_text_animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/text_animation.js */ "./src/animations/text_animation.js");
/* harmony import */ var _characters_player_character_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/player_character.js */ "./src/characters/player_character.js");
/* harmony import */ var _characters_enemy_character_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/enemy_character.js */ "./src/characters/enemy_character.js");
/* harmony import */ var _core_game_objects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/game_objects.js */ "./src/core/game_objects.js");
/* harmony import */ var _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treasure_hunt_art.js */ "./src/treasure_hunt_art.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map.js */ "./src/map.js");
/* harmony import */ var _core_math_extensions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/math_extensions.js */ "./src/core/math_extensions.js");
/* harmony import */ var _characters_treasure_character_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/treasure_character.js */ "./src/characters/treasure_character.js");
/* harmony import */ var _menus_menu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menus/menu.js */ "./src/menus/menu.js");
/* harmony import */ var _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menus/menu_actions.js */ "./src/menus/menu_actions.js");
/* harmony import */ var _menus_menu_specs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menus/menu_specs.js */ "./src/menus/menu_specs.js");
/* harmony import */ var _core_renderer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/renderer.js */ "./src/core/renderer.js");


















class TreasureHuntGame extends _core_game_js__WEBPACK_IMPORTED_MODULE_0__["Game"] {
    constructor() {
        // set up basic game objects
        super();

        this.map = new _map_js__WEBPACK_IMPORTED_MODULE_9__["Map"](_treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__["LEVEL_TOWN"]);
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
        var x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_10__["randomNumber"])(map.width - 1);
        var y = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_10__["randomNumber"])(map.height - 1);

        // don't let them overlap
        while (gameObjects.objects.filter(obj => obj.isPhysical && 
                                                 obj.getBounds().intersectsPoint(x, y)).length > 0) {
            x = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_10__["randomNumber"])(map.width - 1);
            y = Object(_core_math_extensions_js__WEBPACK_IMPORTED_MODULE_10__["randomNumber"])(map.height - 1);
        }

        return { 'x': x, 'y': y };
    }

    createPlayer() {
        // start at the top left of the map
        var player = new _characters_player_character_js__WEBPACK_IMPORTED_MODULE_5__["PlayerCharacter"](1, 1);
        player.reset();
        return player;
    }

    createGoal(gameObjects, map) {
        var goalPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _characters_treasure_character_js__WEBPACK_IMPORTED_MODULE_11__["TreasureCharacter"](goalPlacement.x, goalPlacement.y, '$', 'levelGoal');
    }

    createEnemy(gameObjects, map) {
        // create enemies
        var enemyPlacement = this.getRandomMapPlacement(gameObjects, map);
        return new _characters_enemy_character_js__WEBPACK_IMPORTED_MODULE_6__["EnemyCharacter"](enemyPlacement.x, enemyPlacement.y, _treasure_hunt_art_js__WEBPACK_IMPORTED_MODULE_8__["ENEMY_SPIKEY_SPRITE_MAP"]);
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
            this.animationHandler.addAnimation(new _animations_win_animation_js__WEBPACK_IMPORTED_MODULE_3__["WinAnimation"](centeredCharacter.getX(), centeredCharacter.getY(), this.map.width, this.map.height));
            this.lastExplosionTime = now;
        }
    }

    createInitialExplosion(x, y, text) {
        this.animationHandler.addAnimation(new _animations_text_animation_js__WEBPACK_IMPORTED_MODULE_4__["TextAnimaton"](x, y, text));
        this.animationHandler.addAnimation(new _animations_win_animation_js__WEBPACK_IMPORTED_MODULE_3__["WinAnimation"](x, y, this.map.width, this.map.height));
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
        this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_12__["Menu"](_menus_menu_specs_js__WEBPACK_IMPORTED_MODULE_14__["HELP_MENU"], this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
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
                if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_BACK_TO_GAME"]) {
                    // remove current menu and go back to game
                    this.state = this.prevState;
                    this.menu.hide(this.gameObjects);
                    this.menu = null;
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_RESET_LEVEL"]) {
                    // reset this level
                    this.resetLevel();
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_PUSH_MENU"]) {
                    // hide current menu and push it onto stack
                    this.menu.hide(this.gameObjects);
                    this.menuStack.push(this.menu);

                    // show new menu
                    this.menu = new _menus_menu_js__WEBPACK_IMPORTED_MODULE_12__["Menu"](actionObj.eventArgs.menu, this.renderer.viewport, 1, this.renderer.getSpaceCharacter());
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_POP_MENU"]) {
                    // hide current menu
                    this.menu.hide(this.gameObjects);
                    // pop prev menu and show it
                    const prevMenu = this.menuStack.pop();
                    this.menu = prevMenu;
                    this.menu.show(this.gameObjects);
                } else if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_INCREASE_VIEWPORT_H"] || 
                           actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_INCREASE_VIEWPORT_W"]) {
                    if (actionObj.action == _menus_menu_actions_js__WEBPACK_IMPORTED_MODULE_13__["ACTION_INCREASE_VIEWPORT_H"]) {
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
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_15__["HtmlRenderer"](options['viewportWidth'], options['viewportHeight']);
        } else {
            renderer = new _core_renderer_js__WEBPACK_IMPORTED_MODULE_15__["ConsoleRenderer"](options['viewportWidth'], options['viewportHeight']);
        }

        super.initialize(updateFunc, drawFunc, renderer, this.options);

        // do this after initializing parent
        this.animationHandler = new _animations_animation_handler_js__WEBPACK_IMPORTED_MODULE_2__["AnimationHandler"](this.renderer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb25zL2FuaW1hdGlvbl9oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb25zL3JhaW5fYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb25zL3JhaW5fZHJvcF9zcGxhc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvdGV4dF9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvd2luX2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9lbmVteV9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvcGxheWVyX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9wcm9qZWN0aWxlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXJzL3RyZWFzdXJlX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVycy93YWxsX2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jaGFyYWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvY29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZmFjaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZ2FtZV9vYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb3ZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdGV4dF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS91cGRhdGVhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZXlfbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWtlLWl0LXJhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudXMvbWVudV9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51cy9tZW51X3NwZWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yYWluX2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmUtaHVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlYXN1cmVfaHVudF9hcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQW1GOztBQUU1RTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwy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QUFDekUsU0FBUyw0REFBWSxLQUFLLGtEQUFrRDtBQUM1RSxTQUFTLDJEQUFXLEtBQUssa0RBQWtEO0FBQzNFO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJEQUFXLEtBQUssa0RBQWtEO0FBQzNFLFNBQVMseURBQVMsS0FBSyxrREFBa0Q7QUFDekUsU0FBUyw0REFBWSxLQUFLLGtEQUFrRDtBQUM1RSxTQUFTLDJEQUFXLEtBQUssa0RBQWtEO0FBQzNFO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVDQUF1QztBQUM1QyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHFDQUFxQzs7QUFFMUMsS0FBSyxzQ0FBc0M7QUFDM0MsS0FBSyx3Q0FBd0M7O0FBRTdDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssdUNBQXVDO0FBQzVDLEtBQUssc0NBQXNDOztBQUUzQyxLQUFLLHNDQUFzQztBQUMzQyxLQUFLLHVDQUF1Qzs7QUFFNUMsS0FBSyx1Q0FBdUM7O0FBRTVDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDO0FBQzNDLEtBQUssc0NBQXNDOztBQUUzQztBQUNBLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7IH1cblxuICAgIGlzRXhwaXJlZCgpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIC8vIGNhbGxlZCB0byBjbGVhbiB1cCB0aGlzIGFuaW1hdGlvbiBhZnRlciBpdCBleHBpcmVzXG4gICAgY2xlYW51cCgpIHsgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgfVxuXG4gICAgYWRkQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICBhbmltYXRpb24udXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRpb24uaXNFeHBpcmVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXQgZnJvbSBvdXIgbGlzdFxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZWRBbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICAgICAgICAgIGV4cGlyZWRBbmltYXRpb24uY2xlYW51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMubWFwKHggPT4geC5jbGVhbnVwKCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXVxuICAgIH1cbn1cbiIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcixyYW5kb21OdW1iZXJSYW5nZX0gZnJvbSBcIi4uL2NvcmUvbWF0aF9leHRlbnNpb25zLmpzXCI7XG5pbXBvcnQge1NQTEFTSF9TUFJJVEVfQVJUfSBmcm9tIFwiLi4vcmFpbl9hcnQuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9hbmltYXRpb24uanNcIjtcbmltcG9ydCB7UmFpbkRyb3BTcGxhc2h9IGZyb20gXCIuL3JhaW5fZHJvcF9zcGxhc2guanNcIjtcblxuZXhwb3J0IGNsYXNzIFJhaW5BbmltYXRpb24gZXh0ZW5kcyBBbmltYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1heFgsIG1heFkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYWluZHJvcHMgPSBbXTtcbiAgICAgICAgLy8gaGlnaGVyLCB0aGUgbnVtYmVyLCBzbG93ZXIgaXQgZ29lc1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSAxMDA7XG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5taW5SYWluRHJvcHNQZXJXYXZlID0gMjtcbiAgICAgICAgdGhpcy5tYXhSYWluRHJvcHNQZXJXYXZlID0gNTtcbiAgICAgICAgdGhpcy5kZXB0aCA9IDE7XG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XG4gICAgfVxuXG4gICAgY3JlYXRlUmFpbmRyb3AoKSB7XG4gICAgICAgIGNvbnN0IHggPSByYW5kb21OdW1iZXJSYW5nZSgxLCB0aGlzLm1heFggLSAxKTtcbiAgICAgICAgY29uc3QgeSA9IDA7XG5cbiAgICAgICAgY29uc3QgZHJvcFR5cGVTcGluID0gcmFuZG9tTnVtYmVyKDEwMCk7XG4gICAgICAgIGxldCBkcm9wQ2hhciA9IFwifFwiO1xuICAgICAgICBpZiAoZHJvcFR5cGVTcGluID4gODApIHtcbiAgICAgICAgICAgIGRyb3BDaGFyID0gXCIhXCJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNob29zZSBhIHJhbmRvbSBkZXB0aCBmb3IgdGhpcyByYWluZHJvcFxuICAgICAgICBjb25zdCBkZXB0aCA9IHJhbmRvbU51bWJlcih0aGlzLmRlcHRoKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByYWluZHJvcCA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgZHJvcENoYXIpO1xuICAgICAgICByYWluZHJvcC5kZXB0aCA9IGRlcHRoO1xuICAgICAgICByZXR1cm4gcmFpbmRyb3A7XG4gICAgfVxuXG4gICAgZ2V0TmV3UmFpbmRyb3BXYXZlKCkge1xuICAgICAgICBsZXQgZHJvcHMgPSBbXTtcbiAgICAgICAgY29uc3QgbnVtRHJvcHMgPSByYW5kb21OdW1iZXJSYW5nZSh0aGlzLm1pblJhaW5Ecm9wc1BlcldhdmUsIHRoaXMubWF4UmFpbkRyb3BzUGVyV2F2ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRHJvcHM7IGkrKykge1xuICAgICAgICAgICAgZHJvcHMucHVzaCh0aGlzLmNyZWF0ZVJhaW5kcm9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkcm9wcztcbiAgICB9XG5cbiAgICB0aWNrUmFpbkRyb3AocmFpbmRyb3ApIHtcbiAgICAgICAgcmFpbmRyb3Auc2V0WShyYWluZHJvcC5nZXRZKCkgKyAxKTtcbiAgICB9XG5cbiAgICByZW1vdmVFeHBpcmVkUmFpbmRyb3BzKHJhaW5kcm9wcywgbWF4WSwgZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJhaW5kcm9wcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHJhaW5kcm9wID0gcmFpbmRyb3BzW2ldO1xuICAgICAgICAgICAgaWYgKHJhaW5kcm9wLmdldFkoKSA9PSBtYXhZIC0gcmFpbmRyb3AuZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZnJvbSBnYW1lT2JqZWN0cyBhcyB3ZWxsIGFzIG91ciBsaXN0XG4gICAgICAgICAgICAgICAgbGV0IGRlYWRSYWluZHJvcCA9IHJhaW5kcm9wcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGRlYWRSYWluZHJvcCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3BsYXNoID0gbmV3IFJhaW5Ecm9wU3BsYXNoKGRlYWRSYWluZHJvcC5nZXRYKCksIGRlYWRSYWluZHJvcC5nZXRZKCkgKyAxLCBTUExBU0hfU1BSSVRFX0FSVCk7XG4gICAgICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHNwbGFzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lRWxhcHNlZCAtPSB0aGlzLmZyYW1lU3BlZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIG1vdmUgYWxsIHJhaW5kcm9wcyBkb3dud2FyZHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnJhaW5kcm9wcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlja1JhaW5Ecm9wKHRoaXMucmFpbmRyb3BzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFeHBpcmVkUmFpbmRyb3BzKHRoaXMucmFpbmRyb3BzLCB0aGlzLm1heFksIGdhbWVPYmplY3RzKTtcblxuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IHJhaW5kcm9wIHdhdmVcbiAgICAgICAgICAgIGxldCBuZXdEcm9wcyA9IHRoaXMuZ2V0TmV3UmFpbmRyb3BXYXZlKCk7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIG5ld0Ryb3BzLm1hcCh4ID0+IHRoYXQucmFpbmRyb3BzLnB1c2goeCkpO1xuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0cyhuZXdEcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICB0aGlzLnJhaW5kcm9wcy5tYXAoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJhaW5Ecm9wU3BsYXNoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHNwcml0ZU1hcCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoc3ByaXRlTWFwLCB0aGlzLCBcIjBcIik7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnNwcml0ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtTdGF0aWNDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jaGFyYWN0ZXJzL3N0YXRpY19jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi9hbmltYXRpb24uanNcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRBbmltYXRvbiBleHRlbmRzIEFuaW1hdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2VudGVyWCwgY2VudGVyWSwgdGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZyYW1lU3BlZWQgPSA2MDA7XG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5pc0luR2FtZU9iamVjdHMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICAgICAgLy8gYWRkIHRleHQgdG8gdGhlIGNlbnRlciBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeF9vZmZzZXQgPSBNYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gMikgLSBpO1xuICAgICAgICAgICAgY29uc3QgdGhpc0NoYXIgPSBuZXcgU3RhdGljQ2hhcmFjdGVyKGNlbnRlclggLSB4X29mZnNldCwgY2VudGVyWSwgdGV4dC5jaGFyQXQoaSkpOyBcbiAgICAgICAgICAgIC8vIHNob3cgdGhpcyBhYm92ZSBvdGhlciBhbmltYXRpb25zIChUT0RPOiBtb3ZlIHRvIHBhcmFtZXRlcilcbiAgICAgICAgICAgIHRoaXNDaGFyLnogPSAyO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2godGhpc0NoYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG8gdGhpcyBhZnRlciBzZXR0aW5nIGNoYXJhY3RlciBhcnJheVxuICAgICAgICB0aGlzLnNldFZpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRWaXNpYmlsaXR5KGlzVmlzaWJsZSkge1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLm1hcCh4ID0+IHguaXNWaXNpYmxlID0gaXNWaXNpYmxlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luR2FtZU9iamVjdHMpIHtcbiAgICAgICAgICAgIGdhbWVPYmplY3RzLmFkZE9iamVjdHModGhpcy5jaGFyYWN0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJhbWVFbGFwc2VkICs9IHRpbWVFbGFwc2VkO1xuICAgICAgICBpZiAodGhpcy5mcmFtZUVsYXBzZWQgPj0gdGhpcy5mcmFtZVNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lRWxhcHNlZCAtPSB0aGlzLmZyYW1lU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnNldFZpc2liaWxpdHkoIXRoaXMuaXNWaXNpYmxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzRXhwaXJlZCgpIHtcbiAgICAgICAgLy8gdGhpcyBhbmltYXRpb24gbmV2ZXIgZ29lcyBhd2F5XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKHggPT4geC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NoYXJhY3RlcnMvc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvbi5qc1wiO1xuXG5leHBvcnQgY2xhc3MgV2luQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXJYLCBjZW50ZXJZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gLTE7XG4gICAgICAgIHRoaXMuY2VudGVyWCA9IGNlbnRlclg7XG4gICAgICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlclk7XG4gICAgICAgIHRoaXMuZnJhbWVTcGVlZCA9IDYwO1xuICAgICAgICB0aGlzLmZyYW1lRWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tYXhYID0gbWF4WDtcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcbiAgICB9XG5cbiAgICBnZXROZXdFeHBsb3Npb25SaW5nKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cykge1xuICAgICAgICBsZXQgcmluZyA9IFtdO1xuICAgICAgICAvLyBjcmVhdGUgZXhwbG9zaW9uIHBhcnRpY2xlcyBpbiBhIGJsYXN0IHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlclxuICAgICAgICBmb3IgKHZhciB5ID0gY2VudGVyWSAtIHJhZGl1czsgeSA8PSBjZW50ZXJZICsgcmFkaXVzOyB5KyspIHtcbiAgICAgICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoY2VudGVyWSAtIHkpO1xuICAgICAgICAgICAgdmFyIG51bVhzID0gTWF0aC5taW4oMiwgcmFkaXVzIC0gZGlmZmVyZW5jZSArIDEpOyAvLyBhZGQgMSBiZWNhdXNlIHdlIGFsd2F5cyB3YW50IGF0IGxlYXN0IDEgZXhwbG9zaW9uIG9uIGVhY2ggbGluZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVhzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB4ID0gY2VudGVyWCArICgocmFkaXVzIC0gZGlmZmVyZW5jZSkgKiBtdWx0aXBsaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVyID0gbmV3IFN0YXRpY0NoYXJhY3Rlcih4LCB5LCAnKicpO1xuICAgICAgICAgICAgICAgIHJpbmcucHVzaChjaGFyYWN0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJpbmc7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICB0aGlzLmZyYW1lRWxhcHNlZCArPSB0aW1lRWxhcHNlZDtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVFbGFwc2VkID49IHRoaXMuZnJhbWVTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUVsYXBzZWQgLT0gdGhpcy5mcmFtZVNwZWVkO1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMrKztcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjaGFyYWN0ZXJzXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKHggPT4geC5yZW1vdmVGcm9tR2FtZU9iamVjdHMgPSB0cnVlKTtcblxuICAgICAgICAgICAgLy8gZ2V0IG5ldyBjaGFyYWN0ZXJzIGFuZCBhZGQgdGhlbVxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gdGhpcy5nZXROZXdFeHBsb3Npb25SaW5nKHRoaXMuY2VudGVyWCwgdGhpcy5jZW50ZXJZLCB0aGlzLnJhZGl1cyk7XG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3RzKHRoaXMuY2hhcmFjdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0V4cGlyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlclggLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWCArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhYICYmXG4gICAgICAgICAgICB0aGlzLmNlbnRlclkgLSAodGhpcy5yYWRpdXMgKiAyKSA8IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2VudGVyWSArICh0aGlzLnJhZGl1cyAqIDIpID4gdGhpcy5tYXhZO1xuICAgIH1cblxuICAgIGNsZWFudXAoKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5tYXAoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UHJvamVjdGlsZUNoYXJhY3Rlcn0gZnJvbSBcIi4vcHJvamVjdGlsZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UGl4ZWxDb2xsaWRlcn0gZnJvbSBcIi4uL2NvcmUvY29sbGlkZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4uL2NvcmUvbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtyYW5kb21OdW1iZXJ9IGZyb20gXCIuLi9jb3JlL21hdGhfZXh0ZW5zaW9ucy5qc1wiO1xuaW1wb3J0IHtGQUNJTkdfRE9XTiwgRkFDSU5HX0xFRlQsIEZBQ0lOR19SSUdIVCwgRkFDSU5HX1VQfSBmcm9tIFwiLi4vY29yZS9mYWNpbmcuanNcIjtcbmltcG9ydCB7UGxheWVyQ2hhcmFjdGVyfSBmcm9tIFwiLi9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbmVteUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGhpbmtDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy50aGlua1NwZWVkID0gKDEgLyAxLjApICogMTAwMDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAxMDA7IC8vIFRPRE86IG1ha2UgdGhpcyBwYXJ0IG9mIGEgc3BlY1xuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoc3ByaXRlTWFwLCB0aGlzLCAwKTtcbiAgICAgICAgdGhpcy5tb3ZhYmxlID0gbmV3IE1vdmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgUGl4ZWxDb2xsaWRlcih0aGlzLCB0aGlzLnNwcml0ZSk7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMubW92YWJsZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICB9XG5cbiAgICB0aGluaygpIHtcbiAgICAgICAgdmFyIHJhbmRvbSA9IHJhbmRvbU51bWJlcig0KTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9ICdOT05FJztcbiAgICAgICAgc3dpdGNoIChyYW5kb20pIHtcbiAgICAgICAgICAgIGNhc2UgMTogZGlyZWN0aW9uID0gRkFDSU5HX0xFRlQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOiBkaXJlY3Rpb24gPSBGQUNJTkdfUklHSFQ7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBkaXJlY3Rpb24gPSBGQUNJTkdfRE9XTjsgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6IGRpcmVjdGlvbiA9IEZBQ0lOR19VUDsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubW92YWJsZS5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lTm93LCB0aW1lRWxhcHNlZCk7XG5cbiAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSB0aGlzLnRoaW5rQ291bnRlciArIHRpbWVFbGFwc2VkO1xuXG4gICAgICAgIGlmICh0aGlzLnRoaW5rQ291bnRlciA+IHRoaXMudGhpbmtTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy50aGlua0NvdW50ZXIgPSB0aGlzLnRoaW5rQ291bnRlciAlIHRoaXMudGhpbmtTcGVlZDtcbiAgICAgICAgICAgIHRoaXMudGhpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgICAgICBpZiAod2l0aE9iamVjdCBpbnN0YW5jZW9mIFByb2plY3RpbGVDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aXRoT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB3aXRoT2JqZWN0LnJlY2VpdmVEYW1hZ2UodGhpcy5kYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7UHJvamVjdGlsZUNoYXJhY3Rlcn0gZnJvbSBcIi4vcHJvamVjdGlsZV9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vY29yZS9zcHJpdGUuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4uL2NvcmUvbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4uL2NvcmUvY29sbGlkZXIuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV059IGZyb20gXCIuLi9jb3JlL2ZhY2luZy5qc1wiO1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtUcmVhc3VyZUNoYXJhY3Rlcn0gZnJvbSBcIi4vdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge1BMQVlFUl9TUFJJVEVfTUFQLCBQUk9KRUNUSUxFX1NQUklURV9NQVB9IGZyb20gXCIuLi90cmVhc3VyZV9odW50X2FydC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFkpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYmV5c1BoeXNpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmludmVudG9yeSA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShQTEFZRVJfU1BSSVRFX01BUCwgdGhpcywgRkFDSU5HX0RPV04pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5zcHJpdGUpO1xuXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb2xsaWRlcik7XG4gICAgfVxuXG4gICAgb25BbmltYXRlZCgpIHtcbiAgICAgICAgc3VwZXIub25BbmltYXRlZCgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTdGF0ZSh0aGlzLm1vdmFibGUuZmFjaW5nKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ib3VuZHMueCA9IHRoaXMuaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuYm91bmRzLnkgPSB0aGlzLmluaXRpYWxZO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBoYW5kbGVHYW1lQ29tbWFuZChjb21tYW5kLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAoY29tbWFuZCA9PSAnRklSRScpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZVByb2plY3RpbGUoZ2FtZU9iamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb3ZhYmxlLm1vdmUoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBUcmVhc3VyZUNoYXJhY3Rlcikge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnkucHVzaCh3aXRoT2JqZWN0LnRyZWFzdXJlVHlwZSk7XG4gICAgICAgICAgICB3aXRoT2JqZWN0LnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIHJlY2VpdmVEYW1hZ2UoZGFtYWdlQW1vdW50KSB7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IGRhbWFnZUFtb3VudDtcbiAgICB9XG5cbiAgICBmaXJlUHJvamVjdGlsZShnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgcHJvamVjdGlsZSA9IG5ldyBQcm9qZWN0aWxlQ2hhcmFjdGVyKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSwgdGhpcy5tb3ZhYmxlLmZhY2luZywgOCwgUFJPSkVDVElMRV9TUFJJVEVfTUFQKTtcbiAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHByb2plY3RpbGUpO1xuICAgIH1cblxuICAgIGhhc1RyZWFzdXJlKHRyZWFzdXJlVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnZlbnRvcnkuZmlsdGVyKHQgPT4gdCA9PSB0cmVhc3VyZVR5cGUpLmxlbmd0aCA+IDA7XG4gICAgfVxufSIsImltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vY29yZS9jaGFyYWN0ZXIuanNcIjtcbmltcG9ydCB7UGl4ZWxDb2xsaWRlcn0gZnJvbSBcIi4uL2NvcmUvY29sbGlkZXIuanNcIjtcbmltcG9ydCB7TW92YWJsZX0gZnJvbSBcIi4uL2NvcmUvbW92YWJsZS5qc1wiO1xuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9jb3JlL3Nwcml0ZS5qc1wiO1xuaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi93YWxsX2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZUNoYXJhY3RlciBleHRlbmRzIENoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFgsIGluaXRpYWxZLCBkaXJlY3Rpb24sIG1heERpc3RhbmNlLCBzcHJpdGVNYXApIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcbiAgICAgICAgdGhpcy50cmF2ZWxTcGVlZCA9ICgxIC8gNi4wKSAqIDEwMDA7XG4gICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMub2JleXNQaHlzaWNzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gc2V0IHVwIG91ciBzcHJpdGVcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKHNwcml0ZU1hcCwgdGhpcywgZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuc3ByaXRlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCB1cCBvdXIgYWJpbGl0eSB0byBtb3ZlXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG5ldyBNb3ZhYmxlKHRoaXMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5tb3ZhYmxlKTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgY29sbGlzaW9ucyB3aXRoIG9iamVjdHNcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IG5ldyBQaXhlbENvbGxpZGVyKHRoaXMsIHRoaXMuc3ByaXRlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29sbGlkZXIpO1xuICAgIH1cblxuICAgIHRoaW5rKCkge1xuICAgICAgICB0aGlzLm1vdmFibGUubW92ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VUcmF2ZWxlZCsrO1xuICAgICAgICBpZiAodGhpcy5kaXN0YW5jZVRyYXZlbGVkID49IHRoaXMubWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUodGltZU5vdywgdGltZUVsYXBzZWQpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKTtcblxuICAgICAgICB0aGlzLnRyYXZlbENvdW50ZXIgPSB0aGlzLnRyYXZlbENvdW50ZXIgKyB0aW1lRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy50cmF2ZWxDb3VudGVyID49IHRoaXMudHJhdmVsU3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJhdmVsQ291bnRlciA9IHRoaXMudHJhdmVsQ291bnRlciAtIHRoaXMudHJhdmVsU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLnRoaW5rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaWRlKHdpdGhPYmplY3QpIHtcbiAgICAgICAgaWYgKHdpdGhPYmplY3QgaW5zdGFuY2VvZiBXYWxsQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9jb3JlL2NoYXJhY3Rlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICAgc3VwZXIoaW5pdGlhbFgsIGluaXRpYWxZKTtcbiAgICAgICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sO1xuICAgICB9XG4gXG4gICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5zeW1ib2w7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgfVxuIH0iLCJpbXBvcnQge1N0YXRpY0NoYXJhY3Rlcn0gZnJvbSBcIi4vc3RhdGljX2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSBcIi4uL2NvcmUvY29sbGlkZXIuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlQ2hhcmFjdGVyIGV4dGVuZHMgU3RhdGljQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCwgdHJlYXN1cmVUeXBlKSB7XG4gICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCk7XG4gICAgICAgICBcbiAgICAgICAgIHRoaXMudHJlYXN1cmVUeXBlID0gdHJlYXN1cmVUeXBlO1xuXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIodGhpcyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLmNvbGxpZGVyKTtcbiAgICAgfVxuIH1cbiAiLCJpbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2NvcmUvY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBXYWxsQ2hhcmFjdGVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsWCwgaW5pdGlhbFksIHN5bWJvbCkge1xuICAgICAgICBzdXBlcihpbml0aWFsWCwgaW5pdGlhbFkpO1xuICAgICAgICB0aGlzLnN5bWJvbCA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5pc1BoeXNpY2FsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRDaGFyYWN0ZXIoY29sLCByb3cpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WCgpID09IGNvbCAmJiB0aGlzLmdldFkoKSA9PSByb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN5bWJvbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZS5qc1wiO1xuaW1wb3J0IHtVcGRhdGVhYmxlfSBmcm9tIFwiLi91cGRhdGVhYmxlLmpzXCI7XG5cbi8vIEJhc2UgY2xhc3MgZm9yIGV2ZXJ5IHR5cGUgb2YgcmVuZGVyYWJsZSBnYW1lIG9iamVjdFxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxYLCBpbml0aWFsWSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbFggPSBpbml0aWFsWDtcbiAgICAgICAgdGhpcy5pbml0aWFsWSA9IGluaXRpYWxZO1xuICAgICAgICB0aGlzLmN1cnJlbnRYID0gaW5pdGlhbFg7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSBpbml0aWFsWTtcbiAgICAgICAgdGhpcy56ID0gMDsgLy8gZGVmYXVsdCB0byB6IGF4aXMgcG9zIGJlaW5nIDBcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGluaXRpYWxYLCBpbml0aWFsWSwgMSwgMSk7XG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1BoeXNpY2FsID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmVlZHNSZWRyYXcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9iZXlzUGh5c2ljcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21HYW1lT2JqZWN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMuaW50ZW5kZWRQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0WChuZXdYKSB7XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdYIC0gdGhpcy5jdXJyZW50WDtcbiAgICAgICAgdGhpcy5jdXJyZW50WCArPSBkaWZmO1xuICAgICAgICB0aGlzLmJvdW5kcy54ICs9IGRpZmY7XG4gICAgfVxuXG4gICAgc2V0WShuZXdZKSB7XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdZIC0gdGhpcy5jdXJyZW50WTtcbiAgICAgICAgdGhpcy5jdXJyZW50WSArPSBkaWZmO1xuICAgICAgICB0aGlzLmJvdW5kcy55ICs9IGRpZmY7XG4gICAgfVxuXG4gICAgZ2V0WCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFg7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFk7XG4gICAgfVxuXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZHM7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcmFjdGVyKGNvbCwgcm93KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIG9uQW5pbWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubmVlZHNSZWRyYXcgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbGxpZGUod2l0aE9iamVjdCkge1xuICAgIH1cbn0iLCJpbXBvcnQge1VwZGF0ZWFibGV9IGZyb20gXCIuL3VwZGF0ZWFibGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbGxpZGVyIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudE9iamVjdDtcbiAgICB9XG5cbiAgICBpc0NvbGxpc2lvbihvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIHJldHVybiBvdGhlckNvbGxpZGVyLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpKTtcbiAgICB9XG5cbiAgICBjaGVja1BoeXNpY2FsQ29sbGlzaW9uKGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50T2JqZWN0O1xuICAgICAgICBjb25zdCBjb2xsaXNpb25PYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHguaXNQaHlzaWNhbCAmJlxuICAgICAgICAgICAgeCAhPT0gcGFyZW50ICYmXG4gICAgICAgICAgICB4LmdldEJvdW5kcygpLmludGVyc2VjdHMocGFyZW50LmdldEJvdW5kcygpKVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNvbGxpc2lvbk9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29sbGlkZSB3aXRoIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIGNvbGxpc2lvbk9iamVjdHMubWFwKG9iaiA9PiBwYXJlbnQuY29sbGlkZShvYmopKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrQ29sbGlkZXJDb2xsaXNpb24oZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRPYmplY3Q7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjb2xsaXNpb25PYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICB4ID0+IHggaW5zdGFuY2VvZiBDb2xsaWRlciAmJlxuICAgICAgICAgICAgeCAhPT0gdGhhdCAmJlxuICAgICAgICAgICAgeC5pc0NvbGxpc2lvbih0aGF0KSAmJlxuICAgICAgICAgICAgdGhhdC5pc0NvbGxpc2lvbih4KVxuICAgICAgICApO1xuICAgICAgICBpZiAoY29sbGlzaW9uT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb2xsaWRlIHdpdGggZWFjaCBvdGhlclxuICAgICAgICAgICAgY29sbGlzaW9uT2JqZWN0cy5tYXAob2JqID0+IHBhcmVudC5jb2xsaWRlKG9iai5wYXJlbnRPYmplY3QpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBpeGVsQ29sbGlkZXIgZXh0ZW5kcyBDb2xsaWRlciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50T2JqZWN0LCBzcHJpdGUpIHtcbiAgICAgICAgc3VwZXIocGFyZW50T2JqZWN0KTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzcHJpdGU7XG4gICAgfVxuXG4gICAgY2hlY2tQaXhlbENvbGxpc29uXzJfU3ByaXRlcyhzcHJpdGUxLCBzcHJpdGUyKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudEJvdW5kcyA9IHNwcml0ZTEuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGNvbnN0IGlzUGl4ZWwgPSBmdW5jdGlvbihjaGFyKSB7IHJldHVybiBjaGFyICE9IG51bGwgJiYgY2hhciAhPSAnICc7IH07XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHBhcmVudEJvdW5kcy5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBwYXJlbnRCb3VuZHMud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbCArIHNwcml0ZTEuZ2V0WCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByb3cgKyBzcHJpdGUxLmdldFkoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQaXhlbChzcHJpdGUxLmdldENoYXJhY3Rlcih4LCB5KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNQaXhlbChzcHJpdGUyLmdldENoYXJhY3Rlcih4LCB5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrUGl4ZWxDb2xsaXNvbl8xX1Nwcml0ZShzcHJpdGUxLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudEJvdW5kcyA9IHNwcml0ZTEuZ2V0Qm91bmRzKCk7XG4gICAgICAgIGNvbnN0IGlzUGl4ZWwgPSBmdW5jdGlvbihjaGFyKSB7IHJldHVybiBjaGFyICE9IG51bGwgJiYgY2hhciAhPSAnICc7IH07XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHBhcmVudEJvdW5kcy5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBwYXJlbnRCb3VuZHMud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbCArIHNwcml0ZTEuZ2V0WCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSByb3cgKyBzcHJpdGUxLmdldFkoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQaXhlbChzcHJpdGUxLmdldENoYXJhY3Rlcih4LCB5KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0c1BvaW50KHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0NvbGxpc2lvbihvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlckNvbGxpZGVyIGluc3RhbmNlb2YgUGl4ZWxDb2xsaWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tQaXhlbENvbGxpc29uXzJfU3ByaXRlcyh0aGlzLnNwcml0ZSwgb3RoZXJDb2xsaWRlci5zcHJpdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrUGl4ZWxDb2xsaXNvbl8xX1Nwcml0ZSh0aGlzLnNwcml0ZSwgb3RoZXJDb2xsaWRlcik7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBGQUNJTkdfVVAgPSAnVSc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0xFRlQgPSAnTCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX0RPV04gPSAnRCc7XG5leHBvcnQgY29uc3QgRkFDSU5HX1JJR0hUID0gJ1InOyIsImltcG9ydCB7VGhyZWFkfSBmcm9tIFwiLi90aHJlYWQuanNcIjtcbmltcG9ydCB7Q29sbGlkZXJ9IGZyb20gXCIuL2NvbGxpZGVyLmpzXCI7XG5pbXBvcnQge0dhbWVPYmplY3RzfSBmcm9tIFwiLi9nYW1lX29iamVjdHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RrZXlQcmVzc2VzID0gW107XG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWREcmF3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBuZXcgR2FtZU9iamVjdHMoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKHVwZGF0ZUZ1bmN0aW9uLCBkcmF3RnVuY3Rpb24sIHJlbmRlcmVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGhyZWFkVXBkYXRlID0gbmV3IFRocmVhZCh1cGRhdGVGdW5jdGlvbik7XG4gICAgICAgIHRoaXMudGhyZWFkRHJhdyA9IG5ldyBUaHJlYWQoZHJhd0Z1bmN0aW9uKTtcblxuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZS5zdGFydChvcHRpb25zWyd1cGRhdGVGUFMnXSk7IC8vdXBkYXRlIFggdGltZXMgcGVyIHNlY29uZFxuICAgICAgICB0aGlzLnRocmVhZERyYXcuc3RhcnQob3B0aW9uc1snZHJhd0ZQUyddKTsgLy9kcmF3IFggdGltZXMgcGVyIHNlY29uZFxuXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RrZXlQcmVzc2VzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBsaXN0ZW4gdG8gdGhlIGJyb3dzZXIga2V5c1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpOyAgICBcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICAvLyBzdG9wcGluZyB0aHJlYWRzIGFuZCByZW1vdmluZyBhbGwgZ2FtZU9iamVjdHMgc2hvdWxkIGJlIGVub3VnaFxuICAgICAgICB0aGlzLnRocmVhZERyYXcuc3RvcCgpO1xuICAgICAgICB0aGlzLnRocmVhZFVwZGF0ZS5zdG9wKCk7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuXG4gICAgICAgIC8vIG9uZSBtb3JlIHJlbmRlciB0byBjbGVhciBldmVyeXRoaW5nXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgIH1cblxuICAgIGdldExhc3RLZXlwcmVzcygpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdGtleVByZXNzZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RrZXlQcmVzc2VzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW92ZW1lbnQob2JqLCBpbnRlbmRlZFBvc2l0aW9uLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBsZXQgaXNPYnN0cnVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChvYmoub2JleXNQaHlzaWNzKSB7XG4gICAgICAgICAgICBsZXQgbmV3Qm91bmRzID0gb2JqLmdldEJvdW5kcygpLmNvcHkoKTtcbiAgICAgICAgICAgIG5ld0JvdW5kcy54ICs9IGludGVuZGVkUG9zaXRpb24ueCAtIG9iai5nZXRYKCk7XG4gICAgICAgICAgICBuZXdCb3VuZHMueSArPSBpbnRlbmRlZFBvc2l0aW9uLnkgLSBvYmouZ2V0WSgpO1xuICAgICAgICAgICAgaXNPYnN0cnVjdGVkID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoYyA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICE9PSBvYmogJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuZ2V0Qm91bmRzKCkuaW50ZXJzZWN0cyhuZXdCb3VuZHMpKS5sZW5ndGggPiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc09ic3RydWN0ZWQpIHtcbiAgICAgICAgICAgIG9iai5zZXRYKGludGVuZGVkUG9zaXRpb24ueCk7XG4gICAgICAgICAgICBvYmouc2V0WShpbnRlbmRlZFBvc2l0aW9uLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqLmludGVuZGVkUG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICAvLyB1cGRhdGUgZXZlcnl0aGluZ1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLm1hcCh4ID0+IHgudXBkYXRlKG5vdywgdGltZUVsYXBzZWQpKTtcblxuICAgICAgICAvLyBoYW5kbGUgbW92ZW1lbnQgaW50ZW50aW9uc1xuICAgICAgICBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHguaW50ZW5kZWRQb3NpdGlvbiAhPSBudWxsKS5tYXAoeCA9PiB0aGlzLmhhbmRsZU1vdmVtZW50KHgsIHguaW50ZW5kZWRQb3NpdGlvbiwgZ2FtZU9iamVjdHMpKTtcblxuICAgICAgICAvLyBjaGVjayBhbGwgY29sbGlzaW9uc1xuICAgICAgICBjb25zdCBjb2xsaWRlck9iamVjdHMgPSBnYW1lT2JqZWN0cy5vYmplY3RzLmZpbHRlcih4ID0+IHggaW5zdGFuY2VvZiBDb2xsaWRlcik7XG5cbiAgICAgICAgY29sbGlkZXJPYmplY3RzLm1hcCh4ID0+IHguY2hlY2tQaHlzaWNhbENvbGxpc2lvbihnYW1lT2JqZWN0cykpO1xuICAgICAgICBjb2xsaWRlck9iamVjdHMubWFwKHggPT4geC5jaGVja0NvbGxpZGVyQ29sbGlzaW9uKGdhbWVPYmplY3RzKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGV2ZXJ5dGhpbmcgdGhhdCBuZWVkcyB0byBiZSByZW1vdmVkXG4gICAgICAgIHZhciByZW1vdmFibGVPYmplY3RzID0gZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIoeCA9PiB4LnJlbW92ZUZyb21HYW1lT2JqZWN0cyk7XG4gICAgICAgIGlmIChyZW1vdmFibGVPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92YWJsZU9iamVjdHMubWFwKHggPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KHgpKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0SXNEaXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5jaGVja1JlZHJhdyhnYW1lT2JqZWN0cyk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZE9iamVjdChvYmopIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2gob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkT2JqZWN0cyhvYmpMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBvYmpMaXN0Lm1hcCh4ID0+IHRoYXQuYWRkT2JqZWN0KHgpKTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqKSB7XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGZpbHRlciBvdXQgdGhlIG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgaW4gYW5kIGl0cyBjaGlsZHJlblxuICAgICAgICB0aGlzLm9iamVjdHMgPSB0aGlzLm9iamVjdHMuZmlsdGVyKHggPT4geCAhPT0gb2JqKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IG9iai5jaGlsZHJlbiAmJiBpIDwgb2JqLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZU9iamVjdChvYmouY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0cyhvYmpMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICBvYmpMaXN0Lm1hcCh4ID0+IHRoYXQucmVtb3ZlT2JqZWN0KHgpKTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxPYmplY3RzKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIG1heCkgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbU51bWJlclJhbmdlKG1pbiwgbWF4KSB7XG4gICAgY29uc3QgZGlmZiA9IG1heCAtIG1pbjtcbiAgICBjb25zdCBhZGRpdGlvbiA9IE1hdGgucmFuZG9tKCkgKiBkaWZmO1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIGFkZGl0aW9uKTsgICAgXG59IiwiaW1wb3J0IHtGQUNJTkdfVVAsIEZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hUfSBmcm9tIFwiLi9mYWNpbmcuanNcIjtcbmltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTW92YWJsZSBleHRlbmRzIFVwZGF0ZWFibGUge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudE9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRPYmplY3Q7XG4gICAgICAgIHRoaXMuZmFjaW5nID0gRkFDSU5HX0RPV047XG4gICAgfVxuXG4gICAgc2V0RmFjaW5nKG5ld0ZhY2luZykge1xuICAgICAgICBpZiAobmV3RmFjaW5nICE9IHRoaXMuZmFjaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2luZyA9IG5ld0ZhY2luZztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgaW50ZW5kZWRYID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpO1xuICAgICAgICB2YXIgaW50ZW5kZWRZID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpO1xuXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBGQUNJTkdfTEVGVDogXG4gICAgICAgICAgICBpbnRlbmRlZFgtLTsgXG4gICAgICAgICAgICB0aGlzLnNldEZhY2luZyhGQUNJTkdfTEVGVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19SSUdIVDpcbiAgICAgICAgICAgIGludGVuZGVkWCsrOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19SSUdIVCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19VUDpcbiAgICAgICAgICAgIGludGVuZGVkWS0tOyBcbiAgICAgICAgICAgIHRoaXMuc2V0RmFjaW5nKEZBQ0lOR19VUCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEZBQ0lOR19ET1dOOlxuICAgICAgICAgICAgaW50ZW5kZWRZKys7IFxuICAgICAgICAgICAgdGhpcy5zZXRGYWNpbmcoRkFDSU5HX0RPV04pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIG11c3QgYmUgc29tZSBzb3J0IG9mIGJvZ3VzIG1vdmVtZW50LiBkb24ndCBoYW5kbGUuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0LmludGVuZGVkUG9zaXRpb24gPSB7eDogaW50ZW5kZWRYLCB5OiBpbnRlbmRlZFl9O1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5vbkFuaW1hdGVkKCk7ICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGludGVyc2VjdHNQb2ludCh4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgdGhpcy54ICsgdGhpcy53aWR0aCAmJlxuICAgICAgICAgICAgeCA+PSB0aGlzLnggJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJlxuICAgICAgICAgICAgeSA+PSB0aGlzLnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzKHJlY3RhbmdsZSkge1xuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy53aWR0aCA8PSByZWN0YW5nbGUueCB8fFxuICAgICAgICAgICAgdGhpcy54ID49IHJlY3RhbmdsZS54ICsgcmVjdGFuZ2xlLndpZHRoIHx8XG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA8PSByZWN0YW5nbGUueSB8fFxuICAgICAgICAgICAgdGhpcy55ID49IHJlY3RhbmdsZS55ICsgcmVjdGFuZ2xlLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvcHkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdmlld1csIHZpZXdIKTtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbGVhclNjcmVlbigpIHtcbiAgICAgICAgLy8gY2xlYXIgdGhlIHNjcmVlbiBhbmQgc2V0IGN1cnNvciBhdCAwLDBcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgIH1cblxuICAgIGlzT25TY3JlZW4oY2hhcmFjdGVyKSB7XG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXIuaXNWaXNpYmxlICYmIGNoYXJhY3Rlci5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzKHRoaXMudmlld3BvcnQpO1xuICAgIH1cblxuICAgIHJlbmRlcihnYW1lT2JqZWN0cykge1xuICAgICAgICAvLyBvdmVycmlkZSB0aGlzIHRvIGRvIHNvbWV0aGluZyB1c2VmdWxcbiAgICB9XG5cbiAgICBnZXRTcGFjZUNoYXJhY3RlcigpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBkaWZmZXJlbnQgZGVwZW5kaW5nIG9uIHRoZSBlbnZpcm9ubWVudFxuICAgICAgICByZXR1cm4gJyAnO1xuICAgIH1cblxuICAgIGdldElzRGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlydHk7ICAgXG4gICAgfVxuXG4gICAgc2V0SXNEaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5pc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGVja1JlZHJhdyhnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5nZXRSZW5kZXJhYmxlT2JqZWN0c09uU2NyZWVuKGdhbWVPYmplY3RzKS5maWx0ZXIoYyA9PiBjLm5lZWRzUmVkcmF3KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldElzRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZSA9IGdhbWVPYmplY3RzLm9iamVjdHMuZmlsdGVyKGMgPT4gYy5pc1Zpc2libGUgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc09uU2NyZWVuKGMpKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmFibGU7XG4gICAgfVxuXG4gICAgY2VudGVyVmlld3BvcnRPbihjaGFyYWN0ZXIsIG1hcCkge1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnggPSBNYXRoLm1pbihtYXAud2lkdGggLSB0aGlzLnZpZXdwb3J0LndpZHRoLCBNYXRoLm1heCgwLCBjaGFyYWN0ZXIuZ2V0WCgpIC0gKHRoaXMudmlld3BvcnQud2lkdGggLyAyKSkpO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnkgPSBNYXRoLm1pbihtYXAuaGVpZ2h0IC0gdGhpcy52aWV3cG9ydC5oZWlnaHQsIE1hdGgubWF4KDAsIGNoYXJhY3Rlci5nZXRZKCkgLSAodGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKSkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Vywgdmlld0gpIHtcbiAgICAgICAgc3VwZXIodmlld1csIHZpZXdIKTtcbiAgICB9XG5cbiAgICByZW5kZXIoZ2FtZU9iamVjdHMpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICB2YXIgcmVuZGVyYWJsZU9iamVjdHMgPSB0aGlzLmdldFJlbmRlcmFibGVPYmplY3RzT25TY3JlZW4oZ2FtZU9iamVjdHMpO1xuICAgICAgICAvLyByZXZlcnNlIHNvcnQgYnkgeiBheGlzLCBncmFiIGhpZ2hlc3RcbiAgICAgICAgcmVuZGVyYWJsZU9iamVjdHMuc29ydCgoYSwgYikgPT4gYi56IC0gYS56KTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIHJvdyA9IHRoaXMudmlld3BvcnQueTsgcm93IDwgdGhpcy52aWV3cG9ydC55ICsgdGhpcy52aWV3cG9ydC5oZWlnaHQ7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSB0aGlzLnZpZXdwb3J0Lng7IGNvbCA8IHRoaXMudmlld3BvcnQueCArIHRoaXMudmlld3BvcnQud2lkdGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYXJhY3RlcnMgPSByZW5kZXJhYmxlT2JqZWN0cy5maWx0ZXIoYyA9PiBjLmdldENoYXJhY3RlcikubWFwKGMgPT4gYy5nZXRDaGFyYWN0ZXIoY29sLCByb3cpKS5maWx0ZXIoYyA9PiBjICE9IG51bGwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgY2hhcmFjdGVyc1swXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyAnICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgJ1xcbic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSByZWRyYXcgZmxhZyBvbiBhbGwgb2JqZWN0cyB3ZSB3ZXJlIGFibGUgdG8gcmVuZGVyXG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLm1hcChjID0+IGMubmVlZHNSZWRyYXcgPSBmYWxzZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHRtbFJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXdXLCB2aWV3SCkge1xuICAgICAgICBzdXBlcih2aWV3Vywgdmlld0gpO1xuICAgIH1cblxuICAgIGdldFNwYWNlQ2hhcmFjdGVyKCkge1xuICAgICAgICAvLyBodG1sIHN0cmlwcyBvdXQgcmVndWxhciBzcGFjZXNcbiAgICAgICAgcmV0dXJuICcmbmJzcDsnO1xuICAgIH1cblxuICAgIHJlbmRlcihnYW1lT2JqZWN0cykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJzxwPic7XG4gICAgICAgIHZhciByZW5kZXJhYmxlT2JqZWN0cyA9IHRoaXMuZ2V0UmVuZGVyYWJsZU9iamVjdHNPblNjcmVlbihnYW1lT2JqZWN0cyk7XG4gICAgICAgIC8vIHJldmVyc2Ugc29ydCBieSB6IGF4aXMsIGdyYWIgaGlnaGVzdFxuICAgICAgICByZW5kZXJhYmxlT2JqZWN0cy5zb3J0KChhLCBiKSA9PiBiLnogLSBhLnopO1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgcm93ID0gdGhpcy52aWV3cG9ydC55OyByb3cgPCB0aGlzLnZpZXdwb3J0LnkgKyB0aGlzLnZpZXdwb3J0LmhlaWdodDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IHRoaXMudmlld3BvcnQueDsgY29sIDwgdGhpcy52aWV3cG9ydC54ICsgdGhpcy52aWV3cG9ydC53aWR0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhcmFjdGVycyA9IHJlbmRlcmFibGVPYmplY3RzLmZpbHRlcihjID0+IGMuZ2V0Q2hhcmFjdGVyKS5tYXAoYyA9PiBjLmdldENoYXJhY3Rlcihjb2wsIHJvdykpLmZpbHRlcihjID0+IGMgIT0gbnVsbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gY2hhcmFjdGVyc1swXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5nZXRTcGFjZUNoYXJhY3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dHB1dCArPSAnPC9wPjxwPic7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ICs9ICc8cD4nO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuaW5uZXJIVE1MID0gb3V0cHV0O1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSByZWRyYXcgZmxhZyBvbiBhbGwgb2JqZWN0cyB3ZSB3ZXJlIGFibGUgdG8gcmVuZGVyXG4gICAgICAgIHJlbmRlcmFibGVPYmplY3RzLm1hcChjID0+IGMubmVlZHNSZWRyYXcgPSBmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCB7VXBkYXRlYWJsZX0gZnJvbSBcIi4vdXBkYXRlYWJsZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgVXBkYXRlYWJsZSB7XG4gICAgLy8gZm9ybWF0IG9mIGEgc3ByaXRlTWFwOlxuICAgIC8vIHtcbiAgICAvLyAgICAgXCI8c3RhdGU+XCI6IFt7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9LFxuICAgIC8vICAgICAgICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogPHRpbWVJbk1pbGxpc2VjPiwgXCJjaGFyYWN0ZXJzXCI6IFs8cm93MXN0cmluZz4sIDxyb3cyc3RyaW5nPiwgZXRjXSB9IF1cbiAgICAvLyB9XG4gICAgY29uc3RydWN0b3Ioc3ByaXRlTWFwLCBwYXJlbnRPYmplY3QsIGluaXRpYWxTdGF0ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zcHJpdGVNYXAgPSBzcHJpdGVNYXA7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50T2JqZWN0O1xuICAgICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgICAgICB0aGlzLmV4cGlyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZUVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE9iamVjdC5ib3VuZHM7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVFbGFwc2VkID0gdGhpcy5zdGF0ZUVsYXBzZWQgKyB0aW1lRWxhcHNlZDtcbiAgICAgICAgXG4gICAgICAgIHZhciBwcmV2RnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50RnJhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgIT0gcHJldkZyYW1lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwaXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QucmVtb3ZlRnJvbUdhbWVPYmplY3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFyZW50T2JqZWN0Lm9uQW5pbWF0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICAgICAgbGV0IG5ld1cgPSAwO1xuICAgICAgICBsZXQgbmV3SCA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLmV4cGlyZWQpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5mcmFtZTtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJSb3dzID0gc3ByaXRlc1tmcmFtZV1bXCJjaGFyYWN0ZXJzXCJdO1xuXG4gICAgICAgICAgICB2YXIgZmlyc3RSb3cgPSA5OTk5OTk7XG4gICAgICAgICAgICB2YXIgbGFzdFJvdyA9IDA7XG4gICAgICAgICAgICB2YXIgZmlyc3RDb2wgPSA5OTk5OTk7XG4gICAgICAgICAgICB2YXIgbGFzdENvbCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGNoYXJhY3RlclJvd3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW1ib2wgPSBjaGFyYWN0ZXJSb3dzW3Jvd10uY2hhckF0KGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2wgJiYgc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RSb3cgPSBNYXRoLm1pbihmaXJzdFJvdywgcm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RSb3cgPSBNYXRoLm1heChsYXN0Um93LCByb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDb2wgPSBNYXRoLm1pbihmaXJzdENvbCwgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RDb2wgPSBNYXRoLm1heChsYXN0Q29sLCBjb2wpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGZlZWxzIGRpcnR5XG4gICAgICAgICAgICBuZXdXID0gbGFzdENvbCAtIGZpcnN0Q29sICsgMTtcbiAgICAgICAgICAgIG5ld0ggPSBsYXN0Um93IC0gZmlyc3RSb3cgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkud2lkdGggPSBuZXdXO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS5oZWlnaHQgPSBuZXdIO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiYmNlbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS54ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WCgpIC0gTWF0aC5mbG9vcihuZXdXIC8gMik7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE9iamVjdC5nZXRCb3VuZHMoKS55ID0gdGhpcy5wYXJlbnRPYmplY3QuZ2V0WSgpIC0gTWF0aC5mbG9vcihuZXdIKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKSAtIE1hdGguZmxvb3IobmV3VyAvIDIpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkueSA9IHRoaXMucGFyZW50T2JqZWN0LmdldFkoKSAtIE1hdGguZmxvb3IobmV3SCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNpemUoKTtcbiAgICB9XG5cbiAgICBnZXRYKCkge1xuICAgICAgICBsZXQgeCA9IHRoaXMucGFyZW50T2JqZWN0LmdldFgoKTtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiIHx8IHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImJjZW50ZXJcIikge1xuICAgICAgICAgICAgeCAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLndpZHRoIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgZ2V0WSgpIHtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7IFxuICAgICAgICBpZiAodGhpcy5zcHJpdGVNYXAuYW5jaG9yID09IFwiYmNlbnRlclwiKSB7XG4gICAgICAgICAgICB5IC09IE1hdGguZmxvb3IodGhpcy5wYXJlbnRPYmplY3QuZ2V0Qm91bmRzKCkuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgeSAtPSBNYXRoLmZsb29yKHRoaXMucGFyZW50T2JqZWN0LmdldEJvdW5kcygpLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUN1cnJlbnRGcmFtZSgpIHtcbiAgICAgICAgdmFyIHNwcml0ZXMgPSB0aGlzLnNwcml0ZU1hcC5zdGF0ZXNbdGhpcy5zdGF0ZV07XG4gICAgICAgIHZhciB0b3RhbFRpbWUgPSBzcHJpdGVzLnJlZHVjZShmdW5jdGlvbihhY2MsIGN1clZhbCkgeyByZXR1cm4gYWNjICsgY3VyVmFsW1wiZGlzcGxheVRpbWVcIl07IH0sIDApO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVFbGFwc2VkID4gdG90YWxUaW1lICYmIHRoaXMuc3ByaXRlTWFwLmxvb3AgPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBcblxuICAgICAgICB2YXIgbGVmdG92ZXIgPSB0aGlzLnN0YXRlRWxhcHNlZCAlIHRvdGFsVGltZTtcbiAgICAgICAgdmFyIGZyYW1lID0gMDtcbiAgICAgICAgdmFyIHRpbWVBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZnJhbWUgPSBpO1xuICAgICAgICAgICAgLy8gVE9ETzogcmVwbGFjZSB0aGlzIHdpdGggYSByZWR1Y2UoKVxuICAgICAgICAgICAgdmFyIGRpc3BsYXlUaW1lID0gc3ByaXRlc1tpXVtcImRpc3BsYXlUaW1lXCJdO1xuICAgICAgICAgICAgaWYgKHRpbWVBY2N1bXVsYXRvciArIGRpc3BsYXlUaW1lID4gbGVmdG92ZXIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVBY2N1bXVsYXRvciA9IHRpbWVBY2N1bXVsYXRvciArIGRpc3BsYXlUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmdldFgoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgY2hhcmFjdGVyUm93cyA9IHRoaXMuc3ByaXRlTWFwLnN0YXRlc1t0aGlzLnN0YXRlXVt0aGlzLmZyYW1lXVtcImNoYXJhY3RlcnNcIl07XG4gICAgICAgIFxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJDb2wgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRYKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJjZW50ZXJcIiB8fCB0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZXMgdGhlIGZpcnN0IHJvdyBpcyB0aGUgc2FtZSB3aWR0aCBhcyB0aGUgb3RoZXIgZnJhbWVzXG4gICAgICAgICAgICBvdXJDb2wgPSBvdXJDb2wgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3NbMF0ubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyQ29sO1xuICAgIH1cblxuICAgIGdldEFuY2hvcmVkWSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50T2JqZWN0LmdldFkoKVxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGFyYWN0ZXJSb3dzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdW3RoaXMuZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSB0aGlzLnBhcmVudE9iamVjdC5nZXRZKCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU1hcC5hbmNob3IgPT0gXCJiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG91clJvdyA9IG91clJvdyAtIE1hdGguZmxvb3IoY2hhcmFjdGVyUm93cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3ByaXRlTWFwLmFuY2hvciA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvdXJSb3cgPSBvdXJSb3cgLSBNYXRoLmZsb29yKGNoYXJhY3RlclJvd3MubGVuZ3RoIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3VyUm93O1xuICAgIH1cblxuICAgIGdldENoYXJhY3Rlcihjb2wsIHJvdykge1xuICAgICAgICBpZiAodGhpcy5mcmFtZSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzcHJpdGVzID0gdGhpcy5zcHJpdGVNYXAuc3RhdGVzW3RoaXMuc3RhdGVdO1xuICAgICAgICB2YXIgZnJhbWUgPSB0aGlzLmZyYW1lO1xuICAgICAgICB2YXIgY2hhcmFjdGVyUm93cyA9IHNwcml0ZXNbZnJhbWVdW1wiY2hhcmFjdGVyc1wiXTtcblxuICAgICAgICAvLyBSZW1vdmUgYW55IG5vdGlvbiBvZiB0aGUgbWFwIGxvY2F0aW9uIGFuZCBsb2NhbGl6ZSB0byB0aGlzIHNwcml0ZSBvbmx5XG4gICAgICAgIHZhciBvdXJSb3cgPSByb3cgLSB0aGlzLmdldEFuY2hvcmVkWSgpO1xuICAgICAgICB2YXIgb3VyQ29sID0gY29sIC0gdGhpcy5nZXRBbmNob3JlZFgoKTtcblxuICAgICAgICBpZiAob3VyUm93ID49IDAgJiYgXG4gICAgICAgICAgICBvdXJDb2wgPj0gMCAmJiBcbiAgICAgICAgICAgIG91clJvdyA8IGNoYXJhY3RlclJvd3MubGVuZ3RoICYmXG4gICAgICAgICAgICBvdXJDb2wgPCBjaGFyYWN0ZXJSb3dzW291clJvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbCA9IGNoYXJhY3RlclJvd3Nbb3VyUm93XS5jaGFyQXQob3VyQ29sKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sICE9ICcgJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCIvKipcbiAqIEFzc3VtZXMgeW91IGFyZSBzdGFydGluZyBvbiBhIFxuICovXG5mdW5jdGlvbiBnZXRXb3JkTGVuZ3RoKHRleHQsIHN0YXJ0SW5kZXgpIHtcbiAgICBsZXQgaSA9IHN0YXJ0SW5kZXg7XG4gICAgbGV0IHdvcmRMZW5ndGggPSAxO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoIHx8IHRleHRbaV0gPT0gJ1xcbicgfHwgdGV4dFtpXSA9PSAnICcpIHtcbiAgICAgICAgICAgIHdvcmRMZW5ndGggPSBpIC0gc3RhcnRJbmRleDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRMZW5ndGg7XG59XG5cbi8qKlxuICogVGFrZXMgaW4gYSBzdHJpbmcgYW5kIGEgd3JhcCB3aWR0aCBhbmQgc3BsaXRzIHRoZSBzdHJpbmcgaW50b1xuICogYW4gYXJyYXkgb2YgdGV4dCBzdWJzdHJpbmdzIHRoYXQgYXJlIGFsbCBndWFyYW50ZWVkIHRvIGJlIGxlc3MgdGhhbiB0aGUgd3JhcCB3aWR0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBUZXh0KHRleHQsIHdyYXBXaWR0aCkge1xuICAgIGxldCByb3dzID0gW107XG4gICAgbGV0IGxhc3RSb3dTdGFydCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDw9IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIGlmIChpID09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBmaW5hbCBsZXR0ZXJcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1ckNoYXIgPSB0ZXh0W2ldO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1ckNoYXIgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IGxpbmUgYnJlYWtcbiAgICAgICAgICAgIHJvd3MucHVzaCh0ZXh0LnN1YnN0cmluZyhsYXN0Um93U3RhcnQsIGkpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VyQ2hhciAhPSAnICcpIHtcbiAgICAgICAgICAgIC8vIGxvb2sgYWhlYWQgYXQgbGVuZ3RoIG9mIHRoaXMgd29yZFxuICAgICAgICAgICAgY29uc3Qgd29yZExlbmd0aCA9IGdldFdvcmRMZW5ndGgodGV4dCwgaSk7XG5cbiAgICAgICAgICAgIGlmIChpICsgd29yZExlbmd0aCAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB0aGlzIHdvcmQgd29uJ3QgZml0XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKHRleHQuc3Vic3RyaW5nKGxhc3RSb3dTdGFydCwgaSkpO1xuICAgICAgICAgICAgICAgIGxhc3RSb3dTdGFydCA9IGk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGFsbCBnb29kLCBzdGFydCBmaW5kaW5nIHRoZSBuZXh0IHdvcmRcbiAgICAgICAgICAgICAgICBpICs9IHdvcmRMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBpZiAoaSAtIGxhc3RSb3dTdGFydCA+PSB3cmFwV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYXNlOiB3ZSByYW4gb3V0IG9mIGxpbmUgd2lkdGhcbiAgICAgICAgICAgICAgICByb3dzLnB1c2godGV4dC5zdWJzdHJpbmcobGFzdFJvd1N0YXJ0LCBpKSk7XG4gICAgICAgICAgICAgICAgbGFzdFJvd1N0YXJ0ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcm93cztcbn0iLCJleHBvcnQgY2xhc3MgVGhyZWFkIHtcbiAgICBjb25zdHJ1Y3RvcihmdW5jdGlvblBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5mdW5jdGlvblBvaW50ZXIgPSBmdW5jdGlvblBvaW50ZXI7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhcnQoZGVzaXJlZEZyYW1lcmF0ZSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoYXQuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgPSAxMDAwLyBkZXNpcmVkRnJhbWVyYXRlO1xuXG4gICAgICAgIHZhciBpbnRlcm5hbFJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhhdC5mdW5jdGlvblBvaW50ZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGNhbGwgdGFrZXMgYSB3aGlsZSwgcmVkdWNlIHRoZSBkZWxheSB1bnRpbCB0aGUgbmV4dCBleGVjdXRlXG4gICAgICAgICAgICAgICAgdmFyIG5leHREZWxheSA9IE1hdGgubWF4KDAsIG1pbmltdW1NaWxsc2VjUGVyRnJhbWUgLSAoYWZ0ZXIgLSBub3cpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIG5leHREZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5pdGlhbCBjYWxsXG4gICAgICAgIHNldFRpbWVvdXQoaW50ZXJuYWxSdW4sIDApOyBcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH1cbn0iLCIvLyBCYXNlIGNsYXNzIGZvciBldmVyeSB0eXBlIG9mIGdhbWUgb2JqZWN0XG5leHBvcnQgY2xhc3MgVXBkYXRlYWJsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWVOb3csIHRpbWVFbGFwc2VkKSB7XG4gICAgfVxufSIsImltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19MRUZULCBGQUNJTkdfUklHSFQsIEZBQ0lOR19VUH0gZnJvbSBcIi4vY29yZS9mYWNpbmcuanNcIjtcblxuZXhwb3J0IGNsYXNzIEtleU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0R2FtZUNvbW1hbmQoa2V5KSB7XG4gICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgY2FzZSAnYSc6IFxuICAgICAgICBjYXNlIFwiNjVcIjpcbiAgICAgICAgY2FzZSBcIjM3XCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0xFRlQ7XG5cbiAgICAgICAgY2FzZSAnZSc6IFxuICAgICAgICBjYXNlICdkJzogXG4gICAgICAgIGNhc2UgXCI2OFwiOlxuICAgICAgICBjYXNlIFwiMzlcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfUklHSFQ7XG5cbiAgICAgICAgY2FzZSAnLCc6IFxuICAgICAgICBjYXNlICd3JzogXG4gICAgICAgIGNhc2UgXCI4N1wiOlxuICAgICAgICBjYXNlIFwiMzhcIjpcbiAgICAgICAgICAgIHJldHVybiBGQUNJTkdfVVA7XG5cbiAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBjYXNlIFwiODNcIjpcbiAgICAgICAgY2FzZSBcIjQwXCI6XG4gICAgICAgICAgICByZXR1cm4gRkFDSU5HX0RPV047XG5cbiAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgIGNhc2UgJzY3JzpcbiAgICAgICAgICAgIHJldHVybiAnUVVJVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnZic6XG4gICAgICAgIGNhc2UgJzcwJzpcbiAgICAgICAgY2FzZSAnMzInOlxuICAgICAgICAgICAgcmV0dXJuICdGSVJFJztcblxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgY2FzZSAnNzInOlxuICAgICAgICAgICAgcmV0dXJuICdIRUxQJztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgJzEzJzpcbiAgICAgICAgICAgIHJldHVybiAnRU5URVInO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7VHJlYXN1cmVIdW50R2FtZX0gZnJvbSBcIi4vdHJlYXN1cmUtaHVudC5qc1wiO1xuaW1wb3J0IHtNYWtlSXRSYWluR2FtZX0gZnJvbSBcIi4vbWFrZS1pdC1yYWluLmpzXCI7XG5cbi8vIE9wdGlvbnMgdGhhdCBjb250cm9sIHRoZSBmbG93IG9mIHRoZSBnYW1lXG52YXIgdHJlYXN1cmVIdW50T3B0aW9ucyA9IHtcbiAgICAncGxheUluQnJvd3Nlcic6IGZhbHNlLFxuICAgICdkcmF3RlBTJzogMTAsXG4gICAgJ3VwZGF0ZUZQUyc6IDEwLFxuICAgICd2aWV3cG9ydFdpZHRoJzogNDAsXG4gICAgJ21pblZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWF4Vmlld3BvcnRXaWR0aCc6IDYwLFxuICAgICd2aWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtaW5WaWV3cG9ydEhlaWdodCc6IDE0LFxuICAgICdtYXhWaWV3cG9ydEhlaWdodCc6IDIwLFxuICAgICdudW1FbmVtaWVzJzogMTBcbn07XG5cbnZhciByYWluT3B0aW9ucyA9IHtcbiAgICAncGxheUluQnJvd3Nlcic6IHRydWUsXG4gICAgJ2RyYXdGUFMnOiAxMCxcbiAgICAndXBkYXRlRlBTJzogMTAsXG4gICAgJ3ZpZXdwb3J0V2lkdGgnOiA0MCxcbiAgICAnbWluVmlld3BvcnRXaWR0aCc6IDQwLFxuICAgICdtYXhWaWV3cG9ydFdpZHRoJzogNjAsXG4gICAgJ3ZpZXdwb3J0SGVpZ2h0JzogMTQsXG4gICAgJ21pblZpZXdwb3J0SGVpZ2h0JzogMTQsXG4gICAgJ21heFZpZXdwb3J0SGVpZ2h0JzogMjAsXG59O1xuXG5mdW5jdGlvbiBydW4oKSB7ICBcbiAgICBsZXQgaXNSYWluaW5nID0gZmFsc2U7XG4gICAgdmFyIHJhaW5HYW1lID0gbmV3IE1ha2VJdFJhaW5HYW1lKCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWtlaXRyYWluXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCFpc1JhaW5pbmcpIHtcbiAgICAgICAgICAgIGlzUmFpbmluZyA9IHRydWU7XG4gICAgICAgICAgICByYWluR2FtZS5pbml0aWFsaXplKHJhaW5PcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUmFpbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmFpbkdhbWUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcyB3aWxsIHJ1biBpbiB0aGUgY29uc29sZVxuICAgIHZhciB0aEdhbWUgPSBuZXcgVHJlYXN1cmVIdW50R2FtZSgpO1xuICAgIHRoR2FtZS5pbml0aWFsaXplKHRyZWFzdXJlSHVudE9wdGlvbnMpO1xufVxuXG5ydW4oKTtcbiIsIlxuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9jb3JlL2dhbWUuanNcIjtcbmltcG9ydCB7QW5pbWF0aW9uSGFuZGxlcn0gZnJvbSBcIi4vYW5pbWF0aW9ucy9hbmltYXRpb25faGFuZGxlci5qc1wiO1xuaW1wb3J0IHtSYWluQW5pbWF0aW9ufSBmcm9tIFwiLi9hbmltYXRpb25zL3JhaW5fYW5pbWF0aW9uXCI7XG5pbXBvcnQge0h0bWxSZW5kZXJlciwgQ29uc29sZVJlbmRlcmVyfSBmcm9tIFwiLi9jb3JlL3JlbmRlcmVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWtlSXRSYWluR2FtZSBleHRlbmRzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzZXQgdXAgYmFzaWMgZ2FtZSBvYmplY3RzXG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIC8vIHN0YXJ0IGZyb20gc2NyYXRjaFxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLnJlbW92ZUFsbE9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmNsZWFyQW5pbWF0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFJhaW5BbmltYXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcblxuICAgICAgICAvLyBmaXJzdCBkcmF3IG9mIHJlbmRlclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0TGFzdEtleXByZXNzKCk7XG4gICAgICAgIGlmIChudWxsICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHZhciBnYW1lQ29tbWFuZCA9IHRoaXMua2V5TWFwLmdldEdhbWVDb21tYW5kKGtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIC8vIFRPRE86IG1ha2UgdGhlIHJhaW4gZ28gbGVmdCBvciByaWdodD9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIudXBkYXRlKG5vdywgdGltZUVsYXBzZWQsIGdhbWVPYmplY3RzKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgLy8gcmFuZG9tIGd1ZXNzIHRoYXQgaXRzIDEwIHBpeGVscyBwZXIgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBvdmVycmlkZSBvcHRpb25zIGZvciBub3dcbiAgICAgICAgICAgIG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyA0LjIpO1xuICAgICAgICAgICAgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gNDUpO1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zWyd2aWV3cG9ydFdpZHRoJ107XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXTtcblxuICAgICAgICBzdXBlci5pbml0aWFsaXplKHVwZGF0ZUZ1bmMsIGRyYXdGdW5jLCByZW5kZXJlciwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICAvLyBkbyB0aGlzIGFmdGVyIGluaXRpYWxpemluZyBwYXJlbnRcbiAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIodGhpcy5yZW5kZXJlcik7XG4gICAgICAgIHRoaXMucmVzZXRMZXZlbCgpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHtXYWxsQ2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL3dhbGxfY2hhcmFjdGVyLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcERhdGEpIHtcbiAgICAgICAgdGhpcy5tYXBEYXRhID0gbWFwRGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG1hcERhdGEud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0TWFwQ2hhcmFjdGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGFkZCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBsZXZlbFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMubWFwRGF0YS5tYXBfb2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG9iai5pbWFnZS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSByb3cgKyBvYmoueTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U3RyID0gb2JqLmltYWdlW3Jvd107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgcm93U3RyLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBvYmoueCArIGNvbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNDaGFyID0gcm93U3RyLmNoYXJBdChjb2wpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0NoYXIgIT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3Rlcih4LCB5LCB0aGlzQ2hhcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGluIGxlZnQvcmlnaHQgbGV2ZWwgYmFycmllcnNcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMucHVzaChuZXcgV2FsbENoYXJhY3RlcigwLCB5LCBcInxcIikpO1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIodGhpcy53aWR0aCAtIDEsIHksIFwifFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgaW4gdG9wL2JvdHRvbSBsZXZlbCBiYXJyaWVyc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJzLnB1c2gobmV3IFdhbGxDaGFyYWN0ZXIoeCwgMCwgXCItXCIpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKG5ldyBXYWxsQ2hhcmFjdGVyKHgsIHRoaXMuaGVpZ2h0IC0gMSwgXCItXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnM7XG4gICAgfVxufSIsImltcG9ydCB7U3RhdGljQ2hhcmFjdGVyfSBmcm9tIFwiLi4vY2hhcmFjdGVycy9zdGF0aWNfY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FDVElPTl9OT05FfSBmcm9tIFwiLi9tZW51X2FjdGlvbnMuanNcIjtcbmltcG9ydCB7RkFDSU5HX0RPV04sIEZBQ0lOR19VUH0gZnJvbSBcIi4uL2NvcmUvZmFjaW5nXCI7XG5pbXBvcnQge3dyYXBUZXh0fSBmcm9tIFwiLi4vY29yZS90ZXh0X2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKG1lbnVTcGVjLCB2aWV3cG9ydCwgelBvc2l0aW9uLCBzcGFjZUNoYXIpIHtcbiAgICAgICAgdGhpcy5zcGVjID0gbWVudVNwZWM7XG4gICAgICAgIHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgICAgICB0aGlzLnpQb3NpdGlvbiA9IHpQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc3BhY2VDaGFyID0gc3BhY2VDaGFyO1xuICAgIH1cblxuICAgIGdldE51bU9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWMub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgLy8gc2V0IHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBzZWxlY3Rpb24gYXJyb3dzIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBsaW5lXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkNoYXJhY3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLm1hcChjID0+IGMuc3ltYm9sID0gdGhpcy5zcGFjZUNoYXIpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzW3RoaXMuc2VsZWN0ZWRPcHRpb25dLnN5bWJvbCA9ICctJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0KGdhbWVDb21tYW5kKSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBBQ1RJT05fTk9ORTtcbiAgICAgICAgbGV0IGV2ZW50QXJncyA9IG51bGw7XG5cbiAgICAgICAgaWYgKGdhbWVDb21tYW5kID09IEZBQ0lOR19ET1dOKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdGhyb3VnaCBtZW51IG9wdGlvbnNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLnNlbGVjdGVkT3B0aW9uICUgdGhpcy5nZXROdW1PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvblZpc2liaWxpdHkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lQ29tbWFuZCA9PSBGQUNJTkdfVVApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0aHJvdWdoIG1lbnUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiAtPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiArPSB0aGlzLmdldE51bU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uVmlzaWJpbGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBvcHRpb24gdGhhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQsIGlmIGl0IG1hdGNoZXMgdGhlIGdhbWVDb21tYW5kXG4gICAgICAgICAgICBsZXQgY3VyT3B0aW9uID0gdGhpcy5zcGVjLm9wdGlvbnNbdGhpcy5zZWxlY3RlZE9wdGlvbl07XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRBY3Rpb24gPSBjdXJPcHRpb24uYWN0aW9uTWFwLmZpbHRlcihvID0+IG8ua2V5ID09IGdhbWVDb21tYW5kKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gc2VsZWN0ZWRBY3Rpb25bMF0uYWN0aW9uO1xuICAgICAgICAgICAgICAgIGV2ZW50QXJncyA9IHNlbGVjdGVkQWN0aW9uWzBdLmV2ZW50QXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWN0aW9uOiBhY3Rpb24sIGV2ZW50QXJnczogZXZlbnRBcmdzfTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVzIGEgY2hhcmFjdGVyIHRvIHJlbmRlciBpbiB0aGUgbWVudSwgYW5kIGhhbmRsZXMgb3ZlcmhlYWQgZm9yIGl0XG4gICAgY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpIHtcbiAgICAgICAgLy8gYWRkIGV2ZXJ5dGhpbmcgaW5cbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IG5ldyBTdGF0aWNDaGFyYWN0ZXIoeCwgeSwgY2hhcik7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkcmF3IG9uIHRvcFxuICAgICAgICBjaGFyYWN0ZXIueiA9IHRoaXMuelBvc2l0aW9uO1xuICAgICAgICBnYW1lT2JqZWN0cy5hZGRPYmplY3QoY2hhcmFjdGVyKTtcblxuICAgICAgICAvLyBrZWVwIHRoZXNlIGFyb3VuZCBpbiBtZW1vcnkgc28gd2UgY2FuIHJlbW92ZSB0aGVtIGxhdGVyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlcik7XG5cbiAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBkcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHRleHRXLCB0ZXh0SCkge1xuICAgICAgICAvLyBkcmF3IG1lbnUgYm94IGNvbnRhaW5lclxuICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94IC0gMSwgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggLSAxLCBzdGFydF95ICsgdGV4dEgsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSAtIDEsICcqJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyB0ZXh0Vywgc3RhcnRfeSArIHRleHRILCAnKicpO1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0ZXh0VzsgY29sKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHN0YXJ0X3ggKyBjb2wsIHN0YXJ0X3kgLSAxLCAnLScpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCArIGNvbCwgc3RhcnRfeSArIHRleHRILCAnLScpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRleHRIOyByb3crKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNZW51Q2hhcihnYW1lT2JqZWN0cywgc3RhcnRfeCAtIDEsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1lbnVDaGFyKGdhbWVPYmplY3RzLCBzdGFydF94ICsgdGV4dFcsIHN0YXJ0X3kgKyByb3csICd8Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KGdhbWVPYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnZpZXdwb3J0Lng7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMudmlld3BvcnQueTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdwb3J0LndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLnZpZXdwb3J0LmhlaWdodDtcblxuICAgICAgICBjb25zdCBzdW1tYXJ5VGV4dCA9IHRoaXMuc3BlYy5zdW1tYXJ5VGV4dDtcbiAgICAgICAgY29uc3Qgd3JhcFcgPSBNYXRoLmNlaWwod2lkdGggKiAwLjgpO1xuXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgeCBwb3NpdGlvbnNcbiAgICAgICAgbGV0IHN0YXJ0X3ggPSBsZWZ0ICsgTWF0aC5yb3VuZCgod2lkdGggLSB3cmFwVykgLyAyKTtcblxuICAgICAgICAvLyBmaWd1cmUgb3V0IHkgcG9zaXRpb25zXG4gICAgICAgIGxldCBzdGFydF95ID0gYm90dG9tICsgTWF0aC5yb3VuZChoZWlnaHQgKiAwLjgpO1xuXG4gICAgICAgIC8vIHN1bW1hcnkgaXMgdGV4dCBhdCB0b3BcbiAgICAgICAgY29uc3Qgc3VtbWFyeVRleHRSb3dzID0gd3JhcFRleHQoc3VtbWFyeVRleHQsIHdyYXBXKTtcbiAgICAgICAgY29uc3QgbnVtU3VtbWFyeUxpbmVzID0gc3VtbWFyeVRleHRSb3dzLmxlbmd0aDtcblxuICAgICAgICAvLyBhZGQgYmxhbmsgbGluZSBiZXR3ZWVuXG4gICAgICAgIGNvbnN0IG51bVNwYWNpbmdMaW5lcyA9IDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gb3B0aW9uIGxpbmVzIGFyZSBzZWxlY3RhYmxlIGJ5IHVzZXJcbiAgICAgICAgY29uc3QgbnVtT3B0aW9uTGluZXMgPSB0aGlzLnNwZWMub3B0aW9ucy5maWx0ZXIobyA9PiBvLm9wdGlvblRleHQgIT0gbnVsbCkubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IG51bUxpbmVzID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtT3B0aW9uTGluZXMgKyBudW1TcGFjaW5nTGluZXM7IFxuXG4gICAgICAgIC8vIGlmIHdlIHdpbGwgZ28gb3ZlciB0aGUgYm90dG9tIHBhcnQgb2YgdGhlIHNjcmVlbiwgYnVtcCB1cCBhIG5vdGNoXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIChzdGFydF95ICsgbnVtTGluZXMgKyAxKSAtIChib3R0b20gKyBoZWlnaHQpKTtcbiAgICAgICAgc3RhcnRfeSAtPSBvZmZzZXQ7XG5cbiAgICAgICAgLy8gZHJhdyBtZW51IGJveCBjb250YWluZXJcbiAgICAgICAgdGhpcy5kcmF3TWVudU91dGxpbmUoZ2FtZU9iamVjdHMsIHN0YXJ0X3gsIHN0YXJ0X3ksIHdyYXBXLCBudW1MaW5lcyk7XG5cbiAgICAgICAgLy8gZHJhdyB0aGUgaW5zaWRlIG9mIHRoZSBtZW51IGJveCBjb250YWluZXIsIHNwYWNlcyBhbmQgdGV4dFxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBudW1MaW5lczsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IHdyYXBXOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydF94ICsgY29sO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydF95ICsgcm93O1xuICAgICAgICAgICAgICAgIGxldCBjaGFyID0gdGhpcy5zcGFjZUNoYXI7XG4gICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0aW9uQ2hhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblN0YXJ0Um93ID0gbnVtU3VtbWFyeUxpbmVzICsgbnVtU3BhY2luZ0xpbmVzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IG51bVN1bW1hcnlMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sIDwgc3VtbWFyeVRleHRSb3dzW3Jvd10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gc3VtbWFyeVRleHRSb3dzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm93ID49IG9wdGlvblN0YXJ0Um93KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXNPcHRpb25JbmRleCA9IHJvdyAtIG9wdGlvblN0YXJ0Um93O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJPcHRpb24gPSB0aGlzLnNwZWMub3B0aW9uc1t0aGlzT3B0aW9uSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJUZXh0ID0gXCItXCIgKyB0aGlzLnNwYWNlQ2hhciArIGN1ck9wdGlvbi5vcHRpb25UZXh0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCA8IGN1clRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyID0gY3VyVGV4dFtjb2xdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbkNoYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IHRoaXMuY3JlYXRlTWVudUNoYXIoZ2FtZU9iamVjdHMsIHgsIHksIGNoYXIpO1xuICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGlvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFyYWN0ZXJzLnB1c2goY3JlYXRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRPcHRpb25WaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgaGlkZShnYW1lT2JqZWN0cykge1xuICAgICAgICB0aGlzLmNoYXJhY3RlcnMubWFwKGMgPT4gZ2FtZU9iamVjdHMucmVtb3ZlT2JqZWN0KGMpKTtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhcmFjdGVycyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQUNUSU9OX05PTkUgPSAwO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9CQUNLX1RPX0dBTUUgPSAxO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QVVNIX01FTlUgPSAyO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9QT1BfTUVOVSA9IDM7XG5leHBvcnQgY29uc3QgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggPSA0O1xuZXhwb3J0IGNvbnN0IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XID0gNTtcbmV4cG9ydCBjb25zdCBBQ1RJT05fUkVTRVRfTEVWRUwgPSA2OyIsImltcG9ydCB7XG4gICAgQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XLCBcbiAgICBBQ1RJT05fQkFDS19UT19HQU1FLCBBQ1RJT05fUE9QX01FTlUsIFxuICAgIEFDVElPTl9QVVNIX01FTlUsIEFDVElPTl9SRVNFVF9MRVZFTCB9XG4gICAgZnJvbSBcIi4vbWVudV9hY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19NRU5VID0ge1xuICAgIHR5cGU6IFwiT1BUSU9OU1wiLFxuICAgIHN1bW1hcnlUZXh0OiBcIkNvbmZpZ3VyZSB5b3VyIGdhbWUgZXhwZXJpZW5jZS5cIixcbiAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiSW5jcmVhc2UgVmlld3BvcnQgSGVpZ2h0XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IfV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJJbmNyZWFzZSBWaWV3cG9ydCBXaWR0aFwiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV31dXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiQmFja1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe2tleTogJ0VOVEVSJywgYWN0aW9uOiBBQ1RJT05fUE9QX01FTlV9XVxuICAgICAgICB9XG4gICAgXVxufVxuXG5leHBvcnQgY29uc3QgQ09OVFJPTFNfTUVOVSA9IHtcbiAgICB0eXBlOiBcIk9QVElPTlNcIixcbiAgICBzdW1tYXJ5VGV4dDogXCJDT05UUk9MU1xcbk1vdmVtZW50OiBBcnJvdyBrZXlzXFxuRklSRTogU3BhY2ViYXJcXG5QYXVzZTogJ2gnXCIsXG4gICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkJhY2tcIixcbiAgICAgICAgICAgIGFjdGlvbk1hcDogW3trZXk6ICdFTlRFUicsIGFjdGlvbjogQUNUSU9OX1BPUF9NRU5VfV1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGNvbnN0IEhFTFBfTUVOVSA9IHtcbiAgICB0eXBlOiAnT1BUSU9OUycsXG4gICAgc3VtbWFyeVRleHQ6IFwiV2VsY29tZSEgRmlyZWZveCBpcyB0aGUgYmVzdCBicm93c2VyIGZvciB0aGlzIGdhbWUuIENsaWNrIG9uIHRoZSB3ZWIgcGFnZSB0byBjYXB0dXJlIGtleSBwcmVzc2VzLlwiLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9uVGV4dDogXCJQbGF5XCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7a2V5OiAnRU5URVInLCBhY3Rpb246IEFDVElPTl9CQUNLX1RPX0dBTUV9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIkNvbnRyb2xzXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLCBcbiAgICAgICAgICAgICAgICBhY3Rpb246IEFDVElPTl9QVVNIX01FTlUsIFxuICAgICAgICAgICAgICAgIGV2ZW50QXJnczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51OiBDT05UUk9MU19NRU5VXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvblRleHQ6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgYWN0aW9uTWFwOiBbe1xuICAgICAgICAgICAgICAgIGtleTogJ0VOVEVSJywgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBBQ1RJT05fUFVTSF9NRU5VLCBcbiAgICAgICAgICAgICAgICBldmVudEFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudTogU0VUVElOR1NfTUVOVVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25UZXh0OiBcIlJlc2V0IExldmVsXCIsXG4gICAgICAgICAgICBhY3Rpb25NYXA6IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnRU5URVInLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogQUNUSU9OX1JFU0VUX0xFVkVMXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuIiwiY29uc3QgU1BMQVNIX0ZSQU1FXzEgPSBbXG4gICAgXCJfXCIvL1wiXFxcXCAgICAgL1wiLFxuICAgIC8vXCIgICBfICAgXCJcbl07XG5cbmNvbnN0IFNQTEFTSF9GUkFNRV8yID0gW1xuICAgIFwiLl8uXCIvL1wiLCAgICAgICAsXCIsXG4gICAgLy9cIiAgICAgICAgIFwiLFxuICAgIC8vXCIgICAgLiAgIFwiXG5dO1xuXG5jb25zdCBTUExBU0hfRlJBTUVfMyA9IFtcbiAgICBcIi4gLlwiLy9cIiAgICAgICAgICAgXCIsXG4gICAgLy9cIi4gICAgICAgICAuXCIsXG4gICAgLy9cIiAgICAgICAgICAgXCJcbl07XG5cbmV4cG9ydCBjb25zdCBTUExBU0hfU1BSSVRFX0FSVCA9IHtcbiAgICBcImFuY2hvclwiOiBcImJjZW50ZXJcIixcbiAgICBcImxvb3BcIjogXCJub25lXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkwLCBcImNoYXJhY3RlcnNcIjogU1BMQVNIX0ZSQU1FXzEgfSxcbiAgICAgICAgICAgIHsgXCJkaXNwbGF5VGltZVwiOiA3MCwgXCJjaGFyYWN0ZXJzXCI6IFNQTEFTSF9GUkFNRV8yIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogNjAsIFwiY2hhcmFjdGVyc1wiOiBTUExBU0hfRlJBTUVfMyB9XG4gICAgICAgIF1cbiAgICB9XG59OyIsIlxuaW1wb3J0IHtHYW1lfSBmcm9tIFwiLi9jb3JlL2dhbWUuanNcIjtcbmltcG9ydCB7S2V5TWFwfSBmcm9tIFwiLi9rZXlfbWFwLmpzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkhhbmRsZXJ9IGZyb20gXCIuL2FuaW1hdGlvbnMvYW5pbWF0aW9uX2hhbmRsZXIuanNcIjtcbmltcG9ydCB7V2luQW5pbWF0aW9ufSBmcm9tIFwiLi9hbmltYXRpb25zL3dpbl9hbmltYXRpb24uanNcIjtcbmltcG9ydCB7VGV4dEFuaW1hdG9ufSBmcm9tIFwiLi9hbmltYXRpb25zL3RleHRfYW5pbWF0aW9uLmpzXCI7XG5pbXBvcnQge1BsYXllckNoYXJhY3Rlcn0gZnJvbSBcIi4vY2hhcmFjdGVycy9wbGF5ZXJfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge0VuZW15Q2hhcmFjdGVyfSBmcm9tIFwiLi9jaGFyYWN0ZXJzL2VuZW15X2NoYXJhY3Rlci5qc1wiO1xuaW1wb3J0IHtHYW1lT2JqZWN0c30gZnJvbSBcIi4vY29yZS9nYW1lX29iamVjdHMuanNcIjtcbmltcG9ydCB7TEVWRUxfVE9XTiwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVB9IGZyb20gXCIuL3RyZWFzdXJlX2h1bnRfYXJ0LmpzXCI7XG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5pbXBvcnQge3JhbmRvbU51bWJlcn0gZnJvbSBcIi4vY29yZS9tYXRoX2V4dGVuc2lvbnMuanNcIjtcbmltcG9ydCB7VHJlYXN1cmVDaGFyYWN0ZXJ9IGZyb20gXCIuL2NoYXJhY3RlcnMvdHJlYXN1cmVfY2hhcmFjdGVyLmpzXCI7XG5pbXBvcnQge01lbnV9IGZyb20gXCIuL21lbnVzL21lbnUuanNcIjtcbmltcG9ydCB7QUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0gsIEFDVElPTl9SRVNFVF9MRVZFTCwgQUNUSU9OX0JBQ0tfVE9fR0FNRSwgQUNUSU9OX1BPUF9NRU5VLCBBQ1RJT05fUFVTSF9NRU5VLCBBQ1RJT05fSU5DUkVBU0VfVklFV1BPUlRfV30gZnJvbSBcIi4vbWVudXMvbWVudV9hY3Rpb25zLmpzXCI7XG5pbXBvcnQge0hFTFBfTUVOVX0gZnJvbSBcIi4vbWVudXMvbWVudV9zcGVjcy5qc1wiO1xuaW1wb3J0IHtIdG1sUmVuZGVyZXIsIENvbnNvbGVSZW5kZXJlcn0gZnJvbSBcIi4vY29yZS9yZW5kZXJlci5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJlYXN1cmVIdW50R2FtZSBleHRlbmRzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzZXQgdXAgYmFzaWMgZ2FtZSBvYmplY3RzXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKExFVkVMX1RPV04pO1xuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBLZXlNYXAoKTtcbiAgICAgICAgdGhpcy5tZW51U3RhY2sgPSBbXTtcblxuICAgICAgICB0aGlzLlNUQVRFX1JVTk5JTkcgPSAwO1xuICAgICAgICB0aGlzLlNUQVRFX1dJTk5OSU5HID0gMTtcbiAgICAgICAgdGhpcy5TVEFURV9ERUFEID0gMjtcbiAgICAgICAgdGhpcy5TVEFURV9NRU5VID0gMztcblxuICAgICAgICAvLyB0aGlzIHNob3VsZCBwcm9iYWJseSB0dXJuIGludG8gYSBzdGF0ZSBtYWNoaW5lXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgdGhpcy5FWFBMT1NJT05fU1BFRUQgPSAyMDAwOyAvLyBudW0gbWlsbGlzZWNvbmRzIGJldHdlZW4gZnJhbWVzIG9mIFdJTiBleHBsb3Npb24gICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RXhwbG9zaW9uVGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IC0xO1xuICAgIH1cblxuICAgIGdldFJhbmRvbU1hcFBsYWNlbWVudChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciB4ID0gcmFuZG9tTnVtYmVyKG1hcC53aWR0aCAtIDEpO1xuICAgICAgICB2YXIgeSA9IHJhbmRvbU51bWJlcihtYXAuaGVpZ2h0IC0gMSk7XG5cbiAgICAgICAgLy8gZG9uJ3QgbGV0IHRoZW0gb3ZlcmxhcFxuICAgICAgICB3aGlsZSAoZ2FtZU9iamVjdHMub2JqZWN0cy5maWx0ZXIob2JqID0+IG9iai5pc1BoeXNpY2FsICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRCb3VuZHMoKS5pbnRlcnNlY3RzUG9pbnQoeCwgeSkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHggPSByYW5kb21OdW1iZXIobWFwLndpZHRoIC0gMSk7XG4gICAgICAgICAgICB5ID0gcmFuZG9tTnVtYmVyKG1hcC5oZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICd4JzogeCwgJ3knOiB5IH07XG4gICAgfVxuXG4gICAgY3JlYXRlUGxheWVyKCkge1xuICAgICAgICAvLyBzdGFydCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIG1hcFxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcigxLCAxKTtcbiAgICAgICAgcGxheWVyLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlR29hbChnYW1lT2JqZWN0cywgbWFwKSB7XG4gICAgICAgIHZhciBnb2FsUGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgVHJlYXN1cmVDaGFyYWN0ZXIoZ29hbFBsYWNlbWVudC54LCBnb2FsUGxhY2VtZW50LnksICckJywgJ2xldmVsR29hbCcpO1xuICAgIH1cblxuICAgIGNyZWF0ZUVuZW15KGdhbWVPYmplY3RzLCBtYXApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVuZW1pZXNcbiAgICAgICAgdmFyIGVuZW15UGxhY2VtZW50ID0gdGhpcy5nZXRSYW5kb21NYXBQbGFjZW1lbnQoZ2FtZU9iamVjdHMsIG1hcCk7XG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDaGFyYWN0ZXIoZW5lbXlQbGFjZW1lbnQueCwgZW5lbXlQbGFjZW1lbnQueSwgRU5FTVlfU1BJS0VZX1NQUklURV9NQVApO1xuICAgIH1cblxuICAgIGNsZWFyTGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1JVTk5JTkc7XG5cbiAgICAgICAgLy8gc3RhcnQgZnJvbSBzY3JhdGNoXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMucmVtb3ZlQWxsT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIuY2xlYXJBbmltYXRpb25zKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG91ciBwbGF5ZXJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmFkZE9iamVjdCh0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgLy8gYWRkIGEgbGV2ZWxHb2FsIHRvIHRoaXMgbGV2ZWxcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cy5hZGRPYmplY3QodGhpcy5jcmVhdGVHb2FsKHRoaXMuZ2FtZU9iamVjdHMsIHRoaXMubWFwKSk7XG5cbiAgICAgICAgLy8gYWRkIHNvbWUgZW5lbWllc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9uc1snbnVtRW5lbWllcyddOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuY3JlYXRlRW5lbXkodGhpcy5nYW1lT2JqZWN0cywgdGhpcy5tYXApKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBvdXIgbWFwIG9iamVjdHNcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubWFwLmdldE1hcENoYXJhY3RlcnMoKS5tYXAoeCA9PiB0aGF0LmdhbWVPYmplY3RzLmFkZE9iamVjdCh4KSk7XG5cbiAgICAgICAgLyp0aGlzLmRvb3IgPSBuZXcgRG9vcndheUNoYXJhY3RlcigyLCAyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdHMuYWRkT2JqZWN0KHRoaXMuZG9vcik7Ki9cbiAgICAgICAgXG4gICAgICAgIC8vIGNlbnRlciBvbiB0aGUgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2VudGVyVmlld3BvcnRPbih0aGlzLmNoYXJhY3RlciwgdGhpcy5tYXApO1xuXG4gICAgICAgIC8vIHNob3cgaGVscCBtZW51LiB0aGlzIG1heSBjaGFuZ2Ugb24gbmV3IGxldmVscyBldmVudHVhbGx5XG4gICAgICAgIHRoaXMuc2hvd0hlbHBNZW51KCk7XG5cbiAgICAgICAgLy8gZmlyc3QgZHJhdyBvZiByZW5kZXJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBpcyBhIGJsb2NraW5nIGFuaW1hdGlvbiB0aGF0ICdleHBsb2RlcycgdGhlIFxuICAgIC8vLi4uZ29hbCBpbnRvIGFuIGV4cGxvc2lvblxuICAgIHNwYXduRXhwbG9zaW9ucyhub3csIGNlbnRlcmVkQ2hhcmFjdGVyKSB7XG4gICAgICAgIC8vIHNwYXduIGEgbmV3IGFuaW1hdGlvbiBiYXNlZCBvbiBFWFBMT1NJT05fU1BFRURcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdEV4cGxvc2lvblRpbWUgPiB0aGlzLkVYUExPU0lPTl9TUEVFRCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLmFkZEFuaW1hdGlvbihuZXcgV2luQW5pbWF0aW9uKGNlbnRlcmVkQ2hhcmFjdGVyLmdldFgoKSwgY2VudGVyZWRDaGFyYWN0ZXIuZ2V0WSgpLCB0aGlzLm1hcC53aWR0aCwgdGhpcy5tYXAuaGVpZ2h0KSk7XG4gICAgICAgICAgICB0aGlzLmxhc3RFeHBsb3Npb25UaW1lID0gbm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih4LCB5LCB0ZXh0KSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFRleHRBbmltYXRvbih4LCB5LCB0ZXh0KSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSGFuZGxlci5hZGRBbmltYXRpb24obmV3IFdpbkFuaW1hdGlvbih4LCB5LCB0aGlzLm1hcC53aWR0aCwgdGhpcy5tYXAuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgY2hlY2tEZWFkQ29uZGl0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXIuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX0RFQUQ7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJERUFEXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExldmVsVGltZSA9IERhdGUubm93KCkgKyA2MDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3Rlci5oYXNUcmVhc3VyZSgnbGV2ZWxHb2FsJykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX1dJTk5JTkc7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5pdGlhbEV4cGxvc2lvbih0aGlzLmNoYXJhY3Rlci5nZXRYKCksIHRoaXMuY2hhcmFjdGVyLmdldFkoKSwgXCJXSU5cIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TGV2ZWxUaW1lID0gRGF0ZS5ub3coKSArIDYwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93SGVscE1lbnUoKSB7XG4gICAgICAgIC8vIHB1c2ggbWVudSBzdGF0ZSBvblxuICAgICAgICB0aGlzLnByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFX01FTlU7XG4gICAgICAgIHRoaXMubWVudSA9IG5ldyBNZW51KEhFTFBfTUVOVSwgdGhpcy5yZW5kZXJlci52aWV3cG9ydCwgMSwgdGhpcy5yZW5kZXJlci5nZXRTcGFjZUNoYXJhY3RlcigpKTtcbiAgICAgICAgdGhpcy5tZW51LnNob3codGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5wdXQoKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmdldExhc3RLZXlwcmVzcygpO1xuICAgICAgICBpZiAobnVsbCAhPT0ga2V5KSB7XG4gICAgICAgICAgICB2YXIgZ2FtZUNvbW1hbmQgPSB0aGlzLmtleU1hcC5nZXRHYW1lQ29tbWFuZChrZXkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnUVVJVCcpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBicmluZyB1cCBhIFFVSVQgbWVudS4gcHJvY2Vzcy5leGl0KCkgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3MuZXhpdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykgeyAgIFxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ29tbWFuZCA9PSAnSEVMUCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93SGVscE1lbnUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2hhcmFjdGVyIG1vdmVtZW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLmhhbmRsZUdhbWVDb21tYW5kKGdhbWVDb21tYW5kLCB0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gdGhpcy5TVEFURV9NRU5VKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk9iaiA9IHRoaXMubWVudS5oYW5kbGVJbnB1dChnYW1lQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0JBQ0tfVE9fR0FNRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY3VycmVudCBtZW51IGFuZCBnbyBiYWNrIHRvIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1JFU0VUX0xFVkVMKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoaXMgbGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9QVVNIX01FTlUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlkZSBjdXJyZW50IG1lbnUgYW5kIHB1c2ggaXQgb250byBzdGFja1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuaGlkZSh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51U3RhY2sucHVzaCh0aGlzLm1lbnUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3cgbmV3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoYWN0aW9uT2JqLmV2ZW50QXJncy5tZW51LCB0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LCAxLCB0aGlzLnJlbmRlcmVyLmdldFNwYWNlQ2hhcmFjdGVyKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX1BPUF9NRU5VKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgY3VycmVudCBtZW51XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5oaWRlKHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3AgcHJldiBtZW51IGFuZCBzaG93IGl0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNZW51ID0gdGhpcy5tZW51U3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IHByZXZNZW51O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUuc2hvdyh0aGlzLmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbk9iai5hY3Rpb24gPT0gQUNUSU9OX0lOQ1JFQVNFX1ZJRVdQT1JUX0ggfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9XKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25PYmouYWN0aW9uID09IEFDVElPTl9JTkNSRUFTRV9WSUVXUE9SVF9IKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdGhpcyBicmVha3MgaWYgd2UgZG8gaXQgYnkgYW4gb2RkIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmVyLnZpZXdwb3J0LmhlaWdodCA+IHRoaXMub3B0aW9uc1snbWF4Vmlld3BvcnRIZWlnaHQnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQuaGVpZ2h0ID0gdGhpcy5vcHRpb25zWydtaW5WaWV3cG9ydEhlaWdodCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci52aWV3cG9ydC53aWR0aCArPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPiB0aGlzLm9wdGlvbnNbJ21heFZpZXdwb3J0V2lkdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIudmlld3BvcnQud2lkdGggPSB0aGlzLm9wdGlvbnNbJ21pblZpZXdwb3J0V2lkdGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNlbnRlciB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNlbnRlclZpZXdwb3J0T24odGhpcy5jaGFyYWN0ZXIsIHRoaXMubWFwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRJc0RpcnR5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51LmhpZGUodGhpcy5nYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudS5zaG93KHRoaXMuZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSB0aGlzLlNUQVRFX01FTlUpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmc/XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci51cGRhdGUobm93LCB0aW1lRWxhcHNlZCwgZ2FtZU9iamVjdHMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jZW50ZXJWaWV3cG9ydE9uKHRoaXMuY2hhcmFjdGVyLCB0aGlzLm1hcCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGVhZENvbmRpdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfV0lOTklORyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID09IHRoaXMuU1RBVEVfREVBRCkge1xuICAgICAgICAgICAgICAgIC8vIHdpbi9kaWUgY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3bkV4cGxvc2lvbnMobm93LCB0aGlzLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldExldmVsVGltZSA+PSAwICYmIG5vdyA+IHRoaXMucmVzZXRMZXZlbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25IYW5kbGVyLnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCBnYW1lT2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzOyAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHZhciBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lRWxhcHNlZCA9IG5vdyAtIGxhc3RVcGRhdGU7XG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZSA9IG5vdztcblxuICAgICAgICAgICAgICAgIHRoYXQuaGFuZGxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICB0aGF0LnVwZGF0ZShub3csIHRpbWVFbGFwc2VkLCB0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRyYXdGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhhdC5yZW5kZXJlci5nZXRJc0RpcnR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyZXIuY2xlYXJTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcmVyLnJlbmRlcih0aGF0LmdhbWVPYmplY3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnNbJ3BsYXlJbkJyb3dzZXInXSkge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgSHRtbFJlbmRlcmVyKG9wdGlvbnNbJ3ZpZXdwb3J0V2lkdGgnXSwgb3B0aW9uc1sndmlld3BvcnRIZWlnaHQnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IG5ldyBDb25zb2xlUmVuZGVyZXIob3B0aW9uc1sndmlld3BvcnRXaWR0aCddLCBvcHRpb25zWyd2aWV3cG9ydEhlaWdodCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUodXBkYXRlRnVuYywgZHJhd0Z1bmMsIHJlbmRlcmVyLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIC8vIGRvIHRoaXMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHBhcmVudFxuICAgICAgICB0aGlzLmFuaW1hdGlvbkhhbmRsZXIgPSBuZXcgQW5pbWF0aW9uSGFuZGxlcih0aGlzLnJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5yZXNldExldmVsKCk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQge0ZBQ0lOR19ET1dOLCBGQUNJTkdfTEVGVCwgRkFDSU5HX1JJR0hULCBGQUNJTkdfVVB9IGZyb20gXCIuL2NvcmUvZmFjaW5nLmpzXCI7XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8xID0gW1xuXCI8Li4+XCJcbl07XG5cbmNvbnN0IEVORU1ZX1NQSUtFWV9GUkFNRV8yID0gW1xuXCI8LW9vLT5cIlxuXTtcblxuY29uc3QgRU5FTVlfU1BJS0VZX0ZSQU1FXzMgPSBbXG5cIiAgXFxcXCAgLyAgXCIsXG5cIjwtLTAwLS0+XCIsXG5cIiAgLyAgXFxcXFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1NQSUtFWV9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsb29wXCI6IFwiY2lyY2xlXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBcIjBcIjogW1xuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDkxMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8xIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9LFxuICAgICAgICAgICAgeyBcImRpc3BsYXlUaW1lXCI6IDQzMCwgXCJjaGFyYWN0ZXJzXCI6IEVORU1ZX1NQSUtFWV9GUkFNRV8zIH0sXG4gICAgICAgICAgICB7IFwiZGlzcGxheVRpbWVcIjogOTAsIFwiY2hhcmFjdGVyc1wiOiBFTkVNWV9TUElLRVlfRlJBTUVfMiB9IFxuICAgICAgICBdXG4gICAgfVxufTtcblxuY29uc3QgRU5FTVlfVEVTVF9GUkFNRV8xID0gW1xuICAgIFwiMSAgIFwiLFxuICAgIFwiIDIgIFwiLFxuICAgIFwiICAzIFwiLFxuICAgIFwiICAgNFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IEVORU1ZX1RFU1RfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwibG9vcFwiOiBcImNpcmNsZVwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgXCIwXCI6IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogRU5FTVlfVEVTVF9GUkFNRV8xIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJTEVfU1BSSVRFX01BUCA9IHtcbiAgICBcImFuY2hvclwiOiBcImNlbnRlclwiLFxuICAgIFwibG9vcFwiOiBcImNpcmNsZVwiLFxuICAgIFwic3RhdGVzXCI6IHtcbiAgICAgICAgW0ZBQ0lOR19MRUZUXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QzInXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19VUF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI0J10gfV0sXG4gICAgICAgIFtGQUNJTkdfUklHSFRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCOCddIH1dLFxuICAgICAgICBbRkFDSU5HX0RPV05dOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVCRSddIH1dXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9TUFJJVEVfTUFQID0ge1xuICAgIFwiYW5jaG9yXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsb29wXCI6IFwiY2lyY2xlXCIsXG4gICAgXCJzdGF0ZXNcIjoge1xuICAgICAgICBbRkFDSU5HX0xFRlRdOiBbeyBcImRpc3BsYXlUaW1lXCI6IDk5OTk5OSwgXCJjaGFyYWN0ZXJzXCI6IFsnXFx1MjVDMSddIH1dLFxuICAgICAgICBbRkFDSU5HX1VQXTogW3sgXCJkaXNwbGF5VGltZVwiOiA5OTk5OTksIFwiY2hhcmFjdGVyc1wiOiBbJ1xcdTI1QjMnXSB9XSxcbiAgICAgICAgW0ZBQ0lOR19SSUdIVF06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUI3J10gfV0sXG4gICAgICAgIFtGQUNJTkdfRE9XTl06IFt7IFwiZGlzcGxheVRpbWVcIjogOTk5OTk5LCBcImNoYXJhY3RlcnNcIjogWydcXHUyNUJEJ10gfV1cbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0hPVVNFID0gW1xuXCIgICAgIF9fX19fX19fXyAgICAgIFwiLFxuXCIgICBfLyAgICAgICAgIFxcXFxfICAgXCIsXG5cIiBfLyAgICAgICAgICAgICBcXFxcXyBcIixcblwiL19fX19fX19fX19fX19fX19fXFxcXFwiLFxuXCIgfCAgICAgICAgICAgICAgIHwgIFwiLFxuXCIgfCAgICAgPT09PT0gICAgIHwgIFwiLFxuXCIgfCB8K3wgIHwgfCAgfCt8IHwgIFwiLFxuXCIgfF9fX19fX3wgfF9fX19fX3wgIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9CVVNIID0gW1xuXCIgIyMjIFwiLFxuXCIjIyMjI1wiLFxuXCIgIyMjIFwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IE1BUF9UUkVFID0gW1xuXCIgICAoKiopICAgICAgIFwiLFxuXCIgKCoqKioqKikgIFwiLFxuXCIoKioqKioqKiopIFwiLFxuXCIgICgqKioqKSAgXCIsXG5cIiAgICB8fCAgICBcIixcblwiICAgIHx8ICAgIFwiLFxuXCIgICAvX19cXFxcICBcIixcbl07XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9UT1dOID0ge1xuXCJ3aWR0aFwiOiAxMjIsXG5cImhlaWdodFwiOiA2MCxcblwibWFwX29iamVjdHNcIjogW1xuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAxMCwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzcsIFwieVwiOiAxMyB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogMTIgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAzMiwgXCJ5XCI6IDEwIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMzgsIFwieVwiOiA5IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA5MCwgXCJ5XCI6IDE4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDEwMCwgXCJ5XCI6IDE2IH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA1MCwgXCJ5XCI6IDIyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDYwLCBcInlcIjogMjAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3OCwgXCJ5XCI6IDIzIH0sXG5cbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiA3MCwgXCJ5XCI6IDQyIH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9IT1VTRSwgXCJ4XCI6IDgwLCBcInlcIjogNDAgfSxcblxuICAgIHsgXCJpbWFnZVwiOiBNQVBfSE9VU0UsIFwieFwiOiAyMCwgXCJ5XCI6IDgwIH0sXG4gICAgXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiA0MCB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDI4LCBcInlcIjogNDAgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAxMSwgXCJ5XCI6IDM4IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTQsIFwieVwiOiAzNiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDEwLCBcInlcIjogMzYgfSxcbiAgICB7IFwiaW1hZ2VcIjogTUFQX1RSRUUsIFwieFwiOiAyOCwgXCJ5XCI6IDM2IH0sXG4gICAgeyBcImltYWdlXCI6IE1BUF9UUkVFLCBcInhcIjogMTYsIFwieVwiOiAzMiB9LFxuICAgIHsgXCJpbWFnZVwiOiBNQVBfVFJFRSwgXCJ4XCI6IDMwLCBcInlcIjogMzIgfSxcbiAgICBcbl1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
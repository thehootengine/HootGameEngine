(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Hoot", [], factory);
	else if(typeof exports === 'object')
		exports["Hoot"] = factory();
	else
		root["Hoot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hoot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./core/Engine.js":
/*!************************!*\
  !*** ./core/Engine.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Engine {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(config) {\r\n\r\n        this.config = config;\r\n\r\n        this.events = new Hoot.Events.EventEmitter({});\r\n\r\n        this.sceneManager = new Hoot.Scenes.SceneManager(this, {});\r\n\r\n        this.display = null;\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getConfig() {\r\n        return this.config;\r\n    }\r\n\r\n    getSceneManager() {\r\n        return this.sceneManager;\r\n    }\r\n\r\n    getDisplay() {\r\n        return this.display;\r\n    }\r\n\r\n    setDisplay(display) {\r\n        this.display = display;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Engine;\n\n//# sourceURL=webpack:///./core/Engine.js");

/***/ }),

/***/ "./core/Loader.js":
/*!************************!*\
  !*** ./core/Loader.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Loader {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(engine, config) {\r\n\r\n        this.engine = engine;\r\n\r\n        this.events = new Hoot.Events.EventEmitter();\r\n\r\n        this.config = config;\r\n\r\n        this.queue = [];\r\n\r\n        this.loaded = [];\r\n\r\n        this.isActive = false;\r\n\r\n        this.isLoading = false;\r\n\r\n        this.isComplete = false;\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    start() {\r\n\r\n        if (this.isActive) {\r\n            return;\r\n        }\r\n\r\n        this.isActive = true;\r\n\r\n        this.isLoading = true;\r\n\r\n        if (this.queue.length > 0) {\r\n\r\n            for (let i in this.queue) {\r\n\r\n                if (this.queue[i] instanceof Hoot.Resources.File) {\r\n\r\n                    this.queue[i].events.on(\"loaded\", function(event) {\r\n\r\n                        this.loaded.push(event.file);\r\n\r\n                        if (this.loaded.length == this.queue.length) {\r\n\r\n                            this.events.emit(\"complete\", { loader: this });\r\n\r\n                        }\r\n\r\n                    }, this);\r\n\r\n                    this.queue[i].load();\r\n\r\n                }\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n    reset() {\r\n\r\n        if (!this.isActive) {\r\n            return;\r\n        }\r\n\r\n        this.isActive = false;\r\n\r\n    }\r\n\r\n    addFile(file) {\r\n\r\n        this.queue.push(file);\r\n\r\n    }\r\n\r\n    getFile(key) {\r\n\r\n        for (let i in this.loaded) {\r\n\r\n            if (this.loaded[i].key === key) {\r\n\r\n                return this.loaded[i];\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getEngine() {\r\n        return this.engine;\r\n    }\r\n\r\n    getConfig() {\r\n        return this.config;\r\n    }\r\n\r\n    getQueue() {\r\n        return this.queue;\r\n    }\r\n\r\n    getLoaded() {\r\n        return this.loaded;\r\n    }\r\n\r\n    getActive() {\r\n        return this.isActive;\r\n    }\r\n\r\n    getLoading() {\r\n        return this.isLoading;\r\n    }\r\n\r\n    getComplete() {\r\n        return this.isComplete;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./core/Loader.js");

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n/*\r\n * Import\r\n */\r\nconst Core = {\r\n    Engine: __webpack_require__(/*! ./Engine.js */ \"./core/Engine.js\"),\r\n    Loader: __webpack_require__(/*! ./Loader.js */ \"./core/Loader.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Core;\n\n//# sourceURL=webpack:///./core/index.js");

/***/ }),

/***/ "./dom/Display.js":
/*!************************!*\
  !*** ./dom/Display.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Display {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(engine, config) {\r\n\r\n        this.engine = engine;\r\n\r\n        this.config = config;\r\n\r\n        this.parentId = this.config.parentId || null;\r\n\r\n        this.parent = null;\r\n\r\n        this.size = {\r\n            width: this.config.width || 960,\r\n            height: this.config.height || 720\r\n        };\r\n\r\n        this.canvas = null;\r\n\r\n        this.context = null;\r\n\r\n        this.init();\r\n\r\n        this.engine.setDisplay(this);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    init() {\r\n\r\n        if (this.config.parentId === null || this.config.parentId === \"\") {\r\n\r\n            this.parent = document.body;\r\n\r\n        }else {\r\n\r\n            this.parent = document.getElementById(this.config.parentId);\r\n\r\n        }\r\n\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.width = this.size.width;\r\n        this.canvas.height = this.size.height;\r\n        this.canvas.style.backgroundColor = \"black\";\r\n\r\n        this.context = this.canvas.getContext(\"2d\");\r\n        if (!this.config.smoothingEnabled) {\r\n            this.canvas.style.imageRendering = \"pixelated\";\r\n            this.canvas.style.imageRendering = \"crisp-edges\";\r\n        }\r\n\r\n        this.context.imageSmoothingEnabled = this.config.smoothingEnabled;\r\n\r\n        this.parent.appendChild(this.canvas);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getEngine() {\r\n        return this.engine;\r\n    }\r\n\r\n    getConfig() {\r\n        return this.config;\r\n    }\r\n\r\n    getCanvas() {\r\n        return this.canvas;\r\n    }\r\n\r\n    getContext() {\r\n        return this.context;\r\n    }\r\n\r\n    getParent() {\r\n        return this.parent;\r\n    }\r\n\r\n    getWidth() {\r\n        return this.size.width;\r\n    }\r\n\r\n    getHeight() {\r\n        return this.size.height;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Display;\n\n//# sourceURL=webpack:///./dom/Display.js");

/***/ }),

/***/ "./dom/index.js":
/*!**********************!*\
  !*** ./dom/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n/*\r\n * Import\r\n */\r\nconst DOM = {\r\n    Display: __webpack_require__(/*! ./Display.js */ \"./dom/Display.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = DOM;\n\n//# sourceURL=webpack:///./dom/index.js");

/***/ }),

/***/ "./events/EventEmitter.js":
/*!********************************!*\
  !*** ./events/EventEmitter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass EventEmitter {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(config) {\r\n\r\n        this.config = config;\r\n\r\n        this.id = EventEmitter.instances;\r\n        EventEmitter.instances++;\r\n\r\n        this.path = \"hoot-\" + this.id + \"-\";\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    emit(name, options) {\r\n\r\n        let event = new CustomEvent(this.path + name, {\r\n            detail: options || null\r\n        });\r\n\r\n        document.dispatchEvent(event);\r\n\r\n    }\r\n\r\n\r\n    on(name, callback, scope) {\r\n\r\n        callback = callback.bind(scope);\r\n\r\n        document.addEventListener(this.path + name, function (event) {\r\n\r\n            callback(event.detail);\r\n\r\n        });\r\n\r\n    }\r\n\r\n}\r\n\r\n\r\n/*\r\n * Static Fields\r\n */\r\nEventEmitter.instances = 0;\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = EventEmitter;\n\n//# sourceURL=webpack:///./events/EventEmitter.js");

/***/ }),

/***/ "./events/index.js":
/*!*************************!*\
  !*** ./events/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n/*\r\n * Import\r\n */\r\nconst Events = {\r\n    EventEmitter: __webpack_require__(/*! ./EventEmitter.js */ \"./events/EventEmitter.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Events;\n\n//# sourceURL=webpack:///./events/index.js");

/***/ }),

/***/ "./gameObjects/Sprite.js":
/*!*******************************!*\
  !*** ./gameObjects/Sprite.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Sprite {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(scene, x, y, textureKey, frame) {\r\n\r\n        this.scene = scene;\r\n\r\n        this.pos = {\r\n            x: x,\r\n            y: y\r\n        };\r\n\r\n        this.origin = {\r\n            x: 0.5,\r\n            y: 0.5\r\n        };\r\n\r\n        this.scale = {\r\n            x: 1,\r\n            y: 1\r\n        };\r\n\r\n        this.rotation = 0;\r\n        this.rotationSpeed = 0;\r\n\r\n        this.angle = 0;\r\n\r\n        this.textureKey = textureKey;\r\n        this.texture = this.scene.getLoader().getFile(this.textureKey);\r\n\r\n        this.frame = frame || 0;\r\n\r\n        this.size = {\r\n            width: this.texture.getWidth(),\r\n            height: this.texture.getHeight()\r\n        };\r\n\r\n        this.scene.addSprite(this);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    tick() {\r\n\r\n    }\r\n\r\n    render() {\r\n        let context = this.scene.getEngine().getDisplay().getContext();\r\n\r\n        let width = this.scale.x * this.size.width;\r\n        let height = this.scale.y * this.size.height;\r\n\r\n        context.rotate(this.rotation * Math.PI / 180);\r\n\r\n        context.drawImage(this.texture.getData(), -(this.pos.x - (width * this.origin.x)), -(this.pos.y - (height * this.origin.y)), width, height);\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getScene() {\r\n        return this.scene;\r\n    }\r\n\r\n    getPosX() {\r\n        return this.pos.x;\r\n    }\r\n\r\n    setPosX(x) {\r\n        this.pos.x = x;\r\n    }\r\n\r\n    getPosY() {\r\n        return this.pos.y;\r\n    }\r\n\r\n    setPosY(y) {\r\n        this.pos.y = y;\r\n    }\r\n\r\n    getTextureKey() {\r\n        return this.textureKey;\r\n    }\r\n\r\n    getTexture() {\r\n        return this.texture;\r\n    }\r\n\r\n    setTexture(key) {\r\n        this.textureKey = key;\r\n\r\n        this.texture = this.scene.getLoader().getFile(key);\r\n\r\n        this.size.width = this.texture.getWidth();\r\n        this.size.height = this.texture.getHeight();\r\n    }\r\n\r\n    getFrame() {\r\n        return this.frame;\r\n    }\r\n\r\n    setFrame(frame) {\r\n        this.frame = frame;\r\n    }\r\n\r\n    getOriginX() {\r\n        return this.origin.x;\r\n    }\r\n\r\n    setOriginY(originX) {\r\n        this.origin.x = originX;\r\n    }\r\n\r\n    getOriginY() {\r\n        return this.origin.y;\r\n    }\r\n\r\n    setOriginY(originY) {\r\n        this.origin.y = originY;\r\n    }\r\n\r\n    setOrigin(originX, originY) {\r\n        this.origin.x = originX;\r\n        this.origin.y = originY;\r\n    }\r\n\r\n    getScaleX() {\r\n        return this.scale.x;\r\n    }\r\n\r\n    setScaleX(scaleX) {\r\n        this.scale.x = scaleX;\r\n    }\r\n\r\n    getScaleY() {\r\n        return this.scale.y;\r\n    }\r\n\r\n    setScaleY(scaleY) {\r\n        this.scale.y = scaleY;\r\n    }\r\n\r\n    setScale(scaleX, scaleY) {\r\n        this.scale.x = scaleX;\r\n        this.scale.y = scaleY;\r\n    }\r\n\r\n    getRotation() {\r\n        return this.rotation;\r\n    }\r\n\r\n    setRotation(rotation) {\r\n        this.rotation = rotation;\r\n    }\r\n\r\n    getRotationSpeed() {\r\n        return this.rotationSpeed;\r\n    }\r\n\r\n    setRotationSpeed(rotationSpeed) {\r\n        this.rotationSpeed = rotationSpeed;\r\n    }\r\n\r\n    getAngle() {\r\n        return this.angle;\r\n    }\r\n\r\n    setAngle(angle) {\r\n        this.angle = angle;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./gameObjects/Sprite.js");

/***/ }),

/***/ "./gameObjects/index.js":
/*!******************************!*\
  !*** ./gameObjects/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n/*\r\n * Import\r\n */\r\nconst GameObjects = {\r\n    Sprite: __webpack_require__(/*! ./Sprite.js */ \"./gameObjects/Sprite.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = GameObjects;\n\n//# sourceURL=webpack:///./gameObjects/index.js");

/***/ }),

/***/ "./hoot.js":
/*!*****************!*\
  !*** ./hoot.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {\r\n\r\n/*\r\n * Import\r\n */\r\nconst Hoot = {\r\n    Core: __webpack_require__(/*! ./core */ \"./core/index.js\"),\r\n    DOM: __webpack_require__(/*! ./dom */ \"./dom/index.js\"),\r\n    Events: __webpack_require__(/*! ./events */ \"./events/index.js\"),\r\n    GameObjects: __webpack_require__(/*! ./gameObjects */ \"./gameObjects/index.js\"),\r\n    Resources: __webpack_require__(/*! ./resources */ \"./resources/index.js\"),\r\n    Scenes: __webpack_require__(/*! ./scenes */ \"./scenes/index.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Hoot;\r\nglobal.Hoot = Hoot;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./hoot.js");

/***/ }),

/***/ "./resources/File.js":
/*!***************************!*\
  !*** ./resources/File.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass File {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(loader, key, path, config) {\r\n\r\n        this.loader = loader;\r\n\r\n        if (this.loader instanceof Hoot.Scenes.Scene) {\r\n\r\n            this.loader = this.loader.getLoader();\r\n\r\n        }\r\n\r\n        this.engine = this.loader.getEngine();\r\n\r\n        this.events = new Hoot.Events.EventEmitter();\r\n\r\n        this.key = key;\r\n\r\n        this.path = path;\r\n\r\n        this.config = config;\r\n\r\n        this.type = \"none\";\r\n\r\n        this.extension = this.path.split(\".\").pop();\r\n\r\n        this.data = null;\r\n\r\n        this.isLoading = false;\r\n\r\n        this.isLoaded = false;\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    init() {\r\n\r\n        if (this.extension === \"png\" || this.extension === \"jpg\" || this.extension === \"jpeg\") {\r\n\r\n            this.type = \"image\";\r\n\r\n        }else if (this.extension === \"json\") {\r\n\r\n            this.type = \"data\";\r\n\r\n        }else if (this.extension === \"mp3\" || this.extension === \"wav\") {\r\n\r\n            this.type = \"audio\";\r\n\r\n        }else if (this.extension === \"js\") {\r\n\r\n            this.type = \"script\";\r\n\r\n        }\r\n\r\n    }\r\n\r\n    load() {\r\n\r\n        this.init();\r\n\r\n        switch(this.type) {\r\n            case \"image\":\r\n\r\n                this.data = new Image();\r\n\r\n                this.isLoading = true;\r\n\r\n                this.data.onload = function() {\r\n\r\n                    this.isLoading = false;\r\n\r\n                    this.isLoaded = true;\r\n\r\n                    this.events.emit(\"loaded\", { file: this });\r\n\r\n                }.bind(this);\r\n\r\n                this.data.src = this.path;\r\n\r\n                break;\r\n            case \"data\":\r\n\r\n                let xhttp = new XMLHttpRequest();\r\n\r\n                this.isLoading = true;\r\n\r\n                xhttp.onload = function() {\r\n\r\n                    this.data = JSON.parse(xhttp.responseText);\r\n\r\n                    this.isLoading = false;\r\n                    this.isLoaded = true;\r\n\r\n                    this.events.emit(\"loaded\", { file: this });\r\n\r\n                }.bind(this);\r\n\r\n                xhttp.open(\"GET\", this.path);\r\n\r\n                xhttp.send(null);\r\n\r\n                break;\r\n            case \"audio\":\r\n\r\n                break;\r\n            case \"script\":\r\n\r\n                this.data = document.createElement(\"script\");\r\n\r\n                this.isLoading = true;\r\n\r\n                this.data.onload = function() {\r\n\r\n                    this.isLoading = false;\r\n\r\n                    this.isLoaded = true;\r\n\r\n                    this.events.emit(\"loaded\", { file: this });\r\n\r\n                }.bind(this);\r\n\r\n                this.data.src = this.path;\r\n\r\n                document.body.appendChild(this.data);\r\n\r\n                break;\r\n        }\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getEngine() {\r\n        return this.engine;\r\n    }\r\n\r\n    getLoader() {\r\n        return this.loader;\r\n    }\r\n\r\n    getKey() {\r\n        return this.key;\r\n    }\r\n\r\n    getPath() {\r\n        return this.path;\r\n    }\r\n\r\n    getConfig() {\r\n        return this.config;\r\n    }\r\n\r\n    getType() {\r\n        return this.type;\r\n    }\r\n\r\n    getExtension() {\r\n        return this.extension;\r\n    }\r\n\r\n    getData() {\r\n        return this.data;\r\n    }\r\n\r\n    getLoading() {\r\n        return this.isLoading;\r\n    }\r\n\r\n    getLoaded() {\r\n        return this.isLoaded;\r\n    }\r\n\r\n    getWidth() {\r\n        if (this.type === \"image\") {\r\n            return this.data.width;\r\n        }\r\n    }\r\n\r\n    getHeight() {\r\n        if (this.type === \"image\") {\r\n            return this.data.height;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = File;\n\n//# sourceURL=webpack:///./resources/File.js");

/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n/*\r\n * Import\r\n */\r\nconst Resources = {\r\n    File: __webpack_require__(/*! ./File.js */ \"./resources/File.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Resources;\n\n//# sourceURL=webpack:///./resources/index.js");

/***/ }),

/***/ "./scenes/Scene.js":
/*!*************************!*\
  !*** ./scenes/Scene.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Scene {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(engine, config) {\r\n\r\n        this.engine = engine;\r\n\r\n        this.events = new Hoot.Events.EventEmitter();\r\n\r\n        this.config = config;\r\n\r\n        this.name = this.config.name || \"unknownScene\";\r\n\r\n        this.callbacks = this.config.callbacks;\r\n\r\n        this.callbacks.init = this.callbacks.init.bind(this);\r\n        this.callbacks.preload = this.callbacks.preload.bind(this);\r\n        this.callbacks.create = this.callbacks.create.bind(this);\r\n        this.callbacks.update = this.callbacks.update.bind(this);\r\n\r\n        this.isActive = false;\r\n\r\n        this.interval = null;\r\n\r\n        this.loader = new Hoot.Core.Loader(this.engine, {});\r\n\r\n        this.gameObjects = [];\r\n\r\n        this.engine.getSceneManager().addScene(this);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    start(options) {\r\n\r\n        if (this.isActive) {\r\n            return;\r\n        }\r\n\r\n        this.isActive = true;\r\n\r\n        this.callbacks.init(options || {});\r\n\r\n        this.callbacks.preload(this.loader);\r\n\r\n        this.loader.events.on(\"complete\", function() {\r\n\r\n            this.callbacks.create();\r\n\r\n            if (this.engine.getConfig().useRequestAnimationFrame) {\r\n\r\n                this._frame();\r\n\r\n            }else {\r\n\r\n                this.interval = window.setInterval(function () {\r\n\r\n                    this._frame();\r\n\r\n                }.bind(this), 10);\r\n\r\n            }\r\n\r\n        }, this);\r\n\r\n        this.loader.start();\r\n\r\n    }\r\n\r\n    stop() {\r\n\r\n        if (!this.isActive) {\r\n            return;\r\n        }\r\n\r\n        this.isActive = false;\r\n\r\n        this.loader.reset();\r\n\r\n        if (!this.engine.getConfig().useRequestAnimationFrame) {\r\n            window.clearInterval(this.interval);\r\n\r\n            this.interval = null;\r\n        }\r\n\r\n    }\r\n\r\n    tick() {\r\n\r\n        for (let i in this.gameObjects) {\r\n            this.gameObjects[i].tick();\r\n        }\r\n\r\n    }\r\n\r\n    render() {\r\n\r\n        let context = this.engine.getDisplay().getContext();\r\n\r\n        if (this.engine.getConfig().clearBeforeRender) {\r\n            context.clearRect(0, 0, this.engine.getDisplay().getWidth(), this.engine.getDisplay().getHeight());\r\n        }\r\n\r\n        context.save();\r\n\r\n        context.translate(-(this.engine.getDisplay().getWidth() / 2), -(this.engine.getDisplay().getHeight()));\r\n\r\n        for (let i in this.gameObjects) {\r\n            this.gameObjects[i].render();\r\n        }\r\n\r\n        context.restore();\r\n    }\r\n\r\n    _frame() {\r\n\r\n        if (this.isActive) {\r\n\r\n            this.tick();\r\n            this.render();\r\n            this.callbacks.update();\r\n\r\n            if (this.engine.getConfig().useRequestAnimationFrame) {\r\n                window.requestAnimationFrame(this._frame.bind(this));\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n    addSprite(sprite) {\r\n        this.gameObjects.push(sprite);\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getEngine() {\r\n        return this.engine;\r\n    }\r\n\r\n    getConfig() {\r\n        return this.config;\r\n    }\r\n\r\n    getLoader() {\r\n        return this.loader;\r\n    }\r\n\r\n    getName() {\r\n        return this.name;\r\n    }\r\n\r\n    getActive() {\r\n        return this.isActive;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Scene;\n\n//# sourceURL=webpack:///./scenes/Scene.js");

/***/ }),

/***/ "./scenes/SceneManager.js":
/*!********************************!*\
  !*** ./scenes/SceneManager.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass SceneManager {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(engine, config) {\r\n\r\n        this.engine = engine;\r\n\r\n        this.events = new Hoot.Events.EventEmitter();\r\n\r\n        this.config = config;\r\n\r\n        this.scenes = [];\r\n\r\n        this.currentScene = null;\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Methods\r\n     */\r\n    addScene(scene) {\r\n        this.scenes.push(scene);\r\n    }\r\n\r\n    startScene(name, options) {\r\n        let scene = this.getScene(name);\r\n\r\n        scene.start(options);\r\n\r\n        this.currentScene = scene;\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters and Setters\r\n     */\r\n    getScene(name) {\r\n        for (let i in this.scenes) {\r\n            if (this.scenes[i].name === name) {\r\n                return this.scenes[i];\r\n            }\r\n        }\r\n    }\r\n\r\n    getScenes() {\r\n        return this.scenes;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = SceneManager;\n\n//# sourceURL=webpack:///./scenes/SceneManager.js");

/***/ }),

/***/ "./scenes/index.js":
/*!*************************!*\
  !*** ./scenes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\n/*\r\n * Import\r\n */\r\nconst Scenes = {\r\n    Scene: __webpack_require__(/*! ./Scene.js */ \"./scenes/Scene.js\"),\r\n    SceneManager: __webpack_require__(/*! ./SceneManager */ \"./scenes/SceneManager.js\")\r\n};\r\n\r\n\r\n\r\n/*\r\n * Export\r\n */\r\nmodule.exports = Scenes;\r\n\n\n//# sourceURL=webpack:///./scenes/index.js");

/***/ })

/******/ });
});
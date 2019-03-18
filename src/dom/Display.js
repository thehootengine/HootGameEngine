

class Display {

    /*
     * Constructor
     */
    constructor(engine, config) {

        this.engine = engine;

        this.config = config;

        this.parentId = this.config.parentId || null;

        this.parent = null;

        this.size = {
            width: this.config.width || 960,
            height: this.config.height || 720
        };

        this.canvas = null;

        this.context = null;

        this.init();

        this.engine.setDisplay(this);

    }


    /*
     * Methods
     */
    init() {

        if (this.config.parentId === null || this.config.parentId === "") {

            this.parent = document.body;

        }else {

            this.parent = document.getElementById(this.config.parentId);

        }

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.canvas.style.backgroundColor = "black";

        this.context = this.canvas.getContext("2d");
        if (!this.config.smoothingEnabled) {
            this.canvas.style.imageRendering = "pixelated";
            this.canvas.style.imageRendering = "crisp-edges";
        }

        this.context.imageSmoothingEnabled = this.config.smoothingEnabled;

        this.parent.appendChild(this.canvas);

    }


    /*
     * Getters and Setters
     */
    getEngine() {
        return this.engine;
    }

    getConfig() {
        return this.config;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }

    getParent() {
        return this.parent;
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

}



/*
 * Export
 */
module.exports = Display;
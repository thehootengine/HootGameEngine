

class Scene {

    /*
     * Constructor
     */
    constructor(engine, config) {

        this.engine = engine;

        this.events = new Hoot.Events.EventEmitter();

        this.config = config;

        this.name = this.config.name || "unknownScene";

        this.callbacks = this.config.callbacks;

        this.callbacks.init = this.callbacks.init.bind(this);
        this.callbacks.preload = this.callbacks.preload.bind(this);
        this.callbacks.create = this.callbacks.create.bind(this);
        this.callbacks.update = this.callbacks.update.bind(this);

        this.isActive = false;

        this.interval = null;

        this.loader = new Hoot.Core.Loader(this.engine, {});

        this.gameObjects = [];

        this.engine.getSceneManager().addScene(this);

    }


    /*
     * Methods
     */
    start(options) {

        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.callbacks.init(options || {});

        this.callbacks.preload(this.loader);

        this.loader.events.on("complete", function() {

            this.callbacks.create();

            if (this.engine.getConfig().useRequestAnimationFrame) {

                this._frame();

            }else {

                this.interval = window.setInterval(function () {

                    this._frame();

                }.bind(this), 10);

            }

        }, this);

        this.loader.start();

    }

    stop() {

        if (!this.isActive) {
            return;
        }

        this.isActive = false;

        this.loader.reset();

        if (!this.engine.getConfig().useRequestAnimationFrame) {
            window.clearInterval(this.interval);

            this.interval = null;
        }

    }

    tick() {

        for (let i in this.gameObjects) {
            this.gameObjects[i].tick();
        }

    }

    render() {

        let context = this.engine.getDisplay().getContext();

        if (this.engine.getConfig().clearBeforeRender) {
            context.clearRect(0, 0, this.engine.getDisplay().getWidth(), this.engine.getDisplay().getHeight());
        }

        context.save();

        context.translate(-(this.engine.getDisplay().getWidth() / 2), -(this.engine.getDisplay().getHeight()));

        for (let i in this.gameObjects) {
            this.gameObjects[i].render();
        }

        context.restore();
    }

    _frame() {

        if (this.isActive) {

            this.tick();
            this.render();
            this.callbacks.update();

            if (this.engine.getConfig().useRequestAnimationFrame) {
                window.requestAnimationFrame(this._frame.bind(this));
            }

        }

    }

    addSprite(sprite) {
        this.gameObjects.push(sprite);
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

    getLoader() {
        return this.loader;
    }

    getName() {
        return this.name;
    }

    getActive() {
        return this.isActive;
    }

}



/*
 * Export
 */
module.exports = Scene;
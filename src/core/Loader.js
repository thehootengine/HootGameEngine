

class Loader {

    /*
     * Constructor
     */
    constructor(engine, config) {

        this.engine = engine;

        this.events = new Hoot.Events.EventEmitter();

        this.config = config;

        this.queue = [];

        this.loaded = [];

        this.isActive = false;

        this.isLoading = false;

        this.isComplete = false;

    }


    /*
     * Methods
     */
    start() {

        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.isLoading = true;

        if (this.queue.length > 0) {

            for (let i in this.queue) {

                if (this.queue[i] instanceof Hoot.Resources.File) {

                    this.queue[i].events.on("loaded", function(event) {

                        this.loaded.push(event.file);

                        if (this.loaded.length == this.queue.length) {

                            this.events.emit("complete", { loader: this });

                        }

                    }, this);

                    this.queue[i].load();

                }

            }

        }

    }

    reset() {

        if (!this.isActive) {
            return;
        }

        this.isActive = false;

    }

    addFile(file) {

        this.queue.push(file);

    }

    getFile(key) {

        for (let i in this.loaded) {

            if (this.loaded[i].key === key) {

                return this.loaded[i];

            }

        }

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

    getQueue() {
        return this.queue;
    }

    getLoaded() {
        return this.loaded;
    }

    getActive() {
        return this.isActive;
    }

    getLoading() {
        return this.isLoading;
    }

    getComplete() {
        return this.isComplete;
    }
}



/*
 * Export
 */
module.exports = Loader;
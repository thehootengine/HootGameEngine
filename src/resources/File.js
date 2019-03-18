

class File {

    /*
     * Constructor
     */
    constructor(loader, key, path, config) {

        this.loader = loader;

        if (this.loader instanceof Hoot.Scenes.Scene) {

            this.loader = this.loader.getLoader();

        }

        this.engine = this.loader.getEngine();

        this.events = new Hoot.Events.EventEmitter();

        this.key = key;

        this.path = path;

        this.config = config;

        this.type = "none";

        this.extension = this.path.split(".").pop();

        this.data = null;

        this.isLoading = false;

        this.isLoaded = false;

    }


    /*
     * Methods
     */
    init() {

        if (this.extension === "png" || this.extension === "jpg" || this.extension === "jpeg") {

            this.type = "image";

        }else if (this.extension === "json") {

            this.type = "data";

        }else if (this.extension === "mp3" || this.extension === "wav") {

            this.type = "audio";

        }else if (this.extension === "js") {

            this.type = "script";

        }

    }

    load() {

        this.init();

        switch(this.type) {
            case "image":

                this.data = new Image();

                this.isLoading = true;

                this.data.onload = function() {

                    this.isLoading = false;

                    this.isLoaded = true;

                    this.events.emit("loaded", { file: this });

                }.bind(this);

                this.data.src = this.path;

                break;
            case "data":

                let xhttp = new XMLHttpRequest();

                this.isLoading = true;

                xhttp.onload = function() {

                    this.data = JSON.parse(xhttp.responseText);

                    this.isLoading = false;
                    this.isLoaded = true;

                    this.events.emit("loaded", { file: this });

                }.bind(this);

                xhttp.open("GET", this.path);

                xhttp.send(null);

                break;
            case "audio":

                break;
            case "script":

                this.data = document.createElement("script");

                this.isLoading = true;

                this.data.onload = function() {

                    this.isLoading = false;

                    this.isLoaded = true;

                    this.events.emit("loaded", { file: this });

                }.bind(this);

                this.data.src = this.path;

                document.body.appendChild(this.data);

                break;
        }

    }


    /*
     * Getters and Setters
     */
    getEngine() {
        return this.engine;
    }

    getLoader() {
        return this.loader;
    }

    getKey() {
        return this.key;
    }

    getPath() {
        return this.path;
    }

    getConfig() {
        return this.config;
    }

    getType() {
        return this.type;
    }

    getExtension() {
        return this.extension;
    }

    getData() {
        return this.data;
    }

    getLoading() {
        return this.isLoading;
    }

    getLoaded() {
        return this.isLoaded;
    }

    getWidth() {
        if (this.type === "image") {
            return this.data.width;
        }
    }

    getHeight() {
        if (this.type === "image") {
            return this.data.height;
        }
    }

}



/*
 * Export
 */
module.exports = File;
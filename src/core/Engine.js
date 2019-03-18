

class Engine {

    /*
     * @Parameters
     * - config {Object}
     */


    /*
     * Constructor
     */
    constructor(config) {

        this.config = config;

        this.events = new Hoot.Events.EventEmitter({});

        this.sceneManager = new Hoot.Scenes.SceneManager(this, {});

        this.display = null;

    }


    /*
     * Methods
     */


    /*
     * Getters and Setters
     */
    getConfig() {
        return this.config;
    }

    getSceneManager() {
        return this.sceneManager;
    }

    getDisplay() {
        return this.display;
    }

    setDisplay(display) {
        this.display = display;
    }

}



/*
 * Export
 */
module.exports = Engine;
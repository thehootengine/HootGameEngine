

class SceneManager {

    /*
     * Constructor
     */
    constructor(engine, config) {

        this.engine = engine;

        this.events = new Hoot.Events.EventEmitter();

        this.config = config;

        this.scenes = [];

        this.currentScene = null;

    }


    /*
     * Methods
     */
    addScene(scene) {
        this.scenes.push(scene);
    }

    startScene(name, options) {
        let scene = this.getScene(name);

        scene.start(options);

        this.currentScene = scene;
    }


    /*
     * Getters and Setters
     */
    getScene(name) {
        for (let i in this.scenes) {
            if (this.scenes[i].name === name) {
                return this.scenes[i];
            }
        }
    }

    getScenes() {
        return this.scenes;
    }

}





/*
 * Export
 */
module.exports = SceneManager;
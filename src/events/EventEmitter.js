

class EventEmitter {

    /*
     * Constructor
     */
    constructor(config) {

        this.config = config;

        this.id = EventEmitter.instances;
        EventEmitter.instances++;

        this.path = "hoot-" + this.id + "-";

    }


    /*
     * Methods
     */
    emit(name, options) {

        let event = new CustomEvent(this.path + name, {
            detail: options || null
        });

        document.dispatchEvent(event);

    }


    on(name, callback, scope) {

        callback = callback.bind(scope);

        document.addEventListener(this.path + name, function (event) {

            callback(event.detail);

        });

    }

}


/*
 * Static Fields
 */
EventEmitter.instances = 0;



/*
 * Export
 */
module.exports = EventEmitter;
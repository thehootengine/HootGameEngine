

/*
 * Import
 */
const Hoot = {
    Core: require("./core"),
    DOM: require("./dom"),
    Events: require("./events"),
    GameObjects: require("./gameObjects"),
    Resources: require("./resources"),
    Scenes: require("./scenes")
};



/*
 * Export
 */
module.exports = Hoot;
global.Hoot = Hoot;
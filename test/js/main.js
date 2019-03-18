
const engine = new Hoot.Core.Engine({ useRequestAnimationFrame: true, clearBeforeRender: true });
const display = new Hoot.DOM.Display(engine, { parentId: "game", width: 960, height: 720, smoothingEnabled: false });

const BootScene = new Hoot.Scenes.Scene(engine, {
    name: "BootScene",

    callbacks: {

        init: function() {

        },

        preload: function(loader) {

            loader.addFile(new Hoot.Resources.File(this, "img-test", "./res/images/test-image.png", {}));

        },

        create: function() {

            this.sprite = new Hoot.GameObjects.Sprite(this, 100, 100, "img-test");

            this.sprite.setRotation(100);

        },

        update: function() {



        }

    },

});

engine.getSceneManager().startScene("BootScene", {});
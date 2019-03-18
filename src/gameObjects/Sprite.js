

class Sprite {

    /*
     * Constructor
     */
    constructor(scene, x, y, textureKey, frame) {

        this.scene = scene;

        this.pos = {
            x: x,
            y: y
        };

        this.origin = {
            x: 0.5,
            y: 0.5
        };

        this.scale = {
            x: 1,
            y: 1
        };

        this.rotation = 0;
        this.rotationSpeed = 0;

        this.angle = 0;

        this.textureKey = textureKey;
        this.texture = this.scene.getLoader().getFile(this.textureKey);

        this.frame = frame || 0;

        this.size = {
            width: this.texture.getWidth(),
            height: this.texture.getHeight()
        };

        this.scene.addSprite(this);

    }


    /*
     * Methods
     */
    tick() {

    }

    render() {
        let context = this.scene.getEngine().getDisplay().getContext();

        let width = this.scale.x * this.size.width;
        let height = this.scale.y * this.size.height;

        context.rotate(this.rotation * Math.PI / 180);

        context.drawImage(this.texture.getData(), -(this.pos.x - (width * this.origin.x)), -(this.pos.y - (height * this.origin.y)), width, height);
    }


    /*
     * Getters and Setters
     */
    getScene() {
        return this.scene;
    }

    getPosX() {
        return this.pos.x;
    }

    setPosX(x) {
        this.pos.x = x;
    }

    getPosY() {
        return this.pos.y;
    }

    setPosY(y) {
        this.pos.y = y;
    }

    getTextureKey() {
        return this.textureKey;
    }

    getTexture() {
        return this.texture;
    }

    setTexture(key) {
        this.textureKey = key;

        this.texture = this.scene.getLoader().getFile(key);

        this.size.width = this.texture.getWidth();
        this.size.height = this.texture.getHeight();
    }

    getFrame() {
        return this.frame;
    }

    setFrame(frame) {
        this.frame = frame;
    }

    getOriginX() {
        return this.origin.x;
    }

    setOriginY(originX) {
        this.origin.x = originX;
    }

    getOriginY() {
        return this.origin.y;
    }

    setOriginY(originY) {
        this.origin.y = originY;
    }

    setOrigin(originX, originY) {
        this.origin.x = originX;
        this.origin.y = originY;
    }

    getScaleX() {
        return this.scale.x;
    }

    setScaleX(scaleX) {
        this.scale.x = scaleX;
    }

    getScaleY() {
        return this.scale.y;
    }

    setScaleY(scaleY) {
        this.scale.y = scaleY;
    }

    setScale(scaleX, scaleY) {
        this.scale.x = scaleX;
        this.scale.y = scaleY;
    }

    getRotation() {
        return this.rotation;
    }

    setRotation(rotation) {
        this.rotation = rotation;
    }

    getRotationSpeed() {
        return this.rotationSpeed;
    }

    setRotationSpeed(rotationSpeed) {
        this.rotationSpeed = rotationSpeed;
    }

    getAngle() {
        return this.angle;
    }

    setAngle(angle) {
        this.angle = angle;
    }

}



/*
 * Export
 */
module.exports = Sprite;
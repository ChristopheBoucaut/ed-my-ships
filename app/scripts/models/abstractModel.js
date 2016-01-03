class AbstractModel {
    constructor() {
        if (this.constructor === AbstractModel) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }
    }

    /**
     * Create the current model from an object.
     *
     * @param {object} objectLoaded
     *
     * @return {AbstractModel} Return the object created. An instance of AbstractModel.
     */
    static loadFromObject(objectLoaded) {
        var objectCreated = new this();

        for (let nameProp in objectLoaded) {
            if (objectCreated.hasOwnProperty(nameProp)) {
                objectCreated[nameProp] = objectLoaded[nameProp];
            }
        }

        return objectCreated;
    }
}

export default AbstractModel;
class AbstractModel {
    constructor() {
        if (this.constructor === AbstractModel) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }
    }

    /**
     * Create the current model from JSON.
     *
     * @param {string} json
     *
     * @return {AbstractModel} Return the object created. An instance of AbstractModel.
     */
    static loadFromJson(json) {
        var objectLoaded = JSON.parse(json);
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
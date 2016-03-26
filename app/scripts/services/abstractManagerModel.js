import AbstractModel from 'scripts/models/abstractModel';

class AbstractManagerModel {
    constructor(storage) {
        if (this.constructor === AbstractManagerModel) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }

        this.storage = storage;

        if (!(this.getNamespace instanceof Function)) {
            throw new TypeError('You must implement the getNamespace method.');
        }

        if (!(this.getModel instanceof Function)) {
            throw new TypeError('You must implement the getModel method.');
        }
    }

    /**
     * Geneare an unique id.
     *
     * @return string
     */
    generateUniqueId() {
        // Find on https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/105074#105074.
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    /**
     * Storage a model.
     *
     * @param {AbstractModel} model
     *
     * @throws TypeError If model is not an instance of AbstractModel.
     */
    storageModel(model) {
        if (!(model instanceof AbstractModel)) {
            throw new TypeError('The first argument of storageModel must be an instance of AbstractModel.');
        }

        if (!model.id) {
            model.id = this.generateUniqueId();
        }

        this.storage.setItem(this.getNamespace(), model.id, model);
    }

    /**
     * Load all model or one model if an id is specified.
     *
     * @param {string} id An optional id to load just one model.
     *
     * @return {object|AbstractModel} Return a list of models or the model if specified an id.
     */
    loadModel(id) {
        if (id) {
            var modelData = this.storage.getItem(this.getNamespace(), id);
            if (modelData) {
                return this.getModel().loadFromObject(modelData);
            }
        } else {
            var modelsData = this.storage.getItems(this.getNamespace());
            if (modelsData) {
                var models = {};
                for (var modelDataPos in modelsData) {
                    models[modelDataPos] = this.getModel().loadFromObject(modelsData[modelDataPos]);
                }

                return models;
            }
        }
    }

    /**
     * Delete a model by its id.
     *
     * @param {string} id
     */
    deleteModel(id) {
        this.storage.removeItem(this.getNamespace(), id);
    }
}

export default AbstractManagerModel;
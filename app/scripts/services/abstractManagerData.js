import AbstractModel from 'scripts/models/abstractModel';

class AbstractManagerData {
    constructor(storage) {
        if (this.constructor === AbstractManagerData) {
            throw new TypeError('Cannot construct Abstract instances directly');
        }

        this.storage = storage;
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

    storageData(data) {
        if (!(data instanceof AbstractModel)) {
            throw new TypeError('The first argument of storageData must be an instance of AbstractModel.');
        }

        if (!data.id) {
            data.id = this.generateUniqueId();
        }

        if (!this.namespace) {
            throw new TypeError('You must set this.namespace.');
        }

        this.storage.setItem(this.namespace, data.id, data);
    }
}

export default AbstractManagerData;
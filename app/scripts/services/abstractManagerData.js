class AbstractManagerData {
    constructor(storage) {
        if (this.constructor === AbstractManagerData) {
            throw new TypeError("Cannot construct Abstract instances directly");
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
}

export default AbstractManagerData;
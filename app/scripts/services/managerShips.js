import AbstractManagerModel from 'scripts/services/abstractManagerModel';
import Ship from 'scripts/models/ship';

class ManagerShips extends AbstractManagerModel {
    constructor(storage) {
        super(storage);
    }

    getNamespace() {
        return 'ships';
    }

    getModel() {
        return Ship;
    }
}

ManagerShips.$inject = ['cbLocalStorage'];

export default ManagerShips;
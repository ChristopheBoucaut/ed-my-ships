import AbstractManagerData from 'scripts/services/abstractManagerData';
import Ship from 'scripts/models/ship';

class ManagerShips extends AbstractManagerData {
    constructor(storage) {
        super(storage);
        this.namespace = 'ships';
    }
}

ManagerShips.$inject = ['cbLocalStorage'];

export default ManagerShips;
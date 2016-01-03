import AbstractManagerData from 'scripts/services/abstractManagerData';
import Ship from 'scripts/models/ship';

class ManagerShips extends AbstractManagerData {
    constructor(storage) {
        super(storage);
    }
}

ManagerShips.$inject = ['cbSessionStorage'];

export default ManagerShips;
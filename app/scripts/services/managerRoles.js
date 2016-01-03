import AbstractManagerModel from 'scripts/services/abstractManagerModel';
import Role from 'scripts/models/role';

class ManagerRoles extends AbstractManagerModel {
    constructor(storage) {
        super(storage);
    }

    getNamespace() {
        return 'roles';
    }

    getModel() {
        return Role;
    }
}

ManagerRoles.$inject = ['cbLocalStorage'];

export default ManagerRoles;
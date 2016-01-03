import AbstractModel from 'scripts/models/abstractModel';

/**
 * Model to save, load and manage a role.
 */
class Role extends AbstractModel {
    constructor(id = null, name = '') {
        super();
        // Auto generate id
        this.id = id;
        this.name = name;
    }
}

export default Role;
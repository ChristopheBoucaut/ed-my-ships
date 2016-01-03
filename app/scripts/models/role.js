/**
 * Model to save, load and manage a role.
 */
class Role {
    constructor(id = null, name = '') {
        // Auto generate id
        this.id = id;
        this.name = name;
    }
}

export default Role;
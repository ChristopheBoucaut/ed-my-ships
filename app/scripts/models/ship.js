import AbstractModel from 'scripts/models/abstractModel';

// Just container for ship model.
class ShipModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const SHIPS_MODELS = [
    new ShipModel('adder', 'Adder'),
    new ShipModel('anaconda', 'Anaconda'),
    new ShipModel('asp_explorer', 'Asp Explorer'),
    new ShipModel('asp_scout', 'Asp Scout'),
    new ShipModel('cobra_mkiii', 'Cobra MkIII'),
    new ShipModel('cobra_mkiv', 'Cobra MkIV'),
    new ShipModel('diamondback_explorer', 'Diamondback Explorer'),
    new ShipModel('diamondback_scout', 'Diamondback Scout'),
    new ShipModel('eagle', 'Eagle'),
    new ShipModel('federal_assault_ship', 'Federal Assault Ship'),
    new ShipModel('federal_corvette', 'Federal Corvette'),
    new ShipModel('federal_dropship', 'Federal Dropship'),
    new ShipModel('federal_gunship', 'Federal Gunship'),
    new ShipModel('fer_de_lance', 'Fer-de-Lance'),
    new ShipModel('hauler', 'Hauler'),
    new ShipModel('imperial_clipper', 'Imperial Clipper'),
    new ShipModel('imperial_courier', 'Imperial Courier'),
    new ShipModel('imperial_cutter', 'Imperial Cutter'),
    new ShipModel('imperial_eagle', 'Imperial Eagle'),
    new ShipModel('keelback', 'Keelback'),
    new ShipModel('orca', 'Orca'),
    new ShipModel('python', 'Python'),
    new ShipModel('sidewinder_mki', 'Sidewinder MkI'),
    new ShipModel('type_6_transporter', 'Type-6 Transporter'),
    new ShipModel('type_7_transporter', 'Type-7 Transporter'),
    new ShipModel('type_9_heavy', 'Type-9 Heavy'),
    new ShipModel('viper_mkiii', 'Viper MkIII'),
    new ShipModel('viper_mkiv', 'Viper MkIV'),
    new ShipModel('vulture', 'Vulture'),
];

/**
 * Model to save, load and manage a ship.
 */
class Ship extends AbstractModel {
    constructor(id = null, alias = '', model = null, role = null, insuranceCost = null, localisation = '', note = '', todoList = {}) {
        super();
        // Auto generate id
        this.id = id;
        this.alias = alias;
        // An ships models' id reference.
        this.model = model;
        // A role reference.
        this.role = role;
        this.insuranceCost = insuranceCost;
        this.localisation = localisation;
        this.note = note;
        // A list of things to do
        this.todoList = todoList;
    }

    /**
     * Add a task at the todo list.
     *
     * @param {string} description A description of the task.
     */
    addTask(description = '') {
        this.todoList.push({
            description: description,
            done: false
        });
    }
}

export default Ship;
export var shipsModels = SHIPS_MODELS;
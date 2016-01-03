import AbstractModel from 'scripts/models/abstractModel';

const shipsModels = {
    'adder': 'Adder',
    'anaconda': 'Anaconda',
    'asp_explorer': 'Asp Explorer',
    'asp_scout': 'Asp Scout',
    'cobra_mkiii': 'Cobra MkIII',
    'cobra_mkiv': 'Cobra MkIV',
    'diamondback_explorer': 'Diamondback Explorer',
    'diamondback_scout': 'Diamondback Scout',
    'eagle': 'Eagle',
    'federal_assault_ship': 'Federal Assault Ship',
    'federal_corvette': 'Federal Corvette',
    'federal_dropship': 'Federal Dropship',
    'federal_gunship': 'Federal Gunship',
    'fer-de-lance': 'Fer-de-Lance',
    'hauler': 'Hauler',
    'imperial_clipper': 'Imperial Clipper',
    'imperial_courier': 'Imperial Courier',
    'imperial_cutter': 'Imperial Cutter',
    'imperial_eagle': 'Imperial Eagle',
    'keelback': 'Keelback',
    'orca': 'Orca',
    'python': 'Python',
    'sidewinder_mki': 'Sidewinder MkI',
    'type-6_transporter': 'Type-6 Transporter',
    'type-7_transporter': 'Type-7 Transporter',
    'type-9_heavy': 'Type-9 Heavy',
    'viper_mkiii': 'Viper MkIII',
    'viper_mkiv': 'Viper MkIV',
    'vulture': 'Vulture'
};

/**
 * Model to save, load and manage a ship.
 */
class Ship extends AbstractModel {
    constructor(id = null, alias = '', model = null, role = null, insuranceCost = 0, localisation = '', todoList = {}) {
        super();
        // Auto generate id
        this.id = id;
        this.alias = alias;
        // A ships models reference.
        this.model = model;
        // A role reference.
        this.role = role;
        this.insuranceCost = insuranceCost;
        this.localisation = localisation;
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
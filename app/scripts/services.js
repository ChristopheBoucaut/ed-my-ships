import ManagerShipsService from 'scripts/services/managerShips';

var nameModule = 'edMyShips.services';

var servicesModule = angular.module(nameModule, []);

servicesModule.service('managerShips', ManagerShipsService);

export default nameModule;
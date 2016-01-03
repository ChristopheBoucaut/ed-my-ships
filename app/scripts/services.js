import ManagerShipsService from 'scripts/services/managerShips';
import ManagerRolesService from 'scripts/services/managerRoles';

var nameModule = 'edMyShips.services';

var servicesModule = angular.module(nameModule, []);

servicesModule.service('managerShips', ManagerShipsService);
servicesModule.service('managerRoles', ManagerRolesService);

export default nameModule;
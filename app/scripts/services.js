import ManagerShipsService from 'scripts/services/managerShips';
import HeadContent from 'scripts/services/headContent';
import HeaderContent from 'scripts/services/headerContent';

var nameModule = 'edMyShips.services';

var servicesModule = angular.module(nameModule, []);

servicesModule.service('managerShips', ManagerShipsService);
servicesModule.service('headContent', HeadContent);
servicesModule.service('headerContent', HeaderContent);

export default nameModule;
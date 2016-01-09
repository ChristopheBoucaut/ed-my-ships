import HomepageController from 'scripts/controllers/homepage';
import HeadController from 'scripts/controllers/head';

var nameModule = 'edMyShips.controllers';

var controllersModule = angular.module(nameModule, []);

controllersModule.controller('HomepageController', HomepageController);
controllersModule.controller('HeadController', HeadController);

export default nameModule;
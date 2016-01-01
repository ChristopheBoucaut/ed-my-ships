import HomepageController from 'scripts/controllers/homepage';

var nameModule = 'edMyShips.controllers';

var controllersModule = angular.module(nameModule, []);

controllersModule.controller('HomepageController', HomepageController);

export default nameModule;
import HomepageController from 'scripts/controllers/homepage';
import HeadController from 'scripts/controllers/head';
import HeaderController from 'scripts/controllers/header';
import ShipController from 'scripts/controllers/ship';
import AboutitController from 'scripts/controllers/aboutit';

var nameModule = 'edMyShips.controllers';

var controllersModule = angular.module(nameModule, []);

controllersModule.controller('HomepageController', HomepageController);
controllersModule.controller('HeadController', HeadController);
controllersModule.controller('HeaderController', HeaderController);
controllersModule.controller('ShipController', ShipController);
controllersModule.controller('AboutitController', AboutitController);

export default nameModule;
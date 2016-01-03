import controllersModule from 'scripts/controllers';
import servicesModule from 'scripts/services';

var nameModule = 'edMyShips';

var mainModule = angular.module(nameModule, [
    controllersModule,
    servicesModule,
    'ngRoute',
    'ngMaterial',
    'cbAngular.utils.storage'
]);

mainModule.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when(
                "/",
                {
                    controller: "HomepageController",
                    templateUrl: "homepage.html"
                }
            )
            .otherwise({ redirectTo: "/" });
    }
]);

export default nameModule;
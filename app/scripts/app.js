import controllersModule from 'scripts/controllers';

var nameModule = 'edMyShips';

var mainModule = angular.module(nameModule, [
    controllersModule,
    'ngMaterial',
    'ngRoute'
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
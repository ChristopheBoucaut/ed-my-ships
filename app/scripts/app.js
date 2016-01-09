import controllersModule from 'scripts/controllers';
import servicesModule from 'scripts/services';

var nameModule = 'edMyShips';

var mainModule = angular.module(nameModule, [
    controllersModule,
    servicesModule,
    'ngRoute',
    'ngMaterial',
    'pascalprecht.translate',
    'cbAngular.utils.storage'
]);

// Config router.
mainModule.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when(
                '/',
                {
                    controller: 'HomepageController',
                    templateUrl: 'homepage.html'
                }
            )
            .otherwise({ redirectTo: '/' });
    }
]);

// config translate module.
mainModule.config([
    '$translateProvider',
    function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'translation.',
            suffix: '.json'
        });

        $translateProvider.determinePreferredLanguage(determinePreferredLanguage);
        $translateProvider.useSanitizeValueStrategy('escape');

        /**
         * Determine the preferred language for the user.
         *
         * @return string Return the language.
         */
        function determinePreferredLanguage() {
            var listLang = new Array('fr');

            var currentLang = navigator.language.substr(0,2);

            if (listLang.indexOf(currentLang) > -1) {
                return currentLang;
            } else {
                return 'fr';
            }
        }
    }
]);

mainModule.config(['$mdThemingProvider',function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .dark();
}]);

mainModule.config(['$mdIconProvider', function ($mdIconProvider) {
    var defaultPathIcons = 'img/icons/';
    $mdIconProvider
        .icon('global:menu', defaultPathIcons+'menu.svg');
}]);

export default nameModule;
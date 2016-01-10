class Header {
    constructor($scope, $location, $window, $mdSidenav, headContent) {
        $scope.title = null;
        $scope.isHome = true;
        $scope.$on(headContent.EVENT_CHANGE_TITLE, function (event, title) {
            $scope.title = title;
        });

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.backHome = function() {
            $location.path('/');
        };

        $scope.$on('$routeChangeSuccess', function () {
            if ($location.path() === '/') {
                $scope.isHome = true;
            } else {
                $scope.isHome = false;
            }
        });
    }
}

Header.$inject = ['$scope', '$location', '$window', '$mdSidenav', 'headContent'];

export default Header;
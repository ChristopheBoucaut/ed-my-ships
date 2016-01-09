class Header {
    constructor($scope, $mdSidenav, headContent) {
        $scope.title = null;
        $scope.$on(headContent.EVENT_CHANGE_TITLE, function (event, title) {
            $scope.title = title;
        });

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    }
}

Header.$inject = ['$scope', '$mdSidenav', 'headContent'];

export default Header;
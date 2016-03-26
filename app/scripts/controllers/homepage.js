class Homepage {
    constructor($scope, headContent, headerContent, managerShips) {
        // Reset the title.
        headContent.resetTitle();
        headerContent.removeMainAction();

        $scope.ships = managerShips.loadModel();
        $scope.countShips = Object.keys($scope.ships).length;
    }
}

Homepage.$inject = ['$scope', 'headContent', 'headerContent', 'managerShips'];

export default Homepage;
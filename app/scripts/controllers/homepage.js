class Homepage {
    constructor($scope, headContent, managerShips) {
        // Reset the title.
        headContent.resetTitle();

        $scope.ships = managerShips.loadModel();
        $scope.countShips = Object.keys($scope.ships).length;
    }
}

Homepage.$inject = ['$scope', 'headContent', 'managerShips'];

export default Homepage;
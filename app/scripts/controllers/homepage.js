class Homepage {
    constructor($scope, headContent, headerContent, managerShips) {
        // Reset the title.
        headContent.resetTitle();
        headerContent.removeMainAction();

        $scope.ships = managerShips.loadModel();
        $scope.countShips = Object.keys($scope.ships).length;

        /**
         * Method to delete a ship.
         *
         * @param {string} id
         */
        $scope.deleteShip = function (id) {
            // @TODO : Add a modal to confirm.
            managerShips.deleteModel(id);
            delete $scope.ships[id];
        };
    }
}

Homepage.$inject = ['$scope', 'headContent', 'headerContent', 'managerShips'];

export default Homepage;
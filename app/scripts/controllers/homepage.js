class Homepage {
    constructor($scope, $mdDialog, $translate, headContent, headerContent, managerShips) {
        // Reset the title.
        headContent.resetTitle();
        headerContent.removeMainAction();

        $scope.ships = managerShips.loadModel();
        $scope.countShips = Object.keys($scope.ships).length;

        /**
         * Method to delete a ship.
         *
         * @param {Ship} ship
         */
        $scope.deleteShip = function (ship) {
            var msgToModal = ['homepage.deleteShipModal.title', 'homepage.deleteShipModal.content', 'homepage.deleteShipModal.accept', 'homepage.deleteShipModal.cancel'];
            $translate(msgToModal, {nameShip: ship.alias}).then(function (msgs) {
                confirm = $mdDialog.confirm({
                    title: msgs['homepage.deleteShipModal.title'],
                    textContent: msgs['homepage.deleteShipModal.content'],
                    ok: msgs['homepage.deleteShipModal.accept'],
                    cancel: msgs['homepage.deleteShipModal.cancel'],
                });
                $mdDialog
                    .show(confirm)
                    .then(function () {
                        // Accept to delete.
                        managerShips.deleteModel(ship.id);
                        delete $scope.ships[ship.id];
                    }, function() {
                        // Cancel to delete.
                    })
                    .finally(function() {
                        confirm = undefined;
                    });
            });
        };
    }
}

Homepage.$inject = ['$scope', '$mdDialog', '$translate', 'headContent', 'headerContent', 'managerShips'];

export default Homepage;
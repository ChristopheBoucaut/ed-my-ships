import ShipModel, {shipsModels} from 'scripts/models/ship';

class Ship {
    constructor($scope, $routeParams, $translate, headContent, managerShips) {
        // Init $scope variables.
        $scope.notSaved = false;
        var titleTag;

        if ($routeParams.id) {
            // @TODO : Read mode
            $scope.editMode = false;
            titleTag = "ship.see_ship";
        } else {
            // @TODO : Create mode
            $scope.ship = new ShipModel();
            $scope.editMode = true;
            titleTag = "ship.create_ship";
        }

        // Init title, @TODO : Change setAdditionnalTitle to move $translate in the method.
        $translate(titleTag).then(function (title) {
            headContent.setAdditionnalTitle(title);
        });

        /**
         * Search a ship model in list models
         *
         * @param {string} search Search terms.
         *
         * @return {array} Ships results.
         */
        $scope.shipsModelsSearch = function (search) {
            if (search) {
                search = search.toLowerCase();

                return shipsModels.filter(shipModel => (shipModel.name.toLowerCase().indexOf(search) !== -1));
            } else {
                return shipsModels;
            }
        };

        $scope.changeShipModel = function (shipModel) {
            $scope.ship.model = shipModel.id;
        };

        $scope.saveShip = function () {
            console.log(arguments);
        };
    }
}

Ship.$inject = ['$scope', '$routeParams', '$translate', 'headContent', 'managerShips'];

export default Ship;
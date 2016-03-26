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
            if (shipModel) {
                $scope.ship.model = shipModel.id;
            } else {
                $scope.ship.model = null;
            }
        };

        $scope.addTask = function (event) {
            // If event is undefined, user uses the button else, he uses enter key.
            if (event === undefined || event.keyCode == 13) {
                var newTask = $scope.newTaskValue;
                $scope.newTaskValue = '';
                $scope.ship.addTask(newTask);
            }
        };

        $scope.saveShip = function () {
            console.log('submit');
            console.log(arguments);
        };
    }
}

Ship.$inject = ['$scope', '$routeParams', '$translate', 'headContent', 'managerShips'];

export default Ship;
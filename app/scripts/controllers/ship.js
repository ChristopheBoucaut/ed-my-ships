import ShipModel, {shipsModels} from 'scripts/models/ship';

class Ship {
    constructor($scope, $routeParams, $location, $translate, $mdDialog, headContent, headerContent, managerShips) {
        // Init $scope variables.
        $scope.notSaved = false;
        var titleTag;

        if ($routeParams.id) {
            // Start with a ship existing
            $scope.ship = managerShips.loadModel($routeParams.id);
            if ($scope.ship) {
                var shipModelInitial = findShipModelFromIdModel($scope.ship.model);
                if (shipModelInitial) {
                    $scope.searchShip = shipModelInitial.name;
                }
                $scope.editMode = false;
                headContent.setAdditionnalTitle($scope.ship.alias);
            }
        }

        if ($scope.ship === undefined) {
            // Create mode (or if the id in the route is invalid).
            $scope.ship = new ShipModel();
            $scope.editMode = true;
            titleTag = "ship.create_ship";
            // Init title.
            $translate(titleTag).then(function (title) {
                headContent.setAdditionnalTitle(title);
            });
        }

        refreshMainAction();

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

        /**
         * Change the current ship model.
         *
         * @param {Object} shipModel
         */
        $scope.changeShipModel = function (shipModel) {
            if (shipModel) {
                $scope.ship.model = shipModel.id;
            } else {
                $scope.ship.model = null;
            }
        };

        /**
         * Add a task in the todo list.
         *
         * @param {Object} event Setted if the submission come from the enter key press.
         */
        $scope.addTask = function (event) {
            // If event is undefined, user uses the button else, he uses enter key.
            if (event === undefined || event.keyCode == 13) {
                var newTask = $scope.newTaskValue;
                $scope.newTaskValue = '';
                $scope.ship.addTask(newTask);
            }
        };

        /**
         * Get the shipModel from its id.
         *
         * @param {string} idModel
         *
         * @return {Object}
         */
        function findShipModelFromIdModel(idModel) {
            for (var i = 0; i < shipsModels.length; i++) {
                if (shipsModels[i].id == idModel) {
                    return shipsModels[i];
                }
            }
        }

        /**
         * Refresh main action in header.
         */
        function refreshMainAction() {
            if ($scope.editMode) {
                // Add button to save the ship.
                headerContent.setMainAction(saveShip, 'global:save');
            } else {
                // Add button to edit the ship.
                headerContent.setMainAction(editShip, 'global:edit');
            }
        }

        /**
         * Check ship config and save if not errors.
         */
        function saveShip() {
            var errorsMsg = [];
            $scope.shipForm.$setSubmitted(true);
            if (!$scope.shipForm.$valid) {
                // Bad values in form
                // Prepare error messages by angular.
                for (var errorType in $scope.shipForm.$error) {
                    var currentErrors = $scope.shipForm.$error[errorType];
                    for (var k in currentErrors) {
                        errorsMsg.push('ship.errorModal.'+errorType+'.'+currentErrors[k].$name);
                    }
                }
            }

            // Manual controls
            if (!$scope.ship.model) {
                errorsMsg.push('ship.errorModal.required.model');
            }

            if (errorsMsg.length > 0) {
                var dialogTag = ['ship.errorModal.title', 'ship.errorModal.fix'];
                var msgsTag = [dialogTag, errorsMsg];
                $translate(msgsTag).then(function (msgsTranslated) {
                    var dialog = msgsTranslated[dialogTag.join(',')];
                    var errors = msgsTranslated[errorsMsg.join(',')];
                    var contentDialog = '<ul>';
                    for (var k in errors) {
                        contentDialog += '<li>'+errors[k] + '</li>';
                    }
                    contentDialog += '</ul>';
                    alert = $mdDialog.alert({
                        title: dialog['ship.errorModal.title'],
                        htmlContent: contentDialog,
                        ok: dialog['ship.errorModal.fix']
                    });
                    $mdDialog
                        .show( alert )
                        .finally(function() {
                            alert = undefined;
                        });
                });

                return;
            } else {
                // No errors ! Seriously ?! YEAH ! SAVE THIS SHIP NOW ! JUST DO IT !
                var newShipCreate = $scope.ship.id === null;
                managerShips.storageModel($scope.ship);
                if (newShipCreate) {
                    // New ship, redirect after storage
                    $location.path($location.path()+"/"+$scope.ship.id).replace();
                } else {
                    $scope.editMode = false;
                    refreshMainAction();
                }
            }
        }

        /**
         * Switch in edit mode.
         */
        function editShip() {
            $scope.editMode = true;
            refreshMainAction();
        }
    }
}

Ship.$inject = ['$scope', '$routeParams', '$location', '$translate', '$mdDialog', 'headContent', 'headerContent', 'managerShips'];

export default Ship;
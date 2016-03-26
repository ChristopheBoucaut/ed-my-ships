import ShipModel, {shipsModels} from 'scripts/models/ship';

class Ship {
    constructor($scope, $routeParams, $translate, $mdDialog, headContent, headerContent, managerShips) {
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

        headerContent.setMainAction(
            function () {
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
                    managerShips.storageModel($scope.ship);
                }
            },
            'global:save'
        );

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
    }
}

Ship.$inject = ['$scope', '$routeParams', '$translate', '$mdDialog', 'headContent', 'headerContent', 'managerShips'];

export default Ship;
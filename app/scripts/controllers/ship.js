import ShipModel from 'scripts/models/ship';

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


        // @TODO : Init title head
    }
}

Ship.$inject = ['$scope', '$routeParams', '$translate', 'headContent', 'managerShips'];

export default Ship;
'use strict';

FAU.controller('MainController', ['$scope', function ($scope) {
    var self = this;

    this.init = function () {
        this.setScope();
        this.load();
    };

    this.load = function () {
        this.setScopeEvents();
    };

    this.setScope = function () {
        $scope.myModifier = {
            translateValues: [100, 150, 0],
            size: [200, 250]
        };

        $scope.list = [
            {content: "Famous", bgColor: "#b58900"},
            {content: "Angular", bgColor: "#dc322f"},
            {content: "Rocks!", bgColor: "#cb4b16"}
        ];
    };

    this.setScopeEvents = function () {
        $scope.generateSize = function() {
            return [200, 250];
        };
    };

    this.init();
}]);
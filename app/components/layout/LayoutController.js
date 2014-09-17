FAU.controller('LayoutController', ['$scope',
    function ($scope) {
        var self = this;

        this.init = function () {
            this.setScope();
            this.load();
        };

        this.load = function () {
            this.setScopeEvents();
        };

        this.setScope = function () {
            $scope.myGridLayoutOptions = {
                dimensions: [3, 2]
            };

            $scope.list = [
                {content:"hello", bgColor: "#b58900"},
                {content:"world", bgColor: "#cb4b16"},
                {content: "famous", bgColor: "#dc322f"},
                {content: "angular", bgColor: "#d33682"},
                {content: "is", bgColor: "#6c71c4"},
                {content: "cool!", bgColor: "#268bd2"}
            ];
        };

        this.setScopeEvents = function () {
        };

        this.init();
    }]);
'use strict';

FAU.controller('AnimationsController', ['$scope', '$famous',
    function ($scope, $famous) {
        var self = this;

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];

        console.info('Easing', Easing);

        this.init = function () {
            this.setScope();
            this.load();
        };

        this.load = function () {
            this.animate();
            this.setScopeEvents();
        };

        this.setScope = function () {
            $scope.myGridLayoutOptions = {
                dimensions: [2, 3]
            };

            $scope.list = [
                {content:"hello", bgColor: "#b58900", rotate: new Transitionable(0)},
                {content:"world", bgColor: "#cb4b16", rotate: new Transitionable(1)},
                {content: "famous", bgColor: "#dc322f", rotate: new Transitionable(2)},
                {content: "angular", bgColor: "#d33682", rotate: new Transitionable(3)},
                {content: "is", bgColor: "#6c71c4", rotate: new Transitionable(4)},
                {content: "cool!", bgColor: "#268bd2", rotate: new Transitionable(5)}
            ];
        };

        this.animate = function() {
            for (var i = 0; i < $scope.list.length; i++) {
                $scope.list[i].rotate.set(Math.PI * 4, {
                    curve: Easing.inOutBounce,
                    duration: 10000 * (i+1) / 4
                });
            }
        };

        this.setScopeEvents = function () {
        };

        this.init();
    }]);
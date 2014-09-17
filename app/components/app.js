'use strict';

var FAU = angular.module('FAU', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'famous.angular'
]);

FAU.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/main/main.html',
            controller: 'MainController'
        })
        .state('layout', {
            url: '/layout',
            templateUrl: 'components/layout/layout.html',
            controller: 'LayoutController'
        })
        .state('animations', {
            url: '/animations',
            templateUrl: 'components/animations/animations.html',
            controller: 'AnimationsController'
        });

    $urlRouterProvider.otherwise('/home');
});
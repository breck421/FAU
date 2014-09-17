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
            url: '/',
            templateUrl: 'components/main/main.html',
            controller: 'MainController'
        })
        .state('layout', {
            url: '/layout',
            templateUrl: 'components/layout/layout.html',
            controller: 'LayoutController'
        });

    $urlRouterProvider.otherwise('/');
});

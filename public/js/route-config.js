(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/js/list.html',
                controller: 'ListController',
                controllerAs: 'listCtrl'
            })
            .when('/details/:audioId', {
                templateUrl: '/js/details.html',
                controller: 'DetailsController',
                controllerAs: 'detCtrl'
            })
    }
}());
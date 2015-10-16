(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/js/app/list.html',
                controller: 'ListController',
                controllerAs: 'listCtrl'
            })
            .when('/details/:audioId', {
                templateUrl: '/js/app/details.html',
                controller: 'DetailsController',
                controllerAs: 'detCtrl'
            })
    }
}());
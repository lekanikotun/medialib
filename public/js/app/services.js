(function() {
   'use strict';

    angular
        .module('app')
        .factory('api', apiFactory)

    apiFactory.$inject = ['$http'];

    function apiFactory($http) {

        return {
            getMediaList: getMediaList,
            getMediaDetails: getMediaDetails
        };

        function getMediaList() {

            return $http.get('/media/audio/listings')
                .then(function(response) {
                   return response.data;
                });
        }

        function getMediaDetails(audioId) {

            return $http.get('/media/audio/listings/' + audioId)
                .then(function(response) {
                    return response.data;
                });
        }
    }

}())
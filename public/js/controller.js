(function() {
    'use strict';

    angular
        .module('app')
        .controller('ListController', ListController)
        .controller('DetailsController', DetailsController)

    ListController.$inject = ['api'];
    DetailsController.$inject = ['api', '$routeParams', '$window'];

    function ListController(api) {

        var self = this;

        api.getMediaList()
            .then(function(data) {
                self.audiolist = data;
            });
    }

    function DetailsController(api, $routeParams, $window) {

        var self = this;

        api.getMediaDetails($routeParams['audioId'])
            .then(function(data) {
                if (!data)
                    self.media = {error: 'Media not found'};
                else
                    self.media = data;
                });

        self.back = function() {
            $window.history.back();
        }
    }
}());
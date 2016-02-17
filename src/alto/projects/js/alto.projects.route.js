(function() {
    'use strict';

    /**
     * Module      : alto.home
     * Description : ConfigDescription
     */
    angular.module('alto.projects').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($stateProvider) {
        
        $stateProvider.state('projects', {
            url: '/projects',
            views: {
                'content': {
                    template: '<projects></projects>'  
                }
            }
        });

    }

})();
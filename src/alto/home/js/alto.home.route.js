(function() {
    'use strict';

    /**
     * Module      : alto.home
     * Description : ConfigDescription
     */
    angular.module('alto.home').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($stateProvider) {
        
        $stateProvider.state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'alto/home/alto.home.html'  
                }
            }
        });

    }

})();
(function() {
    'use strict';

    /**
     * Module      : alto.technical.core
     * Description : This configuration element provide the default route for the app
     */
    angular.module('alto.technical.core').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($urlRouterProvider) {
        
        // If the current URL does not exist in routes defintions, go to /
        $urlRouterProvider.otherwise('/');
    }

})();
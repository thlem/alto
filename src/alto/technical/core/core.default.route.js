(function() {
    'use strict';

    /**
     * Module      : alto.technical.core
     * Description : ConfigDescription
     */
    angular.module('alto.technical.core').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');
    }

})();
(function() {
    'use strict';

    /**
     * Module      : alto.signin
     * Description : ConfigDescription
     */
    angular.module('alto.signin').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($stateProvider) {
        
        $stateProvider.state('signIn', {
            url: '/signin',
            views: {
                'content': {
                    template: '<sign-in></signin>'
                }
            }
        });

    }

})();
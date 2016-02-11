(function() {
    'use strict';

    /**
     * Module      : alto.signout
     * Description : ConfigDescription
     */
    angular.module('alto.signout').config(ConfigFunction);

    /* @ngInject */
    function ConfigFunction($stateProvider) {
        
        $stateProvider.state('signOut', {
            url: '/signout',
            views: {
                'content': {
                    controller: 'SignoutController'
                }
            }
            
        });

    }

})();
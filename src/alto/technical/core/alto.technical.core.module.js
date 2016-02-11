(function() {
    'use strict';

    /**
     * Module      : alto.technical.core
     * Description : This module load all functional components of the app and do some stuff at the 
     *               start of the app
     */
    angular.module('alto.technical.core', [
        'alto.menu',
        'alto.home',
        'alto.signin',
        'alto.notifications'
    ]);

})();
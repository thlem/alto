(function() {
    'use strict';

    /**
     * Module      : alto.technical
     * Description : This module load all technical modules
     */
    angular.module('alto.technical', [
        /** Alto modules */
        // The core module load functional modules
        'alto.technical.core',
        'alto.technical.model',
        'alto.technical.services'
    ]);

})();
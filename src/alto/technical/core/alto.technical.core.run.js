(function() {
    'use strict';

    /**
     * Module      : alto.technical.core
     * Description : This Run function is run at the start of the app
     */
    angular.module('alto.technical.core').run(RunFunction);

    /* @ngInject */
    function RunFunction($log) {
        $log.debug('[START] Alto core is running');
    }

})();
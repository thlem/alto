(function() {
    'use strict';

    /**
     * Module      : my.core
     * Description : RunDescription
     */
    angular.module('alto.technical.core').run(RunFunction);

    /* @ngInject */
    function RunFunction($log) {
        $log.info('START')
    }

})();
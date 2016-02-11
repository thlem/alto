(function() {
    'use strict';

    /**
     * Module      : alto
     * Description : The main module of the application. Load Angular / Lib modules and the technical module that load the 
     * entire app.
     */
    angular.module('alto', [
        /** Angular / Lib modules */
        'ui.router',
        /** Alto module */
        'alto.technical'
    ]);

})();
(function() {
    'use strict';

    /**
     * Module      : alto
     * Controller  : MainController
     * Description : ControllerDescription
     */
    angular.module('alto').controller('MainController', MainController);

    /* @ngInject */
    function MainController($log, $rootScope) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/
        /* jshint validthis: true */
        var vm = this;

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/


         /*************************
         *     PRIVATE METHOD     *
         **************************/

         // Listen for the event that notify that the menu was clicked
         // This manage the class on the .global-wrapper element
         $rootScope.$on('alto.menu.interact', function(event, bool){
            vm.isMenuVisible = bool;
        });

    }

})();
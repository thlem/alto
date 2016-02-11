(function() {
    'use strict';

    /**
     * Module      : alto.menu
     * Controller  : AltoMenuController
     * Description : AltoMenuController
     */
    angular.module('alto.menu').controller('AltoMenuController', AltoMenuController);

    /* @ngInject */
    function AltoMenuController($log, UserModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/
        /* jshint validthis: true */
        var vm = this;

        vm.isMenuVisible = false;
        vm.user = UserModel;

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/
         vm.showMenu = showMenu;
         vm.hideMenu = hideMenu;
         vm.isUserConnected = isUserConnected;

         function showMenu() {
            vm.isMenuVisible = true;
         }

         function hideMenu() {
            vm.isMenuVisible = false;
         }

         function isUserConnected() {
            if(angular.equals({}, vm.user)){
                return false;
            }
            return true;
         }



         /*************************
         *     PRIVATE METHOD     *
         **************************/


    }

})();
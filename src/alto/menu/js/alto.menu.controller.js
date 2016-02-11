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
         vm.showHideMenu = showHideMenu;
         vm.isUserConnected = isUserConnected;

         function showHideMenu(isMenuVisible) {
            vm.isMenuVisible = !isMenuVisible;
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
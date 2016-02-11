(function() {
    'use strict';

    /**
     * Module      : alto.signin
     * Controller  : SignInController
     * Description : ControllerDescription
     */
    angular.module('alto.signin').controller('SignInController', SignInController);

    /* @ngInject */
    function SignInController($log, UserService, $state) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/
        /* jshint validthis: true */
        var vm = this;
        vm.login = "";
        vm.password = "";

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/
         vm.processLogin = processLogin;

         function processLogin(){
            UserService.authenticateUser(vm.login, vm.password)
            .then(function(){
                $state.go('home');
            })
            .catch(function(errorMessage){
                $log.error(errorMessage);
            });
         }


         /*************************
         *     PRIVATE METHOD     *
         **************************/


    }

})();
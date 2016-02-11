(function() {
    'use strict';

    /**
     * Module      : alto.signout
     * Controller  : SignoutController
     * Description : ControllerDescription
     */
    angular.module('alto.signout').controller('SignoutController', SignoutController);

    /* @ngInject */
    function SignoutController($log, UserService, $state) {
        
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
         function start(){
            $log.warn('start');
            UserService.logoutUser()
        .then(function(){
            $log.warn('start');
            $state.go('home');
        })
        .catch(function(errorMessage){
            $log.warn('start');
            $log.error(errorMessage);
        });
         }

         start();
        

    }

})();
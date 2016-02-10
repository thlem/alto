(function() {
    'use strict';

    /**
     * Module      : alto.technical.services
     * Factory  : UserService
     * Description : FactoryDescription
     */
    angular.module('alto.technical.services').factory('UserService', UserService);

    /* @ngInject */
    function UserService($log, UserModel, $q, NotificationModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/


        /*************************
         *     PRIVATE VARIABLE   *
         **************************/
         var user = UserModel;
         var notifications = NotificationModel;


        /*************************
         *     SERVICE RETURN     *
         **************************/
        var service = {
            authenticateUser: authenticateUser
        };

        return service;

        /*************************
         *     PUBLIC METHOD      *
         **************************/

         function authenticateUser(login, password) {

            var deffered = $q.defer();

            // todo server call
            
            if(login === "admin" && password === "admin") {

                user.login = login;
                notifications.push({
                    type: 'info',
                    message: 'You are now connected as ' + login
                })
                deffered.resolve();
                
            }
            else{
                notifications.push({
                    type: 'error',
                    message: 'Authentication error, the login or password could be wrong.'
                })
                deffered.reject();
            }

            return deffered.promise;

         }


        /*************************
         *     PRIVATE METHOD     *
         **************************/

    }

})();
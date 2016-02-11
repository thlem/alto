(function() {
    'use strict';

    /**
     * Module      : alto.technical.services
     * Factory     : UserService
     * Description : This factory provide methods that allow to communicate with the REST API for user manipulation
     *               and provide methods to manage users.
     */
    angular.module('alto.technical.services').factory('UserService', UserService);

    /* @ngInject */
    function UserService(
        /** Angular provider */
        $q,
        /** Alto Models */
        UserModel, NotificationModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/


        /*************************
         *     PRIVATE VARIABLE   *
         **************************/

         // The user bind with the model. Each modification to this variable change the model content.
         var user = UserModel;
         // The notifications bind with the model. Each modification to this variable change the model content.
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

         /**
          * This method call the REST API to check if the given login and password are correct
          * Populate the user model and manage success / error with notifications
          * @param login : The login of the user
          * @param password : The password of the user
          */
         function authenticateUser(login, password) {

            // Initialize the promise
            var deffered = $q.defer();

            /**
             * [TODO] Make a REST call with login and password as parameters.
             */
            
            // [TODO] Start of code to replace by the REST call

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
            // [TODO] End of code to replace by the REST call

            return deffered.promise;

         }


        /*************************
         *     PRIVATE METHOD     *
         **************************/

    }

})();
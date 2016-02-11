(function() {
    'use strict';

    /**
     * Module      : alto.technical.model
     * Factory     : UserModel
     * Description : This Factory provide the model for user
     */
    angular.module('alto.technical.model').factory('UserModel', UserModel);

    /* @ngInject */
    function UserModel() {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/


        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


        /*************************
         *     SERVICE RETURN     *
         **************************/
        
        // This model is an Objects that contains all non-sensible user informations
        // The object model should be : 
        // {
        //  usrLogin: ,
        //  usrMail: ,
        //  usrFirstName: ,
        //  usrLastName: 
        // }
        var user = {};

        return user;

        /*************************
         *     PUBLIC METHOD      *
         **************************/


        /*************************
         *     PRIVATE METHOD     *
         **************************/

    }

})();
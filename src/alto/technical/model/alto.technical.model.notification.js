(function() {
    'use strict';

    /**
     * Module      : alto.technical.model
     * Factory     : NotificationModel
     * Description : This Factory provide the model for notifications
     */
    angular.module('alto.technical.model').factory('NotificationModel', NotificationModel);

    /* @ngInject */
    function NotificationModel() {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/


        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


        /*************************
         *     SERVICE RETURN     *
         **************************/

        // This model is an Objects Array that contains all notifications
        // The object model should be : 
        // {
        //  type: 'error' or 'success' or 'warning' or 'info',
        //  message: 'The notification message'
        // }
        var notifications = [];

        return notifications;

        /*************************
         *     PUBLIC METHOD      *
         **************************/


        /*************************
         *     PRIVATE METHOD     *
         **************************/

    }

})();
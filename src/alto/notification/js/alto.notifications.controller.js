(function() {
    'use strict';

    /**
     * Module      : alto.notifications
     * Controller  : NotificationController
     * Description : This controller bind the notifications array to be displayed
     */
    angular.module('alto.notifications').controller('NotificationsController', NotificationsController);

    /* @ngInject */
    function NotificationsController(NotificationModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/

        /* jshint validthis: true */
        var vm = this;

        // Bind to the NotificationModel Object Array
        vm.notifications = NotificationModel;

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/


         /*************************
         *     PRIVATE METHOD     *
         **************************/


    }

})();
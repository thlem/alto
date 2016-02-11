(function() {
    'use strict';

    /**
     * Module      : alto.notification
     * Controller  : NotificationController
     * Description : ControllerDescription
     */
    angular.module('alto.notifications').controller('NotificationsController', NotificationsController);

    /* @ngInject */
    function NotificationsController($log, NotificationModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/
        /* jshint validthis: true */
        var vm = this;
        vm.notifications = NotificationModel;

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/
         vm.deleteNotification = deleteNotification;

         function deleteNotification(notificationKey){
            vm.notifications.splice(notificationKey, 1);
         }

         /*************************
         *     PRIVATE METHOD     *
         **************************/


    }

})();
(function() {
    'use strict';

    /**
     * Module      : alto.notifications
     * Directive   : notifications
     * Description : This directive load the template that display notifications
     */
    angular.module('alto.notifications').directive('notifications', notifications);

    /* @ngInject */
    function notifications() {
        
        var directive = {

            bindToController: true,
            controller: 'NotificationsController',
            controllerAs: 'notificationsController',
            restrict: 'EA',
            replace: true,
            templateUrl: 'alto/notification/alto.notifications.html',
            scope: {},
            link: function() {}
            
        };

        return directive;

    }

})();
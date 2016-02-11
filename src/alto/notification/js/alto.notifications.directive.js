(function() {
    'use strict';

    /**
     * Module      : alto.notification
     * Directive  : notifications
     * Description : directiveDescription
     */
    angular.module('alto.notifications').directive('notifications', notifications);

    /* @ngInject */
    function notifications() {
        
        var directive = {
            bindToController: true,
            controller: 'NotificationsController',
            controllerAs: 'notificationsController',
            restrict: 'EA',
            templateUrl: 'alto/notification/alto.notifications.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
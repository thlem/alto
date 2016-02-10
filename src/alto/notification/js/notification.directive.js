(function() {
    'use strict';

    /**
     * Module      : alto.notifications
     * Directive  : notification
     * Description : directiveDescription
     */
    angular.module('alto.notifications').directive('notification', notification);

    /* @ngInject */
    function notification(NotificationModel, $interval) {
        
        var directive = {
            bindToController: true,
            controllerAs: 'currentNotificationController',
            restrict: 'EA',
            templateUrl: 'alto/notification/notification.html',
            scope: {
                currentNotification: '=',
                currentNotificationKey: '='
            },
            controller: function(){
                var vm = this;
                vm.currentTimeoutProgress = 0;
            },
            link: function(scope, element, attrs, currentNotificationController) {
                var currentInterval;
                scope.startTimeout = function() {

                    currentInterval = $interval(function() {
                        currentNotificationController.currentTimeoutProgress += 2.5;
                        if(currentNotificationController.currentTimeoutProgress === 102.5) {
                            NotificationModel.splice(currentNotificationController.currentNotificationKey, 1);
                        }
                    }, 50, 41);
                };

                scope.startTimeout();

                element.on('click', function(){
                    $interval.cancel(currentInterval);
                    currentInterval = null;
                    NotificationModel.splice(currentNotificationController.currentNotificationKey, 1);
                });

            }
        };

        return directive;

    }

})();
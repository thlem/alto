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
            templateUrl: 'alto/notification/alto.notification.html',
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

                // The number of iteration to have 100% progress
                var intervalIterationNumber = 41;
                // 3000 is 3sec
                var intervalLimit = 3000 / intervalIterationNumber;
                var progressPercentageGap = 2.5;

                scope.startTimeout = function() {

                    currentInterval = $interval(function() {
                        currentNotificationController.currentTimeoutProgress += progressPercentageGap;
                        if(currentNotificationController.currentTimeoutProgress > 100) {
                            NotificationModel.splice(currentNotificationController.currentNotificationKey, 1);
                        }
                    }, intervalLimit, intervalIterationNumber);
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
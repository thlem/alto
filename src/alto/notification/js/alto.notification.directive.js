(function() {
    'use strict';

    /**
     * Module      : alto.notifications
     * Directive   : notification
     * Description : This directive is for one notification
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
                // The notification object that contains the type and the message
                currentNotification: '=',
                // The array key of the notification
                currentNotificationKey: '='
            },
            controller: function(){

                var vm = this;
                // The progress bar in % that hide the notication after a given time
                vm.currentTimeoutProgress = 0;

            },
            link: function(scope, element, attrs, currentNotificationController) {
                
                // The current notification timeout
                var currentInterval;

                // The number of iteration to have 100% progress
                var intervalIterationNumber = 41;
                // 3000 is 3sec
                var intervalLimit = 3000 / intervalIterationNumber;
                // The percentage step by step progression
                var progressPercentageGap = 2.5;

                /**
                 * This method start the timeout progression for the current notification
                 */
                function startTimeout() {

                    currentInterval = $interval(function() {

                        currentNotificationController.currentTimeoutProgress += progressPercentageGap;

                        if(currentNotificationController.currentTimeoutProgress > 100) {

                            NotificationModel.splice(currentNotificationController.currentNotificationKey, 1);

                        }
                    }, intervalLimit, intervalIterationNumber);
                };

                startTimeout();

                /**
                 * Catch the click event on the current notification
                 * On click, cancel the timeout et remove the notification
                 */
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
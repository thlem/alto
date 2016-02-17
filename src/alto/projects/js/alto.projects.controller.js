(function() {
    'use strict';

    /**
     * Module      : alto.notifications
     * Controller  : ProjectsController
     * Description : This controller bind the notifications array to be displayed
     */
    angular.module('alto.projects').controller('ProjectsController', ProjectsController);

    /* @ngInject */
    function ProjectsController(ProjectsModel) {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/

        /* jshint validthis: true */
        var vm = this;

        // Bind to the NotificationModel Object Array
        vm.projects = ProjectsModel;

        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


         /*************************
         *     PUBLIC METHOD      *
         **************************/
         vm.isUserProjectListEmpty = isUserProjectListEmpty;

         function isUserProjectListEmpty() {
            var isEmpty = true;

            if(angular.isDefined(vm.projects.userProjects) && angular.isArray(vm.projects.userProjects)) {
                isEmpty = false;
            }

            return isEmpty;
         }

         /*************************
         *     PRIVATE METHOD     *
         **************************/


    }

})();
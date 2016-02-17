(function() {
    'use strict';

    /**
     * Module      : alto.projects
     * Directive  : projects
     * Description : directiveDescription
     */
    angular.module('alto.projects').directive('projects', projects);

    /* @ngInject */
    function projects($log) {
        
        var directive = {
            bindToController: true,
            controller: 'ProjectsController',
            controllerAs: 'projectsController',
            restrict: 'EA',
            replace: true,
            templateUrl: 'alto/projects/alto.projects.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
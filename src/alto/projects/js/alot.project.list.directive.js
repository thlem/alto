(function() {
    'use strict';

    /**
     * Module      : alto.projects
     * Directive  : projectList
     * Description : directiveDescription
     */
    angular.module('alto.projects').directive('projectList', projectList);

    /* @ngInject */
    function projectList($log) {
        
        var directive = {
            bindToController: true,
            controller: 'ProjectListController',
            controllerAs: 'projectListController',
            restrict: 'EA',
            templateUrl: 'alto/projects/alto.project.list.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
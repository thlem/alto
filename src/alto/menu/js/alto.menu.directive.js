(function() {
    'use strict';

    /**
     * Module      : alto.menu
     * Directive  : altoMenu
     * Description : directiveDescription
     */
    angular.module('alto.menu').directive('altoMenu', altoMenu);

    /* @ngInject */
    function altoMenu() {

        var directive = {
            bindToController: true,
            controller: 'AltoMenuController',
            controllerAs: 'altoMenuController',
            restrict: 'EA',
            replace: true,
            templateUrl: 'alto/menu/alto.menu.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
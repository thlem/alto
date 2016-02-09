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
            templateUrl: 'alto/menu/menu.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
(function() {
    'use strict';

    /**
     * Module      : alto.menu
     * Directive  : altoMenu
     * Description : directiveDescription
     */
    angular.module('alto.menu').controller('altoMenu', altoMenu);

    /* @ngInject */
    function altoMenu() {

        var directive = {
            bindToController: true,
            controller: 'AltoMenu',
            controllerAs: 'altoMenu',
            restrict: 'EA',
            templateUrl: 'alto/menu/menu.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
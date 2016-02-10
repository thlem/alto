(function() {
    'use strict';

    /**
     * Module      : alto.signin
     * Directive  : signIn
     * Description : directiveDescription
     */
    angular.module('alto.signin').directive('signIn', signIn);

    /* @ngInject */
    function signIn($log) {
        
        var directive = {
            bindToController: true,
            controller: 'SignInController',
            controllerAs: 'signInController',
            restrict: 'EA',
            templateUrl: 'alto/signin/signin.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
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
            replace: true,
            templateUrl: 'alto/authentication/signin/alto.signin.html',
            scope: {},
            link: function() {}
        };

        return directive;

    }

})();
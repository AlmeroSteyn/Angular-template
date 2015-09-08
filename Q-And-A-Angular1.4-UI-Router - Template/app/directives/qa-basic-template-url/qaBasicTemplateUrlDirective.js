(function () {
    'use strict';

    angular.module('appModule').directive('qaBasicTemplateUrl', qaBasicTemplateUrl);

    function qaBasicTemplateUrl() {
        return {
            restrict: 'E',
            templateUrl: 'directives/qa-basic-template-url/qa-basic-template-url-directive.html'
        };
    }

})();
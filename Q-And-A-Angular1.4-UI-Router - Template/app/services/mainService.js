(function () {
    'use strict';

    angular.module('appModule').factory('mainService', mainService);

    function mainService() {
        return {
            getValue: getValue
        };


        function getValue() {
            return 'someValue';
        }
    }
})();


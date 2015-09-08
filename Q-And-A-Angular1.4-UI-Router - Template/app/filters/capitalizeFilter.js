(function () {
    'use strict';

    angular.module('appModule').filter('capitalize', capitalizeFilter);


    function capitalizeFilter() {
        return capitalize;
    }

    function capitalize(input) {
        if (isNaN(input)) {
            return input.toUpperCase();
        }
        else {
            return input;
        }
    }
})();


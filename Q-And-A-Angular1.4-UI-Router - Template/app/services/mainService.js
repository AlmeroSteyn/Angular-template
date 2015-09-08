(function(){
    'use strict';

    angular.module('appModule').factory('mainService', mainService);

    mainService.$inject = ['staticDataService'];

    function mainService(staticDataService){
        return {
            getStaticArray: staticDataService.getStaticArray
        };

    }
})();


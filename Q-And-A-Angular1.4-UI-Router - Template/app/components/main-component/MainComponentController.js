(function(){
    'use strict';

    angular.module('appModule').controller('MainComponentController', mainComponentController);

    mainComponentController.$inject = ['mainService'];

    function mainComponentController(mainService){
        var vm = this;

        vm.someValue = mainService.getValue();
    }

})();

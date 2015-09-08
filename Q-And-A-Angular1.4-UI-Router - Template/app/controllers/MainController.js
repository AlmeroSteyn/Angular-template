(function () {
    'use strict';

    angular.module('appModule').controller('MainController', mainController);

    mainController.$inject = ['mainService'];

    function mainController(mainService) {

        var vm = this;

        vm.someValue = mainService.getValue();
        console.log(vm.someValue);

    }
})();





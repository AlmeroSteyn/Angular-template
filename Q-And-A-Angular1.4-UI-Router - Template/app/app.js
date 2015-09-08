(function () {
    'use strict';
    angular.module('appModule', ['ui.router', 'ngMessages', 'ui.bootstrap', 'ngAria', 'restangular'])
        .config(applicationConfig);

    applicationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function applicationConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('main-component', {
                url: '/home',
                templateUrl: 'components/main-component/main-component.html',
                controller: 'MenuController',
                controllerAs: 'main-component'
            });
    }

})();

require('./controllers/MainController.js');
require('./components/main-component/MainComponentController.js');
require('./filters/capitalizeFilter.js');
require('./services/mainService.js');
require('./directives/qa-basic-template-url/qaBasicTemplateUrlDirective.js');
require('../dist/views/appViews.js');

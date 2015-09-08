(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../dist/views/appViews.js":7,"./components/main-component/MainComponentController.js":2,"./controllers/MainController.js":3,"./directives/qa-basic-template-url/qaBasicTemplateUrlDirective.js":4,"./filters/capitalizeFilter.js":5,"./services/mainService.js":6}],2:[function(require,module,exports){
(function(){
    'use strict';

    angular.module('appModule').controller('MenuController', menuController);

    function menuController(){
    }

})();

},{}],3:[function(require,module,exports){
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





},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
(function(){
    'use strict';

    angular.module('appModule').filter('capitalize', capitalizeFilter);


    function capitalizeFilter(){
        return capitalize;
    }

    function capitalize(input, char) {
       if (isNaN(input)) {

            // If the input data is not a number, perform the operations to capitalize the correct letter.
            var char = char - 1 || 0;
            var letter = input.charAt(char).toUpperCase();
            var out = [];

            for (var i = 0; i < input.length; i++) {

                if (i == char) {
                    out.push(letter);
                } else {
                    out.push(input[i]);
                }

            }

            return out.join('');

        } else {
            return input;
        }
    }
})();


},{}],6:[function(require,module,exports){
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


},{}],7:[function(require,module,exports){
angular.module("appModule").run(["$templateCache", function($templateCache) {$templateCache.put("components/main-component/main-component.html","<div class=\"row\">\r\n    <div class=\"well col-xs-6\">\r\n        test\r\n    </div>\r\n     <div class=\"well col-xs-6\">\r\n        test\r\n    </div>\r\n</div>");
$templateCache.put("directives/qa-basic-template-url/qa-basic-template-url-directive.html","<div>\r\n    <span>I am a very basic component that fetches HTML from a file!</span>\r\n</div>");}]);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9jb21wb25lbnRzL21haW4tY29tcG9uZW50L01haW5Db21wb25lbnRDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIiwiYXBwL2RpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhQmFzaWNUZW1wbGF0ZVVybERpcmVjdGl2ZS5qcyIsImFwcC9maWx0ZXJzL2NhcGl0YWxpemVGaWx0ZXIuanMiLCJhcHAvc2VydmljZXMvbWFpblNlcnZpY2UuanMiLCJkaXN0L3ZpZXdzL2FwcFZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJywgWyd1aS5yb3V0ZXInLCAnbmdNZXNzYWdlcycsICd1aS5ib290c3RyYXAnLCAnbmdBcmlhJywgJ3Jlc3Rhbmd1bGFyJ10pXHJcbiAgICAgICAgLmNvbmZpZyhhcHBsaWNhdGlvbkNvbmZpZyk7XHJcblxyXG4gICAgYXBwbGljYXRpb25Db25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbGljYXRpb25Db25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcblxyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnbWFpbi1jb21wb25lbnQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWVudUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbi1jb21wb25lbnQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIuanMnKTtcclxucmVxdWlyZSgnLi9jb21wb25lbnRzL21haW4tY29tcG9uZW50L01haW5Db21wb25lbnRDb250cm9sbGVyLmpzJyk7XHJcbnJlcXVpcmUoJy4vZmlsdGVycy9jYXBpdGFsaXplRmlsdGVyLmpzJyk7XHJcbnJlcXVpcmUoJy4vc2VydmljZXMvbWFpblNlcnZpY2UuanMnKTtcclxucmVxdWlyZSgnLi9kaXJlY3RpdmVzL3FhLWJhc2ljLXRlbXBsYXRlLXVybC9xYUJhc2ljVGVtcGxhdGVVcmxEaXJlY3RpdmUuanMnKTtcclxucmVxdWlyZSgnLi4vZGlzdC92aWV3cy9hcHBWaWV3cy5qcycpO1xyXG4iLCIoZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuY29udHJvbGxlcignTWVudUNvbnRyb2xsZXInLCBtZW51Q29udHJvbGxlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoKXtcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgbWFpbkNvbnRyb2xsZXIpO1xyXG5cclxuICAgIG1haW5Db250cm9sbGVyLiRpbmplY3QgPSBbJ21haW5TZXJ2aWNlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbkNvbnRyb2xsZXIobWFpblNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0uc29tZVZhbHVlID0gbWFpblNlcnZpY2UuZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2bS5zb21lVmFsdWUpO1xyXG5cclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmRpcmVjdGl2ZSgncWFCYXNpY1RlbXBsYXRlVXJsJywgcWFCYXNpY1RlbXBsYXRlVXJsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBxYUJhc2ljVGVtcGxhdGVVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkaXJlY3RpdmVzL3FhLWJhc2ljLXRlbXBsYXRlLXVybC9xYS1iYXNpYy10ZW1wbGF0ZS11cmwtZGlyZWN0aXZlLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmZpbHRlcignY2FwaXRhbGl6ZScsIGNhcGl0YWxpemVGaWx0ZXIpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlsdGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZShpbnB1dCwgY2hhcikge1xyXG4gICAgICAgaWYgKGlzTmFOKGlucHV0KSkge1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRhdGEgaXMgbm90IGEgbnVtYmVyLCBwZXJmb3JtIHRoZSBvcGVyYXRpb25zIHRvIGNhcGl0YWxpemUgdGhlIGNvcnJlY3QgbGV0dGVyLlxyXG4gICAgICAgICAgICB2YXIgY2hhciA9IGNoYXIgLSAxIHx8IDA7XHJcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBpbnB1dC5jaGFyQXQoY2hhcikudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGNoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChsZXR0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChpbnB1dFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuZmFjdG9yeSgnbWFpblNlcnZpY2UnLCBtYWluU2VydmljZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpblNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NvbWVWYWx1ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBNb2R1bGVcIikucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKSB7JHRlbXBsYXRlQ2FjaGUucHV0KFwiY29tcG9uZW50cy9tYWluLWNvbXBvbmVudC9tYWluLWNvbXBvbmVudC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgIHRlc3RcXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgIHRlc3RcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiZGlyZWN0aXZlcy9xYS1iYXNpYy10ZW1wbGF0ZS11cmwvcWEtYmFzaWMtdGVtcGxhdGUtdXJsLWRpcmVjdGl2ZS5odG1sXCIsXCI8ZGl2PlxcclxcbiAgICA8c3Bhbj5JIGFtIGEgdmVyeSBiYXNpYyBjb21wb25lbnQgdGhhdCBmZXRjaGVzIEhUTUwgZnJvbSBhIGZpbGUhPC9zcGFuPlxcclxcbjwvZGl2PlwiKTt9XSk7Il19

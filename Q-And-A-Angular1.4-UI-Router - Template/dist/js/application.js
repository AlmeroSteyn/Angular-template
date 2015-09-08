(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('appModule', ['ui.router', 'ngMessages', 'ui.bootstrap', 'ngAria', 'restangular'])
        .config(applicationConfig);

    applicationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function applicationConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('mainComponent', {
                url: '/home',
                templateUrl: 'components/main-component/main-component.html',
                controller: 'MainComponentController',
                controllerAs: 'mainComponent'
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

    angular.module('appModule').controller('MainComponentController', mainComponentController);

    mainComponentController.$inject = ['mainService'];

    function mainComponentController(mainService){
        var vm = this;

        vm.someValue = mainService.getValue();
    }

})();

},{}],3:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('appModule').controller('MainController', mainController);

    function mainController(mainService) {

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
angular.module("appModule").run(["$templateCache", function($templateCache) {$templateCache.put("components/main-component/main-component.html","<div class=\"row\">\r\n    <div class=\"well col-xs-4\">\r\n        {{mainComponent.someValue}}\r\n    </div>\r\n     <div class=\"well col-xs-4\">\r\n        <qa-basic-template-url></qa-basic-template-url>\r\n    </div>\r\n    <div class=\"well col-xs-4\">\r\n        {{\'test\'| capitalize}}\r\n    </div>\r\n</div>");
$templateCache.put("directives/qa-basic-template-url/qa-basic-template-url-directive.html","<div>\r\n    <span>I am a very basic component that fetches HTML from a file!</span>\r\n</div>");}]);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9jb21wb25lbnRzL21haW4tY29tcG9uZW50L01haW5Db21wb25lbnRDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIiwiYXBwL2RpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhQmFzaWNUZW1wbGF0ZVVybERpcmVjdGl2ZS5qcyIsImFwcC9maWx0ZXJzL2NhcGl0YWxpemVGaWx0ZXIuanMiLCJhcHAvc2VydmljZXMvbWFpblNlcnZpY2UuanMiLCJkaXN0L3ZpZXdzL2FwcFZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScsIFsndWkucm91dGVyJywgJ25nTWVzc2FnZXMnLCAndWkuYm9vdHN0cmFwJywgJ25nQXJpYScsICdyZXN0YW5ndWxhciddKVxyXG4gICAgICAgIC5jb25maWcoYXBwbGljYXRpb25Db25maWcpO1xyXG5cclxuICAgIGFwcGxpY2F0aW9uQ29uZmlnLiRpbmplY3QgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlciddO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGxpY2F0aW9uQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG5cclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ21haW5Db21wb25lbnQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaG9tZScsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbXBvbmVudENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbkNvbXBvbmVudCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxucmVxdWlyZSgnLi9jb250cm9sbGVycy9NYWluQ29udHJvbGxlci5qcycpO1xyXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvbWFpbi1jb21wb25lbnQvTWFpbkNvbXBvbmVudENvbnRyb2xsZXIuanMnKTtcclxucmVxdWlyZSgnLi9maWx0ZXJzL2NhcGl0YWxpemVGaWx0ZXIuanMnKTtcclxucmVxdWlyZSgnLi9zZXJ2aWNlcy9tYWluU2VydmljZS5qcycpO1xyXG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhQmFzaWNUZW1wbGF0ZVVybERpcmVjdGl2ZS5qcycpO1xyXG5yZXF1aXJlKCcuLi9kaXN0L3ZpZXdzL2FwcFZpZXdzLmpzJyk7XHJcbiIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5jb250cm9sbGVyKCdNYWluQ29tcG9uZW50Q29udHJvbGxlcicsIG1haW5Db21wb25lbnRDb250cm9sbGVyKTtcclxuXHJcbiAgICBtYWluQ29tcG9uZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWydtYWluU2VydmljZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW5Db21wb25lbnRDb250cm9sbGVyKG1haW5TZXJ2aWNlKXtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2bS5zb21lVmFsdWUgPSBtYWluU2VydmljZS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBtYWluQ29udHJvbGxlcik7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbkNvbnRyb2xsZXIobWFpblNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJykuZGlyZWN0aXZlKCdxYUJhc2ljVGVtcGxhdGVVcmwnLCBxYUJhc2ljVGVtcGxhdGVVcmwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHFhQmFzaWNUZW1wbGF0ZVVybCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2RpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhLWJhc2ljLXRlbXBsYXRlLXVybC1kaXJlY3RpdmUuaHRtbCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5maWx0ZXIoJ2NhcGl0YWxpemUnLCBjYXBpdGFsaXplRmlsdGVyKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpbHRlcigpIHtcclxuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKGlucHV0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5mYWN0b3J5KCdtYWluU2VydmljZScsIG1haW5TZXJ2aWNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluU2VydmljZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRWYWx1ZTogZ2V0VmFsdWVcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnc29tZVZhbHVlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcE1vZHVsZVwiKS5ydW4oW1wiJHRlbXBsYXRlQ2FjaGVcIiwgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoXCJjb21wb25lbnRzL21haW4tY29tcG9uZW50L21haW4tY29tcG9uZW50Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIndlbGwgY29sLXhzLTRcXFwiPlxcclxcbiAgICAgICAge3ttYWluQ29tcG9uZW50LnNvbWVWYWx1ZX19XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICAgPGRpdiBjbGFzcz1cXFwid2VsbCBjb2wteHMtNFxcXCI+XFxyXFxuICAgICAgICA8cWEtYmFzaWMtdGVtcGxhdGUtdXJsPjwvcWEtYmFzaWMtdGVtcGxhdGUtdXJsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwid2VsbCBjb2wteHMtNFxcXCI+XFxyXFxuICAgICAgICB7e1xcJ3Rlc3RcXCd8IGNhcGl0YWxpemV9fVxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJkaXJlY3RpdmVzL3FhLWJhc2ljLXRlbXBsYXRlLXVybC9xYS1iYXNpYy10ZW1wbGF0ZS11cmwtZGlyZWN0aXZlLmh0bWxcIixcIjxkaXY+XFxyXFxuICAgIDxzcGFuPkkgYW0gYSB2ZXJ5IGJhc2ljIGNvbXBvbmVudCB0aGF0IGZldGNoZXMgSFRNTCBmcm9tIGEgZmlsZSE8L3NwYW4+XFxyXFxuPC9kaXY+XCIpO31dKTsiXX0=

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
angular.module("appModule").run(["$templateCache", function($templateCache) {$templateCache.put("components/main-component/main-component.html","<div class=\"row\">\r\n    <div class=\"well col-xs-6\">\r\n        {{mainComponent.someValue}}\r\n    </div>\r\n     <div class=\"well col-xs-6\">\r\n        <qa-basic-template-url></qa-basic-template-url>\r\n    </div>\r\n</div>");
$templateCache.put("directives/qa-basic-template-url/qa-basic-template-url-directive.html","<div>\r\n    <span>I am a very basic component that fetches HTML from a file!</span>\r\n</div>");}]);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9jb21wb25lbnRzL21haW4tY29tcG9uZW50L01haW5Db21wb25lbnRDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzIiwiYXBwL2RpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhQmFzaWNUZW1wbGF0ZVVybERpcmVjdGl2ZS5qcyIsImFwcC9maWx0ZXJzL2NhcGl0YWxpemVGaWx0ZXIuanMiLCJhcHAvc2VydmljZXMvbWFpblNlcnZpY2UuanMiLCJkaXN0L3ZpZXdzL2FwcFZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwTW9kdWxlJywgWyd1aS5yb3V0ZXInLCAnbmdNZXNzYWdlcycsICd1aS5ib290c3RyYXAnLCAnbmdBcmlhJywgJ3Jlc3Rhbmd1bGFyJ10pXHJcbiAgICAgICAgLmNvbmZpZyhhcHBsaWNhdGlvbkNvbmZpZyk7XHJcblxyXG4gICAgYXBwbGljYXRpb25Db25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbGljYXRpb25Db25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG5cclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcblxyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnbWFpbkNvbXBvbmVudCcsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9tYWluLWNvbXBvbmVudC9tYWluLWNvbXBvbmVudC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29tcG9uZW50Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluQ29tcG9uZW50J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL01haW5Db250cm9sbGVyLmpzJyk7XHJcbnJlcXVpcmUoJy4vY29tcG9uZW50cy9tYWluLWNvbXBvbmVudC9NYWluQ29tcG9uZW50Q29udHJvbGxlci5qcycpO1xyXG5yZXF1aXJlKCcuL2ZpbHRlcnMvY2FwaXRhbGl6ZUZpbHRlci5qcycpO1xyXG5yZXF1aXJlKCcuL3NlcnZpY2VzL21haW5TZXJ2aWNlLmpzJyk7XHJcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9xYS1iYXNpYy10ZW1wbGF0ZS11cmwvcWFCYXNpY1RlbXBsYXRlVXJsRGlyZWN0aXZlLmpzJyk7XHJcbnJlcXVpcmUoJy4uL2Rpc3Qvdmlld3MvYXBwVmlld3MuanMnKTtcclxuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmNvbnRyb2xsZXIoJ01haW5Db21wb25lbnRDb250cm9sbGVyJywgbWFpbkNvbXBvbmVudENvbnRyb2xsZXIpO1xyXG5cclxuICAgIG1haW5Db21wb25lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJ21haW5TZXJ2aWNlJ107XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbkNvbXBvbmVudENvbnRyb2xsZXIobWFpblNlcnZpY2Upe1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLnNvbWVWYWx1ZSA9IG1haW5TZXJ2aWNlLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIG1haW5Db250cm9sbGVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluQ29udHJvbGxlcihtYWluU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5kaXJlY3RpdmUoJ3FhQmFzaWNUZW1wbGF0ZVVybCcsIHFhQmFzaWNUZW1wbGF0ZVVybCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcWFCYXNpY1RlbXBsYXRlVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnZGlyZWN0aXZlcy9xYS1iYXNpYy10ZW1wbGF0ZS11cmwvcWEtYmFzaWMtdGVtcGxhdGUtdXJsLWRpcmVjdGl2ZS5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbigpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHBNb2R1bGUnKS5maWx0ZXIoJ2NhcGl0YWxpemUnLCBjYXBpdGFsaXplRmlsdGVyKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpbHRlcigpe1xyXG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhcGl0YWxpemUoaW5wdXQsIGNoYXIpIHtcclxuICAgICAgIGlmIChpc05hTihpbnB1dCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIG5vdCBhIG51bWJlciwgcGVyZm9ybSB0aGUgb3BlcmF0aW9ucyB0byBjYXBpdGFsaXplIHRoZSBjb3JyZWN0IGxldHRlci5cclxuICAgICAgICAgICAgdmFyIGNoYXIgPSBjaGFyIC0gMSB8fCAwO1xyXG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gaW5wdXQuY2hhckF0KGNoYXIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciBvdXQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobGV0dGVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goaW5wdXRbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG91dC5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuXHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcE1vZHVsZScpLmZhY3RvcnkoJ21haW5TZXJ2aWNlJywgbWFpblNlcnZpY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW5TZXJ2aWNlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdzb21lVmFsdWUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkoKTtcclxuXHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwTW9kdWxlXCIpLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImNvbXBvbmVudHMvbWFpbi1jb21wb25lbnQvbWFpbi1jb21wb25lbnQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwid2VsbCBjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICB7e21haW5Db21wb25lbnQuc29tZVZhbHVlfX1cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIGNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgIDxxYS1iYXNpYy10ZW1wbGF0ZS11cmw+PC9xYS1iYXNpYy10ZW1wbGF0ZS11cmw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImRpcmVjdGl2ZXMvcWEtYmFzaWMtdGVtcGxhdGUtdXJsL3FhLWJhc2ljLXRlbXBsYXRlLXVybC1kaXJlY3RpdmUuaHRtbFwiLFwiPGRpdj5cXHJcXG4gICAgPHNwYW4+SSBhbSBhIHZlcnkgYmFzaWMgY29tcG9uZW50IHRoYXQgZmV0Y2hlcyBIVE1MIGZyb20gYSBmaWxlITwvc3Bhbj5cXHJcXG48L2Rpdj5cIik7fV0pOyJdfQ==

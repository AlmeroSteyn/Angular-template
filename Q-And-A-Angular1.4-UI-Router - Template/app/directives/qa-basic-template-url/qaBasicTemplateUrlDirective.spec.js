'use strict';

describe('qaBasicTemplateUrlDirective', function () {

    var element, scope, $rootScope;

    beforeEach(module('appModule'));

    beforeEach(inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();

        })
    );

    function compileDirective(tpl) {
        tpl = '<div>' + tpl + '</div>';

        inject(function ($compile) {
            var div = $compile(tpl)(scope);
            element = angular.element(div);
            scope.$digest();

        });
    }

    beforeEach(function () {
        var template = ' <qa-basic-template-url></qa-basic-template-url>';
        compileDirective(template);
    });

    it('should have the right fields', function () {
        expect(element.find('span')[0].innerHTML).toBe('I am a very basic component that fetches HTML from a file!');
    });

});

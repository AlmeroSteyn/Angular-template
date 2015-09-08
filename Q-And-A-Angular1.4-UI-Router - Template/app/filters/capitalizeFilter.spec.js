'use strict';

describe('capitalizeFilterTests', function () {
    var $filter;

    beforeEach(angular.mock.module('appModule'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should capitalize the first letter when the index is not defined', function () {
        var result = $filter('capitalize')('test');
        expect(result).toBe('Test');
    });

    it('should not capitalize any letter when the index is 0', function () {
        var result = $filter('capitalize')('test', 0);
        expect(result).toBe('test');
    });

    it('should capitalize the second letter', function () {
        var result = $filter('capitalize')('test', 2);
        expect(result).toBe('tEst');
    });

    it('should return the original value when the input is not a text', function () {
        var result = $filter('capitalize')(2, 0);
        expect(result).toBe(2);
    });
});


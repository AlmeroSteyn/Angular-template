'use strict';

describe('capitalizeFilterTests', function () {
    var $filter;

    beforeEach(angular.mock.module('appModule'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

    it('should capitalize the first letter when the index is not defined', function () {
        var result = $filter('capitalize')('test');
        expect(result).toBe('TEST');
    });

});


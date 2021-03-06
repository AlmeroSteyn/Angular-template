'use strict';

describe("mainService", function () {

    var mainService, mockStaticDataService;

    beforeEach(angular.mock.module('appModule', function ($provide) {
        mockStaticDataService = {
            getStaticArray: function () {
            }
        };

        $provide.value('staticDataService', mockStaticDataService);
    }));

    beforeEach(inject(function ($injector) {
        mainService = $injector.get('mainService');
    }));

    it('is expected for service to be defined', function () {
        expect(mainService).toBeDefined();
    });

    it('should return the hardcoded value', function () {
        expect(mainService.getValue()).toBe('someValue');
    });

});


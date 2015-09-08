describe('appModule', function () {
    var mockStateProvider, mockurlRouterProvider, mockThemingProvider, themeObject;

    beforeEach(function () {

        module('ui.router', function ($stateProvider, $urlRouterProvider) {

            mockStateProvider = $stateProvider;
            mockurlRouterProvider = $urlRouterProvider;

            spyOn(mockStateProvider, 'state').and.callThrough();
            spyOn(mockurlRouterProvider, 'otherwise').and.callThrough();

        });

        module('appModule');
    });

    beforeEach(function () {
        inject();
    });

    it('should set the correct routes', function () {

        expect(mockStateProvider.state).toHaveBeenCalledWith('main-component', {
            url: '/home',
            templateUrl: 'components/main-component/main-component.html',
            controller: 'MenuController',
            controllerAs:'main-component',
            name: 'main-component'
        });

    });

    it('should set the default route', function(){
        expect(mockurlRouterProvider.otherwise).toHaveBeenCalledWith('/home');
    });


});

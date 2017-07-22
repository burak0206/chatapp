describe("LoginController", function() {

    beforeEach(module('ngCookies','chatApp'));
    var $controller;
    var $scope;
    var cookies;
    var window;
    var login_controller;

    beforeEach(inject(function (_$controller_,_$rootScope_, $cookies,$injector,$window) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        cookies = $cookies;
        window = $window;

        var LoginServiceErrorMock = {};
        LoginServiceErrorMock.login = function () {
            return "success";
        };

        login_controller =
            $controller('LoginController',
                {$scope: $scope,$injector: $injector,$cookies: $cookies,$window: $window,  LoginService: LoginServiceErrorMock});

    }));


    it("should initialize in controller", function() {
        spyOn(cookies, "get").and.returnValue(undefined);
        login_controller.init();
        expect(window.location.href).toContain("specrunner")
    });

    /*it("should login", function() {
        login_controller.login();
        expect(login_controller.name).toBe("success");
    });*/
});
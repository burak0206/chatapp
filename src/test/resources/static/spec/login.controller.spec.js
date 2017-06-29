describe("LoginController", function() {

    beforeEach(module('ChatApp'));

    var $controller;
    var login_controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;

        var LoginServiceErrorMock = {};


        login_controller =
            $controller('LoginController',
                {LoginService: LoginServiceErrorMock});

    }));


    it("should initialize in controller", function() {
        login_controller.init();
        expect(login_controller.name).toBe("");
    });
});

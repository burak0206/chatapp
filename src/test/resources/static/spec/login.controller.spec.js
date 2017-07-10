describe("LoginController", function() {

    beforeEach(module('ChatApp'));
    var $controller;
    var login_controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;


        var LoginServiceErrorMock = {};
        LoginServiceErrorMock.login = function () {
            return "success";
        };

        login_controller =
            $controller('LoginController',
                {LoginService: LoginServiceErrorMock});

    }));


    it("should initialize in controller", function() {
        login_controller.init();
        expect(login_controller.name).toBe("");
    });

    it("should login", function() {
        login_controller.login();
        expect(login_controller.name).toBe("success");
    });
});

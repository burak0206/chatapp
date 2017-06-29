describe("ChatController", function() {

    beforeEach(module('ChatApp'));

    var $controller;
    var chat_controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;

        var ChatServiceErrorMock = {};


        chat_controller =
            $controller('LoginController',
                {ChatService: ChatServiceErrorMock});

    }));


    it("should initialize in controller", function() {
        chat_controller.clear();
        expect(chat_controller.messages).toBe([]);
    });
});

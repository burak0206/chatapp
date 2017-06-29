/**
 * Created by burakdagli on 29.06.2017.
 */
describe("App", function() {

    beforeEach(module('chatApp'));

    var $controller;
    beforeEach(inject(function($injector) {
        $controller = $injector.get('$controller');
    }));

    it("loads a controller", function() {
        var controller = $controller('home')
    });

});
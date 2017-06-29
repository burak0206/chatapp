/**
 * Created by burakdagli on 27.06.2017.
 */
(function () {
        'use strict';
        angular
            .module('chatApp',['ngCookies'])
            .controller('LoginController', LoginController)
            .service('LoginService', LoginService);

        LoginController.$inject = ['$scope','$injector','$cookies','$window','LoginService'];

        function LoginController($scope,$injector,$cookies,$window,LoginService) {
            var login_controller = this;
            login_controller.name = "";


            login_controller.init = function () {
                if ($cookies.get("username")) {
                    $window.location = "/chat"
                }
            }

            login_controller.login = function() {
                var promise = LoginService.login(login_controller.name);
                $window.location = "/chat"
            };
            console.log($injector.annotate(LoginController));
        }

        LoginService.$inject = ['$q','$http','$timeout','$cookies'];

        function LoginService($q,$http,$timeout,$cookies) {
            var service = this;
            service.login =  function (name) {
                console.log("login service");
                $cookies.put('username',name);
                var response = {
                    data: "success"
                };
                return response;
            }
        }
    }
)();
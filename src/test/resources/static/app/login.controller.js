/**
 * Created by burakdagli on 27.06.2017.
 */
(function () {
        'use strict';
        angular
            .module('ChatApp',['ngCookies'])
            .controller('LoginController', LoginController)
            .service('LoginService', LoginService);

        LoginController.$inject = ['LoginService'];

        function LoginController(LoginService) {
            var login_controller = this;
            login_controller.name = "";


            login_controller.init = function () {
               /* if ($cookies.get("id")) {
                    $window.location = "/chat"
                }
*/            }

            login_controller.login = function() {
                login_controller.name = LoginService.login(login_controller.name);
            };

        }

        LoginService.$inject = ['$q','$http','$timeout','$cookies'];

        function LoginService($q,$http,$timeout,$cookies) {
            var service = this;

            service.login =  function (name) {
                var url = "/user";
                var dataObj = {
                    username : name,
                };

                var response = $http({
                    method: "GET",
                    url: url,
                    params: dataObj
                });

                return response;
            }


        }
    }
)();
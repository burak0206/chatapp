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
                if ($cookies.get("id")) {
                    $window.location = "/chat"
                }
            }

            login_controller.login = function() {
                var promise = LoginService.login(login_controller.name);

                promise.then(function (response) {
                    console.log(response.data);
                    $cookies.put('username',response.data.name);
                    $cookies.put('id',response.data.id);
                    $window.location = "/chat"

                }).catch(function (error) {
                    console.log(error);
                })
            };
            console.log($injector.annotate(LoginController));
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
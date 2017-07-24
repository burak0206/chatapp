/**
 * Created by burakdagli on 27.06.2017.
 */
(function () {
        'use strict';
        angular
            .module('chatApp',['ngCookies'])
            .controller('ChatController', ChatController)
            .service('ChatService', ChatService)

        ChatController.$inject = ['$scope','$injector','$cookies','$window','ChatService'];

        function ChatController($scope,$injector,$cookies,$window,ChatService) {
            var chat_controller = this;
            chat_controller.message = "";
            chat_controller.messages = [];

            chat_controller.init =  function(){
                if ($cookies.get("id")) {
                    console.log("User logged");
                } else {
                    console.log("User is not logged");
                    $window.location = "/"
                }
            }

            chat_controller.logout = function () {
                $cookies.remove('username');
                $cookies.remove('id');
                $window.location = "/"
            }

            chat_controller.addMessage = function() {
                ChatService.send(chat_controller.message);
                chat_controller.message = "";
            };

            chat_controller.clear =  function () {
                chat_controller.messages = [];
            }

            ChatService.receive().then(null, null, function(message) {
                console.log("ChatService.receive");
                console.log("log: "+JSON.parse(message).text);
                if(JSON.parse(message).id==$cookies.get('id')){
                    var msg = {
                        author: 'you',
                        text: JSON.parse(message).text

                    };
                    chat_controller.messages.push(msg);
                }else {
                    var msg = {
                        author: JSON.parse(message).author,
                        text: JSON.parse(message).text

                    };
                    chat_controller.messages.push(msg);
                }
            });

            chat_controller.set_color = function (message) {
                if (message=='you') {
                    return { color: "green" }
                } else {
                    return { color: "red" }
                }
            }
            console.log($injector.annotate(ChatController));
        }

        ChatService.$inject = ['$q','$http','$timeout','$cookies'];

        function ChatService($q,$http,$timeout,$cookies) {
            var service = this;
            var listener = $q.defer();

            service.socket =  null;
            service.stomp= null;

            service.socket = new SockJS('/chat-demo');
            service.stomp = Stomp.over(service.socket);
            service.stomp.connect({}, function (frame) {
                console.log('Connected: ' + frame);
                service.stomp.subscribe('/topic/newMessage', function (data) {
                    console.log("listener.notify trigger");
                    listener.notify(service.getMessage(data.body));
                });
            });

            service.getMessage = function (data) {
                console.log("service.getMessage");
                return data;
            };

            service.send =  function (message) {
                service.stomp.send("/app/hello", {}, JSON.stringify({ 'text': message, 'author': $cookies.get('username'), 'id': $cookies.get('id') }));

            }

            service.receive = function() {
                console.log("listener.promise trigger");
                return listener.promise;
            };
        }
    }
)();
/**
 * Created by burakdagli on 29.06.2017.
 */

angular.module('hello', []).controller('home', function($scope, $http) {
    $http.get('resource/').success(function(data) {
        $scope.greeting = data;
    })
});
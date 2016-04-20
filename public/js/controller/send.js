angular.module('myApp').controller('sendController', ['$scope','userToken','$http', function($scope, userToken,$http){

    

    $scope.registration = function(){
        $http.post('/registration/user', {"data":$scope.regUser}).then(function(resp){
            $scope.goToLogin();
        })
    }
}]);

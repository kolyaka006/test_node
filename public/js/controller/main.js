angular.module('myApp').controller('mainController' ['$scope', 'mainService', function($scope,mainService){

    $scope.page = mainService.page;

    $http.post('/signIn').success(function(resp){
        $scope.goToEvents();
    });

    $scope.login = function(loginUser){
        $http.post('/login', {"data":loginUser}).then(function(token){
            if(token) {
                userToken.login(token.data.token);
                localStorage.setItem("token",token.data.token);
                $scope.goToEvents();
            }
        })
    };

    $scope.Registration = function() {
        $scope.page = mainService.goToRegistration;
    }

}]);





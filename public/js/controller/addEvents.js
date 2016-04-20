angular.module('myApp').controller('addEventController', ['$scope','userToken','$http', function($scope, userToken,$http){
    $('.input-date').datepicker({
        dateFormat: "dd-mm-yy"
    });
    
    $scope.people = [];
    $scope.event = {
        shared: []
    };

    $http.get('/events/getAllUser').then(function(resp){
        $scope.people = resp.data.users;
    });

    $scope.sendEvent = function(event){
        $http.post('/events/add/',{'event':event}).then(function(){
            $scope.goToEvents();
        })
    };
}]);
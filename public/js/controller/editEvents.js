angular.module('myApp').controller('editEventController', ['$scope','userToken','$http', function($scope, userToken,$http){
    $('.input-date').datepicker({
        dateFormat: "dd-mm-yy"
    });

    $scope.editEvent = function(event){
        $http.post('/events/refresh/'+$scope.id,{'event':event}).then(function(resp){
            $scope.goToEvents();
        })
    }
}]);
angular.module('myApp').service('userToken',['$http', function($http){
    if ((localStorage.key("token")))
        $http.defaults.headers.common['x-access-token'] = localStorage.getItem(localStorage.key("token"));
    return {
        login: function(tk){
            $http.defaults.headers.common['x-access-token'] = tk;
        },
        logout: function(){
            delete $http.defaults.headers.common['x-access-token'];
        }

    }
}]);
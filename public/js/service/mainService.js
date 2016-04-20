angular.module('myApp').service('mainService',['$http', function($http){
    return {
        page: '/public/js/views/login/login.html',
        goToRegistration:  '/public/js/views/auth/registration.html',
        goToLogin:  '/public/js/views/login/login.html',
        goToEvents:   '/public/js/views/events/listEvent.html',
        addEvent:  {
            page : '/public/js/views/events/addEvent.html',
            buttonEvent : "Add event"
        },
        editEvent:  {
            page : '/public/js/views/events/editEvent.html',
            buttonEvent : "Edit event",
            id : id
        }
    }
}]);
angular.module('app', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        when('/', {
            templateUrl: 'partials/a.jade'
        })
        when('/login', {
            templateUrl: 'partials/a.jade'
            // templateUrl: 'views/login.jade'
        });
        when('/profile', {
            templateUrl: 'partials/a.jade'
            // templateUrl: 'views/profile.jade'
        });
        otherwise('/logout', {
            redirectTo: "/"
        });

}]);
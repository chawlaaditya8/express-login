angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/index.jade'
        })
        .when('/login', {
            templateUrl: 'views/login.jade'
        });
        .when('/profile', {
            templateUrl: 'views/profile.jade'
        });
        .when('/logout', {
            redirectTo: "/"
        });

}]);
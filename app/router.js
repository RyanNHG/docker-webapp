module.exports = ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

    $routeProvider.
        when('/', {
            template: 'Welcome to AngularJS!'
        })
        .when('/oops', {
            template: 'Oops!'
        })
        .otherwise({
            redirectTo: '/oops'
        });

    $locationProvider.html5Mode(true);
    
}];
module.exports = ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

    var titlePrefix = 'RyanNHG | ';

    $routeProvider.
        when('/', {
            title: 'Home',
            template: '<home-page-cmpt></home-page-cmpt>'
        })
        .when('/oops', {
            title: 'Oops',
            template: 'Oops!'
        })
        .otherwise({
            redirectTo: '/oops'
        });

    $locationProvider.html5Mode(true);
    
}];
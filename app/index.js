angular.module(module.exports = 'app', [
    require('pages'),
    require('shared/api-srvc'),
    require('angular-route')
])
    .config(require('./router'))
    .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = 'RyanNHG | ' + current.$$route.title;
    })}])
;
angular.module(module.exports = 'homePageCmpt', [
    require('shared/navbar-cmpt')
])
    .component(module.exports, {
        template: require('./tpl.html'),
        controller: require('./ctrl')
    });
(function() {
    'use strict';

    angular
    .module('test', [
        'ui.router',
        'test.nav',
        'test.main',
        'test.phones',
        'test.writeUs'
    ])
    .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function Config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/main');
                $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    };

})();
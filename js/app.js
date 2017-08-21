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

        $stateProvider
            .state('root', {
            	abstract: true,
            	views: {
            		'@': {
            			templateUrl: '../views/root.html'
            		},
            		'navbar@root': {
            			template: '<navigation></navigation>'
            		}
            	}
            })

        
          $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    };

})();
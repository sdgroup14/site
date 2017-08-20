(function() {
    'use strict';

    angular
        .module('test.phones', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', config])
        .controller('PhonesCtrl', PhonesCtrl);

    PhonesCtrl.$inject = ['$scope'];

    function PhonesCtrl($scope) {
        $scope.items = [{
                name: 'Nokia',
                url: 'phones.nokia'
            },
            {
                name: 'HTC',
                url: 'phones.htc'
            },
            {
                name: 'Apple',
                url: 'phones.apple'
            }
        ];
    };


    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('/phones', '/phones/nokia');
      $urlRouterProvider.when('phones', '/phones/nokia');
      $urlRouterProvider.otherwise("/phones");
        $stateProvider
            .state('phones', {
                url: '/phones',
                templateUrl: '../views/pages/phones/phones.html',
                abstract: true,
                controller: PhonesCtrl
            })
            .state('phones.nokia', {
                url: '/nokia',
                templateUrl: '../views/pages/phones/phones.nokia.html',
            })
            .state('phones.htc', {
                url: '/htc',
                templateUrl: '../views/pages/phones/phones.htc.html',
            })
            .state('phones.apple', {
                url: '/apple',
                templateUrl: '../views/pages/phones/phones.apple.html',
            });
    };
})();
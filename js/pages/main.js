(function() {
    'use strict';

    angular
        .module('test.main', ['ui.router'])
        .config(['$stateProvider', config])
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$rootScope'];

    function MainCtrl($scope, $rootScope) {
        $rootScope.pageTitle = 'Test - Main';
    };

    function config($stateProvider) {
        $stateProvider
            .state('root.main', {
                url: '/main',
                templateUrl: '../views/pages/main.html',
                controller: MainCtrl
            })

    };
})();
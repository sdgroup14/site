(function() {
    'use strict';

    angular
        .module('test.writeUs', ['ui.router'])
        .config(['$stateProvider', config])
        .controller('WriteUsCtrl', WriteUsCtrl);

    WriteUsCtrl.$inject = ['$scope', '$rootScope'];

    function WriteUsCtrl($scope, $rootScope) {
        $rootScope.pageTitle = 'Test - Write us';
        $scope.submitForm = function() {
            console.log(JSON.stringify($scope.form));
            $scope.form = {
                userName: null,
                userText: null
            };
        }
    };

    function config($stateProvider) {
        $stateProvider
            .state('root.write_us', {
                url: '/write_us',
                templateUrl: '../views/pages/write_us.html'
            })

    };
})();
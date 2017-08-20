(function() {
    'use strict';

    angular
        .module('test.writeUs', ['ui.router'])
        .config(['$stateProvider', config])
        .controller('WriteUsCtrl', WriteUsCtrl);

    WriteUsCtrl.$inject = ['$scope'];

    function WriteUsCtrl($scope) {
        $scope.submitForm = function() {
            console.log(JSON.stringify($scope.form));
            $scope.form = {
                name: null,
                text: null
            };
        }
    };

    function config($stateProvider) {
        $stateProvider
            .state('write_us', {
                url: '/write_us',
                templateUrl: '../views/pages/write_us.html'
            })

    };
})();
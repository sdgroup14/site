(function() {
    'use strict';

    angular
        .module('test.nav', [])
        .config([config])
        .controller('NavCtrl', NavCtrl)
        .directive('navigation', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/navigation.html',
        replace: true,
        controller: NavCtrl
    }
});

    NavCtrl.$inject = ['$scope'];

    function NavCtrl($scope) {

            $scope.items = [
        "Main",
        "Phones",
        "About"
    ]

    };
    


    function config() {
    };
})();
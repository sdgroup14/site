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
        var ctrl_this = this;
        ctrl_this.nav_items = [{
                name: 'Main',
                url: 'root.main'
            },
            {
                name: 'Phones',
                url: 'root.phones'
            },
            {
                name: 'Write us',
                url: 'root.write_us'
            }
        ];
    };



    function config() {};
})();
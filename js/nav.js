(function() {
  'use strict';

  angular
    .module('test.nav', [])
    .config([config])
    .controller('NavCtrl', NavCtrl)
    .directive('navigation', function() {
      return {
        restrict: 'E',
        templateUrl: '/views/navigation.html',
        replace: true,
        controller: NavCtrl
      }
    });

  NavCtrl.$inject = ['$scope', '$location'];

  function NavCtrl($scope, $location) {
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
        name: 'feedback',
        url: 'root.feedback'
      }
    ];
  };

  function config() {};
})();
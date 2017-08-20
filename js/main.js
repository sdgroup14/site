(function() {
  'use strict';

  angular
    .module('test.main', ['ui.router'])
    .config(['$stateProvider', config])
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope'];

  function MainCtrl($scope) {

  };

  function config($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '../views/pages/main.html'
        })

  };
})();
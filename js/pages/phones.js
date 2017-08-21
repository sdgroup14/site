(function() {
  'use strict';

  angular
    .module('test.phones', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', config])
    .controller('PhonesCtrl', PhonesCtrl);

  PhonesCtrl.$inject = ['$scope', '$rootScope', '$http'];

  function PhonesCtrl($scope, $rootScope, $http) {
    $rootScope.pageTitle = 'Test - Phones';

    $scope.items = [{
        name: 'Nokia',
        url: 'nokia'
      },
      {
        name: 'HTC',
        url: 'htc'
      },
      {
        name: 'Apple',
        url: 'apple'
      }
    ];

    $http({
      method: 'get',
      url: '../json/phones.json'
    }).then(function(response) {
      var nokia = response.data.nokia;
      var htc = response.data.htc;
      var apple = response.data.apple;
      $scope.nokiaData = nokia;
      $scope.htcData = htc;
      $scope.appleData = apple;
    }, function(error) {
      console.log(error);
    });

  };

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('root.phones', {
        url: '/phones',
        templateUrl: '../views/pages/phones/phones.html',
        controller: PhonesCtrl
      })
      .state('nokia', {
        url: '/nokia',
        parent: 'root.phones',
        templateUrl: '../views/pages/phones/phones.nokia.html',
        authenticate: true
      })
      .state('htc', {
        url: '/htc',
        parent: 'root.phones',
        templateUrl: '../views/pages/phones/phones.htc.html'
      })
      .state('apple', {
        url: '/apple',
        parent: 'root.phones',
        templateUrl: '../views/pages/phones/phones.apple.html'
      })
  };

})();
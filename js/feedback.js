(function() {
    'use strict';

    angular
        .module('test.feedback', ['ui.router'])
        .config(['$stateProvider', config])
        .controller('FeedbackCtrl', FeedbackCtrl);

    FeedbackCtrl.$inject = ['$scope', '$rootScope'];

    function FeedbackCtrl($scope, $rootScope) {
        $rootScope.pageTitle = 'Test - Feedback';
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
            .state('root.feedback', {
                url: '/feedback',
                templateUrl: '../views/pages/feedback.html'
            })

    };
})();
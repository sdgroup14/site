// var states = ['AboutCtrl', 'CapabilitiesCtrl', 'ClientsCtrl', 'ContactsCtrl', 'PartnersCtrl', 'WorksCtrl'];
(function() {
    'use strict';

    angular
    .module('test', [
        'ui.router',
        'test.nav'
    ])
    .config(Config);

    Config.$inject = [];

    function Config() {


    };

})();
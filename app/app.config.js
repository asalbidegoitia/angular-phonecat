'use strict';

angular.
module('phonecatApp').
config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    when('/comparador', {
      template: '<phone-comparador></phone-comparador>'
    }).
    when('/cesta', {
      template: '<phone-cesta></phone-cesta>'
    }).
    when('/nuevo/', {
      template: '<phone-formulario></phone-formulario>'
    }).
    when('/editar/:phoneId', {
      template: '<phone-formulario></phone-formulario>'
    }).
    when('/404', {
      templateUrl: 'error.html'
    }).
    otherwise('/phones');
  }
]);



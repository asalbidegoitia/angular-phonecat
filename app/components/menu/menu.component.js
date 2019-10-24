
// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phonecatApp'). // nombre App
  component('componenteMenu', {//nombre componente, para usarlo <componente-menu>
    templateUrl: './components/menu/menu.template.html',
    controller: ['$routeParams',
      function MenuController($routeParams) {

      }// end MenuController
    ]
  });
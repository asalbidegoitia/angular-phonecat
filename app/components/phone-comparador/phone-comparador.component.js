'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneComparador').
component('phoneComparador', {
  templateUrl: 'components/phone-comparador/phone-comparador.template.html',
  controller: ['Phone', 'compraMovil','$scope',
    function phoneComparadorController(Phone, compraMovil, $scope) {
      console.trace('phoneComparadorController');
      var self = this;
      self.selec = 0;
      self.orderProp = 'age';

      this.phones = Phone.query();
      self.phone1 = {};
      self.phone2 = {};

      self.seleccionar = function (phone) {
        if (self.selec == 0) {
          self.phone1 = phone;
          self.selec = 1;
        } else {
          self.phone2 = phone;
          self.selec = 0;
        }
      } //end seleccionar

      $scope.$on("eventoCompra", function (event, data) {
        alert('eventoCompra en padre ' + data.telefono.id);
      });

    } //end controller
  ]
});
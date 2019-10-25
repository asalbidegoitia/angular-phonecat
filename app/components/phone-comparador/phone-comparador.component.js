'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneComparador').
component('phoneComparador', {
  templateUrl: 'components/phone-comparador/phone-comparador.template.html',
  controller: ['Phone','$scope', 'compraMovil',
    function phoneComparadorController(Phone, $scope, compraMovil) {
      console.trace('phoneComparadorController');
      var self = this;
      self.selec = 0;
      self.orderProp = 'age';

      //llamada al servicio rest
      Phone.getAll().then( (res)=> self.phones = res.data);

      this.phones = {}; // antes de meter el servicio rest era: Phone.query();
      self.phone1 = {};
      self.phone2 = {};

      self.seleccionar = function (phone) {
        self.phone2 = self.phone1;
        self.phone1 = phone;
      } //end seleccionar

      $scope.$on("eventoCompra", function (event, data) {
        //alert('eventoCompra en padre ' + data.telefono.id);
      
      });

      self.comprarMovil = function(){
        return compraMovil.getProducto();
      }; //end comprarMovil

    } //end controller
  ]
});

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

      self.filtro = {
        "atributo": "ram",         
        "min": 0,
        "max": 32000
      }

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


angular.module('phoneComparador').filter('filtroTelefonos', function () {
  return function( items, filtroObject){
    console.log('filtroTelefonos filtro=%o', filtroObject);

    if ( items ){

      return items.filter((telefono)=> {
        let value = telefono.storage[filtroObject.atributo];
        //console.debug("telefono=%s value=%s min%s max=%s", telefono.id, value, min, max );
        return value >= filtroObject.min && value <= filtroObject.max ;
      });

    }  

    // return items;
  }
});

'use strict';

angular.
module('phoneComparadorDetalle').
component('phoneComparadorDetalle', {
  templateUrl: 'components/phone-comparador-detalle/phone-comparador-detalle.template.html',
  bindings: { //para que el controlador reciba parametros (es como poner una variable en el parentesis de una funcion)
    mostrar: '=', //recibe de <phone-comparador-card></phone-comparador-card>
    comparar: '=' //recibe de <phone-comparador-card></phone-comparador-card>
  },
  controller: ['compraMovil', '$scope',
    function phoneComparadorDetalleController(compraMovil, $scope) {
      console.trace('phoneComparadorDetalleController');
      var self = this;

      self.comprar = function () {
        console.trace('click boton compra %o', self.mostrar);
        $scope.$emit("eventoCompra", {
          telefono: self.mostrar
        });
      } //end comprar
    } //end controller
  ]
})
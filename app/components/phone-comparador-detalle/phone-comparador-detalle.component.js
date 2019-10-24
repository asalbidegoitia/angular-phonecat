'use strict';

angular.
module('phoneComparadorDetalle').
component('phoneComparadorDetalle', {
  templateUrl: 'components/phone-comparador-detalle/phone-comparador-detalle.template.html',
  bindings:{ //para que el controlador reciba parametros (es como poner una variable en el parentesis de una funcion)
    mostrar:'=', //recibe de <phone-comparador-card></phone-comparador-card>
    comparar:'='  //recibe de <phone-comparador-card></phone-comparador-card>
  },
  controller: ['Phone',
    function phoneComparadorDetalleController() {
      console.trace('phoneComparadorDetalleController'); 

    } //end controller
  ]
})

//se ha movido a directiva compare
/*
.directive("ipComparador",[function() {
   
  var directiveDefinitionObject ={
      restrict:"E",
      replace : true,
      template:"<span ng-hide=\"((mostrar)?false:true)\" class=\"label label-{{ (v1 >= v2)?'success':'danger' }}\">{{ v1 - v2}}</span>",
      scope:{
        v1:"@",
        v2:"@",
        mostrar:"@"
      }
    }
   
  return directiveDefinitionObject;
}]);
*/

'use strict';

angular.
  module('phoneCesta').
  component('phoneCesta', {
    templateUrl: './components/phone-cesta/phone-cesta.template.html',
    controller: ['$scope','compraMovil',
      function PhoneComparadorController($scope,compraMovil) {
         console.trace('PhoneCestaController');
         var self = this;
     
    
     self.comprarMovil = function(){
          return compraMovil.getProducto();
        };     
    }//end controller
   ]
});


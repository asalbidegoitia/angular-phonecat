'use strict';
core.factory('compraMovil',
  function ($resource) {


    return {
      productos: new Map(),
      getProducto: function() {
        //transfomar el map en un array porque no puedes pintar map con ng-repeat
        return Array.from(this.productos.values());
      },
      setProducto: function(p) {
        if(this.productos.get(p.id) != undefined){
          this.productos.get(p.id).cantidad++;
        }else{
          this.productos.set(p.id,{ "cantidad":1, "imagen":p.imageUrl, "id":p.id, "name":p.name});
        }
      }
    }; //end return
  } // end function
);
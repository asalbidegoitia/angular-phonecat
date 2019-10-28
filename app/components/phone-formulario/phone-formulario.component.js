'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('phoneFormulario').
component('phoneFormulario', {
  templateUrl: './components/phone-formulario/phone-formulario.template.html',
  controller: ['$routeParams', 'Phone', '$location',
    function PhoneFormularioController($routeParams, Phone, $location) {
      console.trace('PhoneFormularioController');

      var self = this;
      self.form = {};

      let id = $routeParams.phoneId;
      if (id) { //buscar telefono por id
        Phone.getById(id).then(
          (res) => {
            console.debug('telefono encontrado');
            self.form = res.data;
          },
          () => {
            console.warn('telefono NO encontrado');
          }
        );
      } //end if

      self.guardar = function () {
        console.debug('submitar formulario %o', self.form);

        Phone.guardar(self.form).then(
          (res) => {
            console.debug('telefono creado');
          },
          (res) => {
            console.warn('telefono NO se pudo crear');
          }
        );
      } //end guardar
    }// end controller
  ]
});
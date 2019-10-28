'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('phoneDetail').
component('phoneDetail', {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: ['$routeParams', 'Phone', '$location',
    function PhoneDetailController($routeParams, Phone, $location) {
      var self = this;

      //antes de meter el servicio rest
      /*
      self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        self.setImage(phone.images[0]);
      },function(){
        //cambiar la url
      */

      self.phone = {};
      let id = $routeParams.phoneId;

      Phone.getById(id).then(
        function (res) {
          self.phone = res.data;
          self.setImage(phone.images[0]);
        },
        function () {
          //cambiar de url
          console.warn('No encontrado movil' + $routeParams.phoneId);
          //self.mensaje = "404 - "+$routeParams.phoneId+" no encontrado";
          $location.url('/404');
        });

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
    }
  ]
});
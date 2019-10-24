
core.directive("ipComparador",[function() {
   
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
  
  
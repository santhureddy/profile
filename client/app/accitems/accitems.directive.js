'use strict';

angular.module('angAppApp')
  .directive('accitems', function () {
     
    return {
       templateUrl: 'app/accitems/accitems.html',
     restrict: 'E',
      scope: {
      	title: '@'
      },
      transclude: true,
      require: "^acccontainer",
      link: function(scope, element, attrs, ctrl, transcludeFn) {
        //debugger
      	console.log(ctrl);
      	//ctrl.addAccordionItem(scope);
        element.bind("click",function($event){

        	//ctrl.closeAll();
        	scope.$apply(function(){
            var currElem=$($event.currentTarget).children(".acc-desc");
            
            if(currElem.attr("class") == "acc-desc ng-hide"){
              currElem.animate( {"color":'#abcdac'}, {duration:500});
            }else{
                  currElem.animate( {"color":'#abcdac'}, {duration:500});
          
            }
        		scope.active=!scope.active
        	});
        });
      }
    };
  });
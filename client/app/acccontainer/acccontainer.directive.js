'use strict';

angular.module('angAppApp')
  .directive('acccontainer', function () {
    return {
      template: "<div ng-transclude>dsd</div>",
	     restrict: "E",
	     transclude: true,
	     controller : function ($scope, $element, $attrs, $transclude) {
	     	 var accordionItems=[];
	     	var addAccordionItem=function(accordionScope){
	     		accordionItems.push(accordionScope);
	     	};

	     	var closeAll=function(){
	     		angular.forEach(accordionItems,function(accordionScope){
	     			accordionScope.active=false;
	     			// $timeout(function(){ accordionScope.active=false; }, 500);
	     		});
	     	};
	     	
	     	return {
       			addAccordionItem: addAccordionItem,
        		closeAll: closeAll
			};
	     }
    };
  });
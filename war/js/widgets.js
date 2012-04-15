angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

angular.module('lepModule.widgets', [])
    // temporary hack until we have proper directive injection.
    .directive('lepButton', function() {
        
        return {
        	restrict : 'A',
      
        	 link: function(scope, iElement, iAttrs, controller){        		
        		 iElement.button();
             }
        }
        
    })
    
    .directive('lepTabs', function() {
    	
        return {
        	 restrict : 'A',
        	        	
        	 link: function(scope, iElement, iAttrs, controller){
        		 
        		 iElement.tabs();
             }
        }
    	
    })
    
    
    .directive('lepBoxcontent', function() {
    	
    	  return {
         	 restrict : 'A',
         	        	
         	 link: function(scope, iElement, iAttrs, controller){
         		 
         		 iElement.addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom contentBox');
              }
         }
    })

	.directive('lepBox', function() {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        scope: { header:'bind'},
	        
	        template: 
	        	'<div>'+
	        		'<h3 class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="overflow: auto;  padding-top: 8.6px; padding-bottom: 8.6px; padding-left: 10.6px;">{{header}}</h3>'+
	        		 '<div style="padding-right: 15px" class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom contentBox" ng-transclude></div>' + 
	        	'</div>',
	        		
	        link: function(ascope, element, attrs) {	        		
	        }
	    }
	})
	.directive('lepError', function() {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        scope: { },
	        
	   

	        template:
	            
	    	    '<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;">' +
	    			'<p ng:transclude><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span></p>'+ 	    		
	    		'</div>',
	        	
	        		
	        link: function(ascope, element, attrs) {	        		
	        }
	    }
	})
	
//		.directive('autocomplete', function() {
//	    return {
//	        restrict: 'E',
//	        replace: true,
//	        transclude: true,
//	        template: '<input name="autocomplete" type="text"/>',
//	        link: function(scope, element, attrs) {
//	            scope.$watch(attrs.list, function(value) {
//	                element.autocomplete({
//	                    source: value,
//	                    select: function(event, ui) {
//	                        scope[attrs.selection] = ui.item.value;
//	                        scope.$apply();
//	                    }
//	                });
//	            });
//	        }
//	    }
//	});

   .directive('lepBoxheader', function(){
    
    return{
    	
    	restrict : 'E',
    	
    	link: function(scope, element, attrs, controller){    	
    		var header = angular.element('<h3 class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="overflow: auto;  padding-top: 8.6px; padding-bottom: 8.6px; padding-left: 20.6px; padding-right: 15 px;"></h3>');
            var headerSpan = angular.element('<span></span>');
            headerSpan.text(attrs.headertext);
            header.append(headerSpan);
            element.append(header);	
    	}
        

    };
});


//angular.directive('lep:dialog',  function(exp) {
//    
//    return ['$element', function(element) {
//         
//        var scope = this;
//  
//        scope.$watch(exp,function(scope,newValue,oldValue){
//            if (newValue == true){
//            
//                var defaultHeight = 600;  
//                var defaultWidth = 500;
//                var height = defaultHeight;
//                var width = defaultWidth;
//    
//                if (angular.isDefined(scope[exp+'Height'])){
//                    height = scope[exp+'Height'];
//                }
//                if (angular.isDefined(scope[exp+'Width'])){
//                    width = scope[exp+'Width'];
//                }
//              
//
//                element.dialog({
//                    resizable: true,
//                    'height': height,
//                    'width': width,
//                    autoOpen : false,
//                    modal: true,
//                    beforeClose: function(event, ui) {                
//                        scope[exp] = false;
//                        scope.$apply();
//                    },
//                    buttons: {
//                        'Zamknij': function() {                    
//                            element.dialog( "close" );
//                
//                        }
//                    }
//                });                
//                element.dialog('open');                
//            }
//            if (newValue == false){
//                element.dialog( "destroy" )
//            }
//        
//        });
//    
//
//    }]
//});


//angular.widget('lep:error', function(compileElement){
//    var compiler = this;
//    //compileElement.css('display', 'block');
//    compiler.descend(true);
//    var errorTextExp = compileElement.attr('errorText');    
//    
//    return function(linkElement){
//        var mainDiv = angular.element('<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;"></div>');
//        var para = angular.element('<p></p>');
//        para.append(angular.element('<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>'))
//        var contentSpan = angular.element('<span></span>');
//        contentSpan.text(errorTextExp);
//        para.append(contentSpan);
//        
//  
//        mainDiv.append(para);        
//        linkElement.append(mainDiv);
//
//    };
//});


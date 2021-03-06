angular.module('lepModule.widgets', [], function() {
    // temporary hack until we have proper directive injection.
    angular.directive('lep:button', function() {
        return ['$element', function(element) {            
        	element.button();
        }];
    });
    
    angular.directive('lep:tabs', function() {
        return ['$element', function(element) {            
        	element.tabs();
        }];
    });
    
    angular.directive('ib:boxContent', function(expression, compiledElement) {
        
        
        return ['$element', function(element) {
                  var scope = this;
                  element.addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom contentBox');                             
        }]
    });
});

angular.widget('ib:boxHeader', function(compileElement){
    var compiler = this;
    //compileElement.css('display', 'block');
    compiler.descend(true);
    var headerTextExp = compileElement.attr('headerText');    
    
    return function(linkElement){
        var header = angular.element('<h3 class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="overflow: auto;  padding-top: 8.6px; padding-bottom: 8.6px; padding-left: 10.6px;"></h3>');
        var headerSpan = angular.element('<span></span>');
        headerSpan.text(headerTextExp);
        header.append(headerSpan);
        linkElement.append(header);

    };
});


angular.directive('lep:dialog',  function(exp) {
    
    return ['$element', function(element) {
         
        var scope = this;
  
        scope.$watch(exp,function(scope,newValue,oldValue){
            if (newValue == true){
            
                var defaultHeight = 600;  
                var defaultWidth = 500;
                var height = defaultHeight;
                var width = defaultWidth;
    
                if (angular.isDefined(scope[exp+'Height'])){
                    height = scope[exp+'Height'];
                }
                if (angular.isDefined(scope[exp+'Width'])){
                    width = scope[exp+'Width'];
                }
              

                element.dialog({
                    resizable: true,
                    'height': height,
                    'width': width,
                    autoOpen : false,
                    modal: true,
                    beforeClose: function(event, ui) {                
                        scope[exp] = false;
                        scope.$apply();
                    },
                    buttons: {
                        'Zamknij': function() {                    
                            element.dialog( "close" );
                
                        }
                    }
                });                
                element.dialog('open');                
            }
            if (newValue == false){
                element.dialog( "destroy" )
            }
        
        });
    

    }]
});


angular.widget('lep:error', function(compileElement){
    var compiler = this;
    //compileElement.css('display', 'block');
    compiler.descend(true);
    var errorTextExp = compileElement.attr('errorText');    
    
    return function(linkElement){
        var mainDiv = angular.element('<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;"></div>');
        var para = angular.element('<p></p>');
        para.append(angular.element('<span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>'))
        var contentSpan = angular.element('<span></span>');
        contentSpan.text(errorTextExp);
        para.append(contentSpan);
        
  
        mainDiv.append(para);        
        linkElement.append(mainDiv);

    };
});
//
//<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;"> 
//<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span> 
//You are using an old version of Internet Explorer.
//For better and safer browsing experience please <a href="http://www.microsoft.com/IE9">upgrade IE</a>
//or install <a href="http://google.com/chrome">Google Chrome browser</a>.</p>
//</div>

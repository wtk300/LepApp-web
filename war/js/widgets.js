angular.directive('lep:button', function(expression, compiledElement) {
    var compiler = this;
    return function(element) {
    	
    	element.button();
    }
});
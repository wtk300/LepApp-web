angular.module('lepModule.widgets', [], function() {
    // temporary hack until we have proper directive injection.
    angular.directive('lep:button', function() {
        return ['$element', function(element) {            
        	element.button();
        }];
    });
});
angular.widget('@lep:question2', function(arrayProperty, compileElement) {
    var compiler = this;
    var sequence = 0;
    var template = $('.template', compileElement).hide();
    var templateFn = compiler.compile(template);
    compileElement.append("<ul></ul>");
    compileElement.tabs();
    return function(linkElement) {
        var scope = this;
        function createNewTab(i) {
            var newScope = scope.$new();
            newScope.$set('$e', scope[arrayProperty][i]);
            templateFn(newScope, function(newTab) {
                var newId = 'my-tabs_' + sequence++;
                linkElement.append(newTab.show().attr('id', newId));
                linkElement.tabs('add', '#'+newId, 'label');
            });
        } 
        scope.$watch(arrayProperty+'.length', function(length, oldLength) {
            var last = length - 1;
            var i;
            if (length > oldLength) {
                for (i = oldLength; i < length; i++) {
                    createNewTab(i);
                }
            } else if (length < oldLength) {
                for (i = length; i < oldLength; i++) {
                    linkElement.tabs('remove', last);
                }
            } else {
                for (i=0; i<length; i++) {
                    createNewTab(i);
                }
            }
        });
    };
});


angular.widget('@my:question', function(expression, compileElement) {
	  var compiler = this;
	  var item = expression;
	  return function(linkElement) {
	    var scope = this;
	    var newScope = scope.$new();
	   
	  };
	});

angular.directive('lep:question',  function(expression, compileElement)  {
    var compiler = this;
    expression.question = new Date();
    return function(linkElement) {
   	 var scope = this;
 	 var newScope = scope.$new();
 	 newScope.$set('$e',expression);
    };
});

angular.directive('ng:bind', function(expression, compiledElement) {
    var compiler = this;
    return function(linkElement) {
        var currentScope = this;
        currentScope.$watch(expression, function(value) {
            linkElement.text(value);
        });
    };
});

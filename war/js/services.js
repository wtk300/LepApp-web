/* http://docs.angularjs.org/#!angular.service */

/**
 * App service which is responsible for the main configuration of the app.
 */
angular.service('RootCtrl', function($route, $location, $window) {

  $route.when('/contact', {template: 'partials/contact.html', controller: ContactCtrl});
  $route.when('/home', {template: 'partials/home.html', controller: MyCtrl2});
  $route.when('/map', {template: 'partials/map.html', controller: MyCtrl2});
  $route.when('/login', {template: 'login.html?error=32', controller:LoginCtrl});
  $route.when('/register', {template: 'partials/register.html', controller:RegisterCtrl});
  $route.when('/aboutTest', {template: 'partials/aboutTest.html', controller:undefined});
  $route.when('/chooseTest', {template: 'partials/chooseTest.html', controller:LepTestCtrl});
  $route.when('/startTest', {template: 'secured/start.html', controller:LepTestCtrl});
  $route.when('/logout', {template: '/j_spring_security_logout', controller:LogoutCtrl});
  $route.when('/logoutsuccess', {template: 'partials/logoutsuccess.html', controller:LogoutCtrl});


  var self = this;

  $route.onChange(function() {
    if ($location.hash === '') {
      $location.updateHash('/contact');
      self.$eval();
    } else {
      $route.current.scope.params = $route.current.params;
      $window.scrollTo(0,0);
    }
  });

}, {$inject:['$route', '$location', '$window'], $eager: true});


angular.service('securityService',function(resource){
	
	  return {
	        getLoggedUser: function(){
	            var res = resource('resources/lep/:antycache/loggedUser',{},
	            {
	                retrive : {
	                    method: 'GET',
	                    verifyCache: false	
	                }
	            });            
	            return res.retrive({antycache:""+new Date().getTime() });
	        }
	    }
},{$inject:['$resource']});

angular.service('lepSessionService',function(resource){
	
	  return {
	        getSessionsInfo: function(){
	            var res = resource('resources/lep/sessions',{},
	            {
	                retrive : {
	                    method: 'GET'
	                    
	                }
	            });            
	            return res.retrive();
	        }
	    }
},{$inject:['$resource']});


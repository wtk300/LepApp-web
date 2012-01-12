/* http://docs.angularjs.org/#!angular.service */

/**
 * App service which is responsible for the main configuration of the app.
 */
angular.service('rootService', function($route, $location, $window,sessionService,securityService) {

  $route.when('/contact', {template: 'partials/contact.html', controller: ContactCtrl});
  $route.when('/home', {template: 'partials/home.html', controller: MyCtrl2});
  $route.when('/map', {template: 'partials/map.html', controller: MyCtrl2});
  $route.when('/login', {template: 'login.html?error=32', controller:LoginCtrl});
  $route.when('/register', {template: 'partials/register.html', controller:RegisterCtrl});
  $route.when('/aboutExam', {template: 'partials/aboutExam.html', controller:undefined});
  $route.when('/chooseExam', {template: 'partials/chooseExam.html', controller:LepExamCtrl});
  $route.when('/startExam', {template: 'secured/start.html', controller:ResolveExamCtrl});
  $route.when('/logout', {template: '/j_spring_security_logout', controller:LogoutCtrl});
  $route.when('/logoutsuccess', {template: 'partials/logoutsuccess.html', controller:LogoutCtrl});
  $route.when('/loginerror', {template: 'partials/loginerror.html', controller:undefined});

  $route.parent(this);
  
 
//  this.$on("$afterRouteChange", function(route.current,previous) {
//      
//      
//
//  });
//  

//  $route.onChange(function() {
//    if ($location.hash === '') {
//      $location.updateHash('/login',{first: 1});
//     
//    } else {
//      $route.current.scope.params = $route.current.params;
//      $window.scrollTo(0,0);
//    }
//  });
  
//  $route.otherwise('/login?first=1');
//  
//	var self = this;
//	self.loginDetails = securityService.getLoggedUser();
//	
//	self.sessions = sessionService.getSessionsInfo();
	

}, {$inject:['$route', '$location', '$window', 'lepSessionService','securityService'], $eager: true});


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

angular.service('userService',function(resource,$xhr){
	
	  return {
	        regiserUser: function(user){
	        	$xhr.defaults.headers.post['Content-Type']='application/json';
	        	$xhr.defaults.headers.put['Content-Type']='application/json';
	        	
	            var res = resource('resources/user/register',{},
	            {
	                retrive : {
	                    method: 'GET'
	                    
	                },
		            register : {
	                    method: 'POST',	                    
	                    
	                }
	            });            
	            return angular.fromJson(res.register(user));
	        }
	    }
},{$inject:['$resource','$xhr']});

angular.service('contactService',function(resource,$xhr){
	
	  return {
	        registerContact: function(contact){
	        	$xhr.defaults.headers.post['Content-Type']='application/json';
	        	$xhr.defaults.headers.put['Content-Type']='application/json';	        
	            var res = resource('resources/contact/register',{},
	            {
	                
		            register : {
	                    method: 'POST',	                    
	                    
	                }
	            });            
	            return res.register(contact);
	        }
	    }
},{$inject:['$resource','$xhr']});

angular.service('startLepService',function(resource){
	
	  var self = this;
	  	  
	  return {
		  	getCurrentLepItems : function(){
		  		return self.currentLepItems;
		  	},
		  	
	        getLepExamItems: function(sessionId,lepId,langId,subSectionId){
	            var res = resource('resources/lep/startLep/:sessionId/:lepId/:langId/:subSectionId',
	            		{sessionId: sessionId, lepId: lepId ,langId : langId,subSectionId: subSectionId},
	            {
	                retrive : {
	                    method: 'GET'
	                    
	                }
	            });            
	            return res.retrive();
	            
	        }
	    }
},{$inject:['$resource']});



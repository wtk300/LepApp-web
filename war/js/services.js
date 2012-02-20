
angular.module('lepModule.services', [], function($provide) {
	  $provide.factory('securityService', ['$resource', function(resource) {
		  
		  self.currentUserCache = undefined;
		  return {
		        getLoggedUser: function(){
		            var res = resource('resources/lep/:antycache/loggedUser',{},
		            {
		                retrive : {
		                    method: 'GET',
		                    verifyCache: false	
		                }
		            });    
		            var response =res.retrive({antycache:""+new Date().getTime() });
	  				self.currentUserCache = response;
		            return response;
		        },
		        getCurrentUser : function(){
		        	return self.currentUserCache; 
		        }
	  
		    }
	  }]);
	  
	  $provide.factory('lepSessionService', ['$resource', function(resource) {
		  
		  return {
		        getSessionsInfo: function(){
		            var res = resource('resources/lep/sessions',{},
		            {
		                retrive : {
		                    method: 'GET',
		                    verifyCache: false
		                    
		                }
		            });            
		            return res.retrive();
		        }
		    }
	  }]);
	  
	  $provide.factory('userService', ['$resource', function(resource) {
		  return {
		        regiserUser: function(user){
		        	
		        	
		            var res = resource('resources/user/register',{},
		            {
		                retrive : {
		                    method: 'GET',
		                    verifyCache: false
		                    
		                },
			            register : {
		                    method: 'POST',
		                    verifyCache: false	                    
		                    
		                }
		            });            
		            return res.register(user);
		        }
		    }
	  }]);
	  
	  $provide.factory('contactService', ['$resource','$http', function(resource,$xhr) {
		  return {
		        registerContact: function(contact){
//		        	$xhr.defaults.headers.post['Content-Type']='application/json';
//		        	$xhr.defaults.headers.put['Content-Type']='application/json';	        
		            var res = resource('resources/contact/register',{},
		            {
		                
			            register : {
		                    method: 'POST'                    
		                    
		                }
		            });            
		            return res.register(contact);
		        }
		    }
	  }]);
	  
	  $provide.factory('startLepService', ['$resource', function(resource) {
		  var self = this;
		  
		  self.currentLepItems = {};
		  	  
		  return {
			  	getCurrentLepItems : function(){
			  		return self.currentLepItems;
			  	},
			  	
		        getLepExamItems: function(sessionId,lepId,langId,subSectionId){
		            var res = resource('resources/lep/startLep/:sessionId/:lepId/:langId/:subSectionId',
		            		{sessionId: sessionId, lepId: lepId ,langId : langId,subSectionId: subSectionId},
		            {
		                retrive : {
		                    method: 'GET',
		                    verifyCache: false	       
		                    
		                }
		            });       
		            self.currentLepItems = res.retrive();
		            return self.currentLepItems;
		            
		        }
		    }
	  }]);
});




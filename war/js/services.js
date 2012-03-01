
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
		        },
		        getLepTypes: function(){
		        	var types = {
		        		10 : 'LEP',
		        		20 : 'LDEP'
		        	}
		        	return types;
		        },
				
		        getLepSections: function(){
		        	var sections = {
		        			10 :'Choroby wewnętrzne',
		        			20: 'Pediatria',
		        			30: 'Chirurgia',
		        			40: 'Ginekologia i położnictwo',
		        			50: 'Medycyna rodzinna',
		        			60: 'Psychiatria',
		        			70: 'Intesywna terapia i medycyna ratunkowa',
		        			80: 'Bioetyka i prawo medyczne',
		        			90: 'Orzecznictwo lekarskie',
		        			100: 'Zdrowie publiczne'	
		        	} 
		        	return sections;
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
		  
		  self.date = new Date().getTime();
		  	  
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
		            
		            if (angular.isDefined(self.currentLepItems[sessionId])){		    
		            	var copy ;		            	 
		            	angular.copy(self.currentLepItems[sessionId],copy);
		            	return copy;
		            }else{		            	
			            self.currentLepItems = res.retrive(function(lep,header){
			            	console.log('from non cache')
			            	if (angular.isObject(lep)){
			            		console.log('is object '+self.date);
			            	}else{
			            		console.log('is not object'+self.date);
			            	}
			            	
			            	return angular.copy(lep,self.currentLepItems[sessionId]);
			            });
			            			            
			            return self.currentLepItems;
		            	
		            }
		            

		            
		        }
		    }
	  }]);
});




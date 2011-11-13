/* App Controllers */
function  RegisterCtrl(invalidWidgets,userService) {
	var self = this;
	self.userService = userService;
	self.$invalidWidgets = invalidWidgets;

	
	this.register = function(){
		
		self.user.password = hex_md5(self.user.password);
		self.user.repeatpassword = hex_md5(self.user.repeatpassword);
		userService.regiserUser(self.user);
	}
}

RegisterCtrl.$inject = ['$invalidWidgets','userService'];

function  ContactCtrl(invalidWidgets,contactService) {
	var self = this;
	self.$invalidWidgets = invalidWidgets;
	self.contactService = contactService;
	
	self.send = function(){
		contactService.regiserContact(self.contact);
		
	}
	
	self.clear = function(){
		self.contact.firstName = "";
		self.contact.lastName = "";
		self.contact.email = "";
		self.contact.content = "";
	
	}
	
}
ContactCtrl.$inject = ['$invalidWidgets','contactService'];

function LoginCtrl() {
	var self = this;
	
	self.error = self.params.error;
	
	self.params = self.params;
	
	self.$watch("error",function(newValue,oldValue){
    
    //self.$set('test',angular.fromJson(proposalService.getProposal(self.login,self.propId)));
    
    //        var prop = angular.fromJson(proposalService.getProposal(self.login,newValue));
    //        self.$set('proposal',prop);
    //        
    
    //self.proposal = proposalService.getProposal(self.login,self.propId).$copy();
    //        self.proposal = {};
    //        
    //        angular.Object.copy(self.test,self.you);
    //        self.turbotest = 'new v '+newValue + ' old v '+oldValue;
    //        

    });
	
 }

function LepTestCtrl(sessionService,securityService) {
	var $securityService = securityService;
	var self = this;
	
	self.sessions = sessionService.getSessionsInfo();
	
	self.sessionId ="10";
	
	self.loggedUser = securityService.getLoggedUser();

}
LepTestCtrl.$inject = ['lepSessionService','securityService'];

function LogoutCtrl(securityService){
	var $securityService = securityService;
	var self = this;
	
	self.loggedUser = securityService.getLoggedUser();
}
LogoutCtrl.$inject = ['securityService'];

function StartLepCtrl(startService){
	var startService = startService;
	var self = this;
	self.lepItems = startService.getLepTestItems();
	self.startLep = new Date();
	self.correctans = 0;
	self.incorrectans = 0;
	
	self.percentage = function(){
		
		if (self.correctans+self.incorrectans == 0){
			return 0;
		}
		return (self.correctans / (self.correctans+self.incorrectans)).toFixed(2);
	}
	
	self.questionQuantity = function(){
		
		return self.lepItems.length;
	}
	
	self.check = function(item,type){		
		if (item.correct_ans == type){
			item['style'+type] = "ans_correct";
			self.correctans++; 
		}else{
			item['style'+type] = "ans_incorrect";				
			item['style'+item.correct_ans] = "ans_correct";
			self.incorrectans++;
		}
		item.disabled = true;
			
	}

	
}

StartLepCtrl.$inject = ['startLepService'];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

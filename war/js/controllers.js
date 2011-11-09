/* App Controllers */
function  RegisterCtrl(invalidWidgets) {
	var self = this;
	self.$invalidWidgets = invalidWidgets;
}

RegisterCtrl.$inject = ['$invalidWidgets'];

function  ContactCtrl(invalidWidgets) {
	var self = this;
	self.$invalidWidgets = invalidWidgets;
	
	self.send = function(){
		self.clear();
	}
	
	self.clear = function(){
		self.contact.firstName = "";
		self.contact.lastName = "";
		self.contact.email = "";
		self.contact.content = "";
	
	}
	
}
ContactCtrl.$inject = ['$invalidWidgets'];

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
	
	self.stylea = "none"
	self.styleb = "none"
		
		 var storeMarkers = []

	
	self.checkA = function(item){		
		if (item.correct_ans == 'A'){
			item.styleA = "ans_correct";
		}else{
			item.styleA = "ans_incorrect";	
			item['style'+item.correct_ans] = "ans_correct";
		}
		item.disable = true;
			
	}
	self.checkB = function(item){		
		if (item.correct_ans == 'B'){
			item.styleB = "ans_correct";
		}else{
			item.styleB = "ans_incorrect";
			item['style'+item.correct_ans] = "ans_correct";
		}
			
	}
	
}

StartLepCtrl.$inject = ['startLepService'];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

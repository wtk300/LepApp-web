/* App Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];

function LepTestCtrl(sessionService,securityService) {
	var $securityService = securityService;
	var self = this;
	
	self.sessions = sessionService.getSessionsInfo();
	
	self.sessionId ="10";
	
	self.loggedUser = securityService.getLoggedUser();
	
	self.refreshDate = new Date();
	
	self.ref = function(){
		self.refreshDate = new Date();
		self.loggedUser = $securityService.getLoggedUser();
		
	}
}
LepTestCtrl.$inject = ['lepSessionService','securityService'];

function LogoutCtrl(securityService){
	var $securityService = securityService;
	var self = this;
	
	self.loggedUser = securityService.getLoggedUser();
}
LogoutCtrl.$inject = ['securityService'];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

/* App Controllers */
function RegisterCtrl(invalidWidgets, userService) {
	var self = this;
	self.userService = userService;
	self.$invalidWidgets = invalidWidgets;

	this.register = function() {

		self.user.password = hex_md5(self.user.password);
		self.user.repeatpassword = hex_md5(self.user.repeatpassword);
		userService.regiserUser(self.user);
	}
}

RegisterCtrl.$inject = [ '$invalidWidgets', 'userService' ];


function RootCtrl() {


}



function ContactCtrl(invalidWidgets, contactService,securityService) {
	var self = this;
	
	self.$invalidWidgets = invalidWidgets;
	self.contactService = contactService;
	var $securityService = securityService;
	
	

	var getUser = function(){
		
		self.$set("contact.firstName","login "+angular.filter.json($securityService.getLoggedUser()));
		return angular.fromJson($securityService.getLoggedUser());
	}
	
	
	self.loggedUser = $securityService.getLoggedUser();
	 
//	self.$watch("loggedUser",function(newValue,oldValue){
//		
//		self.$set("contact.firstName",angular.toJson(newValue));
//		self.$set("contact.lastName",angular.toJson(oldValue));
//		
//		if (angular.isDefined(newValue.user)){
//			self.user = newValue.user.login;
//			self.$set("contact.firstName",angular.toJson(newValue.user.login));	
////			self.contact.firstName = self.loggedUser.user.firstName;
////			self.contact.lastName = self.loggedUser.user.lastName;
//		}else{
//			 
//		//	self.$set("contact.firstName","aaaaa");
//			
//			
//		}
//	});
	
	
	self.send = function() {
		contactService.regiserContact(self.contact);

	}

	self.clear = function() {
		self.contact.firstName = "";
		self.contact.lastName = "";
		self.contact.email = "";
		self.contact.content = "";

	}

}
ContactCtrl.$inject = [ '$invalidWidgets', 'contactService','securityService' ];

function LoginCtrl() {
	var self = this;

	self.error = self.params.error;

	self.params = self.params;

}

function LepTestCtrl(sessionService, securityService) {
	var $securityService = securityService;
	var self = this;

	self.sessions = sessionService.getSessionsInfo();

	self.sessionId = "10";

	self.loggedUser = securityService.getLoggedUser();

}
LepTestCtrl.$inject = [ 'lepSessionService', 'securityService' ];

function LogoutCtrl(securityService) {
	var $securityService = securityService;
	var self = this;

	self.loggedUser = securityService.getLoggedUser();
}
LogoutCtrl.$inject = [ 'securityService' ];

function StartLepCtrl(startService) {
	var startService = startService;
	var self = this;
	self.lepItems = startService.getLepTestItems(10, 20, 30, 40, 50);
	self.startLep = new Date();
	self.endLep = undefined;
	self.correctans = 0;
	self.incorrectans = 0;

	self.percentage = function() {

		if (self.correctans + self.incorrectans == 0) {
			return 0;
		}
		return ((self.correctans / (self.correctans + self.incorrectans))*100)
				.toFixed(2);
	}

	self.quantity = 0;
	
	 
	
	self.questionQuantity = function() {
		
		//self.quantity = angular.Array.count(self.lepItems);
		return self.quantity;
	}
	
	self.finishLepTest= function(){
		self.endLep = new Date();
		if (angular.isArray(self.lepItems.lepItems)){
			self.debug = "isFuckinArrary "+angular.Array.count(self.lepItems.lepItems);
		}else{
			self.debug = "isNotFuckinArrary"
		}
	}

	self.check = function(item, type) {
		if (item.correct_ans == type) {
			item['style' + type] = "ans_correct";
			self.correctans++;
		} else {
			item['style' + type] = "ans_incorrect";
			item['style' + item.correct_ans] = "ans_correct";
			self.incorrectans++;
		}
		item.disabled = true;

	}

}

StartLepCtrl.$inject = [ 'startLepService' ];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

/* App Controllers */
function RegisterCtrl(invalidWidgets, userService) {
	var self = this;
	self.userService = userService;
	self.$invalidWidgets = invalidWidgets;

	this.register = function() {

		self.newUser.password = hex_md5(self.newUser.password);
		self.newUser.repeatpassword = hex_md5(self.newUser.repeatpassword);
		userService.regiserUser(self.newUser);
	}
}

RegisterCtrl.$inject = [ '$invalidWidgets', 'userService' ];


function RootCtrl() {}

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
	
	
	 
	self.$watch("loggedUser.user",function(newValue,oldValue){
		
		if (angular.isDefined(newValue)){
			
			if (newValue.login != "anonymousUser"){
				self.$set("contact.login",newValue.login);
				self.$set("contact.authUser",true);
				self.$set("contact.firstName",newValue.firstName);
				self.$set("contact.lastName",newValue.lastName);
			}
			
			
		}
		
	});
	
//	self.$watch("loggedUser.user.lastName",function(newValue,oldValue){
//		
//		self.$set("contact.firstName",newValue);
//		self.$set("contact.lastName",oldValue);
//	});
//	
	
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

function LepExamCtrl(sessionService, securityService,startService,location) {
	var $securityService = securityService;
	var startService = startService
	var self = this;
	
	
	
	self.startExam = function(){
		self.lepItems = startService.getLepTestItems(10, 20, 30, 40, 50);
		location.updateHash('/startExam',{id :1231})
	}
	
	self.sessionId = "10";

	self.loggedUser = securityService.getLoggedUser();

}
LepExamCtrl.$inject = [ 'lepSessionService', 'securityService', 'startLepService','$location' ];

function ResolveExamCtrl(startService) {
	var startService = startService;
	var self = this;
	
	self.startLep = new Date();
	self.endLep = undefined;
	self.correctans = 0;
	self.incorrectans = 0;
	
	self.lepItems = startService.getCurrentLepItems();

	self.percentage = function() {

		if (self.correctans + self.incorrectans == 0) {
			return 0;
		}
		return ((self.correctans / (self.correctans + self.incorrectans))*100)
				.toFixed(2);
	}

	self.quantity = 0;
	
	self.error = false;
	self.errorMsg = "";
	
	self.questionQuantity = function() {
		
		//self.quantity = angular.Array.count(self.lepItems);
		return self.quantity;
	}
	
	self.finishLepTest= function(){
		self.endLep = new Date();
		if (angular.isArray(self.lepItems.lepItems)){
			var count = angular.Array.count(self.lepItems.lepItems,function(lepItem){
				return !lepItem.disabled;
				
			});
			
			if (count > 198){
				self.error = true;
				self.errorMsg = "Nie zostały zaznaczone wszyskie odpowiedzi.";
			}else{
				self.error = false;
				self.endLep = new Date();
			}
			
		}
	}

	self.check = function(item, type) {
		if (item.correct_ans == type) {
			item['style' + type] = "ans_correct";
			item.isCorrect=true;
			self.correctans++;
		} else {
			item['style' + type] = "ans_incorrect";
			item['style' + item.correct_ans] = "ans_correct";
			item.isCorrect=false;
			self.incorrectans++;
			
		}
		item.disabled = true;

	}

}

ResolveExamCtrl.$inject = [ 'startLepService' ];


function LogoutCtrl(securityService) {
	var $securityService = securityService;
	var self = this;

	self.loggedUser = securityService.getLoggedUser();
}
LogoutCtrl.$inject = [ 'securityService' ];

function LoginCtrl(invalidWidgets) {
	
	var self = this;
	
	self.$invalidWidgets = invalidWidgets;
	self.error = self.params.error;

	self.params = self.params;

}

LoginCtrl.$inject = [ '$invalidWidgets' ];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

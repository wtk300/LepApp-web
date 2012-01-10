/* App Controllers */
function RegisterCtrl(userService) {
	var self = this;
	self.userService = userService;

	self.newUser = {};

	self.$watch("response.id", function(scope, newValue, oldValue) {
		if (angular.isDefined(newValue)) {
			self.newUser.id = newValue;
			self.newUser.login = "";
			self.newUser.firstName = "";
			self.newUser.lastName = "";
			self.newUser.email = "";
			self.newUser.repeatpassword = "";
			self.newUser.password = "";
			self.newUser.acceptTerms = false;
		}
	});

	this.register = function() {

		if (self.newUser.acceptTerms == false) {
			self.showInfoTerms = true;
			return;
		} else {
			self.showInfoTerms = false;
		}

		self.newUser.password = hex_md5(self.newUser.password);
		self.newUser.repeatpassword = hex_md5(self.newUser.repeatpassword);
		self.response = userService.regiserUser(self.newUser);
	}
}

RegisterCtrl.$inject = [ 'userService' ];

function RootCtrl() {
}

function ContactCtrl(contactService, securityService) {
	var self = this;

	self.contactService = contactService;
	var $securityService = securityService;

	self.contact = {};

	self.$watch("loginDetails.user", function(scope, newValue, oldValue) {

		self.contact.id = undefined;
		if (angular.isDefined(newValue)) {

			if (newValue.isAuth == true) {

				self.contact.login = newValue.login;
				self.contact.firstName = newValue.firstName;
				self.contact.lastName = newValue.lastName;
			}
		}

	});

	self.$watch("response.id", function(scope, newValue, oldValue) {

		if (angular.isDefined(newValue)) {
			self.contact.id = newValue;
			if (angular.isDefined(self.contact.login)) {
				self.contact.content = "";
			} else {
				clearAll();
			}
		}

	});

	self.send = function() {
		self.response = contactService.registerContact(self.contact);

	}

	var clearAll = function() {
		self.contact.firstName = "";
		self.contact.lastName = "";
		self.contact.email = "";
		self.contact.content = "";

	}

	self.clear = function() {

		if (angular.isDefined(self.contact.login)) {
			self.contact.content = "";
			self.contact.id = null;
		} else {

			clearAll();
			self.contact.id = null;
		}

	}

}
ContactCtrl.$inject = [ 'contactService', 'securityService' ];

function LepExamCtrl(sessionService, securityService, startService, $location) {
	var $securityService = securityService;
	var startService = startService
	var self = this;
	var location = $location;

	self.startExam = function() {
		// sessionId,lepId,langId,subSectionId
		// self.lepItems = startService.getLepExamItems(self.sessionId,
		// self.lepTypeId, self.langId, 50);
		// self.lepItems = startService.getLepExamItems(10,
		// 20, 30, 50);
		location.path('/startExam').search({
			lepTypeId : self.lepTypeId,
			sessionId : self.sessionId
		});
	}

	self.sessionId = "10";

	self.langId = 10;

	self.lepTypeId = 10;

	self.loggedUser = securityService.getLoggedUser();

}
LepExamCtrl.$inject = [ 'lepSessionService', 'securityService',
		'startLepService', '$location' ];

function ResolveExamCtrl(startService, $window) {
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
		return ((self.correctans / (self.correctans + self.incorrectans)) * 100)
				.toFixed(2);
	}

	self.quantity = 0;

	self.error = false;
	self.errorMsg = "";

	self.questionQuantity = function() {

		// self.quantity = angular.Array.count(self.lepItems);
		return self.quantity;
	}

	self.finishLepTest = function() {
		self.endLep = new Date();
		if (angular.isArray(self.lepItems.lepItems)) {
			var count = angular.Array.count(self.lepItems.lepItems, function(
					lepItem) {
				return !lepItem.disabled;

			});

			if (count > 198) {
				self.error = true;
				self.errorMsg = "Nie zostały zaznaczone wszyskie odpowiedzi.";
			} else {
				self.error = false;
				self.endLep = new Date();
				$window.scrollTo(0, 0);
			}

		}
	}

	self.check = function(item, type) {
		if (item.correct_ans == type) {
			item['style' + type] = "ans_correct";
			item.isCorrect = true;
			self.correctans++;
		} else {
			item['style' + type] = "ans_incorrect";
			item['style' + item.correct_ans] = "ans_correct";
			item.isCorrect = false;
			self.incorrectans++;

		}
		item.disabled = true;

	}

}

ResolveExamCtrl.$inject = [ 'startLepService', '$window' ];

function LogoutCtrl(securityService) {
	var $securityService = securityService;
	var self = this;

	self.loggedUser = securityService.getLoggedUser();
}
LogoutCtrl.$inject = [ 'securityService' ];

function LoginCtrl($routeParams) {

	var self = this;

	self.params = $routeParams;

	self.error = self.params.error;

}

LoginCtrl.$inject = [ '$routeParams' ];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

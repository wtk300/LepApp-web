/* App Controllers */
function RegisterCtrl(userService) {
	var self = this;
	self.userService = userService;

	self.newUser = {};

	self.loginPattern = /^[a-z0-9_]{5,10}$/;
	
	self.passwordPattern = /^[a-zA-Z0-9_!@#$%]{5,20}$/

	self.requiredField = 'Pole wymagane.';

	self.showError = false;

	var cleanUser = function(scope) {
		scope.newUser.login = "";
		scope.newUser.firstName = "";
		scope.newUser.lastName = "";
		scope.newUser.email = "";
		scope.newUser.repeatpassword = "";
		scope.newUser.password = "";
		scope.newUser.acceptTerms = false;
		scope.showError = false;
	}

	self.$watch("response.id", function(scope, newValue, oldValue) {
		if (angular.isDefined(newValue)) {
			//cleanUser(scope)
		}
	});

	this.register = function() {
		self.showError = true;
		
		if (self.newUser.acceptTerms == false) {
			self.showInfoTerms = true;
			return;
		} else {
			self.showInfoTerms = false;
		}
		
		if (self.registerForm.$valid){
			self.newUser.password = hex_md5(self.newUser.password);
			self.newUser.repeatpassword = hex_md5(self.newUser.repeatpassword);
			self.response = userService.regiserUser(self.newUser);
			cleanUser(this);
		}

		
	}
	
	this.cancel = function(){
		
		cleanUser(this);
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

	self.$watch("loggedUser.user", function(scope, newValue, oldValue) {

		scope.contact.id = undefined;
		if (angular.isDefined(newValue)) {

			if (newValue.isAuth == 'true') {

				scope.contact.login = newValue.login;
				scope.contact.firstName = newValue.firstName;
				scope.contact.lastName = newValue.lastName;
				scope.contact.authUser = true;
			} else {
				scope.contact.authUser = false;
			}

		}

	});

	self.$watch("response.id", function(scope, newValue, oldValue) {

		if (angular.isDefined(newValue)) {
			scope.contact.id = newValue;
			if (angular.isDefined(scope.contact.login)) {
				scope.contact.content = "";
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

	self.isUserAuth = false;

	self.$watch("loggedUser.user", function(scope, newValue, oldValue) {

		scope.isUserAuth = false;
		if (angular.isDefined(newValue)) {

			if (newValue.isAuth == 'true') {

				scope.isUserAuth = true;
			} else {
				scope.isUserAuth = false;
			}

		}

	});

	self.startExam = function() {
		// sessionId,lepId,langId,subSectionId
		this.lepItems = startService.getLepExamItems(self.sessionId,
				self.lepTypeId, self.langId, 50);

		location.path('/startExam').search({
			lepTypeId : self.lepTypeId,
			sessionId : self.sessionId
		});
	}

	self.sessionId = "10";

	self.langId = 10;

	self.lepTypeId = 10;

}
LepExamCtrl.$inject = [ 'lepSessionService', 'securityService',
		'startLepService', '$location' ];

function ResolveExamCtrl($startService, $window) {

	var self = this;

	self.startService = $startService;
	self.startLep = new Date();
	self.endLep = undefined;
	self.correctans = 0;
	self.incorrectans = 0;

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

	self.lepItems = self.startService.getCurrentLepItems();

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

function LogoutCtrl(securityService,$xhr,$location) {
	var $securityService = securityService;
	var self = this;
	self.xhr = $xhr;
	self.location = $location;
	
	self.logout = function(){
		self.xhr('GET', 'logout', function(code, response) {

			self.refreshUser();
			self.location.path('/login').search({
				code : code+2000
			}).replace();
			

		}, function(code, response) {
			self.refreshUser();
			self.location.path('/login').search({
				code : code+3000
			}).replace();
		});
	}
	
	this.logout();
	
}
LogoutCtrl.$inject = [ 'securityService','$xhr','$location' ];

function LoginCtrl($routeParams, $xhr, $location) {

	var self = this;

	self.params = $routeParams;

	self.xhr = $xhr;

	self.location = $location;

	self.error = self.params.error;

	self.username = "admin";
	self.password = "admin";

	this.send = function() {

		self.xhr('POST', 'j_spring_security_check?j_username=' + self.username
				+ '&j_password=' + self.password, function(code, response) {

			self.refreshUser();
			self.location.path('/chooseExam').search({
				code : code
			}).replace();

		}, function(code, response) {
			self.refreshUser();
			self.location.path('/login').search({
				code : code
			});
		});
	}

}

LoginCtrl.$inject = [ '$routeParams', '$xhr', '$location' ];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

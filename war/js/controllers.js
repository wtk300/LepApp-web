/* App Controllers */
function RegisterCtrl(self,userService) {
	
	self.userService = userService;

	self.newUser = {};

	self.loginPattern = /^[a-z0-9_]{3,25}$/;

	self.passwordPattern = /^[a-zA-Z0-9_!@#$%]{5,20}$/

	self.requiredField = 'Pole wymagane.';

	self.showError = false;

	self.showSuccessRegistration = false;

	self.showBusyLogin = false;

	self.cleanUser = function() {
		self.newUser.login = "";
		self.newUser.firstName = "";
		self.newUser.lastName = "";
		self.newUser.email = "";
		self.newUser.repeatpassword = "";
		self.newUser.password = "";
		self.newUser.acceptTerms = false;
		self.showError = false;
	}

	self.$watch("response.id", function(newValue, oldValue,scope) {
		if (angular.isDefined(newValue)) {
			if (newValue > 0) {
				scope.showSuccessRegistration = true;
				scope.showBusyLogin = false;
				scope.cleanUser();

			}
			if (newValue == -1) {
				scope.showSuccessRegistration = false;
				scope.showBusyLogin = true;
			}

		}
	});

	self.register = function() {
		self.showError = true;

		
		if (self.newUser.acceptTerms == true) {
			
			self.showInfoTerms = false;
			if (self.registerForm.$valid && angular.equals(self.newUser.repeatpassword,self.newUser.password)) {

				self.forSendUser = angular.copy(self.newUser);
				self.forSendUser.password = hex_md5(self.newUser.password);
				self.forSendUser.repeatpassword = hex_md5(self.newUser.repeatpassword);
				self.response = userService.regiserUser(self.forSendUser);
			}
			
		} else {
			self.showInfoTerms = true;			
		}

	}

	self.cancel = function() {

		self.cleanUser();
	}
}

RegisterCtrl.$inject = ['$scope', 'userService' ];

function RootCtrl() {
}

function ContactCtrl($scope,contactService, securityService) {
	

	$scope.contactService = contactService;
	var $securityService = securityService;

	$scope.contact = {};

	$scope.$watch("loggedUser.user", function( newValue, oldValue,scope) {

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

	$scope.$watch("response.id", function( newValue, oldValue,scope) {

		if (angular.isDefined(newValue)) {
			scope.contact.id = newValue;
			if (angular.isDefined(scope.contact.login)) {
				scope.contact.content = "";
			} else {
				clearAll();
			}
		}

	});

	$scope.send = function() {		
		$scope.response = contactService.registerContact($scope.contact);		

	}

	var clearAll = function() {
		$scope.contact.firstName = "";
		$scope.contact.lastName = "";
		$scope.contact.email = "";
		$scope.contact.content = "";

	}

	$scope.clear = function() {

		if (angular.isDefined($scope.contact.login)) {
			$scope.contact.content = "";
			$scope.contact.id = null;
		} else {

			clearAll();
			$scope.contact.id = null;
		}

	}

}
ContactCtrl.$inject = ['$scope', 'contactService', 'securityService' ];

function LepExamCtrl(self,sessionService, securityService, startService, $location) {
	var $securityService = securityService;
	var startService = startService
	
	var location = $location;
	
	self.schuffle = true;
	
	self.lepSections = sessionService.getLepSections();
	
	self.lepTypes = sessionService.getLepTypes();

	self.isUserAuth = false;

	self.$watch("loggedUser.user", function(newValue, oldValue,scope) {

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
		self.lepItems = startService.getLepExamItems(self.sessionId,
				self.lepTypeId, self.langId, 50);

		location.path('/startExam').search({
			lepTypeId : self.lepTypeId,
			sessionId : self.sessionId
		});
	}

	self.sessionId = 10;

	self.langId = 10;

	self.lepTypeId = 10;
	
	self.sectionId = 1;

}
LepExamCtrl.$inject = [ '$scope','lepSessionService', 'securityService',
		'startLepService', '$location' ];

function ResolveExamCtrl(self,$startService, $window) {

	

	self.loading = true;

	self.$on("$afterRouteChange", function(current, previous) {

		current.currentScope.loading = false;

	});

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
	
	self.$watch('lepItems.lepItems',function(newValue,oldValue,scope){
		
		if (angular.isDefined(newValue)){			
			scope.quantity = newValue.length;
		}
	});

	self.questionQuantity = function() {

		
		self.quantity = angular.Array.count(self.lepItems);
		return self.quantity;
	}

	self.finishExam = function() {
		self.endLep = new Date();
		if (angular.isArray(self.lepItems.lepItems)) {
			
			//Array count nie dziala
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
		var value = 'disabled';
			// po chamsku	
		if (item.correct_ans == type) {
			item['style' + type] = "label label-success ";			
			item.isCorrect = true;
			self.correctans++;
		} else {
			item['style' + type] = "label label-important ";
			item['style' + item.correct_ans] = "label label-success ";
			item.isCorrect = false;
			self.incorrectans++;

		}	
		item.disabled = value;
		item.isdisabled = true;

	}

}

ResolveExamCtrl.$inject = ['$scope', 'startLepService', '$window' ];

function LogoutCtrl(self,securityService, $http, $location) {

	
	self.http = $http;
	self.location = $location;

	self.logout = function() {
		self.http.get('logout').success(
				function(data, status, headers, config) {

					self.refreshUser();
					self.location.path('/login').search({
						code : status + 2000
					}).replace();

				}).error(function(data, status, headers, config) {
			self.refreshUser();
			self.location.path('/login').search({
				code : status + 3000
			}).replace();
		});
	}

	self.logout();

}
LogoutCtrl.$inject = ['$scope', 'securityService', '$http', '$location' ];

function LoginCtrl(self,$routeParams, $http, $location) {

	

	self.params = $routeParams;

	self.http = $http;

	self.location = $location;

	self.error = self.params.error;
	
	self.showBadCredential = false;
	

	// self.username = "admin";
	// self.password = "admin";

	self.send = function() {

		self.http.post(
				'j_spring_security_check?j_username=' + self.username
						+ '&j_password=' + self.password)

		.success(function(data, status, headers, config) {
			self.refreshUser();
			self.location.path('/chooseExam').search({
				code : status
			}).replace();
		}).error(function(data, status, headers, config) {
			self.refreshUser();
			self.location.path('/login').search({
				code : status
			});
		});

	}

}

LoginCtrl.$inject = ['$scope', '$routeParams', '$http', '$location' ];

function NewsCtrl($scope){
	$scope.title = 'hahah';
}

NewsCtrl.$inject = ['$scope'];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

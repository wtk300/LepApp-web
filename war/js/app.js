angular.module('lepModule', ['lepModule.services', 'lepModule.widgets','ngResource'])
   .config(['$routeProvider',  function($route) {


	  $route.when('/contact', {template: 'partials/contact.html', controller: ContactCtrl});
	  $route.when('/home', {template: 'partials/home.html', controller: MyCtrl2});
	  $route.when('/map', {template: 'partials/map.html', controller: MyCtrl2});
	  $route.when('/login', {template: 'login.html', controller:LoginCtrl});
	  $route.when('/register', {template: 'partials/register.html', controller:RegisterCtrl});
	  $route.when('/aboutExam', {template: 'partials/aboutExam.html', controller:undefined});
	  $route.when('/chooseExam', {template: 'partials/chooseExam.html', controller:LepExamCtrl});
	  $route.when('/startExam', {template: 'secured/start.html', controller:ResolveExamCtrl});
	  $route.when('/logout', {template: '/logout', controller:LogoutCtrl});
	  $route.when('/logoutsuccess', {template: 'partials/logoutsuccess.html', controller:LogoutCtrl});
	  $route.when('/loginerror', {template: 'partials/loginerror.html', controller:undefined});
	  $route.when('/news', {template: 'partials/news.html', controller:undefined});
  
  	
	  $route.otherwise({
	  	   redirectTo : "/login"
	  });

  }])
  .run(['$rootScope','lepSessionService','securityService',function($rootScope,sessionService,securityService){
	  
	  	 $rootScope.lepItems = {};
		 $rootScope.loggedUser = securityService.getLoggedUser();
		
		 $rootScope.refreshUser = function(){
			$rootScope.loggedUser = securityService.getLoggedUser();
		 }
		 $rootScope.$watch('loggedUser.user.isAuth',function(newValue,oldValue,scope){		 
			 if (angular.isDefined(newValue)){
				 scope.isAuth = newValue;
			 }else{
				 scope.isAuth = false;
			 }
		 })
		
		 $rootScope.sessions = sessionService.getSessionsInfo();
		
		 $rootScope.isAuth = false;

	  
  }]);


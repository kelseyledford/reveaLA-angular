var LaApp = angular.module('LaApp', ["ui.router", "mgcrea.ngStrap", 'mgcrea.ngStrap.modal']);

LaApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to start modal
  $urlRouterProvider.otherwise("/");

  // Sets up the states
  $stateProvider
	  .state("map", {
	  	url: "/map",
	  	templateUrl: "../reveaLA-angular/partials/map.html"
	  })
	  .state("start", {
	  	url: "/start",
	  	templateUrl: "../reveaLA-angular/partials/start.html"
	  })
	  .state("signup", {
	  	url: "/signup",
	  	templateUrl: "../reveaLA-angular/partials/signup.html"
	  })
	  .state("signin", {
	  	url: "/signin",
	  	templateUrl: "../reveaLA-angular/partials/signin.html"
	  })
	  .state("tutorial", {
	  	url: "/tutorial",
	  	templateUrl: "../reveaLA-angular/partials/tutorial.html"
	  })
	  .state("tourtype", {
	  	url: "/tourtype",
	  	templateUrl: "../reveaLA-angular/partials/tourtype.html"
	  })
	  .state("found", {
	  	url: "/found",
	  	templateUrl: "../reveaLA-angular/partials/found.html"
	  })
});

LaApp.controller('LaController', function ($scope) {

	function skrollr() {
    var s = skrollr.init();
	};  

	function login(){
	    var onSuccessCallback = function(data) {
	        $rootScope.currentUserSignedIn = true;
	    };
	    // Login function to the server comes here
	    $location.path('/map')
	};

});

	
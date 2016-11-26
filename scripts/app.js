var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config (['$routeProvider',function($routeProvider){
	$routeProvider.when("/home",{
		templateUrl : "app/home.html",
		controller : "homeCtrl"
	}).when("/about",{
		templateUrl : "app/about.html"
		
	}).when("/contact",{
		templateUrl : "app/contact.html",
		controller: "contactCtrl"
		
	}).when("/hairstyle",{
		templateUrl : "app/hairstyle.html"
		
	}).when("/news",{
		templateUrl : "app/news.html"
		
	})
	.otherwise({
	redirectTo: '/home'
	})
	}]);


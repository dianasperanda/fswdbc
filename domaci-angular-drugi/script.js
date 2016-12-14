var appModule = angular.module("hwapp", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when("/homework", {
		templateUrl: "homework.html",
		controller: "homeworkController"
	}).when("/profile", {
		templateUrl: "profile.html",
		controller: "profileController"
	}).otherwise({
		redirectTo: '/profile'
	});
});
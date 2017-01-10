var appModule = angular.module("hwapp", ["ngRoute"]);

appModule.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when("/homework", {
		templateUrl: "pages/homework/homework.html",
		controller: "homeworkController"
	}).when("/profile", {
		templateUrl: "pages/profile/profile.html",
		controller: "profileController"
	}).when("/random", {
		templateUrl: "pages/randomUser/random.html",
		controller: "randomController"
	}).otherwise({
		redirectTo: '/profile'
	});
});
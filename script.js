// kontroler
//dokumentacija na docs.angularjs.org/api

var appModule = angular.module("app", []);

appModule.controller("homeController", function($scope) {
	$scope.ime = "";
	$scope.varijabla = "neki tekst za prikazati u view";

	$scope.isClicked = false;
});
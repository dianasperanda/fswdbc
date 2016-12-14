appModule.controller("profileController", function($scope) {
	$scope.person = {
		name: "",
		surname: "",
		years: "",
		inventory: []
	};
	$scope.value = "";
	$scope.Add = function() {
		$scope.person.inventory.push($scope.value);

	}


});

/*
	$scope.prvi = "";
	$scope.drugi = "";

	$scope.clean = function() {
		$scope.prvi = "";
		$scope.drugi = "";
	};

	$scope.hide = function() {
		return ($scope.prvi + $scope.drugi) < 100;
	}*/
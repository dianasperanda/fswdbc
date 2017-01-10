appModule.controller("profileController", function($scope) {
	$scope.person = {
		name: "",
		surname: "",
		years: "",
		inventory: []
	};
	
	$scope.value = {
		product: "",
		serialNumber: 1,
		price: 0,
		about: "",
		available: false
	};

	$scope.Check = function() {
		return $scope.value.product == "" || $scope.value.serialNumber == 0 || $scope.value.price == 0 || $scope.value.serialNumber < 0 || $scope.value.serialNumber > 10000;
	}

	$scope.Add = function() {
			$scope.person.inventory.push(
			{
				product: $scope.value.product,
				serialNumber: $scope.value.serialNumber,
				price: $scope.value.price,
				about: $scope.value.about,
				available: $scope.value.available
			});
		
	}
});

appModule.directive("productDisplay", function() {

	return {
		templateUrl: 'pages/profile/productDisplay.html'
	};
});

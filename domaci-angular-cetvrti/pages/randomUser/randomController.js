appModule.controller("randomController", function( $scope, profileService) {

	$scope.sexInput = "female";
	$scope.nationalityInput = "GB";

	$scope.Submit = function() {
		profileService.funkcija($scope.sexInput, $scope.nationalityInput).then(function(r)
			{
				$scope.data = r.results[0];
				//alert($scope.data);
				//$scope.data = JSON.parse(r);
			});
		
	}

	
});
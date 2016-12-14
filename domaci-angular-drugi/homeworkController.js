appModule.controller("homeworkController", function($scope) {
	$scope.prvi = "";
	$scope.drugi = "";

	$scope.clean = function() {
		$scope.prvi = "";
		$scope.drugi = "";
	};

	$scope.hide = function() {
		return ($scope.prvi + $scope.drugi) < 100;
	}
});
appModule.factory("profileService",  function($http) {

	return {
		funkcija: function(gend, nat) {

		var params = { gender: gend, nationality: nat};

		var promise = $http.get("https://randomuser.me/api/", {params: params}).then(function (response) {
			return response.data;
		});
		
		return promise;
	}
	}
});
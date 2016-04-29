angular.module('shoepairService', [])

	// super simple service
	// each function returns a promise object
	.factory('Shoepairs', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/shoepairs');
			},
			create : function(shoepairData) {
				return $http.post('/api/shoepairs', shoepairData);
			},
			delete : function(id) {
				return $http.delete('/api/shoepairs/' + id);
			}
		}
	}]);

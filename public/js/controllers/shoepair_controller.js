angular.module('shoepairController', [])

	// inject the Shoepairs service factory into our controller
	.controller('mainController', ['$scope','$http','Shoepairs', function($scope, $http, Shoepairs) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all shoepairs and show them
		// use the service to get all the shoepairs
		Shoepairs.get()
			.success(function(data) {
				$scope.shoepairs = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createShoepair = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.name != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Shoepairs.create($scope.formData)

					// if successful creation, call our get function to get all the new shoepairs
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.shoepairs = data; // assign our new list of shoepairs
					});
			}
		};

		// DELETE ==================================================================
		// delete a shoepair after checking it
		$scope.deleteShoepair = function(id) {
			$scope.loading = true;

			Shoepairs.delete(id)
				// if successful creation, call our get function to get all the new shoepairs
				.success(function(data) {
					$scope.loading = false;
					$scope.shoepairs = data; // assign our new list of shoepairs
				});
		};
	}]);

angular.module('userController', [])

	// inject the Users service factory into our controller
	.controller('userController', ['$scope','$http','Users', function($scope, $http, Users) {
		$scope.userFormData = {};
		$scope.userLoading = true;

		// GET =====================================================================
		// when landing on the page, get all users and show them
		// use the service to get all the users
		Users.get()
			.success(function(data) {
				$scope.users = data;
				$scope.userLoading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createUser = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.userFormData.username != undefined) {
				$scope.userLoading = true;

				// call the create function from our service (returns a promise object)
				Users.create($scope.userFormData)

					// if successful creation, call our get function to get all the new users
					.success(function(data) {
						$scope.userLoading = false;
						$scope.userFormData = {}; // clear the form so our user is ready to enter another
						$scope.users = data; // assign our new list of users
					});
			}
		};

		// DELETE ==================================================================
		// delete a user after checking it
		$scope.deleteUser = function(id) {
			$scope.userLoading = true;

			Users.delete(id)
				// if successful creation, call our get function to get all the new users
				.success(function(data) {
					$scope.userLoading = false;
					$scope.users = data; // assign our new list of users
				});
		};
	}]);

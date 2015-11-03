// Create an angular application called "sortApp"


// Define a controller "mainController" for you application, 
// making sure to pass in both the $scope and $http variables

	// Use and $http.get request to get the salary data
	
		// Set $scope.data equal to the data returned in your results

var sortApp = angular.module('sortApp', []);

sortApp.controller('mainController', function($scope, $http){

    $scope.sortType = "name";

    $http.get('data/salaries.json').then(function(response){
        $scope.data = response.data;

    });

});


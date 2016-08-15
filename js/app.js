

/*this module has an array that tells angular we're using the ngRoute feature for deeplinking (#ing) and specifies the js that handles this module */ 
var myApp = angular.module('myApp', [
	'ngRoute',
	'rcwControllers'
]);


//this will tell angular what happens when a specific path is followed
myApp.config(['$routeProvider', function($routeProvider){
	
	$routeProvider.
	when('/search',
	{
		templateUrl:'partials/search.html',//use the partial file under this name
		controller: 'SearchController'//from this controller	
	}).otherwise({
		redirectTo:'/search'
	});
	
	
	
}]);
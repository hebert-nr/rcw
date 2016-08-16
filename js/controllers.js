
/*
var myApp will contain all our code for the application. aka NameSpacing. and this will need to be pointed to from our HTML file, in the HTML tag.
 Inside the [] are directives.
 $scope is like a super-variable we can pass things from our JS to our app and template, and vice-versa
*/
var rcwControllers = angular.module('rcwControllers',['ui.bootstrap']);

/* We pass the scope and http in an array to keep from getting messed up by minification of css/js*/

rcwControllers.controller('SearchController', ['$scope', '$http', function ($scope, $http) {
	/*We can pass in external files rather than hard coding using the HTTP service. It pulls the data.js file containing all our JSON rather than having these hundreds of lines being hardcoded here in our controller.*/	
	$http.get('js/data.json').success(function(data){
	$scope.rcw = data;	
	});

	myApp.controller('NavController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected= function(checkTab){
			return this.tab === checkTab;
		};
	});
}]);

rcwControllers.controller('TitleDetailController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.rcw = data;
    $scope.whichTitle = $routeParams.itemId;
  });
}]);







/*Helps filter to a 1 unique item we're searching for, sort of like DISTINCT in SQL*/
myApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});
var myApp = angular.module('myApp',[]);

myApp.controller('ForcastController', ['$scope', function($scope) {
  $scope.forcastvisitors = function(value) { return value * 1; };

}])

myApp.controller('ForcastBasektSizeController', ['$scope', function($scope) {
  $scope.forcastbasketsizecurrent = function(value) { return value * 1.0; };
  $scope.forcastbasketsize = function(value) { return value * 1.15; };

}])



myApp.controller('ForcastConversionController', ['$scope', function($scope) {
  $scope.forcastconversionrate = function(value) { return value * 0.01; };

}]);




  
  




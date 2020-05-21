import { weatherApp } from './app.js';

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path('/forecast'); 
  };


}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams','cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
  $scope.city = cityService.city;

  $scope.forecasts = $routeParams.forecasts || '2';

  weatherService.getWeather($scope.city, $scope.forecasts).then((result) => {
    $scope.weatherForecast = result.list;
  });

   $scope.convertToC = function(tempK) {
      return Math.round(tempK - 273.15);
   }

   $scope.convertDate = function(timestamp) {
     return new Date(timestamp * 1000);
   }
}]);
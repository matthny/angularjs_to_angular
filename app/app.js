import { HomeController } from './app.controller';

export const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function (
  $scope, 
  $location, 
  cityService
) { 
    return new HomeController(
      $scope, 
      $location, 
      cityService
    )
  }
]);
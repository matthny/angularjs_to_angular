import { HomeController } from './app.controller';
import { SearchComponent } from './search/search.component';
import { SearchController } from './search/search.controller';

export const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.component('search', new SearchComponent());

weatherApp.controller('SearchController', [
  '$scope',
  '$location',
  'cityService',
  function(
    $scope,
    $location,
    cityService
  ) {
    return new SearchController(
      $scope,
      $location,
      cityService
    )
}]);

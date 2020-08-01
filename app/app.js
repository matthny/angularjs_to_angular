import { SearchComponent } from './search/search.component';
import { SearchController } from './search/search.controller';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastController } from './forecast/forecast.controller';

export const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.component('search', new SearchComponent());

weatherApp.controller('SearchController', [
  '$scope',
  '$location',
  'cityService',
  function (
    $scope,
    $location,
    cityService
  ) {
    return new SearchController(
      $scope,
      $location,
      cityService
    )
  }
]);

weatherApp.component('forecast', new ForecastComponent());

weatherApp.controller('ForecastController', [
  '$scope',
  '$routeParams',
  'cityService',
  'weatherService',
  function (
    $scope,
    $routeParams,
    cityService,
    weatherService
  ) {
    return new ForecastController(
      $scope,
      $routeParams,
      cityService,
      weatherService
    )
  }
]);
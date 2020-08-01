import { SearchComponent } from './search/search.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CityService } from './services/city.service';
import { WeatherService } from './services/weather.service';

export const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.component('search', new SearchComponent());

weatherApp.component('forecast', new ForecastComponent());

weatherApp.service('cityService', function() { return new CityService() });

weatherApp.service('weatherService', ['$resource', function($resource) {
  return new WeatherService($resource);
}]);

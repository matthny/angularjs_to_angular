import { weatherApp } from './app.js';

weatherApp.service('cityService', function() {
  this.city = 'London';
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast');

  this.getWeather = function(city, forecastsAmount) {
    let weatherResult = this.weatherAPI.get({
      q: city,
      cnt: forecastsAmount,
      appid: '2364ac61687b970ff020344e829e7f5c'
    })

    return weatherResult.$promise;
  }
}]);
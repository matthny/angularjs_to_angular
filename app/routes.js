import { weatherApp } from './app.js';

weatherApp.config(function($routeProvider, $locationProvider) {

  // Bez tego należy dodać wykrzyknik do linka (html linie 35, 36)
  // Ponieważ najnowsza wersja angulara js dodaje sama znak '!'
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })

    .when('/forecast/:forecasts', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
});

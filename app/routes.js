import { weatherApp } from './app.js';

weatherApp.config(function($routeProvider, $locationProvider) {

  // Bez tego należy dodać wykrzyknik do linka (html linie 35, 36)
  // Ponieważ najnowsza wersja angulara js dodaje sama znak '!'
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      template: '<search></search>',
    })
    .when('/forecast', {
      template: '<forecast></forecast>',
    })

    .when('/forecast/:forecasts', {
      template: '<forecast></forecast>',
    })
});

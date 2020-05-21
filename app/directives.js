import { weatherApp } from './app.js';

weatherApp.directive("weatherReport", function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weather-report.html',
    replace: false,
    scope: {
      weather: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
});

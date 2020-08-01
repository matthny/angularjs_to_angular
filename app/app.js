import { SearchComponent } from './search/search.component';
import { SearchController } from './search/search.controller';
import { ForecastComponent } from './forecast/forecast.component';
import { ForecastController } from './forecast/forecast.controller';

export const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


weatherApp.component('search', new SearchComponent());

weatherApp.component('forecast', new ForecastComponent());

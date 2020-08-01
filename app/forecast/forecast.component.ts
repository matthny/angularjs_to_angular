import { ForecastController } from "./forecast.controller"

export class ForecastComponent implements ng.IComponentOptions {

  templateUrl = './forecast/forecast.html'

  controller = ['$scope', '$routeParams','cityService', 'weatherService', ForecastController]
}

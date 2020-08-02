import { WeatherReportController } from "./weather-report.controller";

export class WeatherReportComponent implements ng.IComponentOptions {

  templateUrl = './weather-report/weather-report.html';
  
  controller = [WeatherReportController];
  
  bindings = {
    weather: '<',
    dateFormat: '<'  
  }
}


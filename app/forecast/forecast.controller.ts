
export class ForecastController {

  public city;
  public forecasts;
  public weatherForecast;

  constructor(
    public $routeParams,
    private cityService,
    private weatherService
  ) {
    this.city = this.cityService.city;
  
    this.forecasts = $routeParams.forecasts || '2';
  
    this.weatherService.getWeather(this.city, this.forecasts).then((result) => {
      this.weatherForecast = result.list;
    });
  }

  public convertToC = function(tempK) {
    return Math.round(tempK - 273.15);
  }

  public convertDate = function(timestamp) {
    return new Date(timestamp * 1000);
  }
}


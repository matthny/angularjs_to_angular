
export class ForecastController {

  public city;
  public forecasts;
  public weatherForecast = [];

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


}


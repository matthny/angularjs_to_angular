export class WeatherService {

  private weatherAPI = this.$resource('https://api.openweathermap.org/data/2.5/forecast');

  constructor(
    private $resource
  ) {}

  getWeather = function(city, forecastsAmount) {
    let weatherResult = this.weatherAPI.get({
      q: city,
      cnt: forecastsAmount,
      appid: '2364ac61687b970ff020344e829e7f5c'
    })

    return weatherResult.$promise;
  }
}
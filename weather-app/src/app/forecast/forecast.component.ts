import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  public city;
  public forecasts;
  public weatherForecast = [1, 2, 3];

  constructor(
    // public $routeParams,
    private cityService: CityService,
    private weatherService: WeatherService
  ) {
    this.city = this.cityService.city;

    // TODO
    // this.forecasts = $routeParams.forecasts || '2';
    this.forecasts = '2';

    this.weatherService.getWeather(this.city, this.forecasts).subscribe((result) => {
      this.weatherForecast = result.list;
    });
  }


}

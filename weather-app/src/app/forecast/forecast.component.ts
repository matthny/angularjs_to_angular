import { Component, OnInit } from '@angular/core';

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
    // private cityService,
    // private weatherService
  ) {
    // this.city = this.cityService.city;
  
    // this.forecasts = $routeParams.forecasts || '2';
  
    // this.weatherService.getWeather(this.city, this.forecasts).then((result) => {   
    //   this.weatherForecast = result.list;
    // });
  }


}

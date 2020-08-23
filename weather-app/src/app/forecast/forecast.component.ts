import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public city: string;
  public forecasts: string;
  public weatherForecast: any;

  public isLoading: boolean;
  public isFound: boolean;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private weatherService: WeatherService
    ) {
      this.city = this.cityService.city;

      this.forecasts =  this.route.snapshot.params['forecasts'] || '2';
    }


    ngOnInit() {
      this.isLoading = true;
      this.isFound = false;

      this.weatherService.getWeather(this.city, this.forecasts).subscribe(
        (result) => {
          this.isFound = true;
          this.weatherForecast = result.list;
        },
        (error) => {
          this.isFound = false;
          console.log('error');
        })
        .add(
          () => {
            this.isLoading = false;
        });
    }

}

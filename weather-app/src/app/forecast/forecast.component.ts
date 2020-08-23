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

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private weatherService: WeatherService
    ) {
      this.city = this.cityService.city;

      this.forecasts =  this.route.snapshot.params['forecasts'] || '2';

      this.weatherService.getWeather(this.city, this.forecasts).subscribe((result) => {
        this.weatherForecast = result.list;
      });
    }

    ngOnInit() {
    }
}

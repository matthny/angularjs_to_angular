import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  @Input() weather: any;

  @Input() dateFormat: string;

  public temp: number;
  public tempDate: Date;

  private static convertToC(tempK) {
    return Math.round(tempK - 273.15);
  }

  private static convertDate(timestamp) {
    return new Date(timestamp * 1000);
  }

  constructor(
  ) {
  }

  ngOnInit() {
    this.temp = WeatherReportComponent.convertToC(this.weather.main.temp);
    this.tempDate = WeatherReportComponent.convertDate(this.weather.dt);
  }
}


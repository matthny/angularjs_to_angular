import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  @Input() weather;

  @Input() dateFormat;

  public temp;
  public tempDate;

  constructor(
  ) {
  }

  ngOnInit() {
    this.temp = this.convertToC(this.weather.main.temp);
    this.tempDate = this.convertDate(this.weather.dt);
  }

  private convertToC(tempK) {
    return Math.round(tempK - 273.15);
  }

  private convertDate(timestamp) {
    return new Date(timestamp * 1000);
  }

}

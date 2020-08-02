export class WeatherReportController implements ng.IComponentController {

  public weather;
  public dateFormat;

  public temp;
  public tempDate;

  constructor(

  ) {
  }

  public $onChanges(): void {
    console.log(this.dateFormat);
    this.temp = this.convertToC(this.weather.main.temp);
    this.tempDate = this.convertDate(this.weather.dt);
  }

  private convertToC = function(tempK) {
    return Math.round(tempK - 273.15);
  }

  private convertDate = function(timestamp) {
    return new Date(timestamp * 1000);
  }
}
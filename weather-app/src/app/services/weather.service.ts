import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  

  constructor(private http: HttpClient) { }

  public getWeather(city, forecastsAmount): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&cnt=${forecastsAmount}&appid=${'2364ac61687b970ff020344e829e7f5c'}`);
  }
}

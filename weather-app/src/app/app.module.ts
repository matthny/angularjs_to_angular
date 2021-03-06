import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherReportComponent } from './weather-report/weather-report.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ForecastComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

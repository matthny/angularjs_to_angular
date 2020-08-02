import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ForecastComponent } from './forecast/forecast.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'forecast', component: ForecastComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

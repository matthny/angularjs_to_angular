import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public city: string;

  constructor(
    private cityService: CityService,
    private router: Router
  ) {
    this.city = this.cityService.city;
  }

  ngOnInit() {
  }

  public submit() {
    this.cityService.city = this.city;
    this.router.navigate(['/forecast']);
  }
}

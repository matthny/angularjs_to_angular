export class SearchController implements ng.IComponentController {

  public city: string;

  constructor(
    public $location,
    private cityService
  ) {
    this.city = this.cityService.city;
  }

  public submit() {
    this.cityService.city = this.city;
    this.$location.path('/forecast');
  }
}
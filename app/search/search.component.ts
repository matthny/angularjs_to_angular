import { SearchController } from "./search.controller";

export class SearchComponent implements ng.IComponentOptions {

  controller = ['$scope', '$location', 'cityService', SearchController];

  templateUrl = './search/search.html';

}

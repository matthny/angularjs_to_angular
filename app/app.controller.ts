// export class HomeController {

//   constructor(
//     public $scope,
//     public $location,
//     private cityService
//   ) {
//     $scope.city = cityService.city;

//     $scope.$watch('city', function() {
//       cityService.city = $scope.city;
//     });
  
//     $scope.submit = function() {
//       $location.path('/forecast'); 
//     };
//   }
// }
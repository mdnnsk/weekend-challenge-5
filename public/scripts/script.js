var myApp = angular.module('myApp', []);



myApp.controller('controller', ['$scope', '$http', function( $scope , $http ){
  var refreshPage = function(){
    $http({
      method: "GET",
      url: "/pets",
    }).then( function( response ){
      $scope.allThePets = response.data;
      // console.log(response.data);
    });
  };
 refreshPage();
  //collect user input from form
  $scope.getUserInput = function(){
    console.log("in getuserinput " + $scope.petNameIn + " " + $scope.petTypeIn + " " + $scope.petAgeIn + " " +  $scope.urlIn);
    //
    var petIn = {
      pet_name: $scope.petNameIn,
      pet_type: $scope.petTypeIn,
      pet_age: $scope.petAgeIn,
      image_url: $scope.urlIn
    };
      $scope.petNameIn='';
      $scope.petTypeIn='';
      $scope.petAgeIn='';
      $scope.urlIn='';
    // document.getElementById("petForm").reset();
    // petForm.$setPristine();-no work :(
console.log('in scope' + petIn);
    $http({
      method: 'POST',
      url: '/pets',
      data: petIn
    }).then(refreshPage());
  }; //end getUserInput

  $scope.deletePet = function(){ //click delete
    var petId = {
    id: event.target.id
  };
    console.log(petId);
    $http({
      method: 'delete',
      url: '/pets',
      data: petId,
      // data: petId
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then( function mySuccess( response ) {
              refreshPage();
              console.log( response.data ) ;
          }, function myError( response ) {
              console.log( response.statusText ) ;
          });
  };// end delete pet
}]);

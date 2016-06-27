var myApp = angular.module('myApp', []);
myApp.controller('controller', ['$scope', '$http', function( $scope , $http ){

  $scope.getUserInput = function(){
    console.log("in getuserinput " + $scope.petNameIn + " " + $scope.petTypeIn + " " + $scope.petAgeIn + " " +  $scope.urlIn);
    var petIn = {
      pet_name: $scope.petNameIn,
      pet_type: $scope.petTypeIn,
      pet_age: $scope.petAgeIn,
      image_url: $scope.urlIn
    };
console.log('in scope' + petIn);
    $http({
      method: 'POST',
      url: '/pets',
      data: petIn
    });
  };

  $scope.getPets = function (){
    $http({
      method: 'GET',
      url: '/pets'
    }).then( function( response ){
      $scope.allThePets = response.data;
      console.log(response.data);
    });
  };

  // $interval(refreshAssignments(), 5000, 0, true);
}]);

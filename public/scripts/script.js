var myApp = angular.module('myApp', []);

myApp.controller('controller', ['$scope', '$http', function( $scope , $http ){
  $http({
    method: 'GET',
    url: '/pets'
    }).then( function( response ){
    $scope.allThePets = response.data;
    console.log(response.data);
    });

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
    $http({
        method: 'GET',
        url: '/pets'
      }).then( function( response ){
        $scope.allThePets = response.data;
        console.log(response.data);
      });

  };
}]);

(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope, $http){

    $scope.setup = function() {
      $http.get("/api/v1/people.json").then(function (response) {
        $scope.people = response.data["people"];
      });
    };

    $scope.addPerson = function(name, details) {
      var newPerson = { name: name, details: details };
      
      $http.post('/api/v1/people.json', newPerson).then(function(response) {
        $scope.people.push(newPerson);
      }, function (error) {
        $scope.error = error.statusText;
      });
    };
    
    $scope.toggleVisible = function(person) {
      person.detailsVisible = !person.detailsVisible;
    };
  });

}());

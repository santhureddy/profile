'use strict';

angular.module('angAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };


  /* carousel */
     $scope.slides = [];
    $scope.slides.push({text: 'Design', image: 'assets/images/img1.jpg'});
    $scope.slides.push({text: 'Develop', image: 'assets/images/img2.jpg'});
    $scope.slides.push({text: 'Deploy', image: 'assets/images/img3.jpg'});
    

$scope.xList =[{"name":"a","number":"1","date":"1360413309421","class":"purple"},{"name":"b","number":"5","date":"1360213309421","class":"orange"},{"name":"c","number":"10","date":"1360113309421","class":"blue"},{"name":"d","number":"2","date":"1360113309421","class":"green"},{"name":"e","number":"6","date":"1350613309421","class":"green"},{"name":"f","number":"21","date":"1350613309421","class":"orange"},{"name":"g","number":"3","date":"1340613309421","class":"blue"},{"name":"h","number":"7","date":"1330613309001","class":"purple"},{"name":"i","number":"22","date":"1360412309421","class":"blue"}]

    
    $scope.setActive = function(idx) {
      $scope.slides[idx].active=true;
    }
  /* carousel */
  
  });

'use strict';

angular.module('angAppApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.goTo = function (path) {
      $location.path(path);
    };
  });

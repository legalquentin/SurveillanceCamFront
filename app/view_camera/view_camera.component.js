'use strict';

var mod = angular.module('camera');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/camera', {
    templateUrl: '/view_camera/view_camera.template.html',
    controller: 'cameraCtrl'
  });
}]);

mod.controller('cameraCtrl', ['$scope', function($scope) {
  $('#noCam')
  .modal('show');

  $scope.displayCamera = function displayCamera() {
    $('#watchCam')
    .modal('show');
  };
}]);

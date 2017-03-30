'use strict';

var mod = angular.module('data');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/data', {
    templateUrl: '/view_data/view_data.template.html',
    controller: 'dataCtrl'
  });
}]);

mod.controller('dataCtrl', ['$scope', function($scope) {
  $('#UploadBar').progress('increment');
  $('#DownloadBar').progress('increment');
  var text = '[{"Name": "Videos","Details": "Contain all monitoring videos","Type": "folder","Time": "29/03/2017"},{"Name": "Pictures","Details": "Contain all monitoring pictures","Type": "folder","Time": "28/03/2017"},{"Name": "Readme.txt","Details": "Readme before any operation","Type": "file","Time": "22/02/2017"},{"Name": "Logs.txt","Details": "Contain logs history","Type": "file","Time": "21/02/2017"}]';
  $scope.files = JSON.parse(text);
  console.dir($scope.files);
}]);

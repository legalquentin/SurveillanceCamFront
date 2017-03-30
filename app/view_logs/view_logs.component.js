'use strict';

var mod = angular.module('logs');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logs', {
    templateUrl: '/view_logs/view_logs.template.html',
    controller: 'logsCtrl'
  });
}]);

mod.controller('logsCtrl', [function() {
  $('.shape').shape();
  // $('.shape').style.width = "300px";
  // $('.shape').shape('refresh');
}]);

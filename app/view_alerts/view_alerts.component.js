'use strict';

var mod = angular.module('main');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alerts', {
    templateUrl: '/view_alerts/view_alerts.template.html',
    controller: 'alertsCtrl'
  });
}]);

mod.controller('alertsCtrl', [function() {
  $('.shape').shape();
  // $('.shape').style.width = "300px";
  // $('.shape').shape('refresh');
}]);

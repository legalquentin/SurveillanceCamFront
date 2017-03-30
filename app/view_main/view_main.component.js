'use strict';

var mod = angular.module('main');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/view_main/view_main.template.html',
    controller: 'mainCtrl'
  });
}]);

mod.controller('mainCtrl', [function() {
  $('.shape').shape();
  // $('.shape').style.width = "300px";
  // $('.shape').shape('refresh');
}]);

'use strict';

var mod = angular.module('login');

mod.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/view_login/view_login.template.html',
    controller: 'loginCtrl'
  });
}]);

mod.controller('loginCtrl', [function() {

}]);

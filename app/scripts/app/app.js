/*jshint unused:false */
/*global AngularApp:true */

'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
  return window._; // assumes underscore has already been loaded on the page
});
console.log('define module AngularApp', angular.module('ngMaterial'));
var AngularApp = angular.module('AngularApp',
  [ 'ngRoute',
    'ngMaterial',
    'ui.bootstrap',
    'underscore',
    'LocalStorageModule'
  ])
  .config([  '$routeProvider', 'localStorageServiceProvider',
    function ($routeProvider,   localStorageServiceProvider) {
      console.log('UserManagementApp config');
      localStorageServiceProvider.setPrefix('UserManagement');

      $routeProvider
        .when('', {
          redirectTo: '/home'
        })
        .when('/', {
          redirectTo: '/home'
        })
        .when('/home', {
          templateUrl: '../../views/Home.html',
          controller: 'HomeController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ])
  .run([     '$rootScope', '$location', '$log',
    function ($rootScope,   $location,   $log) {
      console.log('AngularApp run');
    }
  ]);
console.log('AngularApp defined');

/*jshint unused:false */
/*global CSVParserApp:true */

'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
  return window._; // assumes underscore has already been loaded on the page
});
console.log('define module CSVParserApp', angular.module('ngMaterial'));
var CSVParserApp = angular.module('CSVParserApp',
  [ 'ngRoute',
    'ngMaterial',
    'ui.bootstrap',
    'underscore',
    'LocalStorageModule'
  ])
  .config([  '$routeProvider', 'localStorageServiceProvider',
    function ($routeProvider,   localStorageServiceProvider) {
      console.log('CSVParserApp config');
      localStorageServiceProvider.setPrefix('CSVParser');

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
      console.log('CSVParserApp run');
    }
  ]);
console.log('CSVParserApp defined');

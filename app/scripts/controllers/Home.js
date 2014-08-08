'use strict';

CSVParserApp.controller('HomeController',
  [          '$scope', '$log',
    function ($scope,   $log) {
      var hcLog = 'HomeController';
      $log.info(hcLog, 'Home route invoked');

      $scope.init = function () {
        $log.debug('Home init');
      };

      $scope.init();
    }
  ]);


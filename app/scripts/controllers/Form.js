'use strict';

CSVParserApp.controller('FormController',
  [          '$scope', '$log', 'Data',
    function ($scope,   $log,   Data) {
      var fcLog = 'FormController';
      $log.info(fcLog, 'Form controller loaded', Data);

      $scope.csv = {data: ''};
      $scope.d = Data;

      $scope.parseCSV = function () {
        Data.parseCSV($scope.csv.data);
//        $scope.csv.data = '';
      };
    }
  ]
);

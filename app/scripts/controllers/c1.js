'use strict';

AngularApp.controller('C1Controller',
  [          '$scope', '$log', 'Data', 's1',
    function ($scope,   $log,   Data,   s1) {
      var c1Log = 'C1Controller';
      $log.info(c1Log, 'C1 controller loaded', Data);

      $scope.newItem = {name: ''};
      $scope.d = Data;

      $scope.addItem = function () {
        s1.addItem($scope.newItem);
        $scope.newItem.name = '';
      };
    }
  ]
);

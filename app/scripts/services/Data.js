AngularApp.factory('Data',
  [          '$log', 's1', 's2',
    function ($log,   s1,   s2) {
      'use strict';

      $log.info('Data service loaded');

      var d = {
        s1: s1,
        s2: s2,

        init: function () {
        }
      };

      d.init();

      return d;
    }
  ]);
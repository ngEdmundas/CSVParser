CSVParserApp.factory('s1',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('s1 service loaded');

      var s1 = {
        init: function () {
        }
/*
        getGroups: function () {
          $log.debug('getGroups', g.groups);
          return g.groups;
        },

        getGroup: function (groupId) {
          return g.groups[groupId];
        },

        addGroup: function (group) {
          var gk = Object.keys(g.groups);
          var id = Number(gk[gk.length - 1]) + 1;
          g.groups[id] = {
            name: group.name,
            members: []
          };
          $log.debug('addGroup', group, gk, id, g);
        },

        deleteGroup: function (groupKey) {
          var m = g.groups[groupKey].members;
          if (!m || m.length === 0) {
            delete g.groups[groupKey];
          }
        } */
      };

      s1.init();

      return s1;
    }
  ]);
AngularApp.factory('s2',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('s2 service loaded');

      var s2 = {
        init: function () {
        }
/*
        getUsers: function () {
          $log.debug('getUsers', u.users);
          return u.users;
        },

        getUser: function (userId) {
          return u.users[userId];
        },

        addUser: function (user) {
          var uk = Object.keys(u.users);
          var id = Number(uk[uk.length - 1]) + 1;
          u.users[id] = {
            name: user.name,
            memberOf: []
          };
          $log.debug('addUser', user, uk, id, u);
        },

        deleteUser: function (userId) {
          delete u.users[userId];
        } */
      };

      s2.init();

      return s2;
    }
  ]);
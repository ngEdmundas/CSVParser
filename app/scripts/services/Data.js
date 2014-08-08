CSVParserApp.factory('Data',
  [          '$log',
    function ($log) {
      'use strict';

      $log.info('Data service loaded');

      var CRLF = '\r\n';

      var d = {
        field: '',
        line: [],
        lines: [],
        rows: [],
        header: [],

        init: function () {
        },

        addLine: function () {
          d.lines.push(d.line);
          d.line = [];
          console.log('addLine d.lines=', d.lines);
        },

        addField: function () {
          d.line.push(d.field);
          d.field = '';
          console.log('addField d.field=', d.field);
        },

        addChar: function (c) {
          d.field += c;
          console.log('addChar d.field=', d.field);
        },

        parseCSV: function (csvData) {
          var inField = false;
          var fStart = true;
          var qField = false;
          var dQuote = false;
          var qEnd = false;

          for (var i = 0; i < csvData.length; i++) {
            var c = csvData[i];
            console.log('char c=', c);
            if (fStart) {
              console.log('inField c=', c);
//              if (c.match(/\s/)) {
              if (c.match(/\s/)) {
                //skip char
              }
              else if (c === '"') {
                qField = true;
              }
              else {
                inField = true;
                d.addChar(c);
              }
              fStart = false;
            }
            else if (inField) {
              console.log('inField c=', c);
              if (c === '\n') {
                d.addField();
                d.addLine();
                fStart = true;
              }
              else if (c === ',') {
                d.addField();
                fStart = true;
              }
              else {
                d.addChar(c);
              }
            }
            else if (qField) {
              console.log('qField c=', c);
              if (c === '"') {
                dQuote = true;
              }
              else {
                d.addChar(c)
              }
            }
            else if (dQuote) {
              console.log('dQuote c=', c);
              if (c === '"') {
                dQuote = false;
                d.addChar(c);
              }
              else {
                qEnd = true;
              }
            }

            if (qEnd) {
              console.log('qEnd c=', c);
              if (c.match(/\s/)) {
                // skip char
              }
              else if (c === '\n') {
                d.addField();
                d.addLine();
                fStart = true;
                qEnd = false;
              }
              else if (c === ',') {
                d.addField();
                fStart = true;
                qEnd = false;
              }
              else {
                throw Error('Non-space characters follow the last quote in field');
              }
            }
          }
          if (inField) {
            d.addField();
            d.addLine();
          }
          d.header = d.lines[0];
          d.rows = d.lines.slice(1);
        }
      };

      d.init();

      return d;
    }
  ]);
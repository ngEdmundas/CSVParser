var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

/*
app.get('/', function(req, res){
  res.send('hello world');
});
*/
app.listen(3000);
console.log('Express server launched at port 3000');

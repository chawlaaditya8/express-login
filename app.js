// Dependencies
var express = require('express');
var app = express();

// Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000);
console.log('App running on port 3000');


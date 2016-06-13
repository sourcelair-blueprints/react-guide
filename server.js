var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('React app listening on port 3000');
});
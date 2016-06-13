var express = require('express');
var path = require('path');

var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/', express.static(path.join(__dirname, 'public')));
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//bringing in my calculations module;
var calculations = require('./routes/calculations');

app.use(bodyParser.urlencoded({ extended: true }));

//define router to calculations file;
app.use('/calculations', calculations);

//set port for localhost;
app.set('port', process.env.PORT || 3000);

//catch all get for static files;
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function () {
  console.log('Server is running on port: ', app.get('port'));
});

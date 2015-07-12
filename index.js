var express = require('express');
var app = express();
var router = require('./routes');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(router);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



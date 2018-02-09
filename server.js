var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;

app.get('/', function(req, res) {
    fs.readFile('./index.html', function (err, data) {
        res.send( data.toString());
    });
});

app.use(express.static('.'));

app.listen(port);

console.log('Listening on port ' + port);

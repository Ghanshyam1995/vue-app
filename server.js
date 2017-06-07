var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var port = 3000;

app.use(express.static(path.join(__dirname, 'src/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'src/dist/Index.html'));
});

app.listen(port, function() {
    console.log('App listening on port :' + port);
});
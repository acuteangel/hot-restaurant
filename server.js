var express = require("express");
var routes = require('./routes/routes');

var app = express();
var PORT = 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

routes.setRoutes(app);

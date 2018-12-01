var path = require("path");
var data = require('../data/reservations');

exports.homeRoute_GET = function (server) {
    server.get("/", function (req, res) {
        console.log("get /");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

exports.viewRoute_GET = function (server) {
    server.get("/view", function (req, res) {
        console.log("get /view");
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
}

// retrieves
exports.reserveRoute_GET = function (server) {
    server.get("/reserve", function (req, res) {
        console.log("yo baby get /reserve");
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });
}



exports.reserveApiRoute_GET = function (server) {
    server.get("/api/reserve", function (req, res) {
        console.log("get /api/reserve");
        return res.json(data.reservations);
    });
}

exports.waitlistApiRoute_GET = function (server) {
    server.get("/api/waitlist", function (req, res) {
        console.log("get /api/waitlist");
        return res.json(data.waitlist);
    });
}

exports.reserveApiRoute_POST = function (server) {
    server.post("/", function (req, res) {
        // Push new reservation to data.
        data.addReservation(req.body);

        // Send back result.
        res.json(true);
    });
}

exports.setRoutes = function (server) {
    exports.homeRoute_GET(server);
    exports.viewRoute_GET(server);
    exports.reserveRoute_GET(server);
    exports.reserveApiRoute_GET(server);
    exports.waitlistApiRoute_GET(server);
    exports.reserveApiRoute_POST(server);
}

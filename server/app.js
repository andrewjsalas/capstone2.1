const bodyParser = require("body-parser");
const express = require("express");

const app = express();

// Parse body for urlencoded (non-JSON) data
app.use(bodyParser.urlencoded({ extended: false }));

// 404 handler
app.use(function(req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;

    // Pass the error to the next piece of middleware
    return next(err);
})

// General error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.render("error.html", { err });
});

module.exports = app;
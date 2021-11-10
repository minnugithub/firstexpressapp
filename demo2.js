var express = require("express");
var app = express();
/*app.get("/b",
  function (req, res, next) {
    console.log("the response will be sent by the next function");
    next();
  },
  function (req, res, next) {
    res.send("Hello from B1");
    next();
  },
  function (req, res) {
    res.send("Hello from A1");
  }
);*/

/*var f1 = function (req, res, next) {
  console.log("1 callback");
  next();
};
var f2 = function (req, res, next) {
  console.log("2nd callback");
  next();
};
var f3 = function (req, res) {
  res.send("3rd callback");
};
app.get("/", [f1, f2, f3]);*/

app
  .route("/book")
  .get(function (req, res) {
    res.send("my book");
  })
  .post(function (req, res) {
    res.send("send a book");
  });
app.listen(8000);

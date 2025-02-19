const express = require("express");
const app = express();
app.get(
  "/user",
  (req, res, next) => {
    console.log("Route handle");
    next();
  },
  (req, res, next) => {
    console.log("Route handle 2");
    next();
  },
  (req, res, next) => {
    console.log("Route handle 3");
    next();
  },
  (req, res, next) => {
    res.send("here is the response");
    
  }
);
app.listen(7777, () => {
  console.log("server is successfully running on port 7777");
});

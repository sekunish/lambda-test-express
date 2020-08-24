const express = require("express");
const app = express();

const os = require("os");

app.get("/", (req, res) => {
  res.send({
    Output: "Hello World!",
  });
});

app.post("/", (req, res) => {
  res.send({
    Output: "Hello World!",
  });
});

app.get("/test", (req, res) => {
  res.json({
    cpus: os.cpus(),
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;

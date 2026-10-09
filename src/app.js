const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("CI demo app\n"));
app.get("/health", (req, res) => res.json({ status: "ok" }));

module.exports = app;

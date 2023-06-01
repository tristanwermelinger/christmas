const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.all("*", (req, res) => {
  res.status(404).json({ message: "error" });
});

app.listen(3000, () => {
  console.log("Server started");
});

const express = require("express");
const app = express();
const axios = require("axios");
const sapins = require("./sapins.json");

app.use(express.json());

app.get("/", (req, res) => {
  //console.log(sapins);
  const arr = req.query.arrdt;
  //console.log(arr);
  let results = [];
  for (let i = 0; i < sapins.length; i++) {
    let infos = {
      garden: sapins[i].fields.jardin,
      address: sapins[i].fields.adresse,
      arrdt: sapins[i].fields.arrdt,
    };
    //console.log(sapins[i].garden);
    results.push(infos);
  }
  res.json(results);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "error" });
});

app.listen(3000, () => {
  console.log("Server started");
});

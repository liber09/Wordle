import express from "express";

const gameSettings = express.Router();

let settings: null = null;
gameSettings.post("/", (req, res) => {
  settings = req.body.data;

  res.send("Settings received");
});
gameSettings.get("/", (req, res) => {
  res.json({ settingData: settings });
});

export default gameSettings;
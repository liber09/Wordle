import express from "express";
import randomWord from "./src/server/randomWord.ts";
import gameSettings from "./src/server/gameSettings.ts";

import fs from "fs";
import cors from "cors";
import getRandomWord from "./src/server/getRandomWord.ts";
import {listOfWords} from "./src/words/words.ts";
//import dotenv from "dotenv";

//dotenv.config();

const app = express();
app.use("/api/randomword", randomWord);
/*
app.use(express.json());
app.use(express.static("../frontend/build"));
app.use("/dist", express.static("./dist"));
app.set("view engine", "ejs");
app.use(cors());

app.use("/api/randomword", randomWord);
app.use("/api/settings", gameSettings);

app.get("/information", (req, res) => {
  res.render("information", { currentPage: "information" });
});

*/

app.get("/random", (req, res) => {
  //res.send("test");
  const word = getRandomWord(5,true, listOfWords.toUpperCase().split(" "))
  //const word = randomWord.get("localhost");
  res.send(word);
});


app.get("/game", (req, res) => {
  fs.readFile("../frontend/public/index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
});


app.get("/"), (req:any, res:any) => {
  res.send("It works");
}


app.listen(5080, () =>{
  console.log(`\nServer listening on localhost:5080\n`);
  })
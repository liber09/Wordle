import express from "express";
import { listOfWords } from "../words/words";
import getRandomWord from "./getRandomWord";

const randomWord = express.Router();

interface SettingData {
  settingData: {
    wordLength: string;
    excludeUniqueLetters: boolean;
  }[];
}

randomWord.get("/", async (req, res) => {
  //was able to make this instead of fetching a hardcoded path, dont know why can't use /api/settings
  const startUrl = `${req.protocol}://${req.get("host")}`;
  const response = await fetch(`${startUrl}/api/settings`);
  const data = (await response.json()) as SettingData;

  let settingLength = parseInt(data.settingData[0].wordLength);
  let settingexcludeUniqueLetters = data.settingData[1].excludeUniqueLetters;

  const word = getRandomWord(5, false, listOfWords.toUpperCase().split(" "));
  res.status(200).json({
    data: {
      word: word,
    },
  });
});

export default randomWord;
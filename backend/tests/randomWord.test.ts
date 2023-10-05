import { describe, expect, test } from "@jest/globals";
import { getRandomWord } from "../src/server/getRandomWord";


/*
    This test is supposed to test if the logic to get random
    word is working correctly. It tests both to get word of specific length
    and if no word is matching.
*/

describe("GetWord(wordLength, excludeDuplicates, words)", () => {
  const words = ["Action", "tomato", "accept", "queen", "advance", "fantasy"];

  test("should return random word from array", () => {
    const result = getRandomWord(7, false, words);
    console.log(result);
    expect(words).toContain(result);
  });

  test("should use 'wordLength' as parameter for determine length of the random word", () => {
    const result = getRandomWord(5, false, words);
    expect(result).toEqual("queen");
    expect(result).not.toEqual("Action");
  });

  test("should use parameter 'excludeDuplicatedLetters' to exclude letters that contain letters more than once", () => {
    const result = getRandomWord(6, true, words);
    expect(result).not.toEqual("accept");
  });
  test("should return a error message if no words are found", () => {
    const result = getRandomWord(10, false, words);
    expect(result).toEqual("No matching words");
  });
});
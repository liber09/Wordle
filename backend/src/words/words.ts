import five_letters from "./5_letters.js";
import six_letters from "./6_letters.js";
import seven_letters from "./7_letters.js";

const words5Letters = five_letters.words.join(" ");
const words6Letters = six_letters.words.join(" ");
const words7Letters = seven_letters.words.join(" ");

export const listOfWords = words5Letters + words6Letters + words7Letters;
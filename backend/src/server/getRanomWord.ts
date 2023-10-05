export default function generateRandomWord(
    words: string[],
    wordLength: number,
    excludeDuplicates: boolean
  ) {
    let randomWordArr = [""];
  
    //Remove words that contain the same letter more than once
    function removeDuplicatedLetters() {
        words = words.filter((uniqueLetter) => {
        const uniqueLetters = new Set(uniqueLetter);
        return uniqueLetters.size === uniqueLetter.length;
      });
    }
  
    
    if (excludeDuplicates === false) {
      removeDuplicatedLetters();
    }
  
    //remove words that don't match the length of the word
    for (let i = 0; i < words.length; i++) {
      if (words[i].length == wordLength) {
        randomWordArr.push(words[i]);
      }
    }
  
    let randomWord =
      randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
  
    //error message in no words match the specific
    if (randomWord === undefined) {
      randomWord = "No word available";
    }
}
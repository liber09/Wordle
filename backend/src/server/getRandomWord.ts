export default function getRandomWord(
    wordLength: number,
    excludeDuplicates: boolean,
    words: string[]
  ): string{
    
    let randomWordArray: string[] = [];
  
    //Remove words that contain the same letter more than once
    function removeDuplicatedLetters() {
        words = words.filter((uniqueLetter) => {
        const uniqueLetters = new Set(uniqueLetter);
        return uniqueLetters.size === uniqueLetter.length;
      });
    }
  
    
    if (excludeDuplicates === true) {
      removeDuplicatedLetters();
    }
  
    //remove words that don't match the length of the word
    for (let i = 0; i < words.length; i++) {
      if (words[i].length == wordLength) {
        randomWordArray.push(words[i]);
      }
    }
    
    let randomWord;
    if(randomWordArray.length > 0){
      randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
    }else{
      randomWord = randomWordArray[0];
    }
    //error message in no words match the specific word
    if (randomWord === undefined || randomWord === "") {
      randomWord = "No matching words";
    }

    return randomWord;
}
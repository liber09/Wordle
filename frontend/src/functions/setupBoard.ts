export function setupBoard(wordLength: number) {
    
    const letterTiles = new Array(wordLength)
    for(let i = 0; i < wordLength; i++){
        letterTiles[i] = "";
    }
    return letterTiles;
  }
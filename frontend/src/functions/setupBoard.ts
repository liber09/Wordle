export function setupBoard(wordLength: number) {
    const board: string[][] = [];
    for (let i = 0; i < wordLength; i++) {
        board.push(["", "", "", "", ""]);
    }
    return board;
  }
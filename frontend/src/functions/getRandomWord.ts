export default async function getRandomWord():Promise<string> {
    const res = await fetch("/api/randomword");
    const data = await res.json();
    const randomWord = data.data.word;
    return randomWord;
  }
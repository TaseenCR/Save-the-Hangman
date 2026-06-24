import { useState } from "react"
import { HangmanDrawing } from "./Hangmandrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from "./words.json"
import meanings from "./wordMeanings.json"

function App() {
  const[curWordIdx, setCurWordIdx] = useState<number>(() => {
    return Math.floor(Math.random()*words.length)
  })
  const wordToGuess = words[curWordIdx]
  const wordMeaning = meanings[curWordIdx]

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return <div style={{
    maxWidth: "850px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.1rem",
    margin: "0 auto"
  }}>

    <div style={{fontSize: "2.1rem", textAlign: "center"}}>

    </div>
    <HangmanDrawing/>
    <HangmanWord/>
    <Keyboard/>
  </div>
}

export default App

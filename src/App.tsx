import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./Hangmandrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from "./words.json"
import meanings from "./wordMeanings.json"
import examples from "./wordExamples.json"

function getIdx(){
  return Math.floor(Math.random()*words.length)
}

function App(){
  const[curWordIdx, setCurWordIdx] = useState(getIdx)
  const wordToGuess = words[curWordIdx]
  const wordMeaning = meanings[curWordIdx]
  const wordExamples = examples[curWordIdx]

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => 
    guessedLetters.includes(letter)
  )

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if(guessedLetters.includes(letter) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return() => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key!=="Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setCurWordIdx(getIdx())
    }
    document.addEventListener("keypress", handler)
    return() => {
      document.removeEventListener("keypress", handler)
    }
  }, [])


  return <div style={{
    maxWidth: "850px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.1rem",
    paddingTop: "2.9rem",
    margin: "0 auto"
  }}>

    <div style={{
      position: "absolute",
      top: "3.9rem",
      left: "max(2rem, calc((100vw - 850px) / 2 - 340px))",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
      textAlign: "left",
      width: "360px",
      fontFamily: "monospace"
    }}> 

      <div style={{
        fontSize: "1.3rem",
        color: "#424242",
        lineHeight: "1.4"
      }}>
        <p style={{margin: "0 0 0.5rem 0", fontStyle: "italic"}}>
          <strong style={{color: "#0b29d1"}}>Definition: </strong>{wordMeaning}
        </p>
      </div>
      <div style={{
        fontSize: "1rem",
        color: "#424242",
        lineHeight: "1.4"
      }}>
        <p style={{margin: "0 0 0.5rem 0", fontStyle: "italic"}}>
          <strong style={{color: "#470380", fontSize: "1.1rem"}}>Example: </strong>{wordExamples}
        </p>
      </div>
    </div>
    
    <div style={{
      position: "absolute",
      top: "3.9rem",
      right: "max(2rem, calc((100vw - 850px) / 2 - 220px))",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
      textAlign: "left",
      width: "240px",
      fontFamily: "monospace"
    }}> 
      <div style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        color: isWinner ? "#4CAF50" : isLoser ? "#c62828" : "#757575"
      }}>
        {isWinner && "VICTORY!"}
        {isLoser && "NICE TRY!"}
      </div>

      {(isWinner || isLoser) && (
        <div style={{
          fontSize: "0.95rem",
          lineHeight: "1.4"
        }}>
          <span style={{fontSize: "0.8rem", color: "#9e9e9e", textTransform: "uppercase"}}>
            [ Press ENTER to play again ]
          </span>
        </div>
      )}
    </div>

    <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
    <HangmanWord
      guessedLetters = {guessedLetters}
      wordToGuess = {wordToGuess}
      reveal = {isLoser}
    />

    <div style={{alignSelf: "stretch"}}>
      <Keyboard
        disabled = {isWinner || isLoser}
        activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters = {incorrectLetters}
        addGuessedLetter = {addGuessedLetter}
      />
    </div>
  </div>
}

export default App

## About the project

This is a web-based vocabulary mini-game, using the Barron's GRE high-grequency words as it's dataset, where the player needs to correctly guess a word to save the hangman from being drawn. After each round, player can see the definition of the word they tried to solve to increase their vocab knowledge.

## Tools/languages used

* React
* TypeScript
* CSS
* JSON (for word and definition datasets)
* Node.js / npm
* Vercel (for deployment)

## Steps to build and run it

1. Clone the repository: `git clone https://github.com/TaseenCR/Save-the-Hangman.git`
2. Navigate to the project folder: `cd Save-the-Hangman`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm run dev` (or `npm start`)

Or,
- Players can directly play it from the live site: [Save the Hangman](https://savethehangman.vercel.app)

## Key features or challenges

* Key Feature: Used Barron's GRE High-Frequency word list as the dataset, revealing the dictionary definition at the end of each round.
* Key Feature: Dual-input system to play using on-screen buttons or a physical keyboard.
* Challenge: Overcame a case-sensitivity issue where capitalized words in the JSON file would not register correct guesses. Solved by normalizing both the secret words and user inputs to lowercase during logic checks.
* Challenge: Properly managed React `useEffect` event listener cleanups to prevent memory leaks and duplicate keyboard inputs.

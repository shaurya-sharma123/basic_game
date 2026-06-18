# basic_game
# Rock, Paper, Scissors (JS Console Game)

A classic 5-round game of Rock, Paper, Scissors played entirely in the browser console against a computer opponent. This project demonstrates core JavaScript concepts including functions, conditional logic, loops, variable scope, and basic user input handling.

---

## 🚀 Features

*   **Interactive Input:** Uses native browser `prompt()` to capture player moves.
*   **Automated Opponent:** Computer logic utilizes `Math.random()` to dynamically select its choice each round.
*   **Score Tracking:** Tracks player and computer scores across a 5-round match.
*   **Robust Win/Loss Logic:** Handles wins, losses, ties, and normalizes user text input to avoid casing errors.

---

## 🛠️ Built With

*   **JavaScript (ES6+)**
    *   Arrow Functions (`const func = () => {}`)
    *   Template Literals for clean logging
    *   Conditional Statements (`if / else if / else`)

---

## 🎮 How to Play

1. Open your browser's **Developer Tools** (Press `F12` or right-click the page, click **Inspect**, and navigate to the **Console** tab).
2. Paste the JavaScript code into the console and hit `Enter`.
3. Follow the on-screen pop-up prompts to type your choice (`rock`, `paper`, or `scissors`).
4. Watch the console to see the outcome of each round and the final game results!

---

## 📝 Code Structure

*   `getRandom(max)`: Helper function to generate an index number for the computer.
*   `getComputerChoice()`: Translates the random index into `"rock"`, `"paper"`, or `"scissors"`.
*   `getHumanChoice()`: Prompts the player for input and returns their choice.
*   `playRound(humanChoice, computerChoice)`: Compares choices, checks for a winner or tie, and increments the respective score.
*   `playGame()`: The master function that loops the game for 5 rounds and prints the final victor.
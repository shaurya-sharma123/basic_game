# Rock, Paper, Scissors (DOM Edition)

A classic interactive Rock, Paper, Scissors game built using HTML, CSS, and event-driven JavaScript. The game transitions traditional console-based logic into a dynamic browser User Interface (UI), tracking scores in real-time until a player reaches 5 points.

## 🚀 Features

- **Event-Driven UI:** No annoying browser prompts! Play seamlessly by clicking intuitive on-screen buttons.
- **Dynamic DOM Updates:** Round outcomes and live scores are updated instantly using JavaScript DOM manipulation methods.
- **Score Tracking:** Keeps a running tally of both the Human and Computer scores.
- **Automatic Game Over:** Automatically declares an ultimate winner and disables controls once either player hits **5 points**.

---

## 🛠️ Installation & Setup

1. **Clone or Download the Project:**
   Save your `index.html`, `style.css` (optional), and `script.js` files together in a single folder.

2. **Project Structure:**
   Ensure your directory looks something like this:
   ```text
   ├── index.html
   ├── script.js
   └── README.md

   un the Game:
    Simply double-click the index.html file to open it in any modern web browser.
   ```

💻 Code Architecture

The implementation leverages cleanly separated logic blocks:

    State Variables: Tracks playerScore and computerScore globally to persist data across round intervals.

    DOM Integration: Dynamically creates a div element (#resultsContainer) and appends game status paragraphs straight to the HTML #container.

    Game Engine (playRound): Evaluates selections against standard rules, updates score parameters, and manages win/loss conditions.

    Computer AI (getComputerChoice): Utilizes pseudo-random number generation (Math.random()) to select an unpredictable choice among rock, paper, or scissors.

    Control Handling (disableButtons): Safety mechanism to lock interaction once a champion is determined.

📜 Rules of engagement

    Rock beats Scissors

    Paper beats Rock

    Scissors beats Paper

    Identical choices result in a Tie (no points awarded)

    First to 5 points wins the game!

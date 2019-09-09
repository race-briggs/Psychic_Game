var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var compLetter;

var wins = 0;

var losses = 0;

var remainingGuesses = 9;

var userGuesses = [];

var winScore = document.getElementById('correct-guesses');

var loseScore = document.getElementById('wrong-guesses');

var guessesLeft = document.getElementById('remaining-guesses');

var prevGuesses = document.getElementById('prev-guesses');

winScore.textContent = "Wins: "

loseScore.textContent = "Losses: "

function letterSelect() {
  compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(compLetter);
  return compLetter;
}

function updateStats() {
  prevGuesses.textContent = 'Previous Guesses: ' + userGuesses;
  guessesLeft.textContent = 'Remaining Guesses: ' + remainingGuesses;
}

function updateWins() {
  winScore.textContent = 'Wins: ' + wins;
}

function updateLosses() {
  loseScore.textContent = 'Losses: ' + losses;
}

function resetGame() {
  letterSelect();

  remainingGuesses = 9;

  userGuesses = [];

  updateStats();
}

letterSelect();
updateStats();

document.onkeyup = function (event) {
  var guess = event.key.toLowerCase();
  console.log(guess)

  if (guess === compLetter) {
    wins++;
    updateWins();
    letterSelect();
    userGuesses = [];
    resetGame();
  } else if (guess != compLetter) {
    remainingGuesses--;
    userGuesses.push(" " + guess);
    updateStats();
  }

  if (remainingGuesses < 1) {
    losses++;
    updateLosses()
    resetGame();
  };
}


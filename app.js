console.log('guessing game')

// game state globals
let guessCounter = 0
let secretNumber = generateSecretNumber()

// find elements we need to work with (caching dom elements references)
const choicesElems = document.querySelectorAll('.choices button')
const messageElem = document.querySelector('.message')
const playAgainBtn = document.querySelector('.play-again-btn') 
const guessCounterElem = document.querySelector('.guess-counter')

// setup event listeners
for (let choiceElem of choicesElems) {
  choiceElem.addEventListener('click', handleGuess)
}

playAgainBtn.addEventListener('click', handleReset)

// event handlers

function handleGuess(event) {
  const elem = event.target
  // const userGuess = Number(elem.textContent)
  const userGuess = Number(elem.dataset.num)

  elem.disabled = true

  if (userGuess === secretNumber) {
    messageElem.textContent = "you guess it right yay"
    playAgainBtn.style.visibility = 'visible'
  } else {
    messageElem.textContent = `wrong. the number is not ${userGuess}`
  }

  guessCounter++
  guessCounterElem.textContent = guessCounter
}

function handleReset(event) {
  console.log('resetting game...');

  // reset secret number
  secretNumber = generateSecretNumber()

  // reset tries
  guessCounter = 0
  guessCounterElem.textContent = guessCounter

  // reset message
  messageElem.textContent = ""

  // reset choices
  for (let elem of choicesElems) {
    elem.disabled = false
  }

  // hide play again button
  playAgainBtn.style.visibility = 'hidden'
}

// other functions

function generateSecretNumber() {
  return Math.floor(Math.random() * 4) + 1
}

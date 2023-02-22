console.log('more while loops for homework, last one I promise')

const secretNumber = 7
let numberOfTries = 0

let buttons = document.querySelectorAll('.options button')
let header = document.querySelector('header')
let message = document.querySelector('.message')
let playAgainBtn = document.querySelector('.play-again-btn')


// event handler
function handleUserGuess(event) {
  let userGuessElem = event.target

  // increment the number of tries
  numberOfTries++
  header.textContent = `tries ${numberOfTries}`

  // extracting the number from the data attribute 
  let guess = Number(userGuessElem.dataset.num)

  userGuessElem.disabled = true

  // if the user guess is equal to the secret
  if (guess === secretNumber) {
    message.textContent = 'correct'

    // disabled all buttons
    buttons.forEach(button => {
      button.disabled = true
    })

    // show play again button
    playAgainBtn.style.display = "block"
 
  } else {
    message.textContent = `${guess} is wrong. try again`
  }

  // should we update the info message
  // message.textContent = 'may be'

}

function handlePlayAgain() {
  // reset tries count
  numberOfTries = 0
  header.textContent = numberOfTries
  // reset the message
  message.textContent = ""
  // re enabled all the buttons for guessing
  buttons.forEach(button => {
    button.disabled = false
  })  
  // hide the play again button
  playAgainBtn.style.display = "none"
}


buttons.forEach(button => {
  button.addEventListener('click', handleUserGuess)
})

playAgainBtn.addEventListener('click', handlePlayAgain)







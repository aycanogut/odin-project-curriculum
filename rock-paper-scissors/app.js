// DOM declares

// player badges
const badgePlayer = document.querySelector('span.is-primary');
const badgeComputer = document.querySelector('span.is-success');

// turn result
const turnResult = document.querySelector('.turn-result');

// progress bar
const progressBar = document.querySelector('progress');

// buttons
const buttons = document.querySelectorAll('.nes-btn');

// score counter stuff
let playerScore = 0;
let computerScore = 0;
let playCount = 0;

// catch button value
buttons.forEach(button => button.addEventListener('click', () => playRound(button.value)));

// computer's random selection
const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper'
  } else if (randomNumber === 2) {
    return "scissors";
  }
  return randomNumber;
}

function disableButton() {
  buttons.forEach(btn => {
    btn.disabled = true
  })
}


const playRound = (playerSelection) => {
  const computerSelection = computerPlay();



  if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    playCount += 1;
    computerScore += 1;
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! AI won this round! ${playCount} round played.`;
    badgeComputer.textContent = `${computerScore}`
    if (computerScore === 5) {
      turnResult.innerHTML = 'AI won! go cry';
    }
  } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissors') {
    playCount += 1;
    playerScore += 1;
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! You won this round! ${playCount} round played.`;
    badgePlayer.textContent = `${playerScore}`;
  } else if (playerSelection === computerSelection) {
    playCount += 1;
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! tie! ${playCount} round played.`;
  }

  if (playCounter === 5 && computerScore === 5) {

  }
}


playRound()



// // const game = (playRound) => {
// //   const playerSelection = prompt('choose').toLowerCase();
// //   const computerSelection = computerPlay();
// // }
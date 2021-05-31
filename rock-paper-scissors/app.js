// DOM declares

// container
const container = document.querySelector('.nes-container');


// player badges
const badgePlayer = document.querySelector('span.is-primary');
const badgeComputer = document.querySelector('span.is-success');

// turn result
const turnResult = document.querySelector('.turn-result');

// buttons
const buttons = document.querySelectorAll('.nes-btn');

// score counter stuff
let playerScore = 0;
let computerScore = 0;

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
}

function disableButton() {
  buttons.forEach(btn => {
    btn.disabled = true
  })
}


const playRound = (playerSelection) => {
  const computerSelection = computerPlay();
  detectWinner();

  if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! AI won this round!`;
    badgeComputer.textContent = `${computerScore}`
  } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! you won this round!`;
    badgePlayer.textContent = `${playerScore}`;
  } else if (playerSelection === computerSelection) {
    turnResult.innerHTML = `${playerSelection} vs. ${computerSelection}! tie!`;
  }
  detectWinner();
}

const detectWinner = () => {
  if (computerScore === 5) {
    alert('COMPUTER WON! GO CRY!!!')
    turnResult.innerHTML = "YOU LOSEEEEEEEEER!"
    playAgain();
    disableButton()
  } else if (playerScore === 5) {
    alert("YOU WON!");
    turnResult.innerHTML = "NAILED IT!"
    playAgain();
    disableButton()
  }
}

// restart button
const playAgain = () => {
  const restartButton = document.createElement('button');
  restartButton.innerHTML = 'TRY AGAIN!';
  restartButton.classList.add('restart-button');
  container.appendChild(restartButton);
}
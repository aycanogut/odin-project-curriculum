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


const playRound = (playerSelection) => {
  const computerSelection = computerPlay();
  computerPlay();

  // score counter stuff
  let playerScore = 0;
  let computerScore = 0;
  let playCount = 0;

  if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    badgeComputer.innerHTML = `${computerScore}`
    turnResult.innerHTML = 'paper beats rock, AI won this round!';
    playCount++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissors') {
    turnResult.innerHTML = 'paper beats rock, you won this round!';
    playerScore++
    badgePlayer.innerHTML = `${playerScore}`;
    playCount++;
  } else {
    turnResult.innerHTML = 'tie!';
    playCount++;
  }
}


playRound()



// // const game = (playRound) => {
// //   const playerSelection = prompt('choose').toLowerCase();
// //   const computerSelection = computerPlay();
// // }
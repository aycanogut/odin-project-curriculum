// DOM declares

// badges
const badgeYou = document.querySelector('span.is-primary');
const badgeComputer = document.querySelector('span.is-success');

// turn result
const turnResult = document.querySelector('.turn-result');

// game buttons
const rockButton = document.querySelector('button.is-error');
const paperButton = document.querySelector('button.is-success');
const scissorsButton = document.querySelector('button.is-warning');

// progress bar
const progressBar = document.querySelector('progress');
console.log(progressBar);

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "paper";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

// const playerSelection = prompt('choose').toLowerCase();
const computerSelection = computerPlay();


const playRound = (playerSelection, computerSelection) => {
  var playerScore = 0;
  var computerScore = 0;

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('paper beats rock')
    computerScore++;
    return 'paper beats rock';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('paper beats rock')
    playerScore++;
    return 'paper beats rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('scissors beats paper');
    playerScore++;
    return 'scissors beats paper';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('scissors beats paper');
    computerScore++;
    return 'scissors beats paper';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('rock beats scissors');
    playerScore++;
    return 'rock beats scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('rock beats scissors');
    computerScore++;
    return 'rock beats scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('tie');
    return 'tie';
  }
}

const game = (playRound) => {

}

// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock') {
//     console.log('paper beats rock')
//     return 'paper beats rock';
//   } else if (playerSelection === 'scissors' && computerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors') {
//     console.log('scissors beats paper');
//     return 'scissors beats paper';
//   } else if (playerSelection === 'rock' && computerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock') {
//     console.log('rock beats scissors');
//     return 'rock beats scissors';
//   } else if (playerSelection === 'rock' && computerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper') {
//     console.log('tie');
//     return 'tie';
//   }
// }


playRound(playerSelection, computerSelection)
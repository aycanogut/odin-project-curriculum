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

const computerSelection = computerPlay();

const playRound = (playerSelection) => {

  // score counter stuff
  let playerScore = 0;
  let computerScore = 0;
  let playCount = 0;

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    turnResult.innerHTML = 'paper beats rock, AI won this round!';
    computerScore++;
    badgeComputer.innerHTML = `${computerScore}`
    playCount++;

  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    turnResult.innerHTML = 'paper beats rock, you won this round!';
    playerScore++
    badgePlayer.innerHTML = `${playerScore}`;
    playCount++;

  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    turnResult.innerHTML = 'scissors beats paper, you won this round!';
    playerScore++;
    badgePlayer.innerHTML = `${playerScore}`;
    playCount++;
    return 'scissors beats paper';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('scissors beats paper');
    computerScore++;
    playCount++;
    return 'scissors beats paper';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('rock beats scissors');
    playerScore++;
    playCount++;
    return 'rock beats scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('rock beats scissors');
    computerScore++;
    playCount++;
    return 'rock beats scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('tie');
    return 'tie';
  }
}

playRound()


// // const game = (playRound) => {
// //   const playerSelection = prompt('choose').toLowerCase();
// //   const computerSelection = computerPlay();
// // }
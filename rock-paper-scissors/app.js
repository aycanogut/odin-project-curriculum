// DOM declares

// badges
const badgeYou = document.querySelector('span.is-primary');
const badgeComputer = document.querySelector('span.is-success');

// turn result
const turnResult = document.querySelector('.turn-result');

// progress bar
const progressBar = document.querySelector('progress');

// player selection of round

// game function
const checkClick = (e) => {
  //player's selection data from buttons
  var playerSelection;
  if (e.value === 'rock') {
    playerSelection = 'rock';
  } else if (e.value === 'paper') {
    playerSelection = 'paper';
  } else if (e.value === 'scissors') {
    playerSelection = 'scissors';
  }

  // computer's selection random
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
  computerPlay()
}





// Rock, Paper veya Scissors butonlarindan birine bastigimda oyun 1 el oynanacak ve cikacak sonuca gore Lets play kismi ve VS kismindaki sonuc badgeleri guncellenecek
// progress guncellenecek



// const playRound = (playerSelection, computerSelection) => {
//   var playerScore = 0;
//   var computerScore = 0;
//   var playCount = 0;

//   if (playerSelection === 'rock' && computerSelection === 'paper') {
//     console.log('paper beats rock')
//     computerScore++;
//     playCount++
//     return 'paper beats rock';
//   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//     console.log('paper beats rock')
//     playerScore++;
//     playCount++

//     return 'paper beats rock';
//   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     console.log('scissors beats paper');
//     playerScore++;
//     playCount++
//     return 'scissors beats paper';
//   } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//     console.log('scissors beats paper');
//     computerScore++;
//     playCount++
//     return 'scissors beats paper';
//   } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//     console.log('rock beats scissors');
//     playerScore++;
//     playCount++
//     return 'rock beats scissors';
//   } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     console.log('rock beats scissors');
//     computerScore++;
//     playCount++
//     return 'rock beats scissors';
//   } else if (playerSelection === 'rock' && computerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper') {
//     console.log('tie');
//     return 'tie';
//   }
// }

// // const game = (playRound) => {
// //   const playerSelection = prompt('choose').toLowerCase();
// //   const computerSelection = computerPlay();
// // }




// playRound(playerSelection, computerSelection)
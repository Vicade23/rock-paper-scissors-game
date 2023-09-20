let storage=localStorage.getItem('scores')
let scores = JSON.parse(storage);
        
if (scores === null) {
  scores = {
      wins: 0,
      loses: 0,
      ties: 0
  };
}
      
console.log(scores);
      function playerGame(cMove) {
          
          computerMove = comp();
          result = '';

          if (cMove === 'rock') {

              if (computerMove === 'rock') {
                  result = 'Tie'
              } else if (computerMove === 'paper') {
                  result = 'You lose'
              } else if (computerMove === 'scissors') {
                  result = 'You win'
              } 

          } else if (cMove === 'paper') {
              
              if (computerMove === 'rock') {
                  result = 'You win'
              } else if (computerMove === 'paper') {
                  result = 'Tie'
              } else if (computerMove === 'scissors') {
                  result = 'You lose'
              } 

          } else if (cMove === 'scissors') {
              
              if (computerMove === 'rock') {
                  result = 'You lose'
              } else if (computerMove === 'paper') {
                  result = 'You win'
              } else if (computerMove === 'scissors') {
                  result = 'Tie'
              } 

          }
          if (result === 'You win') {
              scores.wins += 1;
          } else if (result === 'You lose') {
              scores.loses += 1;
          } else if (result === 'Tie') {
              scores.ties += 1;
          }
          localStorage.setItem('scores', JSON.stringify(scores));
          alert(`You picked ${cMove}, computer picked ${computerMove}. ${result}. wins: ${scores.wins}, loses: ${scores.loses}, ties: ${scores.ties},`);

      }
      


      function comp() {
          const randomNumber = Math.random();
          computerMove = '';
          if (randomNumber >= 0 && randomNumber < 1/3) {
              computerMove = 'rock'
          } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
              computerMove = 'paper'
          } else if (randomNumber >= 2/3 && randomNumber < 1) {
              computerMove = 'scissors'
          }
          return computerMove;
      }
          

      
      function reset() {
          const defaultVal = {"wins":0,"loses":0,"ties":0}
          const convertToString = JSON.stringify(defaultVal)
          localStorage.setItem('scores', convertToString)
          alert("Reset successful")
      }
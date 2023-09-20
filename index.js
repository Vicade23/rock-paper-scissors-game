const processInput = (event) => {  
    document.getElementById('screen-testing').innerHTML = event.target.value; 
}  
document.getElementById("costOrder").addEventListener("keyup", processInput )




function compute() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}


////////////////////

let score = JSON.parse(localStorage.getItem('score'));
console.log();
////////////////////
function playerGame(playerMoves) {
    const computerMove = compute();
    result = '';

if (playerMoves === 'rock') {
    if (computerMove === 'rock') {
        result = 'Tie';
    } else if (computerMove === 'paper') {
        result = 'You lose';
    } else if (computerMove === 'scissors') {
        result = 'You win';
    }
} else if (playerMoves === 'paper') {
    
    if (computerMove === 'rock') {
        result = 'You win';
    } else if (computerMove === 'paper') {
        result = 'Tie';
    } else if (computerMove === 'scissors') {
        result = 'You lose';
    }
} else if (playerMoves === 'scissors') {
    
    if (computerMove === 'rock') {
        result = 'You lose';
    } else if (computerMove === 'paper') {
        result = 'You win';
    } else if (computerMove === 'scissors') {
        result = 'Tie';
    }
}

if (result === 'You win') {
    score.wins += 1;
} else if (result === 'You lose') {
    score.loses += 1;
} else if (result === 'Tie') {
    score.ties += 1;
}
localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-p1').innerHTML = result;
document.querySelector('.js-p2').innerHTML = `You picked ${playerMoves}. Computer picked ${computerMove}.`;
document.querySelector('.js-p3').innerHTML = `wins: ${score.wins}, loses: ${score.loses}, ties: ${score.ties}.`;

}
function reset() {
    
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };
    const resetButton = document.querySelector('.js-reset-btn').innerHTML;
    if (resetButton === 'start') {
        document.querySelector('.js-reset-btn').innerHTML = 'reset'
    } else {
        document.querySelector('.js-p2').innerHTML = 'Reset sucessful'
    }
    document.querySelector('.js-p1').innerHTML = '';
    document.querySelector('.js-p3').innerHTML = 'wins: 0, loses: 0, ties: 0.';
    localStorage.removeItem('score')
    
}



///////////////////////
function subscribe() {
    document.querySelector('.js-p1').innerHTML = 'Thank you for subscribing';
    const subscribeButton = document.querySelector('.js-btn').innerHTML;
    if (subscribeButton === 'Subscribe') {
        document.querySelector('.js-btn').innerHTML = 'Subscribed';
    } else {
        document.querySelector('.js-p1').innerHTML = 'Pls subscribe';
        document.querySelector('.js-btn').innerHTML = 'Subscribe';
    }
}
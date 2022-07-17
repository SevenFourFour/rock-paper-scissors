// Create a function computerPlay that wil randomly return
// either rock, paper, or scissors. 

var choices = ['Rock', 'Paper', 'Scissors']
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    var index = Math.floor(Math.random() * 3)
    return index
}

function playerPlay() {
    var choice = prompt('Make your choice:\n[1] for Rock\n[2] for Paper\n[3] for Scissors')
    return choice - 1
}


function checkScore() {
    if (playerScore >= 5) {
        resultsScreen.textContent = 'You won the game!'
    }
    else if (computerScore >= 5) {
        resultsScreen.textContent = 'You lost the game!'
    }
}

function updateScore() {

}

// Creates buttons that start round when pressed
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

// Create scorecards
const playerScoreCard = document.getElementById('playerScore')
const computerScoreCard = document.getElementById('computerScore')
const playerScoreVal = document.createElement('span')
const computerScoreVal = document.createElement('span')

playerScoreVal.textContent = playerScore
computerScoreVal.textContent = computerScore

playerScoreCard.appendChild(playerScoreVal)
computerScoreCard.appendChild(computerScoreVal)

// Updates the score
function updateScore() {
    playerScoreVal.textContent = playerScore
    computerScoreVal.textContent = computerScore

    playerScoreCard.removeChild(playerScoreVal)
    computerScoreCard.removeChild(computerScoreVal)

    playerScoreCard.appendChild(playerScoreVal)
    computerScoreCard.appendChild(computerScoreVal)
}


// Results screen
const resultsScreen = document.querySelector('#results-screen')

buttonRock.addEventListener('click', function (e) {
    resultsScreen.textContent = playRound(e.target.textContent, computerPlay())
    checkScore()
})

buttonPaper.addEventListener('click', function (e) {
    resultsScreen.textContent = playRound(e.target.textContent, computerPlay())
    checkScore()
})

buttonScissors.addEventListener('click', function (e) {
    resultsScreen.textContent = playRound(e.target.textContent, computerPlay())
    checkScore()
})




// Create a function that plays a single round of rock,
// paper, scissors. 
// Two parameters: playerSelection and computerSelection
// Return: String that declares the winner
// Example: "You lose! Paper beats Rock" 
// PS: Make playerSelection parameter case-insensitive

function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 0:
                    return 'You tied this round!'
                    break;
                case 1:
                    computerScore += 1
                    updateScore()
                    return [playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
                    break;
                default:
                    playerScore += 1
                    updateScore()
                    return [playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
            }
            break;
        case 'Paper':
            switch (computerSelection) {
                case 0:
                    playerScore += 1
                    updateScore()
                    return [playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
                    break;
                case 1:
                    return 'You tied this round!'
                    break;
                default:
                    computerScore += 1
                    updateScore()
                    return [playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
            }
            break;
        default:
        case 'Scissors':
            switch (computerSelection) {
                case 0:
                    computerScore += 1
                    updateScore()
                    return [playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
                    break;
                case 1:
                    playerScore += 1
                    updateScore()
                    return [playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
                    break;
                default:
                    return 'You tied this round!'
            }
            break;
    }
}


// Write a function called game() that calls playRound to
// to play a 5 round game and reports a winner at the end
/*
function game(){
    var playerScore = 0
    var computerScore = 0

    for(let i = 0; i < 5; i++){
        var playerChoice = playerPlay()
        var computerChoice = computerPlay()
        var result = playRound(playerChoice, computerChoice)
        console.log(result)

        if(result.includes('win')){
            playerScore += 1
        }
        else if(result.includes('lose')){
            computerScore += 1
        }
    }

    if(playerScore > computerScore){
        return "You won the game!\nPlayer Score: " + String(playerScore) + "\nComputer Score: " + String(computerScore)
    }
    else if(playerScore < computerScore){
        return "You lost the game!\nPlayer Score: " + String(playerScore) + "\nComputer Score: " + String(computerScore)
    }
    else{
        return "Tie game!\nPlayer Score: " + String(playerScore) + "\nComputer Score: " + String(computerScore)
    }

}
*/





// console.log(game())
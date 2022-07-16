// Create a function computerPlay that wil randomly return
// either rock, paper, or scissors. 

var choices = ['Rock', 'Paper', 'Scissors']

function computerPlay(){
    var index = Math.floor(Math.random() * 3)
    return index
}

function playerPlay(){
    var choice = prompt('Make your choice:\n[1] for Rock\n[2] for Paper\n[3] for Scissors')
    return choice - 1
}


// Create a function that plays a single round of rock,
// paper, scissors. 
// Two parameters: playerSelection and computerSelection
// Return: String that declares the winner
// Example: "You lose! Paper beats Rock" 
// PS: Make playerSelection parameter case-insensitive

function playRound(playerSelection, computerSelection){
    console.log(choices[playerSelection])
    console.log(choices[computerSelection])
    switch(playerSelection){
        case 0:
            switch(computerSelection){
                case 0:
                    return 'You tied this round!'
                    break;
                case 1:
                    return choices[playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
                    break;
                default:
                    return choices[playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
            }
            break;
        case 1:
            switch(computerSelection){
                case 0:
                    return choices[playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
                    break;
                case 1:
                    return 'You tied this round!'
                    break;
                default:
                    return choices[playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
            }
            break;
        default:
            case 0:
                switch(computerSelection){
                    case 0:
                        return choices[playerSelection] + ' loses to ' + choices[computerSelection] + '. You lose this round.'
                        break;
                    case 1:
                        return choices[playerSelection] + ' wins to ' + choices[computerSelection] + '. You win this round.'
                        break;
                    default:
                        return 'You tied this round!'
                }
                break;
    }
}


// Write a function called game() that calls playRound to
// to play a 5 round game and reports a winner at the end

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


console.log(game())
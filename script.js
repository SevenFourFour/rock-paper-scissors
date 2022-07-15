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
    console.log(playerSelection)
    console.log(computerSelection)
    switch(playerSelection){
        case 0:
            switch(computerSelection){
                case 0:
                    return 'Tie'
                    break;
                case 1:
                    return 'Lose'
                    break;
                default:
                    return 'Win'
            }
            break;
        case 1:
            switch(computerSelection){
                case 0:
                    return 'Win'
                    break;
                case 1:
                    return 'Tie'
                    break;
                default:
                    return 'Lose'
            }
            break;
        default:
            case 0:
                switch(computerSelection){
                    case 0:
                        return 'Lose'
                        break;
                    case 1:
                        return 'Win'
                        break;
                    default:
                        return 'Tie'
                }
                break;
    }
}

console.log(playRound(playerPlay(), computerPlay()))

// Write a function called game() that calls playRound to
// to play a 5 round game and reports a winner at the end
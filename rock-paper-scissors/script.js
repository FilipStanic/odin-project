function cpuDecision() {
    var rndmNumb = Math.floor(Math.random() * 3) + 1;
    if (rndmNumb === 1) {
        return "Rock";
    } else if (rndmNumb === 2) {
        return "Paper"; 
    } else {
        return "Scissors";
    }
}

function humanDecision() {
    var humanChoice = prompt("Please write: Rock, Paper, Scissors (CASE SENSITIVE)");
    return humanChoice;
}

function playRound() {
    const human = humanDecision();
    const cpu = cpuDecision();

    console.log("Computer chose: " + cpu)

    if (human === "Rock" && cpu === "Rock") {
        return "It's a draw!";
    } else if (human === "Rock" && cpu === "Paper") {
        return "CPU Wins!";
    } else if (human === "Rock" && cpu === "Scissors") {
        return "Human Wins!";
    } else if (human === "Paper" && cpu === "Rock") {
        return "Human Wins!";
    } else if (human === "Paper" && cpu === "Paper") {
        return "It's a draw!";
    } else if (human === "Paper" && cpu === "Scissors") {
        return "CPU Wins!";
    } else if (human === "Scissors" && cpu === "Rock") {
        return "CPU Wins!";
    } else if (human === "Scissors" && cpu === "Paper") {
        return "Human Wins!";
    } else if (human === "Scissors" && cpu === "Scissors") {
        return "It's a draw!";
    } else {
        return "Invalid input, please type Rock, Paper, or Scissors.";
    }
}

function playGame(){
    let score = 0;
    while(true){
        const result = playRound();

        if (result === "Human Wins!"){
            score++
            console.log("Score: " + score);
        } else if  (result === "CPU Wins!") {
            console.log("You Lose! Final Score: " + score);
            score = 0
            break;
        } else if (result === "It's a draw!") {
            console.log("The score is: " + score);
        } else {
            console.log("Invalid input")
            break;
        }
    }
}

playGame()

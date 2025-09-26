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

    console.log("CPU chose " + cpu);

    if (human === "Rock" && cpu === "Rock") {
        console.log("It's a draw!");
    } else if (human === "Rock" && cpu === "Paper") {
        console.log("CPU Wins!");
    } else if (human === "Rock" && cpu === "Scissors") {
        console.log("Human Wins!");
    } else if (human === "Paper" && cpu === "Rock") {
        console.log("Human Wins!");
    } else if (human === "Paper" && cpu === "Paper") {
        console.log("It's a draw!");
    } else if (human === "Paper" && cpu === "Scissors") {
        console.log("CPU Wins!");
    } else if (human === "Scissors" && cpu === "Rock") {
        console.log("CPU Wins!");
    } else if (human === "Scissors" && cpu === "Paper") {
        console.log("Human Wins!");
    } else if (human === "Scissors" && cpu === "Scissors") {
        console.log("It's a draw!");
    } else {
        console.log("Invalid input, please type Rock, Paper, or Scissors.");
    }
}

function playGame(playRound){
    var score = 0;

    if("Human Wins!" == 1){
        console.log("testHUM")
    } else if ("CPU Wins!") {
        console.log("CPUTEST");
    } else {
        console.log("TEST")
    }
}

playRound()
playGame()

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const smallWordUser = "user".fontsize(3).sub();
const smallWordComp = "comp".fontsize(3).sub();

let userScore = 0;
let computerScore = 0;

userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber];
}

function convertToWord(letter) {

    if(letter === "r") {
        return "Rock"
    } else if (letter === "p") {
        return "Papper"
    } else {
        return "Scissors"
    }

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallWordUser} beats ${convertToWord(computerChoice)}${smallWordComp}. You win 🔥`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("green-glow");
     }, 200);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallWordUser} beats ${convertToWord(userChoice)}${smallWordComp}. You lose 😢`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("red-glow");
     }, 200);
}

function draw(computerChoice, userChoice) {
    result_div.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice)}. It's a draw! 😜`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove("gray-glow");
     }, 200);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }

}

function main() {

  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });

}

main();
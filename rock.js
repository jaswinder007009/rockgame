var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
//const scoreBoard_div=document.getElementsByClassName("score-board")[0];
var result_div = document.getElementsByClassName("result")[0];
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
//console.log(rock_div);
function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r")
        return "rock";
    if (letter === "p")
        return "paper";
    return "scissor";
}
console.log(getComputerChoice());
function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = '' + userScore;
    computerScore_span.innerHTML = '' + computerScore;
    console.log("wins");
    result_div.innerHTML = convertToWord(userChoice) + "(user) beasts " + convertToWord(computerChoice) + "(computer) you win";
}
function loses(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = '' + userScore;
    computerScore_span.innerHTML = '' + computerScore;
    result_div.innerHTML = convertToWord(userChoice) + "(user) losses to " + convertToWord(computerChoice) + "(computer) you lost";
    console.log("loses");
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = '' + userScore;
    computerScore_span.innerHTML = '' + computerScore;
    result_div.innerHTML = convertToWord(userChoice) + "(user) draws with " + convertToWord(computerChoice) + "(computer) ";
    console.log("draw");
}
function game(userChoice) {
    //  console.log("chaljabhai " + userChoice);
    var computerChoice = getComputerChoice();
    //console.log("COMPUTER CHOICE => "+computerChoice);
    //console.log("USER CHOICE => "+userChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            // console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, computerChoice);
            //console.log("COMPUTER WINS");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //    console.log("DRAW");
            break;
    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissor_div.addEventListener('click', function () {
        game("s");
    });
}
main();

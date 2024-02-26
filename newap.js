let computerScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-Score");
const computerScorePara = document.querySelector("#computer-Score");

const genChoice = () => {
    const options = ["rock", "paper","scissor"];
    const randIndx = Math.floor(Math.random() *3);
    return options [randIndx];

};

const draw =() => {
    msg.innerText = "Game was draw ";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin,userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations, You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `Sorry, You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice=",userChoice)

    const compChoice = genChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice ===compChoice) {
        draw();

    } else{
        let userWin = true;
        if (userChoice ==="rock"){
            // scissor,paper
            userWin = compChoice === "paper"? false: true;

        }else if(userChoice==="paper"){
            //rock, scissor
            userWin = compChoice === "scissor"? false: true;
        }else {
            //rock paper
            userWin = compChoice ==="rock"? false: true;
        }
        showWinner (userWin,userChoice,compChoice)
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});


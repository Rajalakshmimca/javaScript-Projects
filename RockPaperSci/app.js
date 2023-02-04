const computerChoice = document.getElementById("comp_Choice");
const playerChoice = document.getElementById("player_Choice");
const resultView=document.getElementById("result");
const possibleChoices=document.querySelectorAll("button");

let computerChosen;

possibleChoices.forEach(function(possibleChoices){
    possibleChoices.addEventListener("click", function(e){
        userChoice=e.target.id;
        playerChoice.innerHTML=userChoice;
        randomGenerator();
        results();
    })
})

function randomGenerator(){
    const randomNumber=Math.floor(Math.random()*3)+1
    console.log(randomNumber);
    
    if(randomNumber===1){
        computerChosen="Rock";
    }

    if(randomNumber===2){
        computerChosen="Paper";
    }

    if(randomNumber===3){
        computerChosen="Scissors";
    }
    computerChoice.innerHTML=computerChosen;
}

function results(){
    let result;
    if(computerChosen==userChoice){
        result="Draw...";
        
    }
    if (computerChosen ==="Rock" && userChoice==="Paper") {
        result = "User Wins...";
    }
    if (computerChosen === "Paper" && userChoice === "Scissors") {
        result = "User Wins...";
    }
if (computerChosen === "Scissors" && userChoice === "Rock") {
    result = "User Wins...";
}
if (computerChosen === "Paper" && userChoice === "Rock") {
    result = "Computer Wins...";
}
if (computerChosen ==="Scissors" && userChoice==="Paper") {
        result = "Computer Wins...";
    }
if (computerChosen === "Rock" && userChoice === "Scissors") {
    result = "Computer Wins...";
}

    resultView.innerHTML=result;
    
}
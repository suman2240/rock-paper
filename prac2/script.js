let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText ="Gaame was draw. play again.";
    msg.style.backgroundColor="orange"
}
const shoWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText =userScore;
        msg.innerText=`you win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText=`you lost. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const comChoice= genComChoice();
    if(userChoice===comChoice){
        drawGame();
    }else{
        let userWin =true;
        if(userChoice ===`rock`){
            userWin = comChoice===`paper`? false:true;
        }else if(userChoice==`paper`){
            userWin=comChoice===`scissors`?false:true;
        }
        else{
            userWin=comChoice === `rock`? false:true;
        }
        shoWinner(userWin,userChoice,comChoice);
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 
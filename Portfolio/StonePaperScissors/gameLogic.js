const choices = ["stone","paper","scissors"];
const computerChoice = choices[Math.floor(Math.random()*choices.length)];

const userChoice = prompt("Enter r for stone, p for paper, s for scissors");

if(userChoice.toLocaleLowerCase()==="r"){
    if(computerChoice==="stone"){
        console.log("Its a draw")
    }else if(computerChoice==="paper"){
        console.log("Computer chose paper, Computer wins")
    }else{
        console.log("Computer chose scissors, player wins")
    }
}
else if(userChoice.toLocaleLowerCase()==="p"){
    if(computerChoice==="stone"){
        console.log("Computer chose stone, player wins")
    }else if(computerChoice==="paper"){
        console.log("Its a draw")
    }else{
        console.log("Computer chose scissors, computer wins")
    }
}
else if(userChoice.toLocaleLowerCase()==="s"){
    if(computerChoice==="stone"){
        console.log("Computer chose stone, computer wins")
    }else if(computerChoice==="paper"){
        console.log("Computer chose paper, player wins")
    }else{
        console.log("Its a draw")
    }
}else{
    console.log('Invalid input')
}
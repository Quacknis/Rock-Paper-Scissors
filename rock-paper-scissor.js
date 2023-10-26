    
    let playerWin = 0;
    let computerWin = 0;

    function theKreyGame(){
        let playerChoice = prompt("Pick Rock, Paper or Scissors.") + "".toLowerCase();
        let words = ["rock", "paper", "scissor"];
        let computerChoice =words[Math.floor(Math.random() * words.length)];
        alert (`Krey has picked ${computerChoice}`);

        if (playerChoice === "rock" && computerChoice === "scissor") {
        alert("You won!");
        playerWin++;
        return;

        } else if(playerChoice ==="paper" && computerChoice === "rock"){
        alert("You won!");
        playerWin++;
        return;

        } else if (playerChoice === "scissor" && computerChoice === "paper") {
        alert("You won!");
        playerWin++;
        return;

        } else if (playerChoice === "scissor" && computerChoice === "rock") {
        alert("You lost!");
        computerWin++;
        return;

        } else if (playerChoice === "paper" && computerChoice === "scissor") {
        alert("You lost!");
        computerWin++;
        return;

        } else if (playerChoice === "rock" && computerChoice === "paper") {
        alert("You lost!");
        computerWin++;
        return;

        } else if (playerChoice === computerChoice ) {
        alert("You tied!");
        return;     
    } else
        alert("Incorrect, try again" );
        theKreyGame();
}

theKreyGame();
theKreyGame();
theKreyGame();
theKreyGame();

if (playerWin > computerWin){
    alert(`You won the Krey game!!!\nYour points: ${playerWin}\nKrey points: ${computerWin}`)

} else if (playerWin === computerWin){
    alert(`You tied the Krey game!!!\nYour points: ${playerWin}\nKrey points: ${computerWin}`)

} else {
    alert(`You lost the Krey game!!!\nYour points: ${playerWin}\nKrey points: ${computerWin}`)
}

    // prompt player to pick rock paper scissors and save somewhere
    // make npc pick something too and save somewhere
    // make the rules for the game
    // compare both and see if there is a winner
    // save the result somewhere and do 4 more times and compare at end
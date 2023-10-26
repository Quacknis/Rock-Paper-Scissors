    
    let playerWin = 0;
    let computerWin = 0;

    function theKreyGame(){
        let playerChoice = prompt("Pick Rock, Paper or Scissor.");
        if(playerChoice === null){
            playerChoice ="null"
        }else playerChoice = playerChoice.toLowerCase()

        let words = ["rock", "paper", "scissor"];
        let computerChoice =words[Math.floor(Math.random() * words.length)];
        
        if (playerChoice === "rock" && computerChoice === "scissor") {
             alert (`Krey has picked ${computerChoice}`);
             alert("You won!");
             playerWin++;
             return;

        } else if(playerChoice ==="paper" && computerChoice === "rock"){
             alert (`Krey has picked ${computerChoice}`);
             alert("You won!");
             playerWin++;
             return;

        } else if (playerChoice === "scissor" && computerChoice === "paper") {
             alert (`Krey has picked ${computerChoice}`);
             alert("You won!");
             playerWin++;
             return;

        } else if (playerChoice === "scissor" && computerChoice === "rock") {
             alert (`Krey has picked ${computerChoice}`);
             alert("You lost!");
             computerWin++;
             return;

        } else if (playerChoice === "paper" && computerChoice === "scissor") {
             alert (`Krey has picked ${computerChoice}`);
             alert("You lost!");
             computerWin++;
             return;

        } else if (playerChoice === "rock" && computerChoice === "paper") {
             alert (`Krey has picked ${computerChoice}`);
             alert("You lost!");
             computerWin++;
             return;

        } else if (playerChoice === computerChoice ) {
             alert (`Krey has picked ${computerChoice}`); 
             alert("You tied!");
             return;     
    } else (playerChoice === "null")
             alert("Incorrect, try again" );
             theKreyGame();
}

alert("Game 1");
theKreyGame();
alert("Game 2");
theKreyGame();
alert("Game 3");
theKreyGame();
alert("Final Game");
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
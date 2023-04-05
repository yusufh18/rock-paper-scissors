var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];
var userChoice = "";


// syntax for a function
/* function functioname(parameter1, parameter2, ...){
    // codesome code here
}/
// syntax of a function without paramters
/* 
 function functioname(){
    // some code here
 }
 */


 function playgame(){
    // human turn
    userChoice = prompt(" Enter R, P, S:"); // R, P, S
    console.log(userChoice);

    // computers turn
    /*
    |--------|--------|--------|
    0        1        2        3
    */
    var computerMoveIndex = Math.floor(Math.random()*3); // 0,1,2
    var computerChoice = options[computerMoveIndex]; // R, P, S

    alert(`Computer Chose: ${computerChoice}`);
    //alert("Computer Chose "+computerChoice)

    // check for win/loss/tie
    // happens when both choose paper/rock/scissors

    let win = "";

    // if the computer and human are tied
    if(computerChoice === userChoice ){
        ties = ties + 1; // increment ties score
        win = "T";
    }
    else{
        // player wins
        // player picks R, computer picks scissors
        if(userChoice == "R" && computerChoice == "S" ){
            wins = wins + 1;
            win = "H";
        }
        // player picks S, computer picks paper
        else if(userChoice == "S" && computerChoice == "P"){
            wins = wins + 1;
            win = "H";
        }
        // player picks P, computer picks rock
        else if(userChoice == "P" && computerChoice == "R"){
            wins = wins + 1;
            win = "H";
        }

        // player loses
         // player picks R, copmuter picks P
        if(userChoice == "R" && computerChoice == "P"){
            losses = losses + 1;
            win = "C";
        }
        else if(userChoice == "S" && computerChoice == "R"){
            losses = losses +1;
            win = "C";
        }
        else if(userChoice == "P" && computerChoice == "S"){
            losses = losses +1;
            win = "C";
        }
    }

    // alert who won

    if(win == "H"){
        alert("You Won!");
    }
    else if(win == "C"){
        alert("Computer Won!");
    }
    else if(win == "T"){
        alert("It's a tie!");
    }

    // print the scoreboard
    alert(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);

    // prompt, asking the use to play again
    
    let response = confirm("Wanna play again?"); // true or false

    if(response){
        playgame(); //play again
    }
    else{
        return; // end the game
    }
}


playgame();

console.log("hello")
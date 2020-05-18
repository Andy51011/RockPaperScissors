var user_score = document.getElementById("userScore");
var computer_score = document.getElementById("ComputerScore");
var score_Board = document.querySelector("scoreBoard");
var results = document.querySelector("result");
var rockD = document.getElementById("rock");
var paperD = document.getElementById("paper");
var scissorsD = document.getElementById("scissors");
var user_Score = 0;
var computer_Score = 0;

rockD.addEventListener('click', function(){
    console.log('Hey you clicked on rock!')
})

scissorsD.addEventListener('click', function(){
    console.log('Hey you clicked on paper!')
})

paperD.addEventListener('click', function(){
    console.log('Hey you clicked on scissors!')
})



    var computerPlay = function(decisions) {
        var randomNum = Math.floor((Math.random() * 100) + 1);
        if (randomNum >= 66.66) {
            decisions = "rock";
        } 
        if (randomNum >= 33.33 && randomNum < 66.66) {
            decisions = "paper"
        } 
        if (randomNum >= 0 && randomNum < 33.33) {
            decisions = "scissors"
        }

        return decisions
        // return paper
        // return scissors
        // return rock
    }

    var playRound = function(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
    }
         if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
    }
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    }   
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    }   
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    } 
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            return "Tie! Please repeat"
        }
        if (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "scissors") {
            return "Please Enter A Valid Decision."
        }
        
    }

    var game = function(numberOfRounds) {
       var playerScore = 0;
       var computerScore = 0;
       var ties = 0;
       for (var i = 0; i <= 5; i++) {
           var computerSelection = (computerPlay());
           result = playRound(playerSelection, computerSelection)
               console.log(result);

       }
       if (result.includes("Win")) {
           playerScore++
       }
       else if (result.includes("Lose")) {
           computerScore++
       } 
       else {
           ties++;
       }
       var scoreTracker = {
           player: playerScore,
           computer: computerScore,
           tie: ties
       };
       console.log(scoreTracker)
      

    }


    var playerSelection = ("Enter Scissors, Rock, or Paper")
    var computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log(game(5))
    
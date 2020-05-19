var user_score = document.getElementById("userScore");
var computer_scores = document.getElementById("computerScore");
var score_Board = document.querySelector("scoreBoard");
var results = document.querySelector(".result > p");
var rockD = document.getElementById("rock");
var paperD = document.getElementById("paper");
var scissorsD = document.getElementById("scissors");
var user_Score = 0;
var computer_Score = 0;



    var computerPlay = function() {
        var decisions = ['rock', 'paper', 'scissors']
        var randomNum = Math.floor(Math.random() * 3);
        return decisions[randomNum];
        
        // return paper
        // return scissors
        // return rock
    }

    var win = function(user, computer) {
        user_Score++
        user_score.innerHTML = user_Score
        computer_scores.innerHTML = computer_Score
        results.innerHTML = user + " beats " + computer + ". You Win!!!"
        console.log(user);
        console.log(computer)
    }

    var draw = function () {
        
        

    }

    var lose = function (user, computer) {
        computer_Score++
        user_score.innerHTML = user_Score
        results.innerHTML = user + " loses to " + computer + ". You lose!!!"
    
    }

    var playRound = function(playerSelection) {
        if (playerSelection.toLowerCase() === "rock" && computerPlay() === "scissors") {
            win(playerSelection, computerPlay());
            break;
           
        }
        if (playerSelection.toLowerCase() === "paper" && computerPlay() === "rock") {
            win(playerSelection, computerPlay());
            break;
            
    }
         if (playerSelection.toLowerCase() === "scissors" && computerPlay() === "paper") {
            win(playerSelection, computerPlay());
            break;
           
    }
        if (playerSelection.toLowerCase() === "rock" && computerPlay() === "paper") {
            lose(playerSelection, computerPlay());
            break;
            
    }   
        if (playerSelection.toLowerCase() === "paper" && computerPlay() === "scissors") {
            lose(playerSelection, computerPlay());
            break;
           
    }   
        if (playerSelection.toLowerCase() === "scissors" && computerPlay() === "rock") {
            lose(playerSelection, computerPlay());
            break;
           
    } 
        if (playerSelection.toLowerCase() === computerPlay()) {
            draw(playerSelection, computerPlay());
            break;
           
        }
        if (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "scissors") {
            return "Please Enter A Valid Decision."
        }

        console.log(player)
        
    }

rockD.addEventListener('click', function(){
    playRound('rock')
})

scissorsD.addEventListener('click', function(){
    playRound('scissors')
})

paperD.addEventListener('click', function(){
    playRound('paper')
})



    
    
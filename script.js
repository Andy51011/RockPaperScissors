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
    }

    var draw = function (user, computer) {
        user_score.innerHTML = user_Score;
        computer_scores.innerHTML = computer_Score;
        results.innerHTML = `Tie! ${user} and ${computer}.`
        
        

    }

    var lose = function (user, computer) {
        computer_Score++
        user_score.innerHTML = user_Score
        computer_scores.innerHTML = computer_Score;
        results.innerHTML = user + " loses to " + computer + ". You lose!!!"
    
    }

    var playRound = function(playerSelection) {
       var computerDecision = computerPlay();
       switch (playerSelection + computerDecision) {
           case "rockscissors":
           case "paperrock":
           case "scissorspaper":
            win(playerSelection, computerDecision) 
            break;
       }
       switch (playerSelection + computerDecision) {
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
      
            lose(playerSelection, computerDecision) 
            break;
       }
         switch (playerSelection + computerDecision) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
         
            draw(playerSelection, computerDecision) 
            break;
       }
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



    
    
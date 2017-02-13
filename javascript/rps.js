var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("User: " + userChoice);
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice) 
{
    if(Choice1 === Choice2) {
        return "The result is a tie!";
    }   
    else if(Choice1 === "rock")
    {
        if(Choice2 === "scissors"){
            return "rock wins";
        }
            else
            {
                return "paper wins";
            }
    }
    else if(Choice1 === "paper")
    {
        if(Choice2 === "rock")
        {
            return "paper wins";
        }
        else 
        {
            return "scissors win";
        }
    }
    else(Choice1 === "scissors")
    {
        if(Choice2 === "paper")
        {
            return "scissors win";
        }
        else
        {
            return "rock wins";
        }
    }
};
// var userChoice = prompt("Do you choose rock, paper or scissors?");
var userChoice;

$(document).ready(function(){
    $("#p").click(function(){
        userChoice = $("#p").text();
        $("#c").show();
        $("#cc").text("");

    });
    $("#s").click(function(){
        userChoice = $("#s").text();
        $("#cc").text("");
        $("#c").show();
    });
    $("#r").click(function(){
        userChoice = $("#r").text();
        $("#cc").text("");
        $("#c").show();
    });
    $("#c").click(function(){
         var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        }  else {
            computerChoice = "scissors";
        } 
        $("#cc").text(computerChoice);
        // alert("Computer: " + computerChoice);

        compare(userChoice,computerChoice);
        $("#c").hide();

    });
});

var compare = function(choice1,choice2){
    if(choice1 === choice2){
        alert("The result is a tie!");
    }else if(choice1==="rock")
    {
         if(choice2==="paper")
        {
            alert("Paper wins");
        }else
        {
            alert("Rock wins");
        }
    }
    else if(choice1==="paper")
    {
        if(choice2==="rock")
        {
                alert("paper wins");
        }else
        {
            alert("scissors1 wins");
        }
    }else 
    {
            if(choice2==="rock")
            {
                alert("rock wins");
            }else
            {
               alert("scissors wins");
            }
        
    }
}

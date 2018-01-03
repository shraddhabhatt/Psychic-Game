//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = "";


//Initial computer letter
window.onload = function() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
}


//Game
document.onkeyup = function(event) {

	if(isAlphaOnly(event.keyCode))
	{
		var playerGuess = event.key;
		lettersGuessed.push(playerGuess);
		console.log(playerGuess);

		if ((playerGuess === computerGuess) && (guessesLeft > 0)) {
			wins++;
			guessesLeft = 9;
			lettersGuessed.length = 0;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
			console.log(computerGuess);
		}

		else {
			guessesLeft = guessesLeft-1;
			if(guessesLeft == 0)
			{
				losses++;
				guessesLeft = 9;
				lettersGuessed.length = 0;
				computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
				console.log(computerGuess);
			}
		}
		var html = "<p><h3>Guess what letter I'm thinking of!</h3></p>" +
		          "<p>Wins: " + wins + "</p>" +
		          "<p>Losses: " + losses + "</p>" +
		          "<p>Guesses left: " + guessesLeft + "</p>" +
		          "<p>Your guesses so far: " + lettersGuessed + "</p>";
		 
		document.getElementById("game").innerHTML = html;
		document.getElementById("game").className = "sub-container";
	}
	else
	{
		alert("you can enter any char between (a-z A-Z) only");
	}

}

function isAlphaOnly(charCode) 
{
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                return true;
            else
                return false;
}
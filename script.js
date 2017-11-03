   // letter available to choose RPS-3.html 
   var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   // Setting everything to zero
   var wins = 0;
   var losses = 0;
   var guessesLeft = 9;
   var guesses = 9;
   var guessedLetters = [];
   var userGuess;

   // make the computer pick a random letter RPS-3.html
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   console.log(computerGuess + "ThisIsComputerGuess");

   // 9 guesses or guesses = guesses
   var updateGuessesLeft = function() {
      document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
   }

   // amount of guesses left to get letter right starting at 9 counting down
   var updateLetterToGuess = function() {
      this.lettertoguess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
   };
   //something to show the letters i have used to far
   var updateGuesseSoFar = function() {
      document.querySelector('#sofar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
   };
   // Reset once game is over (won or lost)
   var reset = function() {
      guessesLeft = 9;
      guessedLetters = [];

      updateLetterToGuess();
      updateGuesseSoFar();
      updateGuessesLeft();
   }
   // key #21 Events
   document.onkeyup = function(event) {
      guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuesseSoFar();


      // Counter to keep track of wins and losses "car-game"
      if (guessesLeft >= 0) {
         if (userGuess == computerGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
            alert("You are psychic!");
            reset();
         }

         else if (guessesLeft == 0) {
            losses--;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You are not psychic!");
            reset();
         }

      };
   }
   
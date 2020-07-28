var colors = ["chocolate","aqua","blue","coral","gold","lavender","lime","orchid","silver","red","green","orange"];
      var sorted_colors = colors.sort();
      var target_color;
      var guess_color;
      var guesses = 0;
      var finished = false;

      function generate_color(){
	    var random_num = Math.floor(Math.random()*sorted_colors.length);
        target_color = sorted_colors[random_num];
    
        alert("The answer is "+target_color);
        while(!finished){
    	  guess_color = prompt("I am thinking of one of these colors:\n\n"+
                              sorted_colors + "\n\nWhat color am I thinking off?").toLowerCase();
          console.log(guess_color);
          guesses += 1;
          finished = check_color();
        }
      }

      function check_color(){
		  var i = 0;
			while(i < sorted_colors.length){
				if(sorted_colors[i].localeCompare(guess_color) == 0){
					break;
				};

			
				if(i == sorted_colors.length - 1){
					alert("Sorry, I don't recognize your color.\n"+
						"Please try again.");
					return false;
				};
				i += 1;
			}

		  if(target_color.localeCompare(guess_color) == -1){
			alert("Sorry your guess is not correct!\n"+
				"Hint: your color is alphabetically higher than mine.\n"+
				"Please try again.");
			return false;
		  };

		  if(target_color.localeCompare(guess_color) == 1){
			alert("Sorry your guess is not correct!\n\n"+
				"Hint: your color is alphabetically lower than mine.\n"+
				"Please try again.");
			return false;
		  }
		
		  document.body.style.backgroundColor = target_color;
          
          showMessage();
          
		  return true;
       }

       function showMessage() {
         var secondsDelay = 5; //5 millisecond
         setTimeout(function() {
         alert("Congratulations, you have guessed the color! \n" +
			"It took you "+ guesses + " guesses to finish the game!\n"+
			"You can see the color in the background.");
         }, secondsDelay);
       }
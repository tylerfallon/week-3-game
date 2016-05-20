document.onkeyup = function(event) {
	var press = String.fromCharCode(event.keyCode).toLowerCase();
	if (press !== undefined) {
		var instr = document.getElementById("instructions");
		instr.innerHTML = "Game started, guess a letter!";
	
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var game = {
			word1: 'test',
			word2: 'test2',
		}

		var userGuess = press;

		if (userGuess == 't' || userGuess == 'e' || userGuess == 's') {
			console.log(userGuess);
		}
		else {
			var newElement = document.createElement("span");
			var newUserGuess = document.createTextNode(userGuess);
			newElement.appendChild(newUserGuess); 
			document.getElementById("letterlist").appendChild(newElement); 


			var remain = document.getElementById("remaining").innerHTML;
			var newRemain = remain-1;
			document.getElementById("remaining").innerHTML = newRemain;
			}
		}





	};
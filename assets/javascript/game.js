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
		var correctGuess = 0;



		if (userGuess == 'f' || userGuess == 'u' || userGuess == 'n' || userGuess == "k" || userGuess == 'y' || userGuess == 't' || userGuess == 'o' || userGuess == 'w' || userGuess =='y') {
			
			console.log(userGuess);


			var correctGuess = document.getElementById("correctguess").innerHTML;
			var newCorrectGuess = parseInt(correctGuess)+1;
			document.getElementById("correctguess").innerHTML = newCorrectGuess;
				

				if (newCorrectGuess == '8') {
					alert("You won");
					var oldimage = document.getElementById("imageplace").innerHTML;
					var funkyimage = "<img src='./assets/images/funkytown.jpg' alt='image1' height='100' width='175'>"
					document.getElementById("imageplace").innerHTML = funkyimage;
					var winner = document.getElementById("numwin").innerHTML;
					var awinner = parseInt(winner)+1;
					document.getElementById("numwin").innerHTML = awinner;



				}
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

		if (userGuess == 'f'){
			var let1 = document.getElementById("pos1");
			let1.innerHTML = "f";
			}
		if (userGuess == 'u'){
			var let2 = document.getElementById("pos2");
			let2.innerHTML = "u";
			}
		if (userGuess == 'n'){
			var let3 = document.getElementById("pos3");
			let3.innerHTML = "n";
			}
		if (userGuess == 'k'){
			var let4 = document.getElementById("pos4");
			let4.innerHTML = "k";
			}
		if (userGuess == 'y'){
			var let5 = document.getElementById("pos5");
			let5.innerHTML = "y";
			}

		if (userGuess == 't'){
			var let6 = document.getElementById("pos6");
			let6.innerHTML = "t";
			}
		if (userGuess == 'o'){
			var let7 = document.getElementById("pos7");
			let7.innerHTML = "o";
			}
		if (userGuess == 'w'){
			var let8 = document.getElementById("pos8");
			let8.innerHTML = "w";
			}
		if (userGuess == 'n'){
			var let9 = document.getElementById("pos9");
			let9.innerHTML = "n";
			}

		
		



		}
	};
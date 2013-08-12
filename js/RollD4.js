function rollD4(){
					var die1 = document.getElementById("die1");
					var status = document.getElementById("status");
					var d4 = Math.floor(Math.random() * 4) + 1;
					die1.innerHTML = d4;
					status.innerHTML = "You rolled "+d4+"."; 
				}
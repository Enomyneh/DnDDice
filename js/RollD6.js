function rollD6(){
					var die2 = document.getElementById("die2");
					var status = document.getElementById("status");
					var d6 = Math.floor(Math.random() * 6) + 1;
					die2.innerHTML = d6;
					status.innerHTML = "You rolled "+d6+"."; 
				}
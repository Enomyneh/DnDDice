function rollD8(){
					var die3 = document.getElementById("die3");
					var status = document.getElementById("status");
					var d8 = Math.floor(Math.random() * 8) + 1;
					die3.innerHTML = d8;
					status.innerHTML = "You rolled "+d8+"."; 
				}
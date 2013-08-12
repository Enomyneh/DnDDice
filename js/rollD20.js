function rollD20(){
					var die6 = document.getElementById("die6");
					var status = document.getElementById("status");
					var d20 = Math.floor(Math.random() * 20) + 1;
					die6.innerHTML = d20;
					status.innerHTML = "You rolled "+d20+"."; 
				}
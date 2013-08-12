function rollD12(){
					var die5 = document.getElementById("die5");
					var status = document.getElementById("status");
					var d12 = Math.floor(Math.random() * 12) + 1;
					die5.innerHTML = d12;
					status.innerHTML = "You rolled "+d12+"."; 
				}
function rollD10(){
					var die4 = document.getElementById("die4");
					var status = document.getElementById("status");
					var d10 = Math.floor(Math.random() * 10) + 1;
					die4.innerHTML = d10;
					status.innerHTML = "You rolled "+d10+"."; 
				}
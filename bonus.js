document.addEventListener("DOMContentLoaded",()=> {

	//1. récupérer la réponse
	var bonus = document.getElementById("bonus");
	var valider = document.getElementById("valider");

	//2. action
	var even = function(){

				console.log(bonus.value);
				if(bonus.value == "la rando ça crève" || bonus.value == "la randonnée ça crève"){
					alert("Bien joué ! Maintenant envoie moi un message au 07 66 34 51 87 pour avoir une récompense !.")
				}else{
					alert("Et non. Dommage !(pense à tout mettre en minuscule !)");
				}

					
			}
			
			
		
	

	//3. Appeler la fonction
	
	valider.addEventListener("click", even);
	
});

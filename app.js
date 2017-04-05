$(document).ready(function(){


	$("#enregistrer").on('click',function(){   // quand je clique la valeur s'enregistre
		var valeur= $("#saisie").val();
		localStorage.setItem("save",valeur);   // et localStorage l'enregistre
		$("#saisie").val("");
		window.location.reload();
		
	});
var recup = localStorage.getItem("save");  //récupérer la valeur enregistrer de local storage

$("textarea").val(recup);
console.log(recup);	

});






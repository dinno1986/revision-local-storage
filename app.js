$(document).ready(function(){

	$("#enregistrer").on('click',function(){   // quand je clique la valeur s'enregistre
		var valeur= $("#saisie").val();
		localStorage.setItem("string",valeur);
$("#saisie").val("");
	});

});



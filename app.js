function sauvegarde() {
	
	var valeur= $("#text").val();
	
	localStorage.setItem("valeur", valeur);
};



function recupere() {

	var valeurValeur= localStorage.getItem("valeur"); 
	$("#texte").html(valeurValeur);
};







$(document).ready(function() {

	$("#action").click(function() {
		sauvegarde();
	});
	
	recupere();

});





	








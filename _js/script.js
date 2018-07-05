function printer(){
	alert("Jallo");
}

function add(){
	var zahl1 = parseInt(document.getElementById("feld1").value);
	var zahl2 = parseInt(document.getElementById("feld2").value);
	document.getElementById("feld3").value = (zahl1 + zahl2);
}
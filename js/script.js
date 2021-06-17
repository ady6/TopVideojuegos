function cargarFoto(){
	var nombreJuego = document.getElementById("juegos").value;
	var miImagen= document.getElementById("imagen");
	miImagen.src="imagenes/"+nombreJuego;
}
function elegirJuego(){
	var d = Math.floor(Math.random() * (10)) + 1;
	var miImagen= document.getElementById("imagen2");
	miImagen.src = "imagenes/"+d+".jpg";
}
function calcularFactorial(){
	var miNumero= parseInt(document.getElementById("numero").value);
	var total = 1;
	for (var i = 1; i <=miNumero; i++) {
		total = total*i;
 	}
 	document.getElementById("factorial").innerHTML="El factorial de "+miNumero+ " es "+total;
}
function EsPar(){
	var miNumero2= parseInt(document.getElementById("numero2").value);
	if (miNumero2 == NaN) {
		document.getElementById("par").innerHTML="";
	}else if (miNumero2 % 2 == 0) {
		document.getElementById("par").innerHTML="El "+miNumero2+ " es par";
	}else {
		document.getElementById("par").innerHTML="El "+miNumero2+ " es impar";
	}
}

function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
  }
}

/* aquí guardamos la variable de que se ha
aceptado el uso de cookies así no mostraremos
el mensaje de nuevo */
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}

/* ésto se ejecuta cuando la web está cargada */
$(document).ready(function () {
  compruebaAceptaCookies();
});
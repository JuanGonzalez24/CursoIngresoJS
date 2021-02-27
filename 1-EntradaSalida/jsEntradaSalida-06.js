/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var unNumero;
	var otroNumero;
	var suma;

	//Entradas
	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	//Coversiones (Parseo)
	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	alert(unNumero);
	alert(otroNumero);

	suma= unNumero + otroNumero; // +, -, *, /, %

	alert("La suma es: " + suma);
}




/*necesito dos variables que me permitan guardar esas entradas*/

/* txtIdNumeroUno
txtIdNumeroDos*/
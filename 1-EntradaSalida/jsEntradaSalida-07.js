/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var unNumero;
	var otroNumero;
	var resta;

	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	alert(unNumero);
	alert(otroNumero);

	resta = unNumero - otroNumero;

	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var unNumero;
	var otroNumero;
	var multiplicacion;

	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	alert(unNumero);
	alert(otroNumero);

	multiplicacion = unNumero * otroNumero;

	alert("La multiplicacion es:" + multiplicacion);
}

function dividir()
{
	var unNumero;
	var otroNumero;
	var division;

	unNumero = txtIdNumeroUno.value;
	otroNumero = txtIdNumeroDos.value;

	unNumero = parseInt(unNumero);
	otroNumero = parseInt(otroNumero);

	alert(unNumero);
	alert(otroNumero);

	division = unNumero / otroNumero;

	alert("La division es: " + division);
}


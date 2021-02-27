/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado; 
	var valorDescuento;

	importe = txtIdImporte.value; 
	importe = parseInt(importe);

	//1) 

	//valorDescuento = importe * 25/100;


	valorDescuento = importe * 0.25;

	resultado = importe - valorDescuento;

	//3)resultado = importe - (importe * 0.25);

	//4)resultado = importe * 0.75;

	txtIdResultado.value = resultado;

	





}
	//txtIdImporte
	//txtIdResultado

	//Ejercicio 2 clase de apoyo sabado 

	/*var importeProducto;
	var nombreProducto;
	var porcentajeDescuento;
	var descuento;
	var precioFinal;
	var mensaje;

	importeProducto = txtIdImporte.value;
	importeProducto = parseFloat(importeProducto);
	nombreProducto = prompt("Ingrese el nombre del producto");
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");

	descuento = importeProducto * porcentajeDescuento /100;

	precioFinal = importeProducto - descuento;

	mensaje = "Usted compro un " + nombreProducto + " con " + porcentajeDescuento + "% de descuento, el precio final es " + precioFinal;

	txtIdResultado.value = mensaje;*/
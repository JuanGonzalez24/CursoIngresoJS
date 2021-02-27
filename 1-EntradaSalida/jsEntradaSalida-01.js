/* 
Gonzalez Juan Ignacio
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
*/
/*
Ejercicio 1
*/
function mostrar()
{
	alert("Esto funciona de maravilla");
}


 //Clase de apoyo 2 Sabado Ejercicio if 1 
/*function mostrar()
{
	var distancia;
	var tiempo;
	var velocidad;


	distancia=prompt("Ingrese la distancia");
	distancia=parseInt(distancia);
	tiempo=prompt("Ingrese el tiempo que tardo");
	tiempo=parseInt(tiempo);
	velocidad=parseInt(velocidad);

	velocidad = tiempo + distancia;

	if(velocidad < 60)
	{
		alert("Usted va muy lento");
	}
	else
	{	
		if(velocidad <80)
		{
			alert("Usted va lento");
		}
		else
		{
			if(velocidad <120)
			{
				alert("ahi de la ley");
			}
			else
			{
				if (velocidad >120) 
				{
					alert("eso no se hace");
				}
			}
		}	
		
	}

	








}*/
/* Sabado 20 calse de apoyo ejercicio while 1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)*/
/*function mostrar()
{
	//repetir
		//pedir un numero
		//evaluar si el numero cumple la condicion
		//si se cumple: cuento
		
		//muestro cuantos cumplen la condicion 
	
	var contadorInteraciones;
	var numeroIngresado;
	var contadorRango10y20; 

	
	contadorInteraciones = 0;
	contadorRango10y20 = 0;

	while(contadorInteraciones < 5)
	{
		numeroIngresado = prompt("Ingrese un numero " + contadorInteraciones+1 + " numero ");
		numeroIngresado = parseInt(numeroIngresado);

		//evaluar la condicion en este caso los numeros que estan entre 10 y 20 inclusive con un if

		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			//contadorRango10y20 = contadorRango10y20 + 1;
			contadorRango10y20++;


		}
		
		
		contadorInteraciones++; //variables de control debe estar siempre al usar el while
								//, escribirlo antes del cierre de llave para que no entre en un bucle
	}

	alert("La cantidad de numeros que estan entre 10 y 20 es: " + contadorRango10y20);









}*/
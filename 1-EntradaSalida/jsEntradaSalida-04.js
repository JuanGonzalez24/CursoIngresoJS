/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//"txtIdNombre"

	var nombreDelEmpleado;
	nombreDelEmpleado = prompt("Ingrese el nombre");
	//txtIdNombre.value = nombreDelEmpleado;
	document.getElementById('"txtIdNombre"').value = nombreDelEmpleado;
}

/*
Entradas  prompt, id.value o documentent.gerelementbyid("...").value;
procesos: transformar las entradas concatenar 
salidas: alert console.log, document.wtrite, id.value o document.getelementbyid("...").value; 
*/


// Ejercicio 1 , clase de apoyo 1 sabados 
/* enunciado : 1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.*/

/*
function mostrar()
{
    var descripción;
    var precio;
    var aumento;
    var resultado; 
    
    descripción = prompt("Ingrese descripción del producto");
    precio = prompt("ingrese precio");
    
    
    precio=parseFloat(precio);
    
    aumento= precio * 30 / 100;
    
    resultado= precio + aumento;


    
    alert(" el valor de " + descripción + " con el 30% es de " + resultado);
    
    
    
    
    
    
    
}
*/
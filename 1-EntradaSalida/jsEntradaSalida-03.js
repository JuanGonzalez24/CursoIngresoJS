/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
/*function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado=document.getElementById('txtIdNombre').value; 
	alert(nombreIngresado);

}
*/

/* Gonzalez Juan Ignacio */ 

function mostrar()
{	
    var nombreDelAlumno;
    var edadDelAlumno;
    
    nombreDelAlumno = document.getElementById("txtIdNombre").value;
    
    edadDelAlumno = prompt("ingrese su edad");
    
    document.write("Ud  se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");
    
    
}



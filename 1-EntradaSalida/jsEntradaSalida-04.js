/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	// Asigno a la variable nombre el valor que escribe en el prompt.
	nombre = prompt("Ingrese su nombre");

	// Asigno al valor de la caja de texto el valor de la variable nombre.
	document.getElementById("txtIdNombre").value = nombre;
}


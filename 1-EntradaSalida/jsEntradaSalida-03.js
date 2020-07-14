/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	// Obtiene del documento HTML el ID que ingresa el usuario.
	nombre = document.getElementById("txtIdNombre").value; 

	// nombre = txtIdNombre.value; --> Funciona igual que la línea anterior y también es válido.

	alert(nombre);

	// Para limpiar la caja de texto.
	document.getElementById("txtIdNombre").value = ""; 
}



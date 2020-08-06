/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;

	num = prompt("Ingrese un número entre 0 y 9");

	while (num <0 || num> 9)
	{
		num = prompt("El número no se encuentra en el rango permitido. Ingrese un número entre 0 y 9");
	}

	document.getElementById("txtIdNumero").value = num;
}

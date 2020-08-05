function mostrar()
{
	let i = 0;
	let num;
	let suma = 0;
	let promedio;

	while(i < 5)
	{
		num = parseFloat(prompt("Ingrese un número"));
		suma += num;
		i++;
	}

	document.getElementById("txtIdSuma").value = suma;

	promedio = suma / 5;
	
	document.getElementById("txtIdPromedio").value = promedio;
}
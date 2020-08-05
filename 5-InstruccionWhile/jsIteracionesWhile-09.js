/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let num;
	let max;
	let min;
	let flag = 0;
	let seguir;
	
	do
	{
		num = parseInt(prompt("Ingrese un número:"));

		 // En la primera interacción num > max es false, ya que max es undefined, y no es lógico que algo sea mayor a undefined. Igualmente el if entrar por el flag.
		if (flag == 0 || num > max)
		{
			max = num;
		}

		// Ponemos el flag dentro de este if porque si lo ponemos afuera se pisa el valor todas las veces que el usuario ingrese un número y es innecesario.
		if (flag == 0 || num > min)
		{
			min = num;
			flag = 1;
		}
			
		seguir = prompt("Quiere ingresar otro número? (s/n):");

	} while (seguir == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}
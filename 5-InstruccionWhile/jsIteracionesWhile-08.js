/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	let positivos = 0; // 0 es el elemento neutro de la suma.
	let negativos = 1; // 1 es el elemento neutro del producto.
	let seguir;
	let flag = 0;

	// do while se ejecuta cuando queremos que por lo menos una vez se ejecute el código dentro del mismo.
	do
	{
		num = parseInt(prompt("Ingrese un número:"));

		if (num >= 0)
		{
			positivos = positivos + num;
		}
		else
		{
			flag = 1;
			negativos = negativos * num;
		}

		seguir = prompt("Quiere ingresar otro número? (s/n):");

	} while (seguir == 's');

	if(flag == 0)
	{
		negativos = 0;
	}

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;
	
}
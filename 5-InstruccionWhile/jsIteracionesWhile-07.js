/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num;
	let suma = 0;
	let promedio;
	let contador = 0;
	let seguir;

	do 
	{
		num = parseInt(prompt("Ingrese un número:"));

		suma += num;

		contador++;

		promedio = suma / contador;

		seguir = prompt("Desea ingresar otro número? (s/n): ");

	} while(seguir == 's')

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);
}
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num;
	let sumaNeg = 0;
	let sumaPos = 0;
	let cantNeg = 0;
	let cantPos = 0;
	let cantCeros = 0;
	let cantPar = 0;
	let promPos;
	let promNeg;
	let difPosNeg;
	let seguir;

	do
	{
		num = parseInt(prompt("Ingrese un número: "));

		if (num < 0)
		{
			sumaNeg += num;
			cantNeg++;
		}
		else
		{
			if (num == 0)
			{
				cantCeros++;
				cantPos++;
			}
			else
			{
				sumaPos += num;
				cantPos++;
			}
		}

		if (num % 2 == 0)
		{
			cantPar++;
		}

		promPos = sumaPos / cantPos;
		promNeg = sumaNeg / cantNeg;
		
		difPosNeg = sumaPos - sumaNeg;

		seguir = prompt("Desea ingresar otro número? (s/n): ");

	} while (seguir == 's')

	document.write("1 - Suma Negativos: " + sumaNeg + "<br>");
	document.write("2 - Suma Positivos: " + sumaPos + "<br>");
	document.write("3 - Cantidad Positivos: " + cantPos + "<br>");
	document.write("4 - Cantidad Negativos: " + cantNeg + "<br>");
	document.write("5 - Cantidad Ceros: " + cantCeros + "<br>");
	document.write("6 - Cantidad Pares: " + cantPar + "<br>");
	document.write("7 - Promedio Positivos: " + promPos + "<br>");
	document.write("8 - Promedio Negativos: " + promNeg + "<br>");
	document.write("9 - Diferencia entre Positivos y Negativos: " + difPosNeg);
}
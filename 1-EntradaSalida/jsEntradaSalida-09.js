/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	resultado = sueldo * 1.1; // CONSULTAR: Si pongo 100 me sale 110.00000000000001 

	// resultado = ((sueldo * 10) / 100) + sueldo; --> me da correcto, why?

	document.getElementById("txtIdResultado").value = resultado;
}

/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo (m: masculino / f: femenino):");

	while (sexo != "m" && sexo != "f")
	{
		sexo = prompt("Ingreso inválido. Ingrese su sexo (m: masculino / f: femenino)");
	}

	if (sexo == 'f')
	{
		document.getElementById("txtIdSexo").value = "Femenino";
	}
	else
	{
		document.getElementById("txtIdSexo").value = "Masculino";
	}
	
}
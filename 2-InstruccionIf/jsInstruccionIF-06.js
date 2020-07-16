function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>18 || edad==18)
	{
		alert("Usted es mayor de edad.")
	}
	else
	{
		if((edad>13 || edad==13) && (edad<17 || edad==17))
		{
			alert("Usted es adolescente.")
		}		
		else
		{
			alert("Usted es un niño.")
		}
	}
}
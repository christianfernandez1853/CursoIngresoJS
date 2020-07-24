function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if((edad>18 || edad==18) && (document.getElementById("estadoCivil").value=="Soltero"))
	{
		alert("Es soltero y no es menor.")
	}
}
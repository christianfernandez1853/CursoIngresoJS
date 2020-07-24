function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch (destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En " + destino + " hace frío.");
			break;
		
		case "Cataratas":
		case "Mar del plata":
			alert("En " + destino + " hace calor.");
			break;
	}
}
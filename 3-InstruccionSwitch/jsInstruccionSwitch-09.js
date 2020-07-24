function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
				precioFinal = 15000 * 1.2;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				precioFinal = 15000 * 0.9;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Mar del plata":
				precioFinal = 15000 * 0.8;
				alert("El precio final es: $" + precioFinal);
				break;
			}
			break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
				precioFinal = 15000 * 0.8;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				precioFinal = 15000 * 1.1;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Mar del plata":
				precioFinal = 15000 * 1.2;
				alert("El precio final es: $" + precioFinal);
				break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino)
			{
				case "Bariloche":	
				case "Cataratas":
				case "Mar del plata":
				precioFinal = 15000 * 1.1;
				alert("El precio final es: $" + precioFinal);
				break;
	
				case "Cordoba":
				precioFinal = 15000;
				alert("El precio final es: $" + precioFinal);
				break;
			}
			break;		
	}
}
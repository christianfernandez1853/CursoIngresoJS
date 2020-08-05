function mostrar()
{
	let estacion;
	let destino;
	let precioFinal;
	const precio = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion)
	{
		case "Invierno":
			switch (destino)
			{
				case "Bariloche":
				precioFinal = precio * 1.2;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				precioFinal = precio * 0.9;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Mar del plata":
				precioFinal = precio * 0.8;
				alert("El precio final es: $" + precioFinal);
				break;
			}
			break;

		case "Verano":
			switch (destino)
			{
				case "Bariloche":
				precioFinal = precio * 0.8;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
				precioFinal = precio * 1.1;
				alert("El precio final es: $" + precioFinal);
				break;

				case "Mar del plata":
				precioFinal = precio * 1.2;
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
				precioFinal = precio * 1.1;
				alert("El precio final es: $" + precioFinal);
				break;
	
				case "Cordoba":
				precioFinal = precio;
				alert("El precio final es: $" + precioFinal);
				break;
			}
			break;		
	}
}
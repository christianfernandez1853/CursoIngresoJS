function mostrar()
{
	let nota;
	
	nota = Math.round(Math.random() * 9 + 1);

	if(nota == 9 || nota == 10)
	{
		alert("EXCELENTE (" + nota + ")");
	}
	else
	{
		if(nota >= 4 && nota <= 8)
		{
			alert("APROBÓ (" + nota + ")");
		}
		else
		{
			if( nota < 4)
			{
				alert("Vamos, la próxima se puede (" + nota + ")");
			}
		}
	}
}
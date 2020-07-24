function mostrar()
{
	let nota;
	let min = 1;
	let max = 10;
	
	nota = (Math.floor(Math.random() * (max - min + 1)) + min);

	if(nota==9 || nota==10)
	{
		alert("EXCELENTE (" + nota + ")");
	}
	else
	{
		if((nota>4 || nota ==4) && (nota<9))
		{
			alert("APROBÓ (" + nota + ")");
		}
		else
		{
			if(nota<4)
			{
				alert("Vamos, la próxima se puede (" + nota + ")");
			}
		}
	}
}
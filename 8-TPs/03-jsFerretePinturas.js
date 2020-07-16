/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosFah;
    let gradosCen;

    gradosFah = parseFloat(document.getElementById("txtIdTemperatura").value);

    gradosCen = ((gradosFah - 32) * 5/9); 

    alert(gradosFah + " Fahrenheit son " + gradosCen + " Centígrados.");
}

function CentigradosFahrenheit () 
{

}

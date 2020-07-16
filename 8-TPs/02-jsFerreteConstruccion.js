/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let perimetroTerreno;
    let alambreComprar;

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    perimetroTerreno = 2 * (largoTerreno + anchoTerreno);
    alambreComprar = 3 * perimetroTerreno;

    alert ("Se necesitan " + alambreComprar + " metros de alambre.");
}
function Circulo () 
{
    let radioTerreno;
    let perimetroTerreno;
    let alambreComprar;

    radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);

    perimetroTerreno = 2 * Math.PI * radioTerreno;
    alambreComprar = 3 * perimetroTerreno;

    alert ("Se necesitan " + alambreComprar.toFixed(2) + " metros de alambre.");
}
function Materiales () 
{
	let largoTerreno;
    let anchoTerreno;
    let bolsasCemento;
    let bolsasCal;

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);

    bolsasCemento = 2 * (largoTerreno * anchoTerreno); // NOT SURE
    bolsasCal = 3 * (largoTerreno * anchoTerreno); // NOT SURE

    alert("Se necesitan " + bolsasCemento + " bolsas de cemento y " + bolsasCal + " bolsas de cal.");
}
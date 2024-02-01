
function confirmar() {
    return confirm("bienvenidos al galpon de Juan!! Un lugar seguro para almacenar autos\n\n¿Deseas almacenar este auto en el estacionamiento?");
}
function horas() {
    return parseInt(prompt("Ingrese la cantidad de horas que desea dejar el auto \n\nHora 500 $ \n+4 horas se cobra un adicional de 250 $"));
}

    function CalcPrecioFinal(HorasTotal) {
    const PrecioHora = 500; 
    const PrecioAdicional = 250; 
    let PrecioFinal = HorasTotal * PrecioHora;

    if (HorasTotal > 4) {
    PrecioFinal= PrecioFinal + PrecioAdicional;
    }

    return PrecioFinal;
}




function main() {
    let repetir;

    do{
    const confirmacion = confirmar();

    if (confirmacion) {
    const HorasTotal = horas();
    const PrecioFinal = CalcPrecioFinal(HorasTotal);
    alert("El precio final es de $ "+PrecioFinal);
    } else {
        alert("No se almacenará ningún auto en el estacionamiento.");
    }
    let repetir = confirm("¿Desea dejar otro auto?");
    } while(repetir == true)

}
main();
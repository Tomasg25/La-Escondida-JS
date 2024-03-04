let reservas = []
class Form{
    constructor(nombre,mail,fecha,telefono,sector,counter){
        this.nombre = nombre
        this.mail = mail;
        this.fecha = fecha
        this.telefono = telefono
        this.sector = sector
        this.personas = counter
    }
}
function cargaFicha(nombre,mail,fecha,telefono,sector,counter){
        let cargaNombre = nombre;
        let cargaMail = mail;
        let cargaFecha = fecha;
        let cargaTelefono = telefono;
        let cargaSector = sector;
        let cargaPersonas = counter;
        const form = new Form(cargaNombre , cargaMail , cargaFecha , cargaTelefono , cargaSector , cargaPersonas)
        reservas.push(form)
    }

let $formulario = document.getElementById("form")
let $nombre = document.getElementById("nombre")
let $mail = document.getElementById("mail")
let $fecha = document.getElementById("fecha")
let $telefono = document.getElementById("telefono")
let $sector = document.getElementById("sector")
let $counter = document.getElementById("counter")
let $sumar = document.getElementById("plus-btn")
let $restar = document.getElementById("minus-btn")
let $enviar = document.getElementById("btn-enviar")

//contador de personas
let contador = 0
$sumar.onclick=(event)=>{
    event.preventDefault()
    contador ++
    $counter.innerHTML=contador
    $restar.disabled=false
    
}
$restar.onclick=(event)=>{
    event.preventDefault()
    if(contador === 0){
        $restar.disabled=true
    }
    else contador--
    $counter.innerHTML=contador
}

// evento para cargar array de objetos
$enviar.onclick=()=>{
    let nombre = document.getElementById("nombre").value

    let mail = document.getElementById("mail").value

    let fecha = document.getElementById("fecha").value

    let telefono = document.getElementById("telefono").value

    let sector = document.getElementById("sector").value

    let counter = contador
    cargaFicha(nombre,mail,fecha,telefono,sector,counter)
    localStorage.setItem("datosStorage", JSON.stringify(reservas))
    reservas = []
    document.location.reload();
}
//renderizado de datos de reserva
let $resStorage = localStorage.getItem("datosStorage")
let resCarga = JSON.parse($resStorage)
let $datosR = document.getElementById("datosReserva")
let $btnVer= document.getElementById("verRes")
        console.log(resCarga)
        console.log(reservas)

$btnVer.onclick = () =>{
    console.log(resCarga)
    resCarga.forEach(reservas => {
        let contenedor = document.createElement("div")
        contenedor.className = "card"
        contenedor.innerHTML = `<h3 id="card">Datos de su reserva</h3>
                                <ul>
                                <li class="elements"> NOMBRE : ${reservas.nombre} </li>
                                <li class="elements"> MAIL : ${reservas.mail}</li>
                                <li class="elements"> FECHA : ${reservas.fecha}</li>
                                <li class="elements"> TELEFONO: ${reservas.telefono}</li>
                                <li class="elements"> SECTOR DE PREFERENCIA: ${reservas.sector} </li>
                                <li class="elements"> CANTIDAD DE PERSONAS : ${reservas.personas} </li>
                                <input class="button" type="submit" value="Confirmar Datos" id="btn-confirm">
                                </ul>`
        datosReserva.appendChild(contenedor)
        localStorage.clear();
        resCarga = [] 
        console.log(resCarga)
    });
}

$btnConf = document.getElementById("btn-confirm")

$btnConf.onclick = ()=>{
    document.location.reload();
}
let reservas = []
let id = 6
class Form {
    constructor(nombre, mail, fecha, telefono, sector, counter,id) {
        this.nombre = nombre
        this.mail = mail
        this.fecha = fecha
        this.telefono = telefono
        this.sector = sector
        this.personas = counter
        this.id = id
    }
}
function cargaFicha(nombre, mail, fecha, telefono, sector, counter,id) {
    let cargaNombre = nombre;
    let cargaMail = mail;
    let cargaFecha = fecha;
    let cargaTelefono = telefono;
    let cargaSector = sector;
    let cargaPersonas = counter;
    let cargaId = id
    const form = new Form(cargaNombre, cargaMail, cargaFecha, cargaTelefono, cargaSector, cargaPersonas, cargaId)
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
$sumar.onclick = (event) => {
    event.preventDefault()
    contador++
    $counter.innerHTML = contador
    $restar.disabled = false

}
$restar.onclick = (event) => {
    event.preventDefault()
    if (contador === 0) {
        $restar.disabled = true
    }
    else contador--
    $counter.innerHTML = contador
}
// evento para cargar array de objetos
$enviar.onclick = (event) => {
    event.preventDefault()
    let nombre = document.getElementById("nombre").value

    let mail = document.getElementById("mail").value

    let fecha = document.getElementById("fecha").value

    let telefono = document.getElementById("telefono").value

    let sector = document.getElementById("sector").value

    let counter = contador

    id++

    cargaFicha(nombre, mail, fecha, telefono, sector, counter,id)
    localStorage.setItem("datosStorage", JSON.stringify(reservas))
    reservas = []

    //alerta Sweet para mostrar reserva despues de 1/2 segundo
    let $resStorage = localStorage.getItem("datosStorage")
    let resCarga = JSON.parse($resStorage)

    setTimeout(() => {
        resCarga.forEach(reservas => {
            Swal.fire({
                title: "<strong>Datos de su reserva</strong>",
                icon: "éxito",
                background: "#ba9b7d",
                width: "30%",
                html:
                    `<ul>
                        <li class="elements"> NOMBRE : ${reservas.nombre} </li>
                        <li class="elements"> MAIL : ${reservas.mail}</li>
                        <li class="elements"> FECHA : ${reservas.fecha}</li>
                        <li class="elements"> TELEFONO: ${reservas.telefono}</li>
                        <li class="elements"> SECTOR: ${reservas.sector} </li>
                        <li class="elements"> CANTIDAD DE PERSONAS : ${reservas.personas} </li>
                    </ul>`,
                showCloseButton: false,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `
                <i id="btnConfirm" class="confirmbtn"></i> Mis datos son correctos!`,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
                <i class="confirmbtn">Mis datos son incorrectos</i>`,
                cancelButtonAriaLabel: "Thumbs down"
            }).then((result) => {
                if (result.isConfirmed) {
                    try {
                        window.location.reload();
                    } catch (error) {
                        console.error("Error al actualizar la página:", error);
                    }
                }
            });
        })
    }, 1500)
}

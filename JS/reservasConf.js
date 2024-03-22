let confirmRes = localStorage.getItem("confirmArray")
confirmRes = JSON.parse(confirmRes)

let contedorConfirm = document.getElementById("resConf")

function renderConfirmRes (reservaConf){
    reservaConf.forEach(product => {
        const render = document.createElement("div")
        render.className = "card"
        render.innerHTML =`<ul id="${product.id}">
                                <li class="elements"> FECHA : ${product.fecha}</li>
                                <li class="elements"> CANTIDAD DE PERSONAS : ${product.personas} </li>
                                <li class="elements"> SECTOR: ${product.sector} </li>
                                <li class="elements"> NOMBRE : ${product.nombre} </li>
                                <li class="elements"> MAIL : ${product.mail}</li>                                
                                <li class="elements"> TELEFONO: ${product.telefono}</li>
                            </ul>`
    contedorConfirm.appendChild(render)
    })
}
localStorage.clear()
renderConfirmRes(confirmRes)



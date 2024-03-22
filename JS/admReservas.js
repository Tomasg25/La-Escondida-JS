// link con "base de datos"
let confirmArray = []
let deletedArray = []
let $contRes = document.getElementById("cardRes")

fetch("../db/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `<ul id="${product.id}">
                          <li class="elements"> NOMBRE : ${product.nombre} </li>
                          <li class="elements"> MAIL : ${product.mail}</li>
                          <li class="elements"> FECHA : ${product.fecha}</li>
                          <li class="elements"> TELEFONO: ${product.telefono}</li>
                          <li class="elements"> SECTOR: ${product.sector} </li>
                          <li class="elements"> CANTIDAD DE PERSONAS : ${product.personas} </li>
                          <div class="contenedorBtn">
                                <input class="confirm" id="confirm" type="image" src="../img/check-svgrepo-com.svg">
                                <input class="cancel" id="cancel" type="image" src="../img/close-svgrepo-com.svg"">
                          </div>
                      </ul>`
      $contRes.appendChild(card)
    });
    let products = data
    confirmar(products)
    eliminar(products)
  })

function confirmar(products) {
  $btnCard1 = document.querySelectorAll(".confirm")
  $btnCard1.forEach(input => {
    input.onclick = (e) => {
      const confirmIdCard = e.currentTarget.parentElement.parentElement.id
      const confirmCard = products.find(product => product.id == confirmIdCard)

      confirmArray.push(confirmCard)
      localStorage.setItem("confirmArray", JSON.stringify(confirmArray))

      e.currentTarget.parentElement.parentElement.parentElement.remove();
      Toastify({
        text: "Reserva Confirmada!!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ba9b7d",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    }
  })
}
function eliminar(products) {
  $btnCard2 = document.querySelectorAll(".cancel")
  $btnCard2.forEach(input => {
    input.onclick = (e) => {
      const deletedIdCard = e.currentTarget.parentElement.parentElement.id
      const deletedCard = products.find(product => product.id == deletedIdCard)

      deletedArray.push(deletedCard)
      localStorage.setItem("deletedArray", JSON.stringify(deletedArray))
      e.currentTarget.parentElement.parentElement.parentElement.remove();
      Toastify({
        text: "Reserva Eliminada!!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ba9b7d",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    }
  })
}


//copiar funcion del carrito del prodesor  para eliminar y mandar las reservas confirmadas a una "papelera de reservas¿?"
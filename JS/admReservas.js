let confirmArray = [];
let deletedArray = [];
let $contRes = document.getElementById("cardRes");
let $Newres = localStorage.getItem("datosStorage");
let NewRes = JSON.parse($Newres);

// Función para renderizar las reservas
function renderReservas(data) {
  $contRes.innerHTML = "";
  console.log(data);
  const reservasPendientes = data.filter(product => {
    return !confirmArray.some(confirmada => confirmada.id === product.id) ||
      !deletedArray.some(eliminada => eliminada.id === product.id);
  });
  reservasPendientes.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
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
                        </ul>`;
    $contRes.appendChild(card);
  });
  confirmar(data);
  eliminar(data);
}

if (NewRes) {
  fetch("../db/data.json")
    .then(response => response.json())
    .then(data => {
      data.unshift(...NewRes);
      renderReservas(data);
    });
} else {
  fetch("../db/data.json")
    .then(response => response.json())
    .then(data => {
      renderReservas(data);
    });
}

function confirmar(data) {
  $btnCard1 = document.querySelectorAll(".confirm");
  $btnCard1.forEach(input => {
    input.onclick = (e) => {
      const confirmIdCard = e.currentTarget.parentElement.parentElement.id;
      const confirmCardIndex = data.findIndex(item => item.id == confirmIdCard);

      if (confirmCardIndex !== -1) {
        const confirmCard = data.splice(confirmCardIndex, 1)[0]; // Eliminar el elemento del array
        confirmArray.push(confirmCard);
        localStorage.setItem("confirmArray", JSON.stringify(confirmArray));
        e.currentTarget.parentElement.parentElement.parentElement.remove();
        renderReservas(data); // Renderizar nuevamente las reservas después de la confirmación
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
      } else {
        console.log("Elemento no encontrado");
      }
    }
  });
}

function eliminar(data) {
  $btnCard2 = document.querySelectorAll(".cancel");
  $btnCard2.forEach(input => {
    input.onclick = (e) => {
      const deletedIdCard = e.currentTarget.parentElement.parentElement.id;
      const deletedCardIndex = data.findIndex(item => item.id == deletedIdCard);

      if (deletedCardIndex !== -1) {
        const deletedCard = data.splice(deletedCardIndex, 1)[0]; // Eliminar el elemento del array
        deletedArray.push(deletedCard);
        localStorage.setItem("deletedArray", JSON.stringify(deletedArray));
        e.currentTarget.parentElement.parentElement.parentElement.remove();
        renderReservas(data); // Renderizar nuevamente las reservas después de la eliminación
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
      } else {
        console.log("Elemento no encontrado");
      }
    }
  });
}
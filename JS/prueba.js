// Función para renderizar las reservas
function renderReservas(data) {
    $contRes.innerHTML = ""; // Limpiar el contenido existente antes de renderizar de nuevo
    data.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<ul id="${product.nombre}">
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

    // Asignar eventos a los botones de confirmar y cancelar
    confirmar(data);
    eliminar(data);
}

// Verificar si hay una nueva reserva y renderizar las reservas
if (NewRes) {
    fetch("../db/data.json")
        .then(response => response.json())
        .then(data => {
            // Agregar la nueva reserva al inicio del array data
            data.unshift(...NewRes);
            // Renderizar las reservas
            renderReservas(data);
        });
} else {
    // Si no hay nueva reserva, simplemente renderizar las reservas desde el JSON
    fetch("../db/data.json")
        .then(response => response.json())
        .then(data => {
            // Renderizar las reservas
            renderReservas(data);
        });
}

// Función para manejar la confirmación de reservas
function confirmar(products) {
    let $btnCard1 = document.querySelectorAll(".confirm");
    $btnCard1.forEach(input => {
        input.onclick = (e) => {
            // Obtener el ID de la reserva que se está confirmando
            const confirmIdCard = e.currentTarget.parentElement.parentElement.id;
            // Encontrar la reserva en el array de productos
            const confirmCard = products.find(product => product.nombre === confirmIdCard);

            // Agregar la reserva confirmada al array confirmArray
            confirmArray.push(confirmCard);
            localStorage.setItem("confirmArray", JSON.stringify(confirmArray));

            // Eliminar la reserva del DOM
            e.currentTarget.parentElement.parentElement.parentElement.remove();
            // Mostrar el mensaje de reserva confirmada
            showToast("Reserva Confirmada!!");
        };
    });
}

// Función para manejar la eliminación de reservas
function eliminar(products) {
    let $btnCard2 = document.querySelectorAll(".cancel");
    $btnCard2.forEach(input => {
        input.onclick = (e) => {
            // Obtener el ID de la reserva que se está cancelando
            const deletedIdCard = e.currentTarget.parentElement.parentElement.id;
            // Encontrar la reserva en el array de productos
            const deletedCard = products.find(product => product.nombre === deletedIdCard);

            // Agregar la reserva cancelada al array deletedArray
            deletedArray.push(deletedCard);
            localStorage.setItem("deletedArray", JSON.stringify(deletedArray));

            // Eliminar la reserva del DOM
            e.currentTarget.parentElement.parentElement.parentElement.remove();
            // Mostrar el mensaje de reserva eliminada
            showToast("Reserva Eliminada!!");
        };
    });
}

// Función para mostrar el mensaje de toast
function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#ba9b7d",
        },
        onClick: function () { }
    }).showToast();
}

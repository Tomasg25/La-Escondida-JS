
// ingreso y validacion de contraseña
let $btnIngreso = document.getElementById("btn-ingresar-sist");

$btnIngreso.onclick = () => {
    Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        background: "#2c2824",
        color: "#ffffff",
        inputAttributes: {
            maxlength: "15",
            autocapitalize: "off",
            autocorrect: "off"
        },
        preConfirm: (password) => {
            if (password === "escondida123") {
                window.location.href = "./pages/administracion.html";
            } else {
                // Aquí puedes mostrar un mensaje si la contraseña es incorrecta
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Contraseña incorrecta! porfavor intente nuevamente...",
                    background: "#2c2824",
                    color: "#ffffff",
                });
            }
        }
    });
};
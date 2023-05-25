/* const USUARIO_NOMBRE_REGISTRADO = "carla";
const USUARIO_CONTRASENIA_REGISTRADO= ;
const USUARIO_DOS_NOMBRE_REGISTRADO = "juan";
const USUARIO_DOS_CONTRASENIA_REGISTRADA =  ; */

/* let usuarioNombreRegistrado= prompt("Ingresar un usuario");
let usuarioContraseniaRegistrado = prompt ("Ingresar una constraseña "); */

const nomUsuario = document.querySelector("#contenedor-usuario");
const inputContrasenia = document.querySelector("#contrasenia");

const usuario = ["carla", "juan"];
const constrasenias = ["Carla1.", "juan1."];

function verificar() {

    let usuarioIngresado = nomUsuario.value;
    let contraseniaIngresada = inputContrasenia.value;

    for (let i = 0; i < usuario.length; i++) {
         
        if ((usuarioIngresado == (usuario[i])) && (contraseniaIngresada == constrasenias[i])) {
            document.write("contraseña y usuarios correctos");
        } else {
            document.write("constraseña o constraseña incorrectos");
        }
    }
}


/* if (((usuarioContraseniaRegistrado == USUARIO_CONTRASENIA_REGISTRADO) && (USUARIO_NOMBRE_REGISTRADO == usuarioNombreRegistrado)) || ((usuarioNombreRegistrado == USUARIO_DOS_NOMBRE_REGISTRADO) && (usuarioContraseniaRegistrado == USUARIO_DOS_CONTRASENIA_REGISTRADA)) ) {
    document.write ("contraseña y usuarios correctos");
} else {
    document.write ("constraseña o constraseña incorrectos");
} */



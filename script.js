const USUARIO_NOMBRE_REGISTRADO = "carla";
const USUARIO_CONTRASENIA_REGISTRADO= "Carla1.";
const USUARIO_DOS_NOMBRE_REGISTRADO = "juan";
const USUARIO_DOS_CONTRASENIA_REGISTRADA = "juan1." ;


let usuarioNombreRegistrado= prompt("Ingresar un usuario");
let usuarioContraseniaRegistrado = prompt ("Ingresar una constraseña ");



if (((usuarioContraseniaRegistrado == USUARIO_CONTRASENIA_REGISTRADO) && (USUARIO_NOMBRE_REGISTRADO == usuarioNombreRegistrado)) || ((usuarioNombreRegistrado == USUARIO_DOS_NOMBRE_REGISTRADO) && (usuarioContraseniaRegistrado == USUARIO_DOS_CONTRASENIA_REGISTRADA)) ) {
    document.write ("contraseña y usuarios correctos");
} else {
    document.write ("constraseña o constraseña incorrectos");
}
 
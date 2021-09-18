
//FORMULARIO

let nombre = document.getElementById('nombre')
let telefono = document.getElementById('apellido')
let email = document.getElementById('exampleFormControlInput1')
let mensaje = document.getElementById('exampleFormControlTextarea1')
const form  = document.getElementById('formulario')

form.addEventListener('submit', (e) => {

  sender(nombre.value,telefono.value,email.value,mensaje.value);

     form.reset()

    e.preventDefault()
 
})

function sender(nombre, telefono, email, mensaje) {

    if (nombre === '' || telefono === '' || email === ''|| mensaje === ''){
        return  alert('Complete todos los campos'); }

    Email.send({
        SecureToken: '2c4afccd-6479-4c97-b185-704dc598b7fd', 
        To: 'cumau2013@gmail.com', 
        From: 'cumau2013@gmail.com', 
        Subject: `${nombre} envio un mensaje`,
        Body: `
                <p>Nombre: <b>${nombre}</b></p>
                <p>Telefono: <b>${telefono}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Mensaje: <b>${mensaje}</b></p>
                `
    }).then(
        message => swal("Mensaje enviado exitosamente", "en breve nos pondremos en contacto", "success")
    )
    .catch(error => swal("Error al enviar el mensaje", "disculpa las molestias", "error"))
}


// ANIMACION NAVBAR
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})




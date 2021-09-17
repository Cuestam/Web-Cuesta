
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
        SecureToken: 'token de seguridad generado por https://smtp.js', //Para configurar los permisos de seguridad SSL
        To: 'correo de destino', //Donde va a llegar el mail
        From: 'correo de origen', //Desde donde se va a enviar. Tiene que ser el mismo que genero el token de seguridad
        Subject: `${nombre} envio un mensaje`,
        Body: `
                <p>Nombre: <b>${nombre}</b></p>
                <p>Telefono: <b>${telefono}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Mensaje: <b>${mensaje}</b></p>
                `
    }).then(
        message => swal("Correo enviado exitosamente", "en breve nos pondremos en contacto", "success")
        //Se utiliza la libreria sweetAlert para generar ventanas emergentes tipo popup, se cargo el cdn en el index para mostrar funcionamiento
        //mas info en https://sweetalert.js.org/
    )
    .catch(error => swal("Error al enviar el mensaje", "disculpa las molestias", "error"))
    //en caso de error sale otro popup informando esto
}




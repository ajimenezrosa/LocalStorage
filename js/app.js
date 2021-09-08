// Variables...
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


// Event Listener...
eventListners();

function eventListners() {
    formulario.addEventListener('submit', agregarTweets);
}



// Funciones...
function agregarTweets(e) {
        e.preventDefault();

        // Text Area donde el USUARIO  escribe..
        const tweets = document.querySelector('#tweet').value;

        //validacion
        if(tweets === ''){
            mostrarError('Un Mensaje no Puede ir Vacio');
            return ; // evita que se ejecuten mas lineas de codigo
        } 
        console.log(tweets);

    }


   // mostrar mensaje de error
   
   function mostrarError(error) {
       const mensajeError = document.createElement('p');
       mensajeError.textContent = error;
       mensajeError.classList.add('error');

       // insertarlo en el contenido
       const contenido = document.querySelector('#contenido');

       contenido.appendChild(mensajeError)

       // eliminar la alerta despues de 3 segundos.
       setTimeout( () => {
           mensajeError.remove();

       }, 3000);
   }
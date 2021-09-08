// Variables...
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


// Event Listener...
eventListners();

function eventListners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweets);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML()
    })
}



// Funciones...
function agregarTweets(e) {
        e.preventDefault();

        // Text Area donde el USUARIO  escribe..
        const tweet = document.querySelector('#tweet').value;

        //validacion
        if(tweet === ''){
            mostrarError('Un Mensaje no Puede ir Vacio');
            return ; // evita que se ejecuten mas lineas de codigo
        } 

        const tweetObj = {
            id: Date.now(),
            tweet
        }


        // Anadir al arreglo de Tweets
        tweets = [...tweets, tweetObj];

        // Una vez agregado
        crearHTML();


        // Reinicar formulario.
        formulario.reset()

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


   // Muestra el estado de los tweets

   function crearHTML() {


        lipiarHtml()

       if(tweets.length > 0){
           tweets.forEach(twet => {
               // crear el HTML
               const li = document.createElement('li');

               // Anadir el Texto.....
               li.textContent = twet.tweet;

                // Agregar al Html 
                listaTweets.appendChild(li);

           })
       }

       sincronizarStorage();

   }



   // limpiar el html

   function lipiarHtml() {
       while(listaTweets.firstChild) {
           listaTweets.removeChild(listaTweets.firstChild);
       }


   }

 // Agrega los Tweets Actuales al LocalStorage
  function sincronizarStorage() {
    localStorage.setItem('tweets', 
                JSON.stringify(tweets)
    );



  }
 
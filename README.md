# Window.localStorage

#### La propiedad de sólo lectura localStorage te permite acceder al objeto local Storage; los datos persisten almacenados entre de las diferentes sesiones de navegación. localStorage es similar a sessionStorage (en-US). La única diferencia es que, mientras los datos almacenados en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra la página.

## Sintaxis

    Sintaxis


# Ejemplos de codigos Reutilizables.

## funcion de error

~~~javaScript
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
~~~
# 

## Al ejecutar un ***appendChild *** es normal que los datos se dupliquen, para evitar esto utilizamos una funcion que limpie nuestro HTML antes de insertar los datos.

~~~javascript

   function lipiarHtml() {
       while(listaTweets.firstChild) {
           listaTweets.removeChild(listaTweets.firstChild);
       }
   }
 ~~~  


# Fetch
> Usamos la fetchAPI web (o fetchAPI) para realizar una solicitud a un servidor (que podría ser el nuestro o uno externo, por ejemplo, una API meteorológica) para recuperar cierta información sin recargar la página.
> Fetch se utiliza para obtener el resultado de una determinada URL sin recargar la página.


### Sintaxis
`fetch(URL)`

<small>Debemos reeplazar URL con una cadena real ejemplo "https://rickandmortyapi.com/api". Si accedemos a esta URL nos devolvera un JSON </small>

### Fetch devuelve una promesa
Esto se debe a que la recuperación tiene que ir a la red, lo que podría tardar entre un par de milisegundos y un segundo (en promedio). Por lo tanto, no podemos congelar todo el navegador mientras la solicitud de recuperación está funcionando.
Por lo tanto, por diseño, fetchdevuelve una promesa que podemos resolver una vez que la solicitud haya finalizado.

Esto significa que tendremos que agregar un .then() después de la fetch() llamada
> Entonces, como fetch(URL) devuelve una promesa, podemos resolver la promesa con un archivo .then(callback). Este llamar de vuelta se ejecutará en algún momento en el futuro cuando se haya completado la solicitud de recuperación.
Además, este callback recibirá como primer argumento la respuesta a la solicitud que le enviamos. Puedes llamar a este argumento como quieras. Sin embargo, te recomendamos que lo llames response.

<pre>
 <code>
   fetch(URL)
    .then(response =>{
       console.log(response)
    })
 </code>
</pre> 
*** 
## Obteniendo JSON
Siempre que recibimos solo un objeto de respuesta usando Fetch(URL), el navegador no sabe que los datos que ha recibido están en formato JSON . Es por eso que deberíamos convertir manualmente la respuesta a JSON:
<pre>
 <code>
  fetch(URL)
  .then(response =>{
       return response.json()
  })
 </code>
</pre>

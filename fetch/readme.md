

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
Debemos comprender que cada vez que enviamos una solicitud de recuperación a una determinada API y espera JSON (que es la mayor parte del tiempo), debemos convertir la respuesta que recibimos a formato JSON
<pre>
 <code>
  fetch(URL)
  .then(response => response.json())
 </code>
</pre>
> Este método .json() responsees es casi exactamente el mismo JSON.parse(string). Sin embargo, la única diferencia es que response.json() no bloquea y es asincrónico, lo que significa que devuelve una promesa .
***
Al igual que cómo fetch(URL) devuelve una promesa, el response.json() método también devuelve una promesa. Esto significa que no podemos leer su resultado directamente. En cambio, tenemos queresolverla promesa con .then(callback).

Al hacerlo, nos dará acceso a lo data que obtenemos al buscar esa URL. Así es como se ve la sintaxis:
<pre>
 <code>
fetch(URL)
.then(response => response.json())
.then(data => {
    console.log(data);
});
 </code>
</pre>
> La variable data será la información que devuelva la API
***
## Manejando errores en fetch
<pre>
 <code>
  fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // handle network errors
        console.error(error);
    });
 </code>
</pre>
> El error .catch(callback) se ejecuta cuando la promesa fetch() es rechazada.
La promesa fetch() se rechaza por errores de red. Entonces, si la solicitud de recuperación no se pudo completar debido a un error de red, se rechazará y catch() se ejecutará la devolución de llamada.

Sin embargo, si la solicitud fetch() se completó y el servidor respondió con un código de error (como 4xxo 5xx), entonces la fetch() promesa no se rechazará.

El razonamiento aquí es que fetch() se completó con éxito, pero el servidor devolvió un error.

Esto significa que si realiza una solicitud de recuperación de una URL que no existe (un 404), la fetch() promesa se cumplirá y se .then(callback) ejecutará como de costumbre. Solo .catch(callback) se ejecutará si algo impidió que fetch() completara la solicitud (por ejemplo, una falla de red).

### Podremos manejar 4xxy 5xx verificando si response.ok no fue  true:
<pre>
 <code>
  fetch(URL)
    .then(response => {
        if (!response.ok) {
            // 4xx or 5xx error
            throw new Error("API issues.");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
 </code>
</pre>
> Lo que estamos haciendo aquí es verificar cuándo response.ok es false, en ese caso, arrojamos un nuevo error.
Rechazará la promesa, por lo throw new Error("API issues.") que el código deja de ejecutar el actual y.then(callback) luego salta al .catch(callback).

## Metodos Fetch
Cuando hacemos una peticion con fetch(URL) por defecto se usa el metodo Get, hay 4 metodos comunes:
* Get --> lee data
* Post --> envia data
* Put --> modifica data
* Delete --> elimina data

Cuando vamos a usar estos metodos debemos tener en cuenta :

La URL base : ejemplo -> https://example.com/api
* lista de usuarios GET /users
* crear un usuario POST /users
* uctualizar un usuario especifico PUT /users/{id}
* eliminar un usuario especifico DELETE /users/{id}
## Solicitar cuerpo 
Solicitudes realizadas con el método PUT , POST o DELETE pueden tener un campo adicional llamado body. El cuerpo puede contener cualquier información que desee enviar con la solicitud. Sin embargo, las solicitudes realizadas con GET no pueden tener un archivo body.
> Esto se debe a que con get obtenemos informacion, y con los demas metodos estamos enviando informacion

### Post, Put, Delete
Para realizar una solicitud de recuperación con un método que no sea GET, deberá especificarlo en el segundo argumento debajo de la method propiedad.
<pre>
 <code>
  fetch(url, {
   method: "POST" // or "post"
  })
  .then(response => response.json())
  .then(data=> console.log(data))
 </code>
</pre>

### Enviando el cuerpo
En una aplicacion donde queremos crear un nuevo mensaje, el cuerpo del mensaje se veria asi
<pre>
 <code>
  fetch("https://example.com/api/message", {
    method: "POST",   // Decimos el metodo ya que vamos a enviar informacion
    body: JSON.stringify({ // También necesitábamos enviar el body. En este ejemplo, el texto del mensaje. 
        message: "Your message here..."
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read the server response
});
 </code>
</pre>
> JSON.stringify el cuerpo
No podemos enviar objetos directamente a la API, por lo que tenemos que convertirlos en una cadena con JSON.stringify.

Otra informacion relevante que debemos enviar es el header donde le diremos el formato de datos que estaremos enviando
<pre>
 <code>
  fetch(URL, {
    method: "POST", // or PUT or DELETE
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        key1: 'value1', // replace with key/value based on documentation
        key2: 'value2', // same as above (if needed)
    })
})
.then(response => response.json())
.then(data => {
    console.log(data); // read server response
});
 </code>
</pre>

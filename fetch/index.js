// >> Este es un ejemplo de como consumir una API con fetch, en este caso la API de Rick and Morty
// >> Hacemos la petición a la API y obtenemos la información de un personaje en específico 


// esta es la URL de la API que vamos a consumir
const baseUrl = 'https://rickandmortyapi.com/api/character/2';

fetch(baseUrl) // fetch is a function that returns a promise
.then(response => response.json()) // response.json() returns a promise
.then(data => { // data is the resolved value of the promise returned by response.json()
    console.log(data) // Nos permite observar la data que nos devuelve la API
    info(data);
});


const info = (data) =>{
    console.log(`The name of the character is ${data.name} and the status is ${data.status}`)
}
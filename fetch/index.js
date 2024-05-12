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


//-----------------------------------------------------------------------------------------------------------
// Creando una clase constructora para consumir una Api

class FetchWrapper {
    constructor(baseUrl){ // constructor es un método especial de una clase para crear e inicializar un objeto creado con una clase
        this.baseUrl = baseUrl;
    }
    get(endpoint){ 
        return fetch(this.baseUrl + endpoint) 
        .then(response => response.json())
    }
}
// Instanciamos la clase FetchWrapper
const API = new FetchWrapper('https://rickandmortyapi.com/api/character/'); 
// Hacemos la petición a la API y obtenemos la información de un personaje en específico
API.get('2')
.then(data => console.log(data)) // Nos permite observar la data que nos devuelve la API

//-----------------------------------------------------------------------------------------------------------
// Creamos una clase para implementar un PUT a la API
class FetchWrapper{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    PUT(endpoint, body){
        return fetch(this.baseUrl + endpoint, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body) 
        })
        .then(response => response.json())
    }
}
const Api  = new FetchWrapper("https://rickandmortyapi.com/api/character/")
Api.PUT('2', {name: 'Morty', status: 'Alive'})
.then(data => console.log(data))

// -----------------------------------------------------------------------------------------------------------
// Creamos una clase para implementar un POST y Deleted a la API


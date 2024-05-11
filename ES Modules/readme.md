# ES Modules
A medida que crece la complejidad de las aplicaciones web, necesitamos poder escribir código en múltiples archivos y hacer referencia a funciones (y variables) desde otro archivo. Esto ayuda en la reutilización, legibilidad y mantenimiento del código

## Modulos JavaScript
Cada archivo JavaScript se llama Módulo o Módulo ES,cada uno está separado del mundo exterior. Cada variable que defina en un archivo con let o const solo está disponible en ese archivo y no en los demás. Lo mismo se aplica a funciones y clases.

Pero, ¿qué pasa si quisiéramos definir una clase llamada Helper en un archivo helpers.js y luego la queremos usar en index.js ?

Esto fallará al indicarle que el Asistente no está definido porque todo lo que define en un archivo no está expuesto a otros archivos
> Aquí es cuando las palabras clave **import** y **export** se vuelven útiles. Se necesitan 2 pasos:

* Primero, debe comenzar exportando las clases/funciones/variables que necesita usar fuera de este archivo.
* Luego, puede importarlos al otro archivo donde necesite usarlos.
### Exportaciones nombradas
Se llaman cuando utilizamos export con una variable, funcion o clase y podemos tener varias exportaciones nombradas en el mismo archivo

> config.js 

export const votingAge = 18;

export const settings = {
    theme: "light",
    admin: false
};

> index.js

import {votingAge} from "./config.js";

<small> OR </small>

import {settings} from "./config.js";

  OR
  
import {settings, votingAge} from "./config.js";

:memo: **Aviso**: Es importante tener en cuenta que para poder utilizar todas las funciones descritas anteriormente, debe vincular su página HTML (por ejemplo index.html) a su secuencia de comandos
 <pre>
<code>
  <script type = "module" src="./index.js" > </script>
  </code>
  </pre>
  
> Esto de no estar usando algun paquete de modulos como node 

# ES Modules
A medida que crece la complejidad de las aplicaciones web, necesitamos poder escribir código en múltiples archivos y hacer referencia a funciones (y variables) desde otro archivo. Esto ayuda en la reutilización, legibilidad y mantenimiento del código

## Modulos JavaScript
Cada archivo JavaScript se llama Módulo o Módulo ES,cada uno está separado del mundo exterior. Cada variable que defina en un archivo con let o const solo está disponible en ese archivo y no en los demás. Lo mismo se aplica a funciones y clases.

Pero, ¿qué pasa si quisiéramos definir una clase llamada Helper en un archivo helpers.js y luego la queremos usar en index.js ?

Esto fallará al indicarle que el Asistente no está definido porque todo lo que define en un archivo no está expuesto a otros archivos



## Deployar el servidor

Correr `node server.js`. Navegar a `http://localhost:3000/`. Verás un mensaje que pone Paint&Paint API-REST, esto quiere decir que nuestra API está funcionando correctamente.

## Comentarios

Instalé (cors: ^2.8.4) para evitar los típicos errores de "Access-Control-Allow-Origin" por ejemplo.
Como es contenido estático declaré ambos resources que me enviasteís y hice un express.static con el path de los dos ficheros.

Las rutas de datos resultantes són:

http://localhost:3000/data
http://localhost:3000/population




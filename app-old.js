const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' }); //estatus 200 que es el ok, y especifico que quiero que la respuesta sea un json

        let salida = {
            nombre: 'Jesus',
            edad: 24,
            url: req.url //request del usuario
        }

        res.write(JSON.stringify(salida));
        res.end();

    }) //parametros: solicitudes y respuestas
    .listen(8080);

console.log('escuchando el puerto 8080');
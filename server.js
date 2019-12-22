const express = require('express');
const app = express();

//parciales: sirve para reutilizar codigo
const hbs = require('hbs');

//importo a los helpers
require('./hbs/helpers')

const port = process.env.PORT || 8080

//Middlewhere: instruccion que se ejecuta siempre no importa que URL se pida
app.use(express.static(__dirname + '/public'));

//Express HBS engines
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'Jesús Amaro',
    });
}); //todas las app que se ejecuten con / pasan por esta función

app.get('/about', (req, res) => {

    res.render('about', {})
}); //todas las app que se ejecuten con /about pasan por esta función
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})
const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');
const routesApi = require('./routes-api');

//Settings
app.set('appName', 'TSW Server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));

//Routes
app.use(routes);
app.use('/api', routesApi);

//Respuesta en caso de que no se encuentre la ruta 
app.get("*", (req, res) => {
    res.end('Archivo no encontrado')
});

app.listen(3000, () => {
    console.log('¡Servidor funcionando!');
    console.log('Nombre de la app: ', app.get('appName'));
});
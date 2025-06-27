require('dotenv').config();
<<<<<<< HEAD
=======

>>>>>>> Nahuel
const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use(express.urlencoded({extended:true}));
app.use(express.json());
=======
app.use(express.json());
app.use(express.urlencoded({extended:true}));
>>>>>>> Nahuel

app.use(session({
    secret: process.env.SESSION_SECRET || 'clave-secreta',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
<<<<<<< HEAD
    res.locals.usuario = req.session.usuario;
=======
    if (!req.session.carrito) req.session.carrito = [];
    res.locals.usuario = req.session.usuario;
    res.locals.carrito = req.session.carrito;
>>>>>>> Nahuel
    next();
});

app.use('/', require('./routes/acciones'));
app.use('/', require('./routes/datosBack'));
app.use('/', require('./routes/vistas'));

app.use((req, res) => {
<<<<<<< HEAD
    res.status(404).render('pages/errors/404');
});

app.listen(3000, () => {
    console.log('Servidor creado: http://localhost:3000');
=======
    res.status(404).render('pages/errors/404', { title: 'ERROR 404'});
>>>>>>> Nahuel
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Servidor en puerto ${PORT}`);
=======
    const local = process.env.PORT ? '' : `(http://localhost:${PORT})`;
    console.log(`Servidor: ${local}`);
>>>>>>> Nahuel
});
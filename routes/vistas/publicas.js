const express = require('express');
const router = express.Router();
const redirigirSiYaEstaLogueado = require('../../utils/redirigirSiYaEstaLogueado');

router.get('/', (req, res) => res.render('pages/users/noRegistrado/index'));

<<<<<<< HEAD
router.get('/registro', redirigirSiYaEstaLogueado, (req, res) => {
    res.render('pages/users/noRegistrado/f_registro');
});

router.get('/inicioSesion', redirigirSiYaEstaLogueado, (req, res) => {
    const errorLogin = req.query.error || null;
    res.render('pages/users/noRegistrado/f_inicioSesion', { errorLogin });
});

router.get('/bienvenido/:id', (req, res) => {
    const { id } = req.params;
    res.render('pages/users/noRegistrado/p_bienvenidoAlSpa', { id });
});

router.get('/confirmarCodigo', (req, res) => res.render('pages/users/noRegistrado/confirmarCodigo'));
router.get('/contraseniaActualizadaCorrectamente', (req, res) => res.render('pages/users/noRegistrado/contraseniaActualizadaCorrectamente'));
router.get('/ingreseNuevaContrasenia', (req, res) => res.render('pages/users/noRegistrado/ingreseNuevaContrasenia'));
router.get('/olvideMiContrasenia', (req, res) => res.render('pages/users/noRegistrado/olvideMiContrasenia'));
=======
router.get('/registro', (req, res) => {
    res.render('pages/users/noRegistrado/formularios/registro');
});

router.get('/inicioSesion', (req, res) => {
    const errorLogin = req.query.error || null;
    res.render('pages/users/noRegistrado/formularios/inicioSesion', { errorLogin });
});

router.get('/olvideMiContrasenia', (req, res) => {
    res.render('pages/users/noRegistrado/formularios/olvideMiContrasenia')
});

router.get('/confirmarCodigo', (req, res) => res.render('pages/users/noRegistrado/formularios/confirmarCodigo'));
router.get('/nuevaContrasenia', (req, res) => res.render('pages/users/noRegistrado/formularios/nuevaContrasenia'));
router.get('/contrasenia-actualizada', (req, res) => res.render('pages/users/noRegistrado/contraseniaActualizadaCorrectamente'));

router.get('/bienvenido/:id', (req, res) => {
    const { id } = req.params;
    res.render('pages/users/noRegistrado/bienvenidoAlSpa', { id });
});

>>>>>>> Nahuel

module.exports = router;
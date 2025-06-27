const express = require('express');
const router = express.Router();
const verificarSesion = require('../../utils/authMiddleware');

<<<<<<< HEAD
router.get('/', verificarSesion, (req, res) => {
    if (req.session.usuario.usuarioTipo !== 'profesional') return res.redirect('/');
    res.render('pages/users/profesional/index', { usuario: req.session.usuario });
});

=======
router.get('/', (req, res) => {
    res.render('pages/users/profesional/index', { usuario: req.session.usuario });
});

router.get('/pannel-turno', (req, res) => {
    res.render('pages/users/profesional/panelTurnos');
})

>>>>>>> Nahuel
// Aquí puedes agregar más rutas específicas del profesional si las implementás

module.exports = router;

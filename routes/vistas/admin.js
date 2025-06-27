const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const verificarSesion = require('../../utils/authMiddleware');

router.get('/', verificarSesion, (req, res) => {
    if (req.session.usuario.usuarioTipo !== 'admin') return res.redirect('/');
    res.render('pages/users/admin/index', { usuario: req.session.usuario });
});

router.get('/pagina_admin', (req, res) => res.render('pages/users/admin/pagina_admin'));
=======

router.get('/', (req, res) => {
    res.render('pages/users/admin/index', { usuario: req.session.usuario });
});

router.get('/administracion', (req, res) => res.render('pages/users/admin/panelAdmin'));
>>>>>>> Nahuel

module.exports = router;

const express = require('express');
const router = express.Router();
const verificarSesion = require('../../utils/authMiddleware');

<<<<<<< HEAD
router.get('/', verificarSesion, (req, res) => {
    if (req.session.usuario.usuarioTipo !== 'cliente') return res.redirect('/');
    res.render('pages/users/cliente/index');
});
=======
router.get('/', (req, res) => { res.render('pages/users/cliente/index');});
>>>>>>> Nahuel

router.get('/solicitudTurno', verificarSesion, (req, res) => {
    res.render('pages/users/cliente/solicitudTurno');
});

router.get('/turnoConfirmado', verificarSesion, (req, res) => {
    res.render('pages/users/cliente/turnoConfirmado');
});

<<<<<<< HEAD
// Otras páginas cliente
router.get('/pagina_cliente_servicios-individuales', (req, res) => res.render('pages/users/cliente/pagina_cliente_servicios-individuales'));
router.get('/pagina_cliente_servicios-grupales', (req, res) => res.render('pages/users/cliente/pagina_cliente_servicios-grupales'));
router.get('/pagina_cliente_reservar', (req, res) => res.render('pages/users/cliente/pagina_cliente_reservar'));
router.get('/pagina_cliente_gracias', (req, res) => res.render('pages/users/cliente/pagina_cliente_gracias'));
router.get('/pagina_cliente_consulta', (req, res) => res.render('pages/users/cliente/pagina_cliente_consulta'));
router.get('/pagina_cliente_registrado', (req, res) => res.render('pages/users/cliente/pagina_cliente_registrado'));
=======


router.get('/formulario-turno', (req, res) => {
  if (!req.session.usuario || req.session.usuario.usuarioTipo !== 'cliente') {
    return res.redirect('/inicioSesion');
  }

  res.render('pages/users/cliente/f_solicitudTurno', {
    usuario: req.session.usuario
  });
});
>>>>>>> Nahuel

module.exports = router;

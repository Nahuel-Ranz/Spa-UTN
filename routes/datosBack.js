const express = require("express");
const router = express.Router();
const poolConnection = require('../db/connection')
const serviciosController = require('../controllers/serviciosController');
const turnosController = require("../controllers/turnosController");

// Obtener servicios/secciones
router.get("/servicios", turnosController.obtenerServicios);

// Fechas disponibles
router.get("/horarios-disponibles", turnosController.obtenerFechasDisponibles);

// Horas disponibles para una fecha
router.get("/horas-disponibles", turnosController.obtenerHorasDisponibles);

// Profesionales disponibles
router.get("/profesionales-disponibles", turnosController.obtenerProfesionalesDisponibles);

router.get('/servicios-individuales', serviciosController.serviciosIndividuales);
router.get('/servicios-grupales', serviciosController.serviciosGrupales);

// Registrar turno
router.post('/registrar-turno', async (req, res) => {
  try {
    const { servicio, fecha, hora, empleadoID } = req.body;
    const clienteID = req.session.usuario.id;

    const salaID = Math.floor(Math.random() * 4) + 1;

    await pool.query('CALL almacenarTurno(?, ?, ?, ?, ?, ?)', [servicio, fecha, hora, empleadoID, salaID, clienteID]);

    res.json({ exito: true, mensaje: 'Turno registrado con éxito.' });
    
  } catch (err) {
    console.error(err);
    res.json({ exito: false, mensaje: 'Error al registrar el turno.' });
  }
});


module.exports = router;

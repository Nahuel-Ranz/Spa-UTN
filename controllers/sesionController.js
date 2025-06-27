const poolConnection = require('../db/connection');

const iniciarSesion = async (req, res) => {
    const { numeroCliente, contrasenia } = req.body;

    try {
        const [rows] = await poolConnection.query('call iniciarSesion(?, ?)', [numeroCliente, contrasenia]);
        const resultado =rows[0][0];

<<<<<<< HEAD
        if(!resultado || resultado.usuarioTipo === 'noPass' || resultado.usuarioTipo === 'noPerson') {
=======
        if(
            resultado.usuarioTipo === 'noPass' ||
            resultado.usuarioTipo === 'noPerson' ||
            resultado.usuarioTipo === 'logueado'
        ) {
>>>>>>> Nahuel
            return res.redirect(`/inicioSesion?error=${resultado.usuarioTipo}`);
        }

        req.session.usuario = resultado;
<<<<<<< HEAD

        if(resultado.usuarioTipo === 'admin') { return res.redirect('/admin');}
        if(resultado.usuarioTipo === 'profesional') { return res.redirect('/profesional');}
        if(resultado.usuarioTipo === 'cliente') { return res.redirect('/cliente');}
=======
        return res.redirect(`/${resultado.usuarioTipo}`);
>>>>>>> Nahuel
    } catch(error) {
        console.error('ERROR AL INICIAR SESIÓN: ', error);
        res.status(500).send('ERROR INTERNO DEL SERVIDOR');
    }
};

const cerrarSesion = async (req, res) => {
<<<<<<< HEAD
    req.session.destroy(error => {
=======
    const usuarioID = req.session?.usuario?.id;
    
    req.session.destroy(async error => {
>>>>>>> Nahuel
        if(error) {
            console.error('ERROR AL CERRAR LA SESIÓN: ', error);
            return  res.status(500).send('OCURRIÓ UN ERROR AL CERRAR SESIÓN.')
        }

        res.clearCookie('connect.sid');
<<<<<<< HEAD
=======

        if(usuarioID) {
            try {
                await poolConnection.query('update Personas set online = false where id = ?', [usuarioID]);
            } catch(error) {
                console.log('ERROR CERRANDO SESIÓN EN LA BASE DE DATOS', error);
            }
        }

>>>>>>> Nahuel
        res.redirect('/');
    })
}

module.exports = { iniciarSesion, cerrarSesion };
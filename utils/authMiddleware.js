function verificarSesion(req, res, next) {
<<<<<<< HEAD
    if(req.session.usuario) { return next();}
=======
    if(req.session.usuario) {
        
        res.redirect('/views/pages/users/admin/pagina_admin');
        return next();
    }
>>>>>>> Nahuel
    res.redirect('/inicioSesion');
}

module.exports = verificarSesion;
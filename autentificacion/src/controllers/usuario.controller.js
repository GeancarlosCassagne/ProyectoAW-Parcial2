const { UsuarioModel } = require('../models');
const { UsuarioService } = require('../services');
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const { jwtconfig } = require('../middlewares');

class UsuarioController {

    async login(req, res) {
        console.log(req.body)
        try {
            const { email } = req.body;
            const usuario = await UsuarioService.login(email);
            if (usuario.length == 0) {
                res.json({ error: 'No se encontro el usuario' });
            }

            if (!bcrypt.compareSync(req.body.password, usuario[0].password)) {
                res.json({ error: 'contraseña incorrecta' })
            }
            
            var jwt = nJwt.create({ id: usuario[0]._id }, jwtconfig.secret);
            jwt.setExpiration(new Date().getTime() + (24 * 60 * 60 * 1000))
            res.json({ token: jwt.compact() })
            
        } catch (error) {

        }
    }

}

module.exports = new UsuarioController();
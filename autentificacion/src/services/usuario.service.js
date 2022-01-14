const {UsuarioModel}= require('../models');
const bcrypt = require('bcryptjs');

class UsuarioService{

    async login(email){
        const usuario = await UsuarioModel.find({'email':email});
        return usuario
    }
}

module.exports = new UsuarioService();
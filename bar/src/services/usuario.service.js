const {UsuarioModel}= require('../models');
const bcrypt = require('bcryptjs');

class UsuarioService{

    async add(entity){
        entity.password=bcrypt.hashSync(entity.password, bcrypt.genSaltSync(10))
        const usuario = new UsuarioModel(entity);
        await usuario.save();
    }
    
    async update(id, entity){
        await UsuarioModel.findByIdAndUpdate(id, entity);
        return UsuarioModel.findById(id);
    }

    async getOne(id){
        const empleado = await UsuarioModel.findById(id);
        return empleado;
    }

    async delete(id){
        await UsuarioModel.deleteMany({_usuario: id});
        return await UsuarioModel.findByIdAndDelete(id);
    }
    
    
}

module.exports = new UsuarioService();
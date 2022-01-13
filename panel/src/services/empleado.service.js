const {EmpleadoModel}= require('../models');
const bcrypt = require('bcryptjs');

class EmpleadoService{

    async getAll(){
        const empleados = await EmpleadoModel.find();
        return empleados;
    }
    
    async update(id, entity){
        entity.password = bcrypt.hashSync(entity.password, bcrypt.genSaltSync(10))
        await EmpleadoModel.findByIdAndUpdate(id, entity);
        return EmpleadoModel.findById(id);
    }

    async getOne(id){
        const empleado = await EmpleadoModel.findById(id);
        return empleado;
    }

    async delete(id){
        await EmpleadoModel.deleteMany({_usuario: id});
        return await EmpleadoModel.findByIdAndDelete(id);
    }
    
    
}

module.exports = new EmpleadoService();
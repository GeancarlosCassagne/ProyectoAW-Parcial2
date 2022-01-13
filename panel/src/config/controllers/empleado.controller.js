const { EmpleadoModel } = require('../models');
const { EmpleadoService } = require('../services');
const passport= require('passport');

class EmpleadoController{
    async getAll(req, res){
        
        try {
            const data = await EmpleadoService.getAll();
            res.render('empleados',{data:data})
            
        } catch (error) {
            res.json(error)
        }
    }

    async getOne(req, res){
        
        try {
            const {empleado_id} = req.params;
            const empleado = await EmpleadoService.getOne(empleado_id);
            res.render('empleadosedit',{empleado:empleado})
            
        } catch (error) {
            res.json(error)
        }
    }

    async update(req, res){
        try { 
            const {body}= req;
            const {empleado_id} = req.params;
            const data = await EmpleadoService.update(empleado_id , body);
            res.redirect('/api/panel/empleados')
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res){
        try {
            const {empleado_id} = req.params;
            const data = await EmpleadoService.delete(empleado_id);
            res.redirect('/api/panel/empleados')
        } catch (error) {
            res.json(error);
        }
    }

    agregar(req, res){
        try {
            res.render('empleadosadd');
        } catch (error) {
            res.json(error);
        }
    }
    
}

module.exports = new EmpleadoController();
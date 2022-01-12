const { UsuarioModel } = require('../models');
const { UsuarioService } = require('../services');

class EmpleadoController{

    async add(req,res){
        try{
            const {body}= req;
            await UsuarioService.add(body)
            res.json({data:true})
        }catch (error){
            res.json({data:false})
        }

    }

    async getOne(req, res){
        try {
            const {usuario_id} = req.params;
            const usuario = await EmpleadoService.getOne(empleado_id);
            res.json(usuario)
            
        } catch (error) {
            res.json(error)
        }
    }

    async update(req, res){
        try { 
            const {body}= req;
            const {usuario_id} = req.params;
            const data = await EmpleadoService.update(usuario_id , body);
            res.json({data:true})
        } catch (error) {
            res.json({data:false});
        }
    }

    async delete(req, res){
        try {
            const {usuario_id} = req.params;
            const data = await EmpleadoService.delete(usuario_id);
            res.json({data:true})
        } catch (error) {
            res.json({data:false});
        }
    }
    
}

module.exports = new EmpleadoController();
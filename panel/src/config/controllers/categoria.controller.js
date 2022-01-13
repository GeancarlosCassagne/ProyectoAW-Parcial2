const { CategoriaModel } = require('../models');
const { CategoriaService } = require('../services');
const passport= require('passport');

class CategoriaController{

    async add (req, res){
        try{
            const {body}= req;
            await CategoriaService.add(body);
            res.redirect('/api/panel/categorias')
        }
        catch (error) {
            res.json(error)
        }
    }

    async getAll(req, res){
        
        try {
            const data = await CategoriaService.getAll();
            res.render('categorias',{data:data})
        } catch (error) {
            res.json(error)
        }
    }

    async update(req, res){
        try { 
            const {body}= req;
            const {categoria_id} = req.params;
            const data = await CategoriaService.update(categoria_id , body);
            res.redirect('/api/panel/categorias')
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res){
        try {
            const {categoria_id} = req.params;
            const data = await CategoriaService.delete(categoria_id);
            res.redirect('/api/panel/categorias')
        } catch (error) {
            res.json(error);
        }
    }
    
}

module.exports = new CategoriaController();
const { ProductoModel } = require('../models');
const { ProductoService, CategoriaService } = require('../services');
const passport= require('passport');

class ProductoController{

    async add (req, res){
        try{
            const {body}= req;
            await ProductoService.add(body);
            res.redirect('/api/panel/productos')
        }
        catch (error) {
            res.json(error)
        }
    }

    async getAll(req, res){
        
        try {
            const data = await ProductoService.getAll();
            res.render('productos',{data:data})
        } catch (error) {
            res.json(error)
        }
    }

    async getOne(req, res){
        try {
            const {producto_id} = req.params;
            const producto = await ProductoService.getOne(producto_id);
            const categoria = await CategoriaService.getAll();
            res.render('productoedit',{producto:producto, categoria:categoria})
        } catch (error) {
            res.json(error)
        }
    }

    async update(req, res){
        try { 
            const {body}= req;
            const {producto_id} = req.params;
            const data = await ProductoService.update(producto_id , body);
            res.redirect('/api/panel/productos')
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res){
        try {
            const {producto_id} = req.params;
            const data = await ProductoService.delete(producto_id);
            res.redirect('/api/panel/productos')
        } catch (error) {
            res.json(error);
        }
    }

    async agregar(req, res){
        try {
            const data = await ProductoService.getAll();
            res.render('productoadd', {data:data})
        } catch (error) {
            res.json(error);
        }
    }
    
}

module.exports = new ProductoController();
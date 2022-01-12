const { ProductoModel } = require('../models');
const { ProductoService } = require('../services');

class ProductoController{

    async getAll(req, res){
        
        try {
            const data = await ProductoService.getAll();
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new ProductoController();
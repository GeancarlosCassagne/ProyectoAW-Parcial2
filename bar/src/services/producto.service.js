const {ProductoModel}= require('../models');

class ProductoService{

    async getAll(){
        const productos = await ProductoModel.find();
        return productos;
    }
}

module.exports = new ProductoService();
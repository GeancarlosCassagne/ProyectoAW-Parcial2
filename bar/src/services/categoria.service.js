const {CategoriaModel}= require('../models');

class CategoriasService{

    async getAll(){
        const categorias = await CategoriaModel.find();
        return categorias;
    }
}

module.exports = new CategoriasService();
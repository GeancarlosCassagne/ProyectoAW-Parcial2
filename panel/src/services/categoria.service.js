const {CategoriaModel}= require('../models');

class CategoriaService{

    async getAll(){
        const categorias = await CategoriaModel.find();
        return categorias;
    }

    async add(entity) {
        const categoria = new CategoriaModel(entity);
        await categoria.save();
    }
    
    async update(id, entity){
        await CategoriaModel.findByIdAndUpdate(id, entity);
        return CategoriaModel.findById(id);
    }

    async delete(id){
        await CategoriaModel.deleteMany({_usuario: id});
        return await CategoriaModel.findByIdAndDelete(id);
    }
}

module.exports = new CategoriaService();
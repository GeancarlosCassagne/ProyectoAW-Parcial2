const {ProductoModel}= require('../models');

class ProductoService{

    async getAll(){
        const productos = await ProductoModel.find().populate("_categoria");
        return productos;
    }

    async getOne(id){
        const producto = await ProductoModel.findById(id);
        return producto;
    }

    async add(entity) {
        const producto = new ProductoModel(entity);
        await producto.save();
    }
    
    async update(id, entity){
        await ProductoModel.findByIdAndUpdate(id, entity);
        return ProductoModel.findById(id);
    }

    async delete(id){
        await ProductoModel.deleteMany({_usuario: id});
        return await ProductoModel.findByIdAndDelete(id);
    }
}

module.exports = new ProductoService();
const {Pedido_detalleModel}= require('../models');

class Pedido_detalleService{

    async add(entity){
        const detalle = new Pedido_detalleModel(entity);
        console.log(detalle)
        await detalle.save();
    }

    async getByPedido(id){
        const detalles = await Pedido_detalleModel.find({_pedido : id}).populate("_producto");
        return detalles;
    }

}

module.exports = new Pedido_detalleService();
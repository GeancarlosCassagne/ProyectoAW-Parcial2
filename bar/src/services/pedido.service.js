const {PedidoModel}= require('../models');

class PedidoService{

    async add(entity){
        const pedido = new PedidoModel(entity);
        await pedido.save();
    }

    async getOne(id){
        const pedido = await PedidoModel.findById(id);
        return pedido;
    }

    async getByUser(id){
        const pedidos = await PedidoModel.find({ _usuario: id });
        return pedidos;
    }

    async getLast(){
        const pedido = await PedidoModel.find().sort({$natural:-1}).limit(1);
        return pedido;
    }

}

module.exports = new PedidoService();
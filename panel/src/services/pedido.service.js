const {PedidoModel, Pedido_detalleModel}= require('../models');

class PedidoService{

    async getAll(){
        const pedidos = await PedidoModel.find().populate("_usuario");
        let fechas = []
        await pedidos.forEach(pedido => {
            fechas.push(pedido.fecha.toLocaleString());
        });
        return {pedidos,fechas};
    }
    async getDetalles(pedido_id){
        const pedido = await PedidoModel.findById(pedido_id).populate("_usuario")
        const detalles = await Pedido_detalleModel.find({"_pedido":pedido_id}).populate("_producto");
        
        
        return {pedido, detalles};
    }
}

module.exports = new PedidoService();
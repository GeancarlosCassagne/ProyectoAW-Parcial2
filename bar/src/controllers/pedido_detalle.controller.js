const { PedidoModel } = require('../models');
const { Pedido_detalleService } = require('../services');

class PedidoController{

    async add(req, res){
        try {
            const {body}= req;
            await Pedido_detalleService.add(body)
            res.json({data:true})
        } catch (error) {
            res.json(error)
        }
    }

    async getByPedido(req, res){
        
        try {
            const {pedido_id} = req.params;
            const detalles = await Pedido_detalleService.getByPedido(pedido_id);
            res.json(detalles)
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new PedidoController();
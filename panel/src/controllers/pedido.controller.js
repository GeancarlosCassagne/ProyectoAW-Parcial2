const { PedidoModel } = require('../models');
const { PedidoService } = require('../services');

class PedidoController{

    async getAll(req, res){
        try {
            const {pedidos, fechas} = await PedidoService.getAll()
            //res.json(pedidos)
            res.render('pedidos',{data:pedidos, fechas:fechas})
        } catch (error) {
            res.json(error)
        }
    }

    async getDetalles(req, res){
        try {
            const {pedido_id} = req.params
            const {pedido, detalles} = await PedidoService.getDetalles(pedido_id)
            res.render('detallepedido',{pedido:pedido,detalles:detalles})
            //res.render('detallepedido',{data:pedidos})
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new PedidoController();
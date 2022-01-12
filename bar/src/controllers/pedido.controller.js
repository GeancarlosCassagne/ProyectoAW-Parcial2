const { PedidoModel } = require('../models');
const { PedidoService } = require('../services');

class PedidoController{

    async add(req, res){
        try {
            const {body}= req;
            await PedidoService.add(body)
            res.json({data:true})
        } catch (error) {
            res.json(error)
        }
    }

    async getOne(req, res){
        try {
            const {pedido_id} = req.params;
            const pedido = await PedidoService.getOne(pedido_id);
            res.json(pedido)
        } catch (error) {
            res.json(error)
        }
    }

    async getByUser(req, res){
        
        try {
            const {usuario_id} = req.params;
            const pedidos = await PedidoService.getByUser(usuario_id);
            res.json(pedidos)
        } catch (error) {
            res.json(error)
        }
    }

    async getLast(req, res){
        
        try {
            const pedido = await PedidoService.getLast();
            res.json(pedido)
        } catch (error) {
            res.json(error)
        }
    }

}

module.exports = new PedidoController();
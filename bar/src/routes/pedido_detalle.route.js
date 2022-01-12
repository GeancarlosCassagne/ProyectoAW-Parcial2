const {Router}= require('express');
const router = Router();

const {Pedido_detalleController}= require('../controllers');

router.post('/add', Pedido_detalleController.add);

router.get('/:pedido_id', Pedido_detalleController.getByPedido);

module.exports= router
const {Router}= require('express');
const router = Router();

const {PedidoController}= require('../controllers');

router.post('/add',PedidoController.add);

router.get('/:pedido_id',PedidoController.getOne);

router.get('/:usuario_id',PedidoController.getByUser);

router.get('/',PedidoController.getLast);

module.exports= router
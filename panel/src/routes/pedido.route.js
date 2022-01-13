const {Router}= require('express');
const router = Router();

const {PedidoController}= require('../controllers');

router.get('/',isAuthenticated ,PedidoController.getAll);

router.get('/:pedido_id',isAuthenticated,PedidoController.getDetalles)

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
  
    res.redirect('/api/panel/login')
  }
  
  module.exports= router

module.exports= router
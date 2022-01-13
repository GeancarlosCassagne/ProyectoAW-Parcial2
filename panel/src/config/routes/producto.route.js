const {Router}= require('express');
const router = Router();
const passport = require('passport');

const {ProductoController}= require('../controllers');

router.get('/',isAuthenticated, ProductoController.getAll);

router.post('/update/:producto_id',ProductoController.update);

router.get('/delete/:producto_id',ProductoController.delete);

router.get('/editar/:producto_id',isAuthenticated,ProductoController.getOne);

router.post('/add', ProductoController.add)

router.get('/agregar',isAuthenticated,ProductoController.agregar)

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/api/panel/login')
}

module.exports= router
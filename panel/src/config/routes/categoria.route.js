const {Router}= require('express');
const router = Router();
const passport = require('passport');

const {CategoriaController}= require('../controllers');

router.get('/',isAuthenticated , CategoriaController.getAll);

router.get('/update/:categoria_id',CategoriaController.update);

router.get('/delete/:categoria_id',CategoriaController.delete);

router.post('/add', CategoriaController.add)

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/api/panel/login')
}

module.exports= router
const {Router}= require('express');
const router = Router();
const passport = require('passport');

const {EmpleadoController}= require('../controllers');


router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/api/panel/empleados',
    failureRedirect: '/api/panel/empleados',
    passReqToCallback: true
  })); 

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/api/panel/productos',
    failureRedirect: '/api/panel/login',
    passReqToCallback: true
  }));

 
router.get('/',isAuthenticated, EmpleadoController.getAll);

//router.post('/create',UsuarioController.create);

//router.get('/:usuarioId',UsuarioController.get);

router.post('/update/:empleado_id',EmpleadoController.update);

router.get('/delete/:empleado_id',EmpleadoController.delete);

router.get('/editar/:empleado_id',isAuthenticated,EmpleadoController.getOne);

router.get('/agregar',isAuthenticated,EmpleadoController.agregar);

//router.get('/perfil',isAuthenticated, EmpleadoController.perfil)

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }

  res.redirect('/api/panel/login')
}

module.exports= router
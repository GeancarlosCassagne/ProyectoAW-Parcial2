const {Router}= require('express');
const router = Router();

const {UsuarioController}= require('../controllers');

router.post('/add',UsuarioController.add);

router.patch('/update/:usuario_id',UsuarioController.update);

router.delete('/delete/:usuario_id',UsuarioController.delete);

router.get('/getone/:usuario_id',UsuarioController.getOne);

module.exports= router
const {Router}= require('express');
const router = Router();

const {ProductoController}= require('../controllers');

router.get('/', ProductoController.getAll);

module.exports= router
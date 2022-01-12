const {Router}= require('express');
const router = Router();

const {CategoriaController}= require('../controllers');

router.get('/', CategoriaController.getAll);

module.exports= router
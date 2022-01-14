const express = require('express');
const { Auth } = require('../middlewares')

const {UsuarioController} = require('../controllers')



const router = express.Router();
router.post('/login',UsuarioController.login)
router.get('/obtenerId',Auth, function(req, res, next) {
        res.json({'id':req.usuario_id})
    });


module.exports = router;
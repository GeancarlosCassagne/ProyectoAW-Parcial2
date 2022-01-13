const {Router}= require('express');
const router = Router();

const {StaticController}= require('../controllers');

router.get('/registro',isAuthenticated, StaticController.register);

router.get('/login',isAuthenticated, StaticController.login);

router.get('/logout',isAuthenticated, StaticController.logout);

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        res.redirect('/api/panel/productos')
    }
    return next();
  }

module.exports= router
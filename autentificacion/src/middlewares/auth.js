const nJwt = require('njwt');
var config = require('./jwtconfig');

function jwtAuth(req, res, next) {
  if (req.headers.token == "nada" ) {
    res.json({ auth: false, message: 'No hay token' });
  }

  else{
    nJwt.verify(req.headers.token, config.secret, function(err, decoded) {
      if (err) {
        res.json({ auth: false, message: 'No se ha encontrado el token' });
      }
      req.usuario_id = decoded.body.id;
      console.log(req.usuario_id)
      next();
    });
  }
}

module.exports = jwtAuth;
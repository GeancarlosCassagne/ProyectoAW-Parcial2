const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { EmpleadoModel } = require('../models')

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await EmpleadoModel.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await EmpleadoModel.findOne({ email: email });
    if (user) {
        return done(null, false, req.flash('signupMessage', 'El email ya existe'));
    } else {
        const newEmpleado = new EmpleadoModel();
        newEmpleado.nombre = req.body.nombre;
        newEmpleado.cedula = req.body.cedula;
        newEmpleado.email = email;
        newEmpleado.telefono = req.body.telefono;
        newEmpleado.password = newEmpleado.encryptPassword(password);
        await newEmpleado.save();
        done(null, newEmpleado);
    }
}));
passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    const user = await EmpleadoModel.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'El usuario no está registrado'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }
    return done(null, user);
  }));
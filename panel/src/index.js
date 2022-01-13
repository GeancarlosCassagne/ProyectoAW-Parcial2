const express= require('express');
const morgan = require('morgan');
const path = require ('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
require('./passport/local-auth')

const {MONGO_URI, PORT}= require('./config');

//CONEXION BASE DE DATOS 
mongoose.connect (MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});



app.set('port', PORT);

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(session({
    secret: 'miproyecto',
    resave: false,
    saveUninitialized: false

}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); 


//middleware para variables globales

 app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next();
});




app.use(express.static(path.join(__dirname,'public')));

//importar rutas
const {CategoriaRoute, ProductoRoute, PedidoRoute, EmpleadoRoute, StaticRoute}= require('./routes');

app.use('/api/panel/categorias',CategoriaRoute);
app.use('/api/panel/productos',ProductoRoute);
app.use('/api/panel/empleados',EmpleadoRoute);
app.use('/api/panel/pedidos',PedidoRoute);
app.use('/api/panel/',StaticRoute);


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
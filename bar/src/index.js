const express= require('express');
const morgan = require('morgan');
const path = require ('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const {MONGO_URI, PORT}= require('./config');

//CONEXION BASE DE DATOS 
mongoose.connect (MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});



app.set('port', PORT);

app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

//importar rutas
const {UsuarioRoute, CategoriaRoute, ProductoRoute, PedidoRoute, Pedido_detalleRoute}= require('./routes');

app.use('/api/bar/usuarios',UsuarioRoute);
app.use('/api/bar/productos',ProductoRoute);
app.use('/api/bar/categorias',CategoriaRoute);
app.use('/api/bar/pedido',PedidoRoute);
app.use('/api/bar/detalle',Pedido_detalleRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
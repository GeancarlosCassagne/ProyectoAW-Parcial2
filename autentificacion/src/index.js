const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const app = express()

const {MONGO_URI, PORT}= require('./config');

//CONEXION BASE DE DATOS 
mongoose.connect (MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});

app.set('port', PORT);

app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());

const {UsuarioRoute} = require('./routes')

app.use('/api/auth', UsuarioRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const mongoose = require("mongoose");
const {Schema} = mongoose;


const productoSchema = new Schema({
    nombre:{type:String},
    precio:{type:Number},
    _categoria:{
        type: Schema.Types.ObjectId,
        ref:'Categoria'},
    descripcion:{type:String},
    foto:{type:String},
});

module.exports = mongoose.model('Producto',productoSchema);
const mongoose = require("mongoose");
const {Schema} = mongoose;


const pedido_detalleSchema = new Schema({
    _producto:{type: Schema.Types.ObjectId,ref:'Producto'},
    _pedido:{type: Schema.Types.ObjectId,ref:'Pedido'},
    cantidad:{type:Number},
    total:{type:Number},
});

module.exports = mongoose.model('Pedido_detalle',pedido_detalleSchema);
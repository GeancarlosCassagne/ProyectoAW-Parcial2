const mongoose = require("mongoose");
const {Schema} = mongoose;


const pedidoSchema = new Schema({
    fecha: {
        type: Date, 
        default: Date.now()},
    _usuario: {type: Schema.Types.ObjectId,ref:'Usuario'},
    total:{type:Number},
});

module.exports = mongoose.model('Pedido',pedidoSchema);
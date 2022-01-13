const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriaSchema = new Schema(
    {
        descripcion:{type:String},
    }
);

module.exports = mongoose.model('Categoria',categoriaSchema);
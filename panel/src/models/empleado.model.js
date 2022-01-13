const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const {Schema} = mongoose;


const empleadoSchema = new Schema({
    nombre:{type:String},
    cedula:{type:String},
    email:{type:String},
    telefono:{type:Number},
    password:{type:String},
});
empleadoSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };

empleadoSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password);
}

empleadoSchema.methods.toJSON = function(){
    let usuario = this.toObject();
    delete usuario.password;
    return usuario;
}
empleadoSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Empleado',empleadoSchema);

; 
'use stric'

const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema,
      { model } = require('mongoose')


const UsuarioSchema = new Schema ({

    name   : String,
    lastname : String,
    longitude : String,
    latitude : String,


});



module.exports = model('usuarios', UsuarioSchema);
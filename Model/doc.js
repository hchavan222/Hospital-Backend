const mon = require("mongoose")

const docSchema = mon.Schema({

    dName : { type: String ,  required : true} , 
    specs : {type: String ,  required : true}

})

const Doctor = mon.model('Doctor' , docSchema)

module.exports = Doctor
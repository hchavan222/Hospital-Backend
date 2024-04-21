const mon = require("mongoose")

const patSchema = mon.Schema({

    Name : { type: String ,  required : true} , 
    Age : {type: Number ,  required : true},
    Gender : {type: String ,  required : true}

})

const Patient = mon.model('Patient' , patSchema)

module.exports = Patient
const mon = require("mongoose")

const appointSchema = mon.Schema({
    pName : {type : String , required : true},
    dName :{type : String ,  required : true},
    date :{type : Date , required : true}
})


const Appoint = mon.model("Appoint" , appointSchema);

module.exports = Appoint
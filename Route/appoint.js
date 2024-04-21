const mon = require('mongoose')
const ex =  require('express')

const Appoint = require("../Model/appointment")

const rout = ex.Router()

rout.route('/').get((req , res)=>{

    Appoint.find().then( (data)=>

        res.json(data)

        
    ).catch((error)=>(
        res.status(400).json('Error:'+error)
    ))

})


rout.route("/add").post((req , res)=>{
    const {pName , dName , date} = req.body;

    const newAppoint = new Appoint({pName , dName , date})

    newAppoint.save().then(data=> res.json(data) ).catch(error=>res.status(400).json('Enter:' + error))
})


rout.route('/delete/:id').delete((req ,res)=>{
    Appoint.findByIdAndDelete(req.params.id).then((res)=>{
        res.json('Appoinmnet Deleted')
    }).catch(err=>res.status(400).json('error occured while deleting'+ err))
})


rout.route('/update/:id').post((req,res)=>{
    Appoint.findById(req.body.params).then(data=>{
        console.log(data)
        data.pName = req.body.pName , 
        data.dName = req.body.dName,
        data.date = req.body.date;

        data.save().then(()=>res.json("Details Updated")).catch(error=>res.status(400).json("Details Captured But Unable to update error :" + error))

    }).catch(error=>res.status(400).json("Failed to Update Error :"+ error))

    
})

module.exports = rout;
const ex = require('express')

const rout = ex.Router()

const Patient = require("../Model/patient")


rout.route("/").get((req , res)=>{

    Patient.find().then(data=>res.json(data)).catch(err=>{
        res.status(400).json("Error Finding The Details :" + err)
    })
})


rout.route("/add").post((req,res)=>{

    const { Name , Age , Gender} = req.body

    const NewPatient = new Patient({Name ,  Age , Gender})

    NewPatient.save().then(data=>res.json(data)).catch(err=> res.status(400).json("Failed To Add :" + err))


})


rout.route("/update/:id").post((req,res)=>{

    Patient.findById(req.params.id).then(pat=>{
        if(!pat){
            return res.status(400).json("No Patient")
        }

        pat.Name = req.body.Name
        pat.Age = req.body.Age
        pat.Gender = req.body.Gender


        pat.save().then(()=>
            res.json("Patient Updated")
        ).catch(err=>res.status(400))
    }).catch(err=>res.status(400))
})


rout.route("/delete/:id").delete((req,res)=>{
    Patient.findByIDAndDelete(req.body.params).then(()=>res.json("Deleted")).catch(err=>res.status(400).json("Error"))
})

module.exports = rout;
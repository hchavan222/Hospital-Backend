const ex = require('express')

const cors = require('cors')

const bp = require('body-parser')

const mon = require('mongoose')

const app = ex()

const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(bp.json())

const Appoint = require("./Route/appoint")
const Patient = require("./Route/patient")
const Doctor = require("./Route/doctor")

const connec = mon.connect("mongodb+srv://hrishi007:qwerty100@cluster0.rdpsxvx.mongodb.net/hospital")

app.use('/patients' , Patient)
app.use('/doctors' , Doctor)
app.use('/appointments' , Appoint)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

require("dotenv").config();
const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
// const dotenv = require ("dotenv")
// const authRoutes = require ("./routes/auth.js")
const EmployeeModel = require ("./Models/Employee")
const PaymentModel = require ("./Models/Paymodel")



// dotenv.config()

const app = express();

app.use(express.json()); // parse JSON bodies
app.use(cors()); // enable CORS
// connect to MongoDB



// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas!"))
.catch(err => console.log("Error connecting to MongoDB Atlas:", err));

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})

app.post("/payment", (req, res) => {
  PaymentModel.create(req.body)
    .then(payment => res.json(payment))
    .catch(err => res.json(err));
});





app.post("/login",(req,res)=> {
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Login Successful")
            } else {
                res.status(400).json("Invalid Password")
            }
        } else {
            res.status(400).json("User not found")
        }
    })
    .catch(err => res.status(500).json(err))
})
app.post("/Signup",(req,res)=> {
    EmployeeModel.create(req.body)
    .then(Employee=> res.json(Employee))
    .catch(err=> res.status(400).json(err))
})

app.listen(3001, ()=> {
    console.log("Server running on port 3001")
})

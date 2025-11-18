// require("dotenv").config();
// const express = require ("express")
// const mongoose = require ("mongoose")
// const cors = require ("cors")
// // const dotenv = require ("dotenv")
// // const authRoutes = require ("./routes/auth.js")
// const EmployeeModel = require ("./Models/Employee")
// const PaymentModel = require ("./Models/Paymodel")

// // dotenv.config()

// const app = express();

// app.use(express.json()); // parse JSON bodies
// app.use(cors()); // enable CORS
// // connect to MongoDB

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("Connected to MongoDB Atlas!"))
// .catch(err => console.log("Error connecting to MongoDB Atlas:", err));

// app.get('/',(req,res)=>{
//     res.send({
//         activeStatus:true,
//         error:false,
//     })
// })

// app.post("/payment", (req, res) => {
//   PaymentModel.create(req.body)
//     .then(payment => res.json(payment))
//     .catch(err => res.json(err));
// });

// app.post("/login",(req,res)=> {
//     const {email,password} = req.body
//     EmployeeModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password === password){
//                 res.json("Login Successful")
//             } else {
//                 res.status(400).json("Invalid Password")
//             }
//         } else {
//             res.status(400).json("User not found")
//         }
//     })
//     .catch(err => res.status(500).json(err))
// })
// app.post("/Signup",(req,res)=> {
//     EmployeeModel.create(req.body)
//     .then(Employee=> res.json(Employee))
//     .catch(err=> res.status(400).json(err))
// })

// app.listen(3001, ()=> {
//     console.log("Server running on port 3001")
// })

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const EmployeeModel = require("./Models/Employee");
const PaymentModel = require("./Models/Paymodel");

const app = express();

app.use(express.json());
// app.use(cors());

app.use(cors({
    origin: ["http://localhost:3000","https://paymentformapp.netlify.app/"]
}));

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB Atlas Connection Error:", err));

app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

app.post("/payment", async (req, res) => {
  try {
    const payment = await PaymentModel.create(req.body);
    res.json(payment);
  } catch (err) {
    res.json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email });
    if (!user) return res.status(400).json("User not found");
    if (user.password !== password)
      return res.status(400).json("Invalid Password");
    res.json("Login Successful");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/Signup", async (req, res) => {
  try {
    const employee = await EmployeeModel.create(req.body);
    res.json(employee);
  } catch (err) {
    res.status(400).json(err);
  }
});

// For Render deployment
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server running on port", PORT));
// For Vercel deployment

const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const bcyrpt= require("bcrypt")
const employeeModel= require('./models/employeeModel')

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/employee")

app.listen(3010, ()=>{
    console.log("server is running")
})

app.post("/signup", (req,res)=>{
   
    employeeModel.create(req.body)
    .then(e => res.json(e))
    .catch(err => res.json(err))
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await employeeModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
    }
  });
  
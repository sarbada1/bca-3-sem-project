let express= require('express');
let mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bcacrud');

let Student=mongoose.model("Student",{
    name:String,
    email:String,
    address:String
})
const app= express();
app.use(express.json());

app.get('/',async(req,res)=>{
    const sData=await Student.find({});
   return res.send('Hello');
});

app.post('/', async(req,res)=>{
    const sR=new Student(req.body);
    await sR.save();
    return res.status(201).send(sR);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
const express = require('express');

const app = express();

require('dotenv').config();
PORT = process.env.PORT || 5000;


app.listen(PORT , ()=>{
    console.log(`connect at port ${PORT}`);

});

// midddleware
app.use(express.json());

const blog = require("./Blog/routes/blog");
//mount
app.use("/api/v1" , blog);

//database
const dbConnect = require('./Blog/config/database');
dbConnect();

app.get('/get' , (req,res)=>{
    res.send(`<h1>  this is home page </h1>`)
})




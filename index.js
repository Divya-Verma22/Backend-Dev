const express = require('express');
const app = express(); // ✅ create express app

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require('./routes/todos');

//mount
app.use("/api/v1" , todoRoutes);


app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});

const dbconnect = require('./config/database');
dbconnect();

app.get('/' , (req,res)=>{
    res.send(`<h1>Hii i am rozy</h1>`);
})

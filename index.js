const express = require('express');
const  mongoose  = require('mongoose');
 

const app = express(); // ✅ create express app
app.use(express.json());

app.listen(8000, () => {
    console.log("Server running at port 8000");
});

// GET route
app.get('/', (req, res) => {
    res.send("hello world");
});

// POST route
app.post('/api/car', (req, res) => {
    const { name, brand } = req.body;
    console.log(name, brand); // Shows in terminal

    res.json({
        message: "Data received successfully",
        name: name,
        brand: brand
    });
});
mongoose.connect("mongodb://localhost:27017/myDatabase").then(()=>{
    console.log("mongoDb connect");
}).catch((err)=>{
    console.log("not connect" , err);
})

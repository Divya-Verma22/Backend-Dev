const mongoose = require('mongoose');

require('dotenv').config();


const dbconnect = () => {
    mongoose.connect(process.env.TABASE_URL ).then(()=>{
        console.log("mongo connected")
           
    }).catch((err)=>{
        console.log("error", err);
          process.exit(1);
    });

}
module.exports = dbconnect;

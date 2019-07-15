const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://StarNavi:StarNavi@cluster0-pa3no.gcp.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true , useCreateIndex:true})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("database connection established successfully");
})


app.listen(port,()=>{
    console.log(`sever is running on port: ${port}`);
    //console.log(process);
})


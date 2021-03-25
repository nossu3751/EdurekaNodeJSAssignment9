const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = 8007;

const PersonRoutes = require('./personRoutes');

app.use('/api/person', PersonRoutes );
const connection = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/assignment9",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

connection.once("open", ()=>{
    console.log("Mongo DB Connected!");
})

app.listen(port, ()=>{
    console.log("Successfully connected to express server!");
})
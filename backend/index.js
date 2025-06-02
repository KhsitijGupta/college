const express = require('express')
const app = express()
// const path = require('path')
const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();

const cors = require("cors");
const missionVisionRouter = require('./routes/AboutRoutes');
const HomeRouter = require('./routes/HomeRoutes');
app.use(cors());

app.use(express.json());

app.use('/uploads', express.static('uploads'));


async function connectToDB(){
    const mongo_URL = process.env.MongoURL;
    await mongoose.connect(mongo_URL)
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err)
    })
}
connectToDB();


app.use('/api/about',missionVisionRouter)
app.use('/api/home',HomeRouter)


const port = process.env.Port || 3000;
app.listen(port ,()=>{
    console.log(`Server is listening on ${port}`)
})
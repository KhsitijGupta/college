const express = require('express')
const app = express()
// const path = require('path')
const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config();

const cors = require("cors");
const HomeRouter = require('./routes/HomeRoutes');
const AboutRoute = require('./routes/AboutRoutes');
const EventRouter = require('./routes/EventRoutes');
const AdminRouter = require('./routes/AdminRoutes');
const BlogsRouter = require('./routes/BlogsRoutes');
const TopbarRouter = require('./routes/TopbarRoutes');
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


app.use('/api/home',HomeRouter)
app.use('/api/about',AboutRoute)
app.use('/api/event',EventRouter)
app.use('/api/blogs',BlogsRouter)
app.use('/api/admin',AdminRouter)
app.use('/api/topbar',TopbarRouter)


const port = process.env.Port || 5010;
app.listen(port ,()=>{
    console.log(`Server is listening on ${port}`)
})

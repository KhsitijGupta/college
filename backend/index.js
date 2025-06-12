const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
app.use(cors());

const HomeRouter = require('./routes/HomeRoutes.js');
const AboutRoute = require('./routes/AboutRoutes.js');
const EventRouter = require('./routes/EventRoutes.js');
const AdminRouter = require('./routes/AdminRoutes.js');
const BlogsRouter = require('./routes/BlogsRoutes.js');
const TopbarRouter = require('./routes/TopbarRoutes.js');

app.use(express.json());

app.use('/uploads', express.static('uploads'));


async function connectToDB(){
    const mongo_URL = process.env.MongoURL || "mongodb+srv://prlawcollegesdl:nZu6ykn2OyvVqXEc@lawcollegesdl.iu5rn0g.mongodb.net/?retryWrites=true&w=majority&appName=LawCollegeSdl";
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

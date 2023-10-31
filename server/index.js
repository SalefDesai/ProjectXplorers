import express from "express";
import bodyparser from 'body-parser';
import mongoose, { get } from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import spocAuth from './routes/spocAuth.js';
import studentAuth from './routes/studentAuth.js';
import collageSellection from "./routes/collageSelection.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json({limit:'5mb'}))
app.use(cors());


dotenv.config();
const port = process.env.PORT || 6000;

// RPUTES
app.use("/api/studentauth",studentAuth);
app.use("/api/spocauth",spocAuth);
app.use("/api/select",collageSellection);

//////////////////////////////////
import temp from './TempModel.js';

app.post("/uplodeimage",async(req,res) => {
    const {image} = req.body;
    // console.log(image);
    
    try {
        const newTemp = new temp({
            image
        });

        const savedTemp = await newTemp.save();

        // console.log(savedTemp);

        res.json({success : true});
    } catch (error) {

        console.log("erroooooor : ",error);
        res.send({success : false});
    }
})


app.get("/getAllImages", async(req,res) => {
    try {
        const images = await temp.find({},{"_id":false,"image":true})
        // console.log(images);

        return res.json(images);
    } catch (error) {
        console.log("erroooooor : ",error);
    }
})




////////////////////////////////////////////////




mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true
    })
    .then(() => {
        console.log("Connected to DB...");
        app.listen(port,() => console.log(`Server is running on port ${port}`))
    })
    .catch((error) => {
        console.log("error", error);
    });

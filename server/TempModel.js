import mongoose from 'mongoose';

const TempSchema = new mongoose.Schema(
    {
        image:String
    }
)

const Temp = mongoose.model("temp",TempSchema);


export default Temp;
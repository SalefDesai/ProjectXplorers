import mongoose from "mongoose";

const CollageInfoSchema = new mongoose.Schema(
    {
        State : String,
        District : String,
        UniversityName : String,
        UniversityID: String,
        CollegeName : String,
        CollegeID : String,
        Address : String,
        Website : String

    }
)

const CollageInfo = mongoose.model("collageInfo",CollageInfoSchema);


export default CollageInfo;
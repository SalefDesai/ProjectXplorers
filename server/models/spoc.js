import mongoose from "mongoose";

const SpocSchema = new mongoose.Schema(
    {
        // state : String,
        // university : String,
        collageCode : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CollageInfo",
            // required: true,
        },
        // collageName : String,
        name : String,
        email : String,
        password : String,
        contact : Number,
        designation : String,
        IdentityProof : String,
        collageIdentityProof : String,
        collageLetterHead : String

        // name : {
        //     type : String,
        //     required : true,
        //     max : 100,
        // },
        // email : {
        //     type : String,
        //     required : true,
        //     unique : true,
        // },
        // contact : {
        //     type : Number,
        //     // min : 10,
        //     // max : 10
        // },
        // password : {
        //     type: String,
        //     required: true,
        //     min:5,
        // },
        // designation : {
        //     type : String,
        //     required : true,
        // },
        // collageInfo : {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "CollageInfo",
        //     // required: true,
        // }
    }
)

const Spoc = mongoose.model("spoc",SpocSchema);

export default Spoc;
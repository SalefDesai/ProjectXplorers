import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            max : 100,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type: String,
            required: true,
            min:5,
        },
        gender : {
            type : String,
            required : true,
        },
        collageInfo : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CollageInfo",
            // required: true,
        },
        skills : {
            type : Array,
            default : [],
        }
    }
)

const Student = mongoose.model("student",StudentSchema);

export default Student;
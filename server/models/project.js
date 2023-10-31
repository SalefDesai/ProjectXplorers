import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        StudentInfo : {
            type : Array,
            required : true,
        },
        collageInfo : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CollageInfo",
            // required: true,
        },
        title :{
            type :String,
            max : 100
        },
        
        Techstack : Array,
        Summary : String,
        description : String,
        driveLink : String,
        Document : String,
        DeployLink : String,
        screenshots : Array
    }
)

const Project = mongoose.model("porject",ProjectSchema);


export default Project;
import jwt from "jsonwebtoken";
import Student from "../models/student.js";

export const isAuthenticated = async(req,res,next) => {
    const {ProjectXplorersToken} = await req.cookies;

    // console.log(ProjectXplorersToken);

    if (!ProjectXplorersToken) {
        return res.status(404).json({
            success : false,
            message : "login first",
        })
    }

    const decoded = jwt.verify(ProjectXplorersToken,process.env.JWT_SECRET);
    // console.log("this is decoded",decoded);

    req.user = await Student.findById(decoded._id);

    next();

}
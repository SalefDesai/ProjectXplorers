import bcrypt from 'bcrypt';
import Student from "../../models/student.js";
import { logoutForBoth, sendCookie } from '../../utils/features.js';


export const signup = async(req,res) => {
    try {
        const {
            name,
            email,
            password,
            gender,
            collageInfo,
            skills
        } = req.body;


        const checkEmail = await Student.findOne({email});

        if (checkEmail) return res.status(200).json({msg:"User already register by this email"});

        // const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,10);

        const newStudent = new Student({
            name,
            email,
            password : hashedPassword,
            gender,
            collageInfo,
            skills
        });

        const savedStudent = await newStudent.save();

        return res.status(201).json(savedStudent);

    } catch (error) {
        console.log(error);
    }
}


export const signIn = async(req,res) => {
    try {
        const {
            email,
            password,
        } = req.body;


        const checkUser = await Student.findOne({email});

        if (!checkUser) return res.status(200).json({
            sucess : false,
            msg:"not registered...!"
        });
        
        const isMatch = await bcrypt.compare(password,checkUser.password);

        if (!isMatch) {
            return res.status(404).json({
                sucess : false,
                message : "Invalid password",
            })
        }
        sendCookie(checkUser,res,"Registered Successfully", 201);

    } catch (error) {
        console.log(error);
    }
}


export const logout = async(req,res) => {
    logoutForBoth(req,res);
}


export const getAllPorjects = async(req,res) => {
    console.log("yo... in here");

    res.json({
        sucess: true,
        message: "yo... in here"
    })
}
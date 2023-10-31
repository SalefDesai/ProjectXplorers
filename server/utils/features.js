import jwt from 'jsonwebtoken';


export const sendCookie = (user,res,message,statusCode=200) => {
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

    res
        .status(statusCode)
        .cookie("ProjectXplorersToken", token, {
            httpOnly:true,
            maxAge : 1000 * 60 * 60 * 24,
        })
        .json({
            sucess : true,
            message : message,
        })
}

export const logoutForBoth = async(req,res) => {

    res.status(200).cookie("ProjectXplorersToken","",{
            expires : new Date(Date.now()),
        }).
        json({
            success:true,
            message:"loged out"
        })

}
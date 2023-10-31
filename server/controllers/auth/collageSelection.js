import CollageInfo from "../../models/collageInfo.js";



export const getUniversities = async(req,res) => {

    const District = req.params.district;

    const universities = await CollageInfo.find({District},{_id:false,UniversityName:true});

    const universityNames = universities.map(doc => doc.UniversityName);

    return res.status(200).json(universityNames);

}

export const getCollages = async(req,res) => {
    
    let UniversityName = req.params.university;
    UniversityName += " ";

    const collages = await CollageInfo.find({UniversityName},{_id:false,CollegeName:true});

    const collageNames = collages.map((element) => element.CollegeName);

    return res.status(200).json(collageNames);
}


export const getCodes = async(req,res) => {

    let CollegeName = req.params.collage;
    CollegeName +=" ";

    const collageData = await CollageInfo.findOne({CollegeName},{UniversityID:true,CollegeID:true});

    return res.status(200).json(collageData);



}
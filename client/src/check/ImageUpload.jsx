import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios';

const ImageUpload = () => {

    const [image,setImage] = useState("");
    const [allImages,setAllImages] = useState([]);

    const convertToBase64 = (e) => {
        // console.log(e);
        // console.log(e.target.files[0]);

        var reader = new FileReader();
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error : ", error);
        }
    }
    
    const uploadImage = async() => {
        if (image !== "") {
            const {data} = await axios.post("http://localhost:5000/uplodeimage",{image});
            console.log(data);
        }
    }

    const getAllImages = async() => {
        const {data} = await axios.get("http://localhost:5000/getAllImages");
        setAllImages(data);
        // console.log("this is data  :  ",data);
        // console.log(allImages);
        // console.log("llllll",allImages.length);
    }

    useEffect(() => {
        getAllImages();
    },[]);


  return (
    <div className='auth-wrapper'>
        <div>   
            Upload Image
            <br/>
            <input 
            accept="image/*"
            type='file'            
            onChange={convertToBase64}
            />
            <br/>
            <button onClick={uploadImage}>Upload</button>
            {image === "" || image === null ? "" : <img width={200} height={200} src={image} alt='images'/>}
            <br/>
            
            {allImages.map((img, index) => {
                console.log(img);
                return <div height = {200} width= {200}>
                    <img key={index} src={img.image} alt={`Image ${index}`} />
                </div>
            })
            }
        

        </div>
    </div>
  )
}

export default ImageUpload;
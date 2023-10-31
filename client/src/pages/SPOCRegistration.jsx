import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {styled} from 'styled-components';
import SelectCollage from '../components/SelectCollage';

const SPOCRegistration = () => {

    const [image,setImage] = useState("");
    const [imageName,setImageName] = useState("");
    const [spocInfo,setSpocInfo] = useState({
        id : "",
        name : "",
        email : "",
        password :"",
        contact : "",
        designation : "",
        IdentityProof:"",
        collageIdentityProof:"",
        collageLetterHead : ""
    });

    const handleChange = (event) => {
        const {name ,value} = event.target;
        console.log(value);
    
        setSpocInfo((prevValue) => {
          return{
            ...prevValue,
            [name] : value,
          }
        })
        console.log(spocInfo);
        // console.log(">." ,image);
    }

    const convertToBase64 = (event) => {
        const {name} = event.target;
        // console.log(name);

        var reader = new FileReader();
        if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setImageName(name);
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error : ", error);
        }
    }

    useEffect(() => {
        setSpocInfo((prevValue) => {
            console.log(imageName);
            console.log(image);
            return{
              ...prevValue,
              [imageName] : image,
            }
          })
    },[image])


    // http://localhost:5000/api/spocauth/signup
    const submitInfo = async() => {
        console.log(spocInfo);
        
        const {data} = await axios.post("http://localhost:5000/api/spocauth/signup",spocInfo);

        console.log(data);
    }

    const setID = (id) => {
        setSpocInfo((prevValue) => {
            return{
              ...prevValue,
              id,
            }
          })
    }



  return (
    <>
    <div class="container">
        <header>Registration</header>

        <form onSubmit={submitInfo}>
            <div class="form first">
                <div class="details personal">
                    <span class="title">Personal Details</span>

                    <br />
                    <SelectCollage setCollageId= {(id) => setID(id)} />
                    <br />
                    
                    {/* <div class="fields">
                       <div class="input-field">
                            <label>State</label>
                            <select name='state' onChange={(e) => handleChange(e)} required>
                                <option disabled selected>Select State</option>
                                <option>Maharashtra</option>
                                <option>Punjab</option>
                                <option>Rajsthan</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>University Name</label>
                            <select  name='university' onChange={(e) => handleChange(e)} required>
                                <option disabled selected>Select University</option>
                                <option>SPPU</option>
                                <option>Mumbai</option>
                                <option>Shivaji</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>College Code</label>
                            <input type="text"  readonly required />
                        </div>


                        <div class="input-field">
                            <label>College Name</label>
                            <select  name='collageName' onChange={(e) => handleChange(e)} required>
                                <option disabled selected>Select Name</option>
                                <option>IICMR</option>
                                <option>PCCOE</option>
                                <option>DYPATIL</option>
                            </select>
                        </div>
                    </div> */}
                </div>

                <div class="details ID">
                    <span class="title">SPOC Details</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Name" name='name' onChange={(e) => handleChange(e)} required />
                        </div>

                        <div class="input-field">
                            <label>E-mail</label>
                            <input type="email" placeholder="Enter mail" name='email' onChange={(e) => handleChange(e)} required />
                        </div>

                        <div class="input-field">
                            <label>password</label>
                            <input type='password' placeholder="password" name='password' onChange={(e) => handleChange(e)} required />
                        </div>

                        <div class="input-field">
                            <label>Contact No</label>
                            <input type="number" placeholder="Enter Contact" name='contact' onChange={(e) => handleChange(e)} required />
                        </div>

                        <div class="input-field">
                            <label>Designation</label>
                            <input type="text" placeholder="Designation" name='designation' onChange={handleChange} required />
                        </div>
                    </div>

             <div class="details ID">
                    <span class="title">SPOC Documents</span>
                    <div class="fields">
                        <div class="input-field">
                            <label>Identity Proof</label>
                            <input type="file" name='IdentityProof' placeholder="Upload adhar/any gov id" accept='image/*' onChange={convertToBase64} required />
                        </div>

                        <div class="input-field">
                            <label>College Identity Proof</label>
                            <input type="file" name='collageIdentityProof' placeholder="Upload College ID" accept='image/*' onChange={convertToBase64} required />
                        </div>

                       <div class="input-field">
                            <label>College Letter-Head</label>
                            <input type="file" name='collageLetterHead' placeholder="Upload College Letter-Head" onChange={convertToBase64} required />
                        </div>
                    </div>

                    <button class="nextBtn" type='submit'>
                        <span class="btnText">Submit</span>
                        <i class="uil uil-navigator"></i>
                    </button>
                </div> 
            </div>


                <div class="details family">
                    <div class="buttons">                        
                        <button class="sumbit">
                            <span class="btnText">College registration</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                            <h3>Note:</h3><h5> If College is not Registred First register your clg by Clicking Button</h5>

                    </div>
                </div>
            </div>
        </form>
    </div>
</>
  )
}


export default SPOCRegistration;
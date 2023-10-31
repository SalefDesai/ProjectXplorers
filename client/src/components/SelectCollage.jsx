import React, { useState, useEffect } from 'react';
import axios from 'axios';




const host = "http://localhost:5000"

const SelectCollage = ({setCollageId}) => {
  // Define the states and their associated districts
  const stateDistricts = {
    Maharashtra: ['Pune', 'Satara', 'Mumbai'],
    Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar'],
    Rajsthan: ['Jaipur', 'Udaipur', 'Jodhpur'],
  };

  // Initialize state variables
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [universities, setUniversities] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [universityCode, setUniversityCode] = useState('');
  const [collegeCode, setCollegeCode] = useState('');
  const [Id,setId] = useState('');


  useEffect(() => {
    // Fetch universities and colleges when the component mounts
    if (selectedDistrict) {
      axios.get(`${host}/api/select/universities/${selectedDistrict}`)
        .then((response) => {
          // console.log(response);
          // console.log(response.data);
          setUniversities(response.data);
        })
        .catch((error) => console.error('Error fetching universities:', error));
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedUniversity) {
      axios.get(`${host}/api/select/collage/${selectedUniversity}`)
        .then((response) => {
          // console.log(response.data);
          setColleges(response.data);
        })
        .catch((error) => console.error('Error fetching universities:', error)); 
    }
  },[selectedUniversity]);

  useEffect(() => {
    if (selectedCollege) {
      axios.get(`${host}/api/select/getcode/${selectedCollege}`)
        .then(response => {
          setId(response.data._id);
          setUniversityCode(response.data.UniversityID)
          setCollegeCode(response.data.CollegeID);
        })
        .catch(error => {
          console.log("error", error);
        })

    }
    
  },[selectedCollege]);

  useEffect(() => {
    if (Id) setCollageId(Id);
  },[Id])

  // Event handler for selecting a state
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    setSelectedDistrict(''); // Clear the selected district when a new state is selected
  };

  // Event handler for selecting a district
  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);
    setSelectedUniversity('');
    setSelectedCollege('');
    setUniversityCode('');
    setCollegeCode('');
  };

  // Event handler for selecting a university
  const handleUniversityChange = (e) => {
    const selectedUniversity = e.target.value;
    setSelectedUniversity(selectedUniversity);
    // Set university code based on the selected university (you can fetch this data from a database)
    // Example: axios.get(`/api/universityCode?university=${selectedUniversity}`)
    // Then, set the university code using setUniversityCode(response.data.code)
  };

  // Event handler for selecting a college
  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    setSelectedCollege(selectedCollege);
    // Set college code based on the selected college (you can fetch this data from a database)
    // Example: axios.get(`/api/collegeCode?college=${selectedCollege}`)
    // Then, set the college code using setCollegeCode(response.data.code)
  };



  return (
    <div className="container">
      <header>Registration</header>
      <form action="#">
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>
            <div className="fields">
              <div className="input-field">
                <label>State</label>
                <select value={selectedState} onChange={handleStateChange} required>
                  <option disabled value="">
                    Select State
                  </option>
                  {Object.keys(stateDistricts).map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-field">
                <label>District</label>
                <select value={selectedDistrict} onChange={handleDistrictChange} required>
                  <option disabled value="">
                    Select District
                  </option>
                  {stateDistricts[selectedState] && stateDistricts[selectedState].map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-field">
                <label>University Name</label>
                <select value={selectedUniversity} onChange={handleUniversityChange} required>
                  <option disabled value="">
                    Select University
                  </option>
                  {universities.map((university, index) => (
                    <option key={index} value={university}>
                      {university}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-field">
                <label>University Code</label>
                <input type="text" value={universityCode} readOnly required />
              </div>
              <div className="input-field">
                <label>College Name</label>
                <select value={selectedCollege} onChange={handleCollegeChange} required>
                  <option disabled value="">
                    Select Name
                  </option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-field">
                <label>College Code</label>
                <input type="text" value={collegeCode} readOnly required />
              </div>
            </div>
          </div>
          <div className="details family">
            <div className="buttons">
              <button className="submit">
                <span className="btnText">College registration</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectCollage;

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ImageUpload from './check/ImageUpload.jsx';
import SPOCRegistration from './pages/SPOCRegistration.jsx';
import SelectCollage from './components/SelectCollage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageUpload />} />
        <Route path='/collageSelection' element = {<SelectCollage />} />
        <Route path='/spocregi' element={<SPOCRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import React, { useState } from 'react';
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import AllotmentForm from './Components/AllotmentForm'
import FirstForm from './Form1';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [formData, setFormData] = useState({
    cmsid: '',
    name: '',
    design: '',
    hq: '',
    icTrainNo: '',
    icTime: '',
    bedSheets: 2,
    pillowCover: 1,
    blanket: 1,
    allottedBed: '',
  });




  return(
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path = "/form-1" element = {<FirstForm form1 = {formData} setFormData={setFormData} formName = "Check-In Form" />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

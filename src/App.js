import React from "react";
import {BrowserRouter, Route, Routes}from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Form from './Components/Form';


function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/Form" element ={<Form/>}> </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
 
  
  
}

export default App;

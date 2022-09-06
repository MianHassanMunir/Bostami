import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Work from "./Component/Work";
import Blog from "./Component/Blogs";
import Contact from "./Component/Contact";


function App() {
  return (
   <>
   <Navbar/>
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/work' element={<Work/>}/>
    <Route  path='/blog' element={<Blog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </>
   
    


  );
}

export default App;

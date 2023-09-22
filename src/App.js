import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './pages/index';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import FormDataComponent from './components/tas/form-data-component';
import TasGraph from './components/tas/TASGraph';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/formData' element={<FormDataComponent />} />
        <Route path='/tas_grph' element={<TasGraph />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';

import Home from "./Agro/Home.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Contact from './Agro/Contact';
import Gallery from './Agro/Gallery';
import Icons from './Agro/Icons';
import Model from './Agro/Model';
import Blog from './Agro/Blog';
import Single from './Agro/Single';
import About from './Agro/About.js';
import Typography from './Agro/Typography.js';


// import About from "./Agro/About.js";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/typograhy" element={<Typography/>} />
            <Route path="/model" element={<Model/>} />
            <Route path="/icons" element={<Icons/>} />
            <Route path="/single" element={<Single/>} />
            
            
            
          </Routes>
        </div>
      </Router>

      {/* <About/> */}
    </>
  )
}

export default App;

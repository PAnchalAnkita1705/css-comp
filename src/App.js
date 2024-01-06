
import './App.css';


import Navbar from "./component/Navbar";
import Student from "./component/Student";
import Home from "./component/Home";
import About from "./component/About";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="text-success">
      {/* <h1 className='display-4'></h1>
      <p className='fs-3 text-danger'></p>
      <Navbar/>
      
      <div className='d-flex flex-wrap'>
      <Student url="https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      rno={1}
      name="ankita"
      city="Pune" />
      
      <Student url=""
      rno={2}
      name="Vaishnavi"
      city="Dubai" />
      
      <Student url=""
      rno={3}
      name="Sammed"
      city="Kolhapur" />
       <Student url=""
      rno={4}
      name="Yash"
       />
       */}
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>




          <div className="d-flex flex-wrap">
            <Student rno={1} name="Ankita" />
            <Student name="Vaishnavi" city="Dubai" />
            <Student rno={3} city="Kolhapur" name="Sammed" />
            <Student rno={4} city="Sangli" />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

//<a href="/contact" >Contact</a>


// <Link to="/contact" >Contact </Link>


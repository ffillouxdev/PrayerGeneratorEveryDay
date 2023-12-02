import axios from 'axios';
import React from 'react';
import './styles/App.css';  // Path: frontend/src/App.css

// Importing the pages components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Path: frontend/src/pages/Home.jsx
import About from './pages/About'; // Path: frontend/src/pages/About.jsx
import Contact from './pages/Contact'; // Path: frontend/src/pages/Contact.jsx

// Importing the components elements
import Head from './components/head'; // Path: frontend/src/components/head.js
import Navbar from './components/navbar'; // Path: frontend/src/components/navbar.js 
import Footer from './components/footer'; // Path: frontend/src/components/footer.js


const Prayer =  [

]

const RandomImg = [
]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
     </div>
    );
  }
}

export default App;


/*  */
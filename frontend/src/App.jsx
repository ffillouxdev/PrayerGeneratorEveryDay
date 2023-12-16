import React from 'react';
import './styles/App.scss';  // Path: frontend/src/App.css
import './styles/VarGlobal.scss'; // Path: frontend/src/VarGlobal.scss

// Importing the pages components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Path: frontend/src/pages/Home.jsx
import YourSpace from './pages/YourSpace'; // Path: frontend/src/pages/Your-space.jsx
import Contact from './pages/Contact'; // Path: frontend/src/pages/Contact.jsx
import PrivacyPolicy from './pages/PrivacyPolicy'; // Path: frontend/src/pages/PrivacyPolicy.jsx

// Importing the components elements

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Your-space" element={<YourSpace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        </BrowserRouter>
     </div>
    );
  }
}

export default App;


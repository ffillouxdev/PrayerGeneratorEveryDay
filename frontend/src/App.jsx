import React from 'react';
import { ToastContainer } from 'react-toastify';

import './styles/App.scss';  // Path: frontend/src/App.css
import './styles/VarGlobal.scss'; // Path: frontend/src/VarGlobal.scss

// Importing the pages components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import YourSpace from './pages/YourSpace';
import YourSpaceIntentions from './pages/YourSpaceIntentions';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import VerifyMail from './pages/authentication-pages/VerifyMail';
import Validate from './pages/authentication-pages/Validate';
import ForgetPassword from './pages/authentication-pages/ForgetPassword';
import ForgetPasswordConfirm from './pages/authentication-pages/ForgetPasswordConfirm';
import ResetPassword from './pages/authentication-pages/ResetPassword';
import Nos_chants from './pages/Nos_chants';
import Nos_chantDetails from './pages/Nos_chantDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Page_404 from './pages/Page_404';




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
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Your-space' element={<YourSpace />} />
            <Route path='/Your-space/:title_sect/:spaceName' element={<YourSpaceIntentions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Profile/Verify-Mail' element={<VerifyMail />} />
            <Route path='/Profile/Validate' element={<Validate />} />
            <Route path='/Profile/forget-password' element={<ForgetPassword />} />
            <Route path='/Profile/forget-password-confirm' element={<ForgetPasswordConfirm />} />
            <Route path="/Profile/Reset-password" element={<ResetPassword />} />
            <Route path="/Nos-chants" element={<Nos_chants />} />
            <Route path="/Nos-chants/:chantName" element={<Nos_chantDetails />} />
            <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path='*' element={<Page_404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
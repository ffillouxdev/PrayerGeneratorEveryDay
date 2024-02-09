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
import ResetPassword from './pages/authentication-pages/ResetPassword';
import ResetPassowordConfirm from './pages/authentication-pages/ResetPassowordConfirm';
import ResetPasswordValidate from './pages/authentication-pages/ResetPassowordValidate';
import Nos_chants from './pages/Nos_chants';
import Nos_chantDetails from './pages/Nos_chantDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Page_404 from './pages/Page_404';
import Validate from './pages/authentication-pages/Validate';
import Activate from './pages/authentication-pages/ActivatePage';




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
            <Route path='/activate/:uid/:token' element={<Activate />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/validate" element={<ResetPasswordValidate />} />
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPassowordConfirm />} />
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